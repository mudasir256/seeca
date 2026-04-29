import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import blogPosts from '../../data/innerpages/blog/filter.json';

const SITE_NAME = 'SEECA';
const DEFAULT_TITLE = 'SEECA | Architecture, Interior Design & Construction';
const DEFAULT_DESCRIPTION =
  'SEECA delivers architecture, interior design, and construction services for residential and commercial projects.';
const DEFAULT_OG_IMAGE = '/favicon.ico';
const DEFAULT_KEYWORDS =
  'architecture services, interior design, construction company, building design, sustainable architecture, smart buildings';
const BASE_URL =
  (typeof process !== 'undefined' && process.env.REACT_APP_SITE_URL) || '';

const routeSeo = {
  '/': {
    title: 'SEECA | Architecture, Interior Design & Construction',
    description:
      'SEECA offers architecture, interior design, and construction solutions tailored for modern residential and commercial spaces.',
    keywords:
      'architecture company, interior design studio, construction services, project management, SEECA',
    schemaType: 'WebPage',
  },
  '/home-preview': {
    title: 'Home Preview | SEECA',
    description:
      'Explore SEECA project styles, design directions, and service experiences through our home preview.',
    keywords: 'design preview, architecture showcase, SEECA home preview',
    schemaType: 'WebPage',
  },
  '/home1': {
    title: 'Home | SEECA',
    description:
      'Discover SEECA architecture and construction services designed for durable, efficient, and elegant spaces.',
    keywords: 'architectural planning, construction solutions, premium interiors',
    schemaType: 'WebPage',
  },
  '/home1-rtl': {
    title: 'Home RTL | SEECA',
    description:
      'View SEECA website experience in RTL layout with our architecture and construction highlights.',
    keywords: 'RTL website, architecture services, SEECA',
    schemaType: 'WebPage',
  },
  '/home2': {
    title: 'Residential Design Services | SEECA',
    description:
      'SEECA residential services combine design intelligence, quality construction, and practical project delivery.',
    keywords: 'residential architecture, home design, residential construction',
    schemaType: 'Service',
  },
  '/home3_construction': {
    title: 'Construction Services | SEECA',
    description:
      'Manage your build confidently with SEECA construction planning, execution, and quality control services.',
    keywords: 'construction management, construction contractor, building execution',
    schemaType: 'Service',
  },
  '/home4_personal_architect': {
    title: 'Personal Architect Services | SEECA',
    description:
      'Work with SEECA for personalized architectural planning, interior concepting, and project support.',
    keywords: 'personal architect, architectural consultant, custom home planning',
    schemaType: 'Service',
  },
  '/home5_residence': {
    title: 'Residence Solutions | SEECA',
    description:
      'SEECA residence services deliver thoughtful layouts, quality finishes, and efficient project management.',
    keywords: 'residence design, apartment planning, residential interiors',
    schemaType: 'Service',
  },
  '/home6_furniture': {
    title: 'Furniture & Interior Concepts | SEECA',
    description:
      'Explore SEECA furniture and interior concepts that improve comfort, style, and everyday function.',
    keywords: 'furniture design, interior concepts, custom interiors',
    schemaType: 'Service',
  },
  '/home7_landscape': {
    title: 'Landscape Design Services | SEECA',
    description:
      'SEECA landscape design creates functional, aesthetic outdoor environments for homes and properties.',
    keywords: 'landscape architecture, outdoor design, garden planning',
    schemaType: 'Service',
  },
  '/home8_portfolio': {
    title: 'Portfolio | SEECA',
    description:
      'Browse SEECA portfolio projects in architecture, interiors, and construction across different sectors.',
    keywords: 'architecture portfolio, interior portfolio, project showcase',
    schemaType: 'CollectionPage',
  },
  '/innerpages/about': {
    title: 'About SEECA',
    description:
      'Learn about SEECA team expertise, design philosophy, and project values across architecture and construction.',
    keywords: 'about seeca, architecture team, construction experts',
    schemaType: 'AboutPage',
  },
  '/innerpages/blog': {
    title: 'Design & Construction Blog | SEECA',
    description:
      'Read SEECA insights on architecture trends, interior ideas, construction updates, and project best practices.',
    keywords: 'architecture blog, interior design blog, construction insights',
    schemaType: 'Blog',
  },
  '/innerpages/contact': {
    title: 'Contact SEECA',
    description:
      'Contact SEECA for architecture, interior design, construction, and project consultation inquiries.',
    keywords: 'contact seeca, architecture consultation, construction inquiry',
    schemaType: 'ContactPage',
  },
  '/innerpages/portfolio': {
    title: 'Project Portfolio | SEECA',
    description:
      'See completed and ongoing SEECA projects to evaluate our design quality and construction capabilities.',
    keywords: 'construction portfolio, architecture projects, completed projects',
    schemaType: 'CollectionPage',
  },
  '/innerpages/services': {
    title: 'Services | SEECA',
    description:
      'Explore SEECA architecture, interior design, construction, and planning services for modern projects.',
    keywords: 'architecture services, interior design services, construction services',
    schemaType: 'Service',
  },
  '/innerpages/architecture': {
    title: 'Architecture Services | SEECA',
    description:
      'SEECA architecture services deliver concept development, planning, and execution-focused design support.',
    keywords: 'architectural design, building planning, architectural consultancy',
    schemaType: 'Service',
  },
  '/innerpages/interior-design': {
    title: 'Interior Design Services | SEECA',
    description:
      'SEECA interior design services create balanced spaces through material, layout, and lighting strategy.',
    keywords: 'interior design services, home interiors, commercial interiors',
    schemaType: 'Service',
  },
  '/innerpages/construction': {
    title: 'Construction Management | SEECA',
    description:
      'Plan and build with SEECA construction management that emphasizes quality, timeline, and budget control.',
    keywords: 'construction management, project supervision, building contractor',
    schemaType: 'Service',
  },
  '/innerpages/building-sustainability': {
    title: 'Building Sustainability | SEECA',
    description:
      'SEECA sustainability services improve building performance through efficient design and smart material choices.',
    keywords: 'sustainable architecture, green building, energy efficient design',
    schemaType: 'Service',
  },
  '/innerpages/smart-building-technologies': {
    title: 'Smart Building Technologies | SEECA',
    description:
      'Integrate modern smart building systems with SEECA for comfort, performance, and operational efficiency.',
    keywords: 'smart building systems, building automation, intelligent buildings',
    schemaType: 'Service',
  },
  '/innerpages/our-process': {
    title: 'Our Process | SEECA',
    description:
      'Understand SEECA project workflow from consultation and concept to delivery and post-completion support.',
    keywords: 'design process, construction workflow, project lifecycle',
    schemaType: 'WebPage',
  },
  '/innerpages/partners': {
    title: 'Partners | SEECA',
    description:
      'Meet SEECA project partners and collaborators who help deliver reliable architecture and construction outcomes.',
    keywords: 'construction partners, design collaborators, project partners',
    schemaType: 'WebPage',
  },
  '/innerpages/career/internship': {
    title: 'Apply Internship | SEECA Careers',
    description:
      'Apply for internship opportunities at SEECA and build real-world experience in design and construction.',
    keywords: 'architecture internship, design internship, construction internship',
    schemaType: 'WebPage',
    robots: 'noindex, follow',
  },
  '/innerpages/career/job': {
    title: 'Apply Job | SEECA Careers',
    description:
      'Join SEECA by applying for available job roles in architecture, design, engineering, and project operations.',
    keywords: 'architecture jobs, construction jobs, design careers',
    schemaType: 'WebPage',
    robots: 'noindex, follow',
  },
  '/innerpages/single_post': {
    title: 'Blog Post | SEECA',
    description:
      'Read detailed SEECA blog content about architecture, interiors, construction, and design practices.',
    keywords: 'design articles, construction articles, architecture insights',
    schemaType: 'Article',
  },
  '/innerpages/single_project': {
    title: 'Project Details | SEECA',
    description:
      'Review SEECA project details including design goals, process, and final construction outcomes.',
    keywords: 'project details, architecture case study, construction project',
    schemaType: 'WebPage',
  },
  '/innerpages/single_project2': {
    title: 'Project Showcase | SEECA',
    description:
      'Explore SEECA project showcase pages to understand our approach from concept to completion.',
    keywords: 'project showcase, portfolio details, design project',
    schemaType: 'WebPage',
  },
};

function buildCanonicalUrl(pathname) {
  const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  const origin =
    BASE_URL || (typeof window !== 'undefined' ? window.location.origin : '');
  if (!origin) {
    return normalizedPath;
  }
  return `${origin}${normalizedPath}`;
}

function buildCanonicalWithSlug(pathname, slug) {
  if (!slug) return buildCanonicalUrl(pathname);
  return buildCanonicalUrl(`/innerpages/blog/${slug}`);
}

function buildBlogKeywords(blog) {
  const tagText = (blog?.subTitle || '')
    .replace(/[,/]+/g, ' ')
    .toLowerCase();
  const content = `${blog?.title || ''} ${blog?.description || ''} ${tagText}`.toLowerCase();
  const keywordCandidates = [
    'architecture blog',
    'interior design blog',
    'construction blog',
    'sustainable architecture',
    'smart building design',
    'modern architecture trends',
    'home interior ideas',
    'construction insights',
    ...tagText.split(/\s+/).filter(Boolean),
  ];

  const unique = Array.from(new Set(keywordCandidates)).filter((keyword) => content.includes(keyword.split(' ')[0]) || keyword.includes('blog'));
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
  const isBlogPostRoute = pathname.startsWith('/innerpages/blog/');
  const blogSlug = isBlogPostRoute ? pathname.split('/').pop() : null;
  const blogFromRoute = blogSlug ? blogPosts.find((post) => post.slug === blogSlug) : null;
  const blogFromState = state?.blog;
  const blog = blogFromRoute || blogFromState || null;

  const pageSeo = routeSeo[pathname] || (isBlogPostRoute ? routeSeo['/innerpages/single_post'] : {});
  const title = blog ? `${blog.title} | SEECA Blog` : (pageSeo.title || DEFAULT_TITLE);
  const description = blog?.description || pageSeo.description || DEFAULT_DESCRIPTION;
  const keywords = blog ? buildBlogKeywords(blog) : (pageSeo.keywords || DEFAULT_KEYWORDS);
  const robots = pageSeo.robots || 'index, follow, max-image-preview:large';
  const canonical = buildCanonicalWithSlug(pathname, blog?.slug);
  const pageType = blog ? 'Article' : (pageSeo.schemaType || 'WebPage');
  const siteUrl =
    BASE_URL || (typeof window !== 'undefined' ? window.location.origin : '');
  const blogImage = blog?.img || DEFAULT_OG_IMAGE;
  const ogImage = `${siteUrl}${blogImage}`;

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: siteUrl,
    logo: ogImage,
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
      <link rel="canonical" href={canonical} />
      <meta property="og:locale" content="en_US" />

      <meta property="og:type" content={pageType === 'Article' ? 'article' : 'website'} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      {blogPostingSchema && (
        <script type="application/ld+json">{JSON.stringify(blogPostingSchema)}</script>
      )}
    </Helmet>
  );
}
