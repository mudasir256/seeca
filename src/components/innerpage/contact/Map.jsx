import React from 'react';

// One map per office. Label and map always come from the same entry, so they can't get mixed up.
export const OFFICE_LOCATIONS = [
  {
    name: 'Lahore (Head Office)',
    address: '903C, Maulana Shaukat Ali Road, Faisal Town, Lahore, Pakistan',
  },
  {
    name: 'Islamabad Office',
    address: 'Plaza 138, First Floor, Wallayat Complex, Phase 7, Bahria Town, Islamabad, Pakistan',
  },
  {
    name: 'Jhelum Office',
    address: 'C Block, Bashir Tower, Citi Housing, Jhelum, Pakistan',
  },
  {
    name: 'Somalia Office',
    address: 'Downtown Hargeisa, Road 01, Office 01, Hargeisa, Somaliland',
  },
];

const mapUrl = (address) =>
  `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

function Map() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .tc-contact-map-section {
          padding: 0;
          background: #f8f8f8;
          width: 100%;
        }
        .tc-contact-map-section .map-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          width: 100%;
        }
        .tc-contact-map-section .map-frame {
          position: relative;
          height: 420px;
          overflow: hidden;
        }
        .tc-contact-map-section .map-frame-label {
          position: absolute;
          top: 12px;
          left: 12px;
          z-index: 2;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.02em;
          text-transform: none;
          line-height: 1.4;
          color: #1a1a1a;
          background: rgba(255, 255, 255, 0.95);
          padding: 8px 12px;
          border: 1px solid #e5e5e5;
          max-width: calc(100% - 24px);
          pointer-events: none;
        }
        .tc-contact-map-section .map-frame iframe {
          width: 100%;
          height: 100%;
          border: 0;
          filter: grayscale(100%);
          display: block;
        }
        @media (max-width: 991px) {
          .tc-contact-map-section .map-grid {
            grid-template-columns: 1fr;
          }
          .tc-contact-map-section .map-frame {
            height: 450px;
          }
        }
        @media (max-width: 767px) {
          .tc-contact-map-section .map-frame {
            height: 400px;
          }
        }
        @media (max-width: 575px) {
          .tc-contact-map-section .map-frame {
            height: 350px;
          }
        }
      `}} />
      <section className="tc-contact-map-section">
        <div className="map-grid">
          {OFFICE_LOCATIONS.map((office) => (
            <div className="map-frame" key={office.name}>
              <span className="map-frame-label">
                <strong>{office.name}</strong>
                <br />
                {office.address}
              </span>
              <iframe
                src={mapUrl(office.address)}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`SEECA ${office.name} location`}
              ></iframe>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Map;
