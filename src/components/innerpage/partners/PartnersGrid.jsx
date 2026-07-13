import React from 'react';
import usePartners from '../../../hooks/usePartners';

function PartnersGrid() {
  const { partners: logos, loading } = usePartners();
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .partners-pg-grid {
          background: #0a0a0a;
          padding: 80px 0 100px;
        }
        .partners-pg-grid .partners-pg-intro {
          max-width: 720px;
          margin-bottom: 56px;
        }
        .partners-pg-grid .partners-pg-intro .partners-pg-kicker {
          font-size: clamp(18px, 2.2vw, 24px);
          font-weight: 400;
          line-height: 1.4;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 16px;
        }
        .partners-pg-grid .partners-pg-intro .partners-pg-heading {
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 600;
          color: #fff;
          margin-bottom: 24px;
          line-height: 1.15;
        }
        .partners-pg-grid .partner-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 28px 22px 24px;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: border-color 0.25s ease, background 0.25s ease;
        }
        .partners-pg-grid .partner-card:hover {
          border-color: rgba(115, 191, 68, 0.35);
          background: rgba(115, 191, 68, 0.06);
        }
        .partners-pg-grid .partner-logo-wrap {
          width: 100%;
          min-height: 88px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
        .partners-pg-grid .partner-logo-wrap img {
          max-height: 72px;
          width: auto;
          max-width: 100%;
          object-fit: contain;
        }
        .partners-pg-grid .partner-title {
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #fff;
          margin-bottom: 12px;
          line-height: 1.35;
        }
        .partners-pg-grid .partner-writeup {
          font-size: 14px;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.72);
          margin: 0;
          flex-grow: 1;
        }
        @media (max-width: 575px) {
          .partners-pg-grid {
            padding: 56px 0 72px;
          }
          .partners-pg-grid .partner-card {
            padding: 22px 18px 20px;
          }
        }
      `}} />
      <section className="partners-pg-grid">
        <div className="container">
          <header className="partners-pg-intro">
            <p className="partners-pg-kicker">
              Collaboration across sectors <br className="d-none d-sm-inline" />
              and scales
            </p>
            <h1 className="partners-pg-heading">Our partners</h1>
          </header>
          <div className="row g-4">
            {logos.map((item, index) => (
              <div key={item.id || `${item.logo}-${index}`} className="col-12 col-sm-6 col-lg-4">
                <article className="partner-card">
                  <div className="partner-logo-wrap">
                    <img src={item.logo} alt={item.name} loading="lazy" decoding="async" />
                  </div>
                  <h2 className="partner-title">{item.name}</h2>
                  <p className="partner-writeup">{item.writeup}</p>
                </article>
              </div>
            ))}
            {!loading && logos.length === 0 && (
              <div className="col-12">
                <p className="text-center partner-writeup py-5 mb-0">
                  No partners are available yet.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default PartnersGrid;
