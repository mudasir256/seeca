import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import PageLayout from '../../components/common/PageLayout';
import Footer from '../../components/home1/Footer';
import Menu from '../../components/innerpage/Menu';
import Navbar from '../../components/home_preview/Navbar';
import Header from '../../components/innerpage/contact/Header';
import usePortfolio from '../../hooks/usePortfolio';
import NotFound from '../NotFound';
import {
  cleanArea,
  cleanLocation,
  clientLine,
  findProjectBySlug,
  hasOwnDescription,
  isSharedText,
  projectPath,
  projectService,
  projectSlug,
} from '../../lib/projects';

const SITE_URL = (process.env.REACT_APP_SITE_URL || 'https://seeca.pk').replace(/\/+$/, '');

const STYLES = `
  /* Project titles are long and descriptive: let them wrap instead of being cut off. */
  .tc-contact-header .info h1 { white-space: normal !important; overflow: visible !important; text-overflow: clip !important; font-size: clamp(30px, 4.6vw, 60px) !important; line-height: 1.15; letter-spacing: 1px !important; max-width: 1100px; margin-left: auto; margin-right: auto; }
  .tc-project-page { padding: 80px 0 40px; color: #1a1a1a; }
  .tc-project-page .pp-facts { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px; margin-bottom: 50px; }
  .tc-project-page .pp-fact { background: #f6f6f6; border-radius: 12px; padding: 18px 20px; }
  .tc-project-page .pp-fact small { display: block; color: #73bf44; text-transform: uppercase; letter-spacing: 1.5px; font-size: 12px; margin-bottom: 6px; }
  .tc-project-page .pp-fact strong { font-size: 17px; font-weight: 600; }
  .tc-project-page h2 { font-size: clamp(24px, 2.6vw, 34px); font-weight: 600; margin-bottom: 18px; }
  .tc-project-page p, .tc-project-page li { font-size: 17px; line-height: 1.75; color: #444; }
  .tc-project-page .pp-block { margin-bottom: 60px; }
  .tc-project-page .pp-two { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 40px; }
  .tc-project-page .pp-gallery { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 14px; }
  .tc-project-page .pp-gallery a { display: block; border-radius: 10px; overflow: hidden; }
  .tc-project-page .pp-gallery img { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; display: block; transition: transform 0.4s; }
  .tc-project-page .pp-gallery a:hover img { transform: scale(1.04); }
  .tc-project-page .pp-related { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 20px; }
  .tc-project-page .pp-related a { display: block; border-radius: 12px; overflow: hidden; background: #f6f6f6; color: #1a1a1a; text-decoration: none; }
  .tc-project-page .pp-related img { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; display: block; }
  .tc-project-page .pp-related span { display: block; padding: 14px 16px; font-weight: 500; }
  .tc-project-page p a { color: #4e9a2a; text-decoration: underline; text-underline-offset: 3px; }
  .tc-project-page .pp-cta { background: #111; border-radius: 16px; padding: 40px; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 20px; }
  .tc-project-page .pp-cta h2, .tc-project-page .pp-cta p { color: #fff; margin: 0; }
  .tc-project-page .pp-cta a { background: #73bf44; color: #fff; padding: 14px 28px; border-radius: 30px; text-decoration: none; font-weight: 600; }
  @media (max-width: 767px) { .tc-project-page { padding: 50px 0 20px; } .tc-project-page .pp-cta { padding: 28px; } }
`;

function absolute(url) {
  if (!url) return undefined;
  return /^https?:/i.test(url) ? url : `${SITE_URL}${encodeURI(url)}`;
}

function ProjectPage() {
  const { slug } = useParams();
  const { projects, loaded } = usePortfolio();
  const project = useMemo(() => findProjectBySlug(slug, projects), [slug, projects]);

  if (!project) {
    // Wait for the CMS before deciding the project does not exist.
    if (loaded) return <NotFound />;
    return null;
  }

  const service = projectService(project);
  const location = cleanLocation(project.location);
  const area = cleanArea(project.area);
  const type = [...new Set([project.sub1, project.sub2].filter(Boolean))].join(' · ');
  const ownDescription = hasOwnDescription(project, projects);
  const challenges = Array.isArray(project.challenges) && !isSharedText(project.challenges, projects, 'challenges') ? project.challenges : [];
  const solutions = Array.isArray(project.solutions) && !isSharedText(project.solutions, projects, 'solutions') ? project.solutions : [];
  const gallery = [...new Set([project.img, ...(project.images || [])].filter(Boolean))];
  const related = projects
    .filter((p) => p.id !== project.id && p.img && p.sub1 === project.sub1)
    .slice(0, 3);

  const summary = ownDescription
    ? project.desc
    : `${type || 'Design'} project by SEECA${location ? ` in ${location}` : ''}${area ? ` (${area})` : ''}.`;
  const metaDescription = (ownDescription ? project.desc : `${summary} See photos and details of this SEECA project.`)
    .replace(/\s+/g, ' ')
    .slice(0, 158);
  const canonical = `${SITE_URL}/portfolio/${projectSlug(project, projects)}`;
  const client = clientLine(project);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: summary,
    url: canonical,
    image: gallery.slice(0, 6).map(absolute),
    genre: type || undefined,
    locationCreated: location ? { '@type': 'Place', name: location } : undefined,
    creator: { '@id': `${SITE_URL}/#localbusiness` },
  };

  return (
    <PageLayout
      cssFiles={['/common/assets/css/navbar-global.css', '/innerpages/assets/css/innerpages.css']}
      bodyClassName="inner-pages-style1"
      fixedElements={<><Menu /><Navbar /></>}
      enableScrollSmoother={false}
    >
      <Helmet>
        <title>{`${project.title} | SEECA Projects`}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content={ownDescription ? 'index, follow, max-image-preview:large' : 'noindex, follow'} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={`${project.title} | SEECA Projects`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={absolute(project.img)} />
        <meta name="twitter:image" content={absolute(project.img)} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <Header
        title={project.title}
        description={client || [type, location].filter(Boolean).join(' – ')}
        backgroundImage={project.img}
        minHeight={460}
      />
      <main className="tc-project-page">
        <div className="container">
          <div className="pp-facts">
            {type && (
              <div className="pp-fact"><small>Type</small><strong>{type}</strong></div>
            )}
            {location && (
              <div className="pp-fact"><small>Location</small><strong>{location}</strong></div>
            )}
            {area && (
              <div className="pp-fact"><small>Size</small><strong>{area}</strong></div>
            )}
            <div className="pp-fact"><small>Service</small><strong>{service.label}</strong></div>
            {client && (
              <div className="pp-fact">
                <small>{project.clientLabel || 'Client'}</small>
                <strong>{client.replace(/^[^:]+:\s*/, '')}</strong>
              </div>
            )}
          </div>

          <div className="pp-block">
            <h2>About this project</h2>
            <p>{summary}</p>
            <p>
              Explore SEECA&apos;s <Link to={service.path}>{service.label.toLowerCase()} services in Lahore</Link>{' '}
              or see <Link to="/portfolio">more projects</Link>.
            </p>
          </div>

          {(challenges.length > 0 || solutions.length > 0) && (
            <div className="pp-block pp-two">
              {challenges.length > 0 && (
                <div>
                  <h2>The brief</h2>
                  <ul>{challenges.map((c) => <li key={c}>{c}</li>)}</ul>
                </div>
              )}
              {solutions.length > 0 && (
                <div>
                  <h2>Our approach</h2>
                  <ul>{solutions.map((s) => <li key={s}>{s}</li>)}</ul>
                </div>
              )}
            </div>
          )}

          {gallery.length > 0 && (
            <div className="pp-block">
              <h2>Project gallery</h2>
              <div className="pp-gallery">
                {gallery.map((src, i) => (
                  <a key={src} href={src} data-fancybox="project-gallery" data-caption={project.title}>
                    <img
                      src={src}
                      alt={`${project.title} – view ${i + 1}`}
                      loading={i < 3 ? 'eager' : 'lazy'}
                      decoding="async"
                      width="400"
                      height="300"
                    />
                  </a>
                ))}
              </div>
            </div>
          )}

          {related.length > 0 && (
            <div className="pp-block">
              <h2>Related projects</h2>
              <div className="pp-related">
                {related.map((p) => (
                  <Link key={p.id} to={projectPath(p, projects)}>
                    <img src={p.img} alt={p.title} loading="lazy" decoding="async" width="400" height="300" />
                    <span>{p.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="pp-block pp-cta">
            <div>
              <h2>Planning a similar project?</h2>
              <p>Tell us about your plot or space and we&apos;ll suggest the next step.</p>
            </div>
            <Link to="/contact">Talk to SEECA</Link>
          </div>
        </div>
      </main>
      <Footer />
    </PageLayout>
  );
}

export default ProjectPage;
