import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PageLayout from '../components/common/PageLayout';
import Footer from '../components/home1/Footer';
import Menu from '../components/innerpage/Menu';
import Navbar from '../components/home_preview/Navbar';
import Header from '../components/innerpage/contact/Header';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Our Services' },
  { to: '/architecture', label: 'Architecture' },
  { to: '/interior-design', label: 'Interior Design' },
  { to: '/construction', label: 'Construction' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact Us' },
];

function NotFound() {
  return (
    <PageLayout
      cssFiles={[
        '/common/assets/css/navbar-global.css',
        '/innerpages/assets/css/innerpages.css',
      ]}
      bodyClassName="inner-pages-style1"
      fixedElements={
        <>
          <Menu />
          <Navbar />
        </>
      }
      enableScrollSmoother={false}
    >
      <Helmet>
        <title>Page Not Found | SEECA</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <Header
        title="Page Not Found"
        description="The page you are looking for has moved or no longer exists. Try one of the links below."
        minHeight={420}
      />
      <main>
        <section className="section-padding" style={{ padding: '80px 0' }}>
          <div className="container">
            <h2 style={{ marginBottom: 24 }}>Where would you like to go?</h2>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexWrap: 'wrap',
                gap: 12,
              }}
            >
              {LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    style={{
                      display: 'inline-block',
                      padding: '10px 20px',
                      border: '1px solid #73bf44',
                      borderRadius: 6,
                      color: '#111',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </PageLayout>
  );
}

export default NotFound;
