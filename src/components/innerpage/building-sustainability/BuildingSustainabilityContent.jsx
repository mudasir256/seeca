import React from 'react';

function BuildingSustainabilityContent() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .tc-building-sustainability-content {
          position: relative;
          padding: 120px 0;
          background: #fff;
          overflow: hidden;
        }
        .building-sustainability-content-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .building-sustainability-text {
          position: relative;
        }
        .building-sustainability-subtitle {
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
        .building-sustainability-title {
          font-size: 48px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 40px;
          line-height: 1.3;
          letter-spacing: -0.5px;
        }
        .building-sustainability-description {
          color: #666;
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 30px;
        }
        .building-sustainability-description strong {
          color: #1a1a1a;
          font-weight: 700;
        }
        .building-sustainability-image {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        }
        .building-sustainability-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        @media (max-width: 991px) {
          .tc-building-sustainability-content {
            padding: 80px 0;
          }
          .building-sustainability-content-wrapper {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .building-sustainability-title {
            font-size: 36px;
          }
          .building-sustainability-image {
            order: -1;
          }
        }
        @media (max-width: 767px) {
          .tc-building-sustainability-content {
            padding: 60px 0;
          }
          .building-sustainability-content-wrapper {
            gap: 40px;
          }
          .building-sustainability-subtitle {
            font-size: 12px;
            padding: 6px 16px;
          }
          .building-sustainability-title {
            font-size: 32px;
            margin-bottom: 30px;
          }
          .building-sustainability-description {
            font-size: 15px;
            margin-bottom: 25px;
          }
        }
        @media (max-width: 575px) {
          .building-sustainability-title {
            font-size: 28px;
          }
          .building-sustainability-description {
            font-size: 14px;
          }
        }
      `}} />
      <section className="tc-building-sustainability-content">
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
          <div className="building-sustainability-content-wrapper">
            <div className="building-sustainability-text">
              <div className="building-sustainability-subtitle">[ WHAT WE OFFER ]</div>
              <h4 style={{ fontSize: '34px', fontWeight: '600', color: '#1a1a1a', marginBottom: '20px', lineHeight: '1.3', letterSpacing: '-0.5px' }}>
                Redefining Sustainable Building—Smarter, Stronger, More Efficient
              </h4>
              <div className="building-sustainability-description" style={{ fontWeight: '500', color: '#333' }}>
                Designing eco-friendly and sustainable buildings for a better future.
              </div>
              <div className="building-sustainability-description">
                Our focus is to redefine building sustainability by combining environmentally responsible design with cost-efficient structural engineering solutions.
              </div>
              <div className="building-sustainability-description">
                Building sustainability is not only about reducing environmental impact—it is about designing smarter. Through optimized structural systems, efficient material usage, and integrated engineering strategies, we help clients lower construction costs, reduce waste, and improve long-term building performance. Sustainability, when done correctly, becomes an economic advantage rather than an added expense.
              </div>
              <div className="building-sustainability-description">
                We approach sustainable building as a holistic process that balances energy efficiency, resource conservation, durability, and occupant well-being. By integrating eco-friendly materials, energy-efficient systems, and intelligent structural design, we create buildings that are resilient, efficient, and financially viable over their entire lifecycle.
              </div>
              <div className="building-sustainability-description">
                Our sustainability-driven engineering solutions address today's environmental, economic, and social challenges—delivering buildings that are functional, visually compelling, structurally optimized, and future-ready. The future of construction lies in structures that do more with less, perform better over time, and create lasting value for both people and the planet.
              </div>
            </div>
            <div className="building-sustainability-image">
              <img
                src="/home_preview/assets/img/Architecture_Deisgn/5804.AhmadHeight-Somalia/5804.Renders(2).jpg"
                alt="Sustainable Building"
                className="img-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BuildingSustainabilityContent;

