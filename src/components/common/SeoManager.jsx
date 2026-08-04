import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import blogPosts from '../../data/innerpages/blog/filter.json';

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
  'https://www.seeca.pk';

const DEMO_ROUTE_PREFIXES = [
  '/home-preview',
  '/home1',
  '/home1-rtl',
  '/home2',
  '/home3_construction',
  '/home4_personal_architect',
  '/home5_residence',
  '/home6_furniture',
  '/home7_landscape',
  '/home8_portfolio',
  '/single_project',
  '/single_project2',
  '/single_post',
];

const routeSeo = {
  '/': {
    title: 'SEECA | Architecture, Interior Design & Construction in Lahore',
    description:
      'SEECA delivers architecture, interior design, and construction services in Lahore for modern residential and commercial spaces across Pakistan.',
    keywords:
      'architecture company Lahore, interior design studio Lahore, construction services Pakistan, SEECA',
    schemaType: 'WebPage',
  },
  '/home-preview': {
    title: 'Home Preview | SEECA',
    description: 'Internal theme preview page for SEECA.',
    keywords: 'SEECA preview',
    schemaType: 'WebPage',
    robots: 'noindex, follow',
  },
  '/home1': {
    title: 'Home Theme | SEECA',
    description: 'Internal homepage theme demo for SEECA.',
    keywords: 'SEECA demo',
    schemaType: 'WebPage',
    robots: 'noindex, follow',
  },
  '/home1-rtl': {
    title: 'Home RTL Theme | SEECA',
    description: 'Internal RTL theme demo for SEECA.',
    keywords: 'SEECA RTL demo',
    schemaType: 'WebPage',
    robots: 'noindex, follow',
  },
  '/home2': {
    title: 'Residential Theme | SEECA',
    description: 'Internal residential theme demo for SEECA.',
    keywords: 'SEECA demo',
    schemaType: 'WebPage',
    robots: 'noindex, follow',
  },
  '/home3_construction': {
    title: 'Construction Theme | SEECA',
    description: 'Internal construction theme demo for SEECA.',
    keywords: 'SEECA demo',
    schemaType: 'WebPage',
    robots: 'noindex, follow',
  },
  '/home4_personal_architect': {
    title: 'Personal Architect Theme | SEECA',
    description: 'Internal personal architect theme demo for SEECA.',
    keywords: 'SEECA demo',
    schemaType: 'WebPage',
    robots: 'noindex, follow',
  },
  '/home5_residence': {
    title: 'Residence Theme | SEECA',
    description: 'Internal residence theme demo for SEECA.',
    keywords: 'SEECA demo',
    schemaType: 'WebPage',
    robots: 'noindex, follow',
  },
  '/home6_furniture': {
    title: 'Furniture Theme | SEECA',
    description: 'Internal furniture theme demo for SEECA.',
    keywords: 'SEECA demo',
    schemaType: 'WebPage',
    robots: 'noindex, follow',
  },
  '/home7_landscape': {
    title: 'Landscape Theme | SEECA',
    description: 'Internal landscape theme demo for SEECA.',
    keywords: 'SEECA demo',
    schemaType: 'WebPage',
    robots: 'noindex, follow',
  },
  '/home8_portfolio': {
    title: 'Portfolio Theme | SEECA',
    description: 'Internal portfolio theme demo for SEECA.',
    keywords: 'SEECA demo',
    schemaType: 'WebPage',
    robots: 'noindex, follow',
  },
  '/about': {
    title: 'About SEECA | Architecture & Construction Firm in Lahore',
    description:
      'Learn about SEECA, a Lahore architecture and construction team delivering design-led residential and commercial projects across Pakistan.',
    keywords: 'about SEECA Lahore, architecture team Pakistan, construction experts Lahore',
    schemaType: 'AboutPage',
  },
  '/blog': {
    title: 'Design & Construction Blog | SEECA Lahore',
    description:
      'Read SEECA insights on architecture, interior design, and construction trends for projects in Lahore and across Pakistan.',
    keywords: 'architecture blog Lahore, interior design blog Pakistan, construction insights',
    schemaType: 'Blog',
  },
  '/contact': {
    title: 'Contact SEECA Lahore | Architecture & Construction Consultation',
    description:
      'Contact SEECA in Faisal Town, Lahore for architecture, interior design, construction, and project consultation.',
    keywords: 'contact SEECA Lahore, architecture consultation Lahore, construction inquiry Pakistan',
    schemaType: 'ContactPage',
  },
  '/portfolio': {
    title: 'Project Portfolio | SEECA Architecture & Construction Lahore',
    description:
      'Browse SEECA architecture, interior, and construction projects completed in Lahore and across Pakistan.',
    keywords: 'architecture portfolio Lahore, construction projects Pakistan, SEECA case studies',
    schemaType: 'CollectionPage',
  },
  '/services': {
    title: 'Architecture, Interior Design & Construction Services in Lahore | SEECA',
    description:
      'Explore SEECA services in Lahore: architecture, interior design, construction management, sustainability, and smart buildings.',
    keywords:
      'architecture services Lahore, interior design services Lahore, construction company Lahore',
    schemaType: 'Service',
  },
  '/architecture': {
    title: 'Architecture Services in Lahore | SEECA',
    description:
      'SEECA architecture services in Lahore cover concept design, planning, and execution-focused building design for homes and commercial spaces.',
    keywords: 'architectural design Lahore, building planning Pakistan, architecture consultancy Lahore',
    schemaType: 'Service',
  },
  '/interior-design': {
    title: 'Interior Design Services in Lahore | SEECA',
    description:
      'SEECA interior design services in Lahore create balanced residential and commercial spaces through layout, material, and lighting strategy.',
    keywords: 'interior design Lahore, home interiors Lahore, commercial interiors Pakistan',
    schemaType: 'Service',
  },
  '/construction': {
    title: 'Construction Services in Lahore | SEECA',
    description:
      'Plan and build with SEECA construction management in Lahore — quality control, timelines, and budget-focused project delivery.',
    keywords: 'construction company Lahore, building contractor Lahore, construction management Pakistan',
    schemaType: 'Service',
  },
  '/building-sustainability': {
    title: 'Building Sustainability Services | SEECA Lahore',
    description:
      'SEECA sustainability services improve building performance in Lahore through efficient design and smart material choices.',
    keywords: 'sustainable architecture Lahore, green building Pakistan, energy efficient design',
    schemaType: 'Service',
  },
  '/smart-building-technologies': {
    title: 'Smart Building Technologies | SEECA Lahore',
    description:
      'Integrate modern smart building systems with SEECA in Lahore for comfort, performance, and operational efficiency.',
    keywords: 'smart building Lahore, building automation Pakistan, intelligent buildings',
    schemaType: 'Service',
  },
  '/our-process': {
    title: 'Our Process | SEECA Architecture & Construction Lahore',
    description:
      'Understand SEECA’s project workflow in Lahore from consultation and concept through construction delivery and support.',
    keywords: 'design process Lahore, construction workflow Pakistan, SEECA project lifecycle',
    schemaType: 'WebPage',
  },
  '/partners': {
    title: 'Partners | SEECA Lahore',
    description:
      'Meet SEECA project partners and collaborators who support reliable architecture and construction delivery in Pakistan.',
    keywords: 'construction partners Lahore, design collaborators Pakistan, SEECA partners',
    schemaType: 'WebPage',
  },
  '/career/internship': {
    title: 'Apply Internship | SEECA Careers Lahore',
    description:
      'Apply for internship opportunities at SEECA Lahore and build experience in architecture, design, and construction.',
    keywords: 'architecture internship Lahore, design internship Pakistan, construction internship',
    schemaType: 'WebPage',
    robots: 'noindex, follow',
  },
  '/career/job': {
    title: 'Apply Job | SEECA Careers Lahore',
    description:
      'Join SEECA Lahore by applying for roles in architecture, design, engineering, and project operations.',
    keywords: 'architecture jobs Lahore, construction jobs Pakistan, design careers Lahore',
    schemaType: 'WebPage',
    robots: 'noindex, follow',
  },
  '/single_post': {
    title: 'Blog Post | SEECA',
    description: 'SEECA blog post (internal route).',
    keywords: 'SEECA blog',
    schemaType: 'Article',
    robots: 'noindex, follow',
  },
  '/single_project': {
    title: 'Project Details | SEECA',
    description: 'Internal project detail demo for SEECA.',
    keywords: 'SEECA demo',
    schemaType: 'WebPage',
    robots: 'noindex, follow',
  },
  '/single_project2': {
    title: 'Project Showcase | SEECA',
    description: 'Internal project showcase demo for SEECA.',
    keywords: 'SEECA demo',
    schemaType: 'WebPage',
    robots: 'noindex, follow',
  },
};

function isDemoRoute(pathname) {
  return DEMO_ROUTE_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );
}

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
  const { pathname, state } = useLocation();
  const isBlogPostRoute = pathname.startsWith('/blog/');
  const blogSlug = isBlogPostRoute ? pathname.split('/').pop() : null;
  const blogFromRoute = blogSlug ? blogPosts.find((post) => post.slug === blogSlug) : null;
  const blogFromState = state?.blog;
  const blog = blogFromRoute || blogFromState || null;

  const pageSeo = routeSeo[pathname] || (isBlogPostRoute ? routeSeo['/single_post'] : {});
  const title = blog ? `${blog.title} | SEECA Blog` : (pageSeo.title || DEFAULT_TITLE);
  const description = blog?.description || pageSeo.description || DEFAULT_DESCRIPTION;
  const keywords = blog ? buildBlogKeywords(blog) : (pageSeo.keywords || DEFAULT_KEYWORDS);
  const robots =
    pageSeo.robots ||
    (isDemoRoute(pathname)
      ? 'noindex, follow'
      : 'index, follow, max-image-preview:large');
  const canonical = buildCanonicalWithSlug(pathname, blog?.slug);
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
        datePublished: blog.history,
        dateModified: blog.history,
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

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <meta name="author" content={SITE_NAME} />
      <meta name="geo.region" content="PK-PB" />
      <meta name="geo.placename" content="Lahore" />
      <link rel="canonical" href={canonical} />
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
