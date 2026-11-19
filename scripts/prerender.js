#!/usr/bin/env node
/**
 * Pre-render every public page to static HTML after `react-scripts build`.
 *
 * Why: the site is a React single-page app. Without this step every URL returns
 * the same empty <div id="root"></div>, so search engines see no text, the same
 * title on every page, and unknown URLs return "200 OK".
 *
 * What it does:
 *   1. Serves ./build locally and opens each route in headless Chromium.
 *   2. Saves the rendered HTML as build/<route>.html (Netlify serves /about from about.html).
 *   3. Renders the 404 page to build/404.html (Netlify returns it with a real 404 status).
 *   4. Writes build/sitemap.xml from the real pages and CMS blog posts.
 *
 * If Chromium cannot start (for example on an unusual build image), it falls back to
 * writing each page's correct <title>, description, canonical and robots tags into a
 * copy of the app shell, so the build never fails because of this step.
 *
 * Skip entirely with SKIP_PRERENDER=1.
 */

const fs = require('fs');
const path = require('path');
const http = require('http');

const BUILD_DIR = path.join(__dirname, '..', 'build');
const SITE_URL = (process.env.REACT_APP_SITE_URL || 'https://seeca.pk').replace(/\/+$/, '');
const seoRoutes = require('../src/config/seoRoutes.json');
const cmsSnapshot = require('../src/data/cms-snapshot.json');

// Blog posts: the CMS snapshot shipped with the site, plus any newer posts in Supabase.
let blogPosts = cmsSnapshot.blogs.map((b) => ({ slug: b.slug, title: b.title, description: b.description, date: b.history }));

// Projects: snapshot shipped with the site, updated/extended by Supabase (same merge as the app).
let projects = cmsSnapshot.projects.map((p) => ({ id: p.id, title: p.title, desc: p.desc }));

async function loadProjectsFromCms() {
  const url = process.env.REACT_APP_SUPABASE_URL;
  const key = process.env.REACT_APP_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return;
  try {
    const res = await fetch(`${url}/rest/v1/portfolios?select=id,title,description&order=created_at.desc`, {
      headers: { apikey: key, Authorization: `Bearer ${key}` },
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const rows = (await res.json()).map((r) => ({ id: r.id, title: r.title, desc: r.description }));
    const byId = new Map(rows.map((r) => [r.id, r]));
    const localIds = new Set(projects.map((p) => p.id));
    projects = [...rows.filter((r) => !localIds.has(r.id)), ...projects.map((p) => byId.get(p.id) || p)];
    log(`Projects: ${projects.length} (CMS reachable).`);
  } catch (err) {
    log('CMS not reachable, using the snapshot project list:', err.message);
  }
}

/** Project pages with their own description (see src/lib/projects.js). */
async function getProjectRoutes() {
  const lib = await import('../src/lib/projects.js');
  return projects
    .filter((p) => lib.hasOwnDescription(p, projects))
    .map((p) => lib.projectPath(p, projects));
}

async function loadBlogPostsFromCms() {
  const url = process.env.REACT_APP_SUPABASE_URL;
  const key = process.env.REACT_APP_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return;
  try {
    const res = await fetch(`${url}/rest/v1/blogs?select=slug,title,description,created_at&order=created_at.desc`, {
      headers: { apikey: key, Authorization: `Bearer ${key}` },
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const rows = await res.json();
    const known = new Set(blogPosts.map((p) => p.slug));
    rows.filter((r) => r.slug && !known.has(r.slug)).forEach((r) => {
      blogPosts.push({ slug: r.slug, title: r.title, description: r.description, date: r.created_at });
    });
    log(`Blog posts: ${blogPosts.length} (CMS reachable).`);
  } catch (err) {
    log('CMS not reachable, using the snapshot blog list:', err.message);
  }
}

const NOT_FOUND_PATH = '/__prerender-404';

// Third-party requests that are not needed to render page content.
const BLOCKED_HOSTS = [
  'googletagmanager.com',
  'google-analytics.com',
  'tawk.to',
  'emailjs.com',
  'facebook.net',
  'doubleclick.net',
];

function log(...args) {
  console.log('[prerender]', ...args);
}

function getRoutes() {
  const pages = Object.entries(seoRoutes)
    .filter(([, seo]) => !String(seo.robots || '').includes('noindex'))
    .map(([route]) => route);
  const noindexPages = Object.entries(seoRoutes)
    .filter(([, seo]) => String(seo.robots || '').includes('noindex'))
    .map(([route]) => route);
  const posts = blogPosts.map((post) => `/blog/${post.slug}`);
  return { indexable: [...pages, ...posts], other: noindexPages };
}

function outputFileFor(route) {
  if (route === '/') return path.join(BUILD_DIR, 'index.html');
  if (route === NOT_FOUND_PATH) return path.join(BUILD_DIR, '404.html');
  return path.join(BUILD_DIR, `${route.replace(/^\//, '')}.html`);
}

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.mp4': 'video/mp4',
};

function startServer(shellHtml) {
  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split('?')[0]);
    const filePath = path.join(BUILD_DIR, urlPath);
    if (filePath.startsWith(BUILD_DIR) && fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
      return;
    }
    // Every page route gets the untouched app shell.
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(shellHtml);
  });
  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => resolve(server));
  });
}

async function launchBrowser() {
  const puppeteer = require('puppeteer-core');
  const args = ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu'];
  const candidates = [];
  if (process.env.PUPPETEER_EXECUTABLE_PATH) candidates.push(async () => process.env.PUPPETEER_EXECUTABLE_PATH);
  // Self-contained Chromium build that runs on Linux build images (Netlify, Vercel, CI).
  candidates.push(async () => {
    const chromium = (await import('@sparticuz/chromium')).default;
    return chromium.executablePath();
  });
  for (const p of ['/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome']) {
    candidates.push(async () => (fs.existsSync(p) ? p : null));
  }
  let lastError;
  for (const getPath of candidates) {
    try {
      const executablePath = await getPath();
      if (!executablePath) continue;
      const browser = await puppeteer.launch({ executablePath, args, headless: true });
      log('Using Chromium at', executablePath);
      return browser;
    } catch (err) {
      lastError = err;
    }
  }
  throw lastError || new Error('No Chromium found');
}

/** Runs inside the page: removes things that should not be frozen into static HTML. */
function cleanUpPageInBrowser() {
  // Animation libraries hide elements until they scroll into view; keep content visible.
  document.querySelectorAll('[style]').forEach((el) => {
    const s = el.style;
    if (s.visibility === 'hidden' && (el.classList.contains('wow') || el.closest('.wow'))) s.visibility = '';
    if (s.animationName === 'none') s.animationName = '';
    if (s.opacity === '0' && (el.classList.contains('wow') || el.classList.contains('js-splittext'))) s.opacity = '';
  });
  // Sliders: undo Swiper's runtime changes (cloned loop slides, mid-animation transforms)
  // so the static HTML shows each slider's first slide cleanly.
  document.querySelectorAll('.swiper-initialized, .swiper-container-initialized').forEach((el) => {
    try { if (el.swiper) el.swiper.destroy(true, true); } catch (e) { /* ignore */ }
  });
  document.querySelectorAll('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity]').forEach((el) => {
    el.style.transform = '';
    el.style.transitionDuration = '';
    el.style.opacity = '';
  });
  // Third-party widgets (chat, etc.) inject themselves at runtime.
  document.querySelectorAll('iframe[src*="tawk"], [id^="tawk"], .widget-visible').forEach((el) => el.remove());
  // Static head tags from index.html that React Helmet has replaced for this page.
  const helmetMeta = new Set(
    [...document.head.querySelectorAll('meta[data-react-helmet]')].map(
      (m) => m.getAttribute('name') || m.getAttribute('property')
    )
  );
  document.head.querySelectorAll('meta:not([data-react-helmet])').forEach((m) => {
    const key = m.getAttribute('name') || m.getAttribute('property');
    if (key && helmetMeta.has(key)) m.remove();
  });
  const titles = document.head.querySelectorAll('title');
  if (titles.length > 1) titles.forEach((t, i) => { if (i < titles.length - 1) t.remove(); });
  // Scripts that the app adds at runtime would run twice; the app adds them again itself.
  document.querySelectorAll('script[data-runtime-injected], script[src*="mixitup"]').forEach((s) => s.remove());
  // Non-blocking stylesheets (media="print" + onload swap) have already switched to
  // media="all" in the headless browser; switch them back so they stay non-blocking.
  document.querySelectorAll('link[rel="stylesheet"][onload]').forEach((l) => {
    if (/this\.media\s*=/.test(l.getAttribute('onload') || '')) l.setAttribute('media', 'print');
  });
  // Same for preloaded font stylesheets that swap rel="preload" -> "stylesheet" on load.
  document.querySelectorAll('link[rel="stylesheet"][onload]').forEach((l) => {
    if (/this\.rel\s*=/.test(l.getAttribute('onload') || '')) l.setAttribute('rel', 'preload');
  });
  document.documentElement.setAttribute('data-prerendered', 'true');
}

async function prerenderWithBrowser(routes, shellHtml) {
  const server = await startServer(shellHtml);
  const { port } = server.address();
  const browser = await launchBrowser();
  const results = { ok: [], failed: [] };
  try {
    // Render a few pages in parallel to keep build times short.
    const CONCURRENCY = Number(process.env.PRERENDER_CONCURRENCY || 4);
    const queue = [...routes];
    const renderOne = async (route) => {
        const page = await browser.newPage();
        try {
          await page.setViewport({ width: 1366, height: 900 });
          await page.setRequestInterception(true);
          page.on('request', (req) => {
            const url = req.url();
            if (BLOCKED_HOSTS.some((h) => url.includes(h))) return req.abort();
            return req.continue();
          });
          await page.evaluateOnNewDocument(() => {
            window.__PRERENDER__ = true;
          });
          await page.goto(`http://127.0.0.1:${port}${route}`, { waitUntil: 'networkidle0', timeout: 45000 });
          // Wait until React has set this page's title, then give data requests a moment.
          await page.waitForFunction(() => document.querySelector('title[data-react-helmet]') || document.title.includes('|'), { timeout: 15000 }).catch(() => {});
          await new Promise((r) => setTimeout(r, 1500));
          await page.evaluate(cleanUpPageInBrowser);
          const html = '<!DOCTYPE html>' + (await page.evaluate(() => document.documentElement.outerHTML));
          const rootText = await page.evaluate(() => (document.getElementById('root') || {}).innerText || '');
          if (rootText.trim().length < 50) throw new Error('rendered page has almost no text');
          const file = outputFileFor(route);
          fs.mkdirSync(path.dirname(file), { recursive: true });
          fs.writeFileSync(file, html);
          results.ok.push(route);
          log('OK  ', route);
        } catch (err) {
          results.failed.push(route);
          log('FAIL', route, '-', err.message);
        } finally {
          await page.close();
        }
    };
    await Promise.all(
      Array.from({ length: CONCURRENCY }, async () => {
        while (queue.length) await renderOne(queue.shift());
      })
    );
  } finally {
    await browser.close();
    server.close();
  }
  return results;
}

function escapeHtml(text) {
  return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/** Fallback: correct head tags in a copy of the app shell (body still rendered by JavaScript). */
function writeShellWithHead(route, shellHtml) {
  const post = route.startsWith('/blog/') ? blogPosts.find((p) => `/blog/${p.slug}` === route) : null;
  const seo = route === NOT_FOUND_PATH
    ? { title: 'Page Not Found | SEECA', description: 'The page you are looking for does not exist.', robots: 'noindex, follow' }
    : post
      ? { title: `${post.title} | SEECA Blog`, description: post.description }
      : seoRoutes[route] || {};
  const canonical = route === NOT_FOUND_PATH ? null : `${SITE_URL}${route === '/' ? '/' : route}`;
  let html = shellHtml
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(seo.title || 'SEECA')}</title>`)
    .replace(/<meta\s+name="description"[^>]*>/, `<meta name="description" content="${escapeHtml(seo.description || '')}" />`);
  const extra = [
    `<meta name="robots" content="${escapeHtml(seo.robots || 'index, follow, max-image-preview:large')}" />`,
    canonical ? `<link rel="canonical" href="${canonical}" />` : '',
  ].join('');
  html = html.replace('</head>', `${extra}</head>`);
  const file = outputFileFor(route);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

function writeSitemap(routes) {
  const today = new Date().toISOString().slice(0, 10);
  const priority = (r) => (r === '/' ? '1.0' : ['/services', '/architecture', '/interior-design', '/construction', '/portfolio'].includes(r) ? '0.9' : r.startsWith('/blog/') || r.startsWith('/portfolio/') ? '0.6' : '0.7');
  const urls = routes.map((r) => {
    const post = r.startsWith('/blog/') ? blogPosts.find((p) => `/blog/${p.slug}` === r) : null;
    const parsed = post ? new Date(post.date) : null;
    const lastmod = parsed && !Number.isNaN(parsed.getTime()) ? parsed.toISOString().slice(0, 10) : today;
    return `  <url>\n    <loc>${SITE_URL}${r === '/' ? '/' : r}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${priority(r)}</priority>\n  </url>`;
  });
  fs.writeFileSync(
    path.join(BUILD_DIR, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`
  );
}

async function main() {
  if (process.env.SKIP_PRERENDER === '1') {
    log('Skipped (SKIP_PRERENDER=1).');
    return;
  }
  const indexFile = path.join(BUILD_DIR, 'index.html');
  if (!fs.existsSync(indexFile)) {
    log('No build/index.html found - run the build first.');
    return;
  }
  await loadBlogPostsFromCms();
  await loadProjectsFromCms();
  const projectRoutes = await getProjectRoutes();
  log(`Indexable project pages: ${projectRoutes.length}.`);
  // Keep an untouched copy of the app shell (index.html is overwritten with the homepage).
  const shellFile = path.join(BUILD_DIR, 'app-shell.html');
  if (!fs.existsSync(shellFile)) fs.copyFileSync(indexFile, shellFile);
  const shellHtml = fs.readFileSync(shellFile, 'utf8');

  const { indexable: pageRoutes, other } = getRoutes();
  const indexable = [...pageRoutes, ...projectRoutes];
  const allRoutes = [...indexable, ...other, NOT_FOUND_PATH];
  let failed = allRoutes;
  try {
    const results = await prerenderWithBrowser(allRoutes, shellHtml);
    failed = results.failed;
    log(`Pre-rendered ${results.ok.length}/${allRoutes.length} pages.`);
  } catch (err) {
    log('Chromium unavailable, using head-only fallback:', err.message);
  }
  failed.forEach((route) => writeShellWithHead(route, shellHtml));
  if (failed.length) log(`Head-only fallback used for ${failed.length} page(s).`);

  writeSitemap(indexable);
  log(`Sitemap: ${indexable.length} URLs.`);
}

main().catch((err) => {
  // Never fail the deploy because of pre-rendering.
  console.error('[prerender] Unexpected error:', err);
  process.exit(0);
});
