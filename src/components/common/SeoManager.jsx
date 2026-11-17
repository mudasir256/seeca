import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { snapshot } from '../../lib/cmsFallback';
import routeSeo from '../../config/seoRoutes.json';

const GA_MEASUREMENT_ID = 'G-JMF0RQ1LD0';

const SITE_NAME = 'SEECA';
const DEFAULT_TITLE =
  'SEECA | Architecture, Interior Design & Construction in Lahore';
const DEFAULT_DESCRIPTION =
  'SEECA is a Lahore-based architecture, interior design, and construction firm delivering residential and commercial projects across Pakistan.';
const DEFAULT_OG_IMAGE = '/logo512.png';
const DEFAULT_KEYWORDS =
  'architecture firm Lahore, interior design Lahore, construction company Lahore, SEECA, building design Pakistan, sustainable architecture';
const BASE_URL =
  (typeof process !== 'undefined' && process.env.REACT_APP_SITE_URL) ||
  'https://seeca.pk';

const NOT_FOUND_SEO = {
  title: 'Page Not Found | SEECA',
  description: 'The page you are looking for does not exist. Explore SEECA architecture, interior design, and construction services in Lahore.',
  keywords: 'SEECA',
  schemaType: 'WebPage',
  robots: 'noindex, follow',
};

function buildCanonicalUrl(pathname) {
  const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  const origin =
    BASE_URL || (typeof window !== 'undefined' ? window.location.origin : '');
  if (!origin) {
    return normalizedPath;
  }
  return `${origin.replace(/\/+$/, '')}${normalizedPath}`;
}

function buildCanonicalWithSlug(pathname, slug) {
  if (!slug) return buildCanonicalUrl(pathname);
  return buildCanonicalUrl(`/blog/${slug}`);
}

function buildBlogKeywords(blog) {
  const tagText = (blog?.subTitle || '')
    .replace(/[,/]+/g, ' ')
    .toLowerCase();
  const content = `${blog?.title || ''} ${blog?.description || ''} ${tagText}`.toLowerCase();
  const keywordCandidates = [
    'architecture blog Lahore',
    'interior design blog',
    'construction blog Pakistan',
    'sustainable architecture',
    'smart building design',
    'modern architecture trends',
    'home interior ideas',
    'construction insights',
    ...tagText.split(/\s+/).filter(Boolean),
  ];

  const unique = Array.from(new Set(keywordCandidates)).filter(
    (keyword) => content.includes(keyword.split(' ')[0]) || keyword.includes('blog')
  );
  return unique.slice(0, 12).join(', ');
}

function toIsoDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date.toISOString().slice(0, 10);
}

function toLabel(segment) {
  return segment
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function buildBreadcrumbSchema(pathname, siteUrl) {
  const segments = pathname.split('/').filter(Boolean);
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${siteUrl}/`,
    },
  ];

  let currentPath = '';
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    items.push({
      '@type': 'ListItem',
      position: index + 2,
      name: toLabel(segment),
      item: `${siteUrl}${currentPath}`,
    });
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
}

export default function SeoManager() {
  const { pathname, search, state } = useLocation();
  const isFirstPageView = useRef(true);
  const isBlogPostRoute = pathname.startsWith('/blog/');
  const blogSlug = isBlogPostRoute ? pathname.split('/').pop() : null;
  const blogFromRoute = blogSlug ? snapshot.blogs.find((post) => post.slug === blogSlug) : null;
  const blogFromState = state?.blog;
  const blog = blogFromRoute || (isBlogPostRoute ? blogFromState : null) || null;

  const normalizedPathname = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  const isNotFound = !isBlogPostRoute && !routeSeo[normalizedPathname];
  const pageSeo = isNotFound ? NOT_FOUND_SEO : routeSeo[normalizedPathname] || {};
  const title = blog
    ? `${blog.title} | SEECA Blog`
    : isBlogPostRoute
      ? 'Blog | SEECA Lahore'
      : pageSeo.title || DEFAULT_TITLE;
  const description = blog?.description || pageSeo.description || DEFAULT_DESCRIPTION;
  const keywords = blog ? buildBlogKeywords(blog) : (pageSeo.keywords || DEFAULT_KEYWORDS);
  const robots = pageSeo.robots || 'index, follow, max-image-preview:large';
  const canonical = buildCanonicalWithSlug(normalizedPathname, blog?.slug);
  const pageType = blog ? 'Article' : (pageSeo.schemaType || 'WebPage');
  const siteUrl = (BASE_URL || (typeof window !== 'undefined' ? window.location.origin : '')).replace(
    /\/+$/,
    ''
  );
  const blogImage = blog?.img || DEFAULT_OG_IMAGE;
  const ogImage = `${siteUrl}${blogImage}`;

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: siteUrl,
    logo: `${siteUrl}${DEFAULT_OG_IMAGE}`,
    email: 'seeca.pk@gmail.com',
    telephone: '+92-333-1498340',
    sameAs: ['https://www.threads.net/@seeca_pk'],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#localbusiness`,
    name: SITE_NAME,
    image: `${siteUrl}${DEFAULT_OG_IMAGE}`,
    url: siteUrl,
    telephone: '+92-333-1498340',
    email: 'seeca.pk@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '903C, Maulana Shaukat Ali Road, Faisal Town',
      addressLocality: 'Lahore',
      addressRegion: 'Punjab',
      postalCode: '54000',
      addressCountry: 'PK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 31.4843,
      longitude: 74.3144,
    },
    areaServed: [
      { '@type': 'City', name: 'Lahore' },
      { '@type': 'Country', name: 'Pakistan' },
    ],
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '160',
      bestRating: '5',
      worstRating: '1',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: siteUrl,
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': pageType,
    name: title,
    description,
    url: canonical,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: siteUrl,
    },
  };

  const breadcrumbSchema = buildBreadcrumbSchema(pathname, siteUrl);
  const blogPostingSchema = blog
    ? {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: blog.title,
        description: blog.description,
        datePublished: toIsoDate(blog.history),
        dateModified: toIsoDate(blog.history),
        image: ogImage,
        mainEntityOfPage: canonical,
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}${DEFAULT_OG_IMAGE}`,
          },
        },
        author: {
          '@type': 'Organization',
          name: SITE_NAME,
        },
        keywords,
      }
    : null;

  useEffect(() => {
    if (typeof window.gtag !== 'function') return;

    // First page_view is sent by the gtag snippet in public/index.html.
    if (isFirstPageView.current) {
      isFirstPageView.current = false;
      return;
    }

    window.gtag('event', 'page_view', {
      page_title: title,
      page_location: canonical,
      page_path: `${pathname}${search}`,
      send_to: GA_MEASUREMENT_ID,
    });
  }, [pathname, search, title, canonical]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <meta name="author" content={SITE_NAME} />
      <meta name="geo.region" content="PK-PB" />
      <meta name="geo.placename" content="Lahore" />
      {!isNotFound && <link rel="canonical" href={canonical} />}
      <meta property="og:locale" content="en_PK" />

      <meta property="og:type" content={pageType === 'Article' ? 'article' : 'website'} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta property="og:image:alt" content={title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      {blogPostingSchema && (
        <script type="application/ld+json">{JSON.stringify(blogPostingSchema)}</script>
      )}
    </Helmet>
  );
}
