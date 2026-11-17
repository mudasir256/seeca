import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import serviceContent, { OTHER_SERVICES } from '../../../data/serviceContent';
import { snapshot } from '../../../lib/cmsFallback';

const STYLES = `
  .tc-service-extras { padding: 90px 0 40px; background: #fff; color: #1a1a1a; }
  .tc-service-extras .se-block { margin-bottom: 70px; }
  .tc-service-extras .se-eyebrow { color: #73bf44; font-size: 14px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 12px; }
  .tc-service-extras h2 { font-size: clamp(26px, 3vw, 38px); font-weight: 600; line-height: 1.25; margin-bottom: 18px; }
  .tc-service-extras h3 { font-size: 20px; font-weight: 600; margin-bottom: 8px; }
  .tc-service-extras p, .tc-service-extras li { font-size: 16px; line-height: 1.7; color: #444; }
  .tc-service-extras .se-intro { font-size: 18px; color: #333; max-width: 900px; }
  .tc-service-extras .se-list { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px 30px; }
  .tc-service-extras .se-list li { position: relative; padding-left: 28px; }
  .tc-service-extras .se-list li::before { content: ''; position: absolute; left: 0; top: 10px; width: 12px; height: 12px; border-radius: 50%; background: #73bf44; }
  .tc-service-extras .se-steps { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; counter-reset: step; padding: 0; list-style: none; }
  .tc-service-extras .se-steps li { border: 1px solid #e6e6e6; border-radius: 12px; padding: 24px; counter-increment: step; }
  .tc-service-extras .se-steps li::before { content: counter(step, decimal-leading-zero); display: block; color: #73bf44; font-weight: 700; font-size: 22px; margin-bottom: 10px; }
  .tc-service-extras .se-projects { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 20px; }
  .tc-service-extras .se-project { display: block; border-radius: 12px; overflow: hidden; background: #f6f6f6; color: inherit; text-decoration: none; }
  .tc-service-extras .se-project img { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; display: block; }
  .tc-service-extras .se-project span { display: block; padding: 14px 16px; font-size: 15px; font-weight: 500; color: #1a1a1a; }
  .tc-service-extras .se-project small { display: block; padding: 0 16px 16px; color: #777; font-size: 13px; }
  .tc-service-extras .se-faq details { border-bottom: 1px solid #e6e6e6; padding: 18px 0; }
  .tc-service-extras .se-faq summary { cursor: pointer; font-size: 18px; font-weight: 600; list-style: none; display: flex; justify-content: space-between; gap: 20px; }
  .tc-service-extras .se-faq summary::-webkit-details-marker { display: none; }
  .tc-service-extras .se-faq summary::after { content: '+'; color: #73bf44; font-size: 24px; line-height: 1; }
  .tc-service-extras .se-faq details[open] summary::after { content: '\\2212'; }
  .tc-service-extras .se-faq p { margin: 12px 0 0; }
  .tc-service-extras p a { color: #4e9a2a; text-decoration: underline; text-underline-offset: 3px; }
  .tc-service-extras .se-links { display: flex; flex-wrap: wrap; gap: 12px; padding: 0; list-style: none; }
  .tc-service-extras .se-links a { display: inline-block; padding: 10px 20px; border: 1px solid #73bf44; border-radius: 30px; color: #1a1a1a; text-decoration: none; }
  .tc-service-extras .se-links a:hover { background: #73bf44; color: #fff; }
  .tc-service-extras .se-cta { background: #111; color: #fff; border-radius: 16px; padding: 40px; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 20px; }
  .tc-service-extras .se-cta h2, .tc-service-extras .se-cta p { color: #fff; margin: 0; }
  .tc-service-extras .se-cta a { background: #73bf44; color: #fff; padding: 14px 28px; border-radius: 30px; text-decoration: none; font-weight: 600; }
  @media (max-width: 767px) {
    .tc-service-extras { padding: 60px 0 20px; }
    .tc-service-extras .se-block { margin-bottom: 50px; }
    .tc-service-extras .se-cta { padding: 28px; }
  }
`;

function cleanLocation(location) {
  return String(location || '')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/^Location$/i, '');
}

/**
 * Extra, search-friendly content for a service page: what's included, who it is for,
 * process, real projects, FAQs (with FAQPage schema), related posts and other services.
 */
function ServiceExtras({ path }) {
  const content = serviceContent[path];
  if (!content) return null;

  const projects = snapshot.projects.filter(content.projectFilter).filter((p) => p.img).slice(0, 6);
  const posts = content.relatedPosts
    .map((slug) => snapshot.blogs.find((b) => b.slug === slug))
    .filter(Boolean);
  const others = OTHER_SERVICES.filter((s) => s.path !== path);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <section className="tc-service-extras">
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="container">
        <div className="se-block">
          <div className="se-eyebrow">{content.name} by SEECA</div>
          <h2>{`${content.name} services in Lahore and across Pakistan`}</h2>
          <p className="se-intro">{content.intro}</p>
        </div>

        <div className="se-block">
          <h2>What&apos;s included</h2>
          <ul className="se-list">
            {content.included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="se-block">
          <h2>Projects we design and deliver</h2>
          <ul className="se-list">
            {content.forWhom.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="se-block">
          <h2>How we work</h2>
          <ol className="se-steps">
            {content.steps.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <p style={{ marginTop: 20 }}>
            More detail on each stage: <Link to="/our-process">our design &amp; build process</Link>.
          </p>
        </div>

        {projects.length > 0 && (
          <div className="se-block">
            <h2>{`Selected ${content.name.toLowerCase()} projects`}</h2>
            <div className="se-projects">
              {projects.map((p) => (
                <Link key={p.id} to="/portfolio" className="se-project">
                  <img
                    src={p.img}
                    alt={`${p.title} – ${content.name.toLowerCase()} project by SEECA`}
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="300"
                  />
                  <span>{p.title}</span>
                  {cleanLocation(p.location) && <small>{cleanLocation(p.location)}</small>}
                </Link>
              ))}
            </div>
            <p style={{ marginTop: 20 }}>
              <Link to="/portfolio">See all SEECA projects</Link>
            </p>
          </div>
        )}

        <div className="se-block se-faq">
          <h2>{`${content.name}: frequently asked questions`}</h2>
          {content.faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>

        {posts.length > 0 && (
          <div className="se-block">
            <h2>Related reading</h2>
            <ul className="se-links">
              {posts.map((b) => (
                <li key={b.slug}>
                  <Link to={`/blog/${b.slug}`}>{b.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="se-block">
          <h2>Other SEECA services</h2>
          <ul className="se-links">
            {others.map((s) => (
              <li key={s.path}>
                <Link to={s.path}>{s.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="se-block se-cta">
          <div>
            <h2>{`Planning ${/^[aeiou]/i.test(content.name) ? 'an' : 'a'} ${content.name.toLowerCase()} project?`}</h2>
            <p>Tell us about your plot or space and we&apos;ll suggest the next step.</p>
          </div>
          <Link to="/contact">Talk to SEECA</Link>
        </div>
      </div>
    </section>
  );
}

export default ServiceExtras;
