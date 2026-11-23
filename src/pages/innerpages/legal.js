import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/common/PageLayout';
import Footer from '../../components/home1/Footer';
import Menu from '../../components/innerpage/Menu';
import Navbar from '../../components/home_preview/Navbar';
import Header from '../../components/innerpage/contact/Header';
import { LAST_UPDATED, privacyPolicy, termsOfUse } from '../../data/legalContent';

const STYLES = `
  .legal-content { padding: 90px 0 110px; }
  .legal-content .legal-inner { max-width: 820px; margin: 0 auto; }
  .legal-content .updated { color: #73bf44; font-size: 14px; letter-spacing: 0.04em; text-transform: uppercase; margin-bottom: 20px; }
  .legal-content .intro { font-size: 18px; line-height: 1.8; color: #333; margin-bottom: 40px; }
  .legal-content h2 { font-size: 24px; font-weight: 600; margin: 40px 0 14px; color: #111; }
  .legal-content p, .legal-content li { font-size: 16px; line-height: 1.8; color: #555; }
  .legal-content ul { padding-left: 20px; margin: 0; }
  .legal-content li { margin-bottom: 8px; list-style: disc; }
  .legal-content a { color: #73bf44; }
`;

function LegalPage({ doc }) {
  return (
    <PageLayout
      cssFiles={['/common/assets/css/navbar-global.css', '/innerpages/assets/css/innerpages.css']}
      bodyClassName="inner-pages-style1"
      fixedElements={<><Menu /><Navbar /></>}
      enableScrollSmoother={false}
    >
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <Header
        title={doc.title}
        description="SEE Consultants & Architects (Private) Limited"
        backgroundImage="/home_preview/assets/img/architecturecontact.jpg"
        minHeight={380}
      />
      <main className="legal-content">
        <div className="container">
          <div className="legal-inner">
            <p className="updated">Last updated: {LAST_UPDATED}</p>
            <p className="intro">{doc.intro}</p>
            {doc.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.text && <p>{section.text}</p>}
                {section.items && (
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
            <p className="mt-50">
              Contact us at <a href="mailto:info@seeca.pk">info@seeca.pk</a> or through our{' '}
              <Link to="/contact">contact page</Link>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </PageLayout>
  );
}

export function PrivacyPolicyPage() {
  return <LegalPage doc={privacyPolicy} />;
}

export function TermsPage() {
  return <LegalPage doc={termsOfUse} />;
}

export default PrivacyPolicyPage;
