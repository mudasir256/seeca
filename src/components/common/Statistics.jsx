import React from 'react';

function Statistics() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .tc-statistics-section {
          position: relative;
          padding: 100px 0;
          background: #0f0f0f;
          overflow: hidden;
        }
        .statistics-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .statistics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          align-items: center;
        }
        .statistics-item {
          text-align: center;
          padding: 40px 20px;
          position: relative;
        }
        .statistics-item:not(:last-child)::after {
          content: '';
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 60px;
          background: rgba(255, 255, 255, 0.2);
        }
        .statistics-number {
          font-size: 48px;
          font-weight: 300;
          color: #ffffff;
          margin-bottom: 15px;
          line-height: 1;
          letter-spacing: 0;
        }
        .statistics-number span {
          display: inline-block;
        }
        .statistics-label {
          font-size: 14px;
          font-weight: 600;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 1px;
          line-height: 1.4;
        }
        @media (max-width: 991px) {
          .tc-statistics-section {
            padding: 80px 0;
          }
          .statistics-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 0;
          }
          .statistics-item {
            padding: 30px 15px;
          }
          .statistics-item:not(:last-child)::after {
            display: block;
            height: 50px;
          }
        }
        @media (max-width: 767px) {
          .tc-statistics-section {
            padding: 60px 0;
          }
          .statistics-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 0;
          }
          .statistics-item {
            padding: 25px 10px;
          }
          .statistics-number {
            font-size: 36px;
          }
          .statistics-label {
            font-size: 11px;
            letter-spacing: 0.5px;
          }
          .statistics-item:not(:last-child)::after {
            height: 40px;
          }
        }
        @media (max-width: 575px) {
          .statistics-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 0;
          }
          .statistics-item {
            padding: 20px 8px;
          }
          .statistics-number {
            font-size: 28px;
          }
          .statistics-label {
            font-size: 10px;
            letter-spacing: 0.3px;
          }
          .statistics-item:not(:last-child)::after {
            height: 35px;
            width: 0.5px;
          }
        }
        @media (max-width: 400px) {
          .statistics-item {
            padding: 20px 5px;
          }
          .statistics-number {
            font-size: 24px;
          }
          .statistics-label {
            font-size: 9px;
          }
        }
      `}} />
      <section className="tc-statistics-section">
        {/* Blurred circular gradient backgrounds */}
        <div 
          className="d-none d-md-block"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 'clamp(300px, 35vw, 500px)',
            height: 'clamp(180px, 25vh, 300px)',
            background: 'rgba(115, 191, 68, 0.15)',
            filter: 'blur(60px)',
            borderRadius: '500px',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />
        <div 
          className="d-none d-md-block"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: 'clamp(250px, 28vw, 400px)',
            height: 'clamp(250px, 28vw, 400px)',
            background: 'rgba(115, 191, 68, 0.1)',
            filter: 'blur(60px)',
            borderRadius: '350px',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />
        <div className="statistics-container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="statistics-grid">
            <div className="statistics-item">
              <div className="statistics-number">
                <span>[400+]</span>
              </div>
              <div className="statistics-label">CURRENT CLIENTS</div>
            </div>
            <div className="statistics-item">
              <div className="statistics-number">
                <span>[10+]</span>
              </div>
              <div className="statistics-label">YEARS OF EXPERIENCE</div>
            </div>
            <div className="statistics-item">
              <div className="statistics-number">
                <span>[2+]</span>
              </div>
              <div className="statistics-label">OFFICES WORLDWIDE</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Statistics;

