import React from 'react';

function InteriorDesignContent() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .tc-interior-design-content {
          position: relative;
          padding: 120px 0;
          background: #fff;
          overflow: hidden;
        }
        .interior-content-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .interior-text {
          position: relative;
        }
        .interior-subtitle {
          color: #73bf44;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 20px;
          display: inline-block;
          padding: 8px 20px;
          background: rgba(115, 191, 68, 0.1);
          border-radius: 30px;
          border: 1px solid rgba(115, 191, 68, 0.2);
        }
        .interior-title {
          font-size: 48px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 40px;
          line-height: 1.3;
          letter-spacing: -0.5px;
        }
        .interior-description {
          color: #666;
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 30px;
        }
        .interior-description strong {
          color: #1a1a1a;
          font-weight: 700;
        }
        .interior-image {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        }
        .interior-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        @media (max-width: 991px) {
          .tc-interior-design-content {
            padding: 80px 0;
          }
          .interior-content-wrapper {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .interior-title {
            font-size: 36px;
          }
          .interior-image {
            order: -1;
          }
        }
        @media (max-width: 767px) {
          .tc-interior-design-content {
            padding: 60px 0;
          }
          .interior-content-wrapper {
            gap: 40px;
          }
          .interior-subtitle {
            font-size: 12px;
            padding: 6px 16px;
          }
          .interior-title {
            font-size: 32px;
            margin-bottom: 30px;
          }
          .interior-description {
            font-size: 15px;
            margin-bottom: 25px;
          }
        }
        @media (max-width: 575px) {
          .interior-title {
            font-size: 28px;
          }
          .interior-description {
            font-size: 14px;
          }
        }
      `}} />
      <section className="tc-interior-design-content">
        {/* Blurred circular gradient backgrounds */}
        <div 
          className="d-none d-md-block"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 'clamp(300px, 35vw, 500px)',
            height: 'clamp(180px, 25vh, 300px)',
            background: 'rgba(115, 191, 68, 0.2)',
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
            background: 'rgba(115, 191, 68, 0.15)',
            filter: 'blur(60px)',
            borderRadius: '350px',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="interior-content-wrapper">
            <div className="interior-text">
              <h4 style={{ fontSize: '34px', fontWeight: '600', color: '#1a1a1a', marginBottom: '20px', lineHeight: '1.3', letterSpacing: '-0.5px' }}>
                We make indoor spaces functional, safe, and beautiful by determining space requirements
              </h4>
              <div className="interior-description">
                <strong>Interior design</strong> is the art and science of enhancing the interior of a space to achieve a healthier and more aesthetically pleasing environment for the people using the space. It involves a comprehensive understanding of architecture, design principles, color theory, materials, furniture, lighting, and spatial arrangements. The ultimate goal is to create spaces that are functional, beautiful, and reflective of the personality or purpose of the occupant or user.
              </div>
              <div className="interior-description">
                In design, we incorporate elements from the natural environment into constructed spaces, including features such as water, vegetation, and natural illumination, as well as materials like wood and stone. Promoting the integration of natural systems and processes in design fosters a connection to nature, which subsequently enhances health and well-being. The potential advantages include reduced heart rate variability and pulse rates, lower blood pressure, and heightened activity within our nervous systems, among others.
              </div>
              <div className="interior-description">
                Interior design plays a crucial role in making spaces not only functional but also emotionally engaging. The way a space looks and feels can influence a person's mood, productivity, and overall well-being, making interior design a key element of modern living and working environments.
              </div>
            </div>
            <div className="interior-image">
              <img
                src="/home_preview/assets/img/Interior-Design-scaled.jpg"
                alt="Interior Design Space"
                className="img-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default InteriorDesignContent;

