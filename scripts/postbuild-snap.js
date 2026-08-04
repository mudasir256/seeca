#!/usr/bin/env node
/**
 * Run react-snap after CRA build when a usable Chrome/Chromium is available.
 * Skips on Vercel/CI where Puppeteer Chromium cannot launch (missing libnss3, etc).
 */
const fs = require('fs');
const { spawnSync } = require('child_process');

const shouldSkip =
  process.env.SKIP_REACT_SNAP === '1' ||
  process.env.VERCEL === '1' ||
  process.env.CI === 'true';

if (shouldSkip) {
  console.log(
    '[postbuild-snap] Skipping react-snap on this environment (Vercel/CI). SEO meta still ships via SeoManager at runtime.'
  );
  process.exit(0);
}

const candidates = [
  process.env.PUPPETEER_EXECUTABLE_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium-browser',
  '/usr/bin/chromium',
].filter(Boolean);

let chromeFound = false;
for (const candidate of candidates) {
  try {
    if (fs.existsSync(candidate)) {
      process.env.PUPPETEER_EXECUTABLE_PATH = candidate;
      chromeFound = true;
      break;
    }
  } catch (_) {
    // ignore
  }
}

if (!chromeFound && !process.env.PUPPETEER_EXECUTABLE_PATH) {
  console.warn(
    '[postbuild-snap] No Chrome/Chromium found — skipping react-snap. Set PUPPETEER_EXECUTABLE_PATH or install Chrome.'
  );
  process.exit(0);
}

const result = spawnSync('npx', ['react-snap'], {
  stdio: 'inherit',
  env: process.env,
  shell: process.platform === 'win32',
});

if (result.status !== 0) {
  console.warn(
    '[postbuild-snap] react-snap failed; continuing without prerender so deploy can succeed.'
  );
  process.exit(0);
}

process.exit(0);
