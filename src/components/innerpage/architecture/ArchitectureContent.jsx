import React from 'react';

function ArchitectureContent() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .tc-architecture-content {
          position: relative;
          padding: 120px 0;
          background: #fff;
          overflow: hidden;
        }
        .architecture-content-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .architecture-text {
          position: relative;
        }
        .architecture-subtitle {
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
        .architecture-title {
          font-size: 48px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 40px;
          line-height: 1.3;
          letter-spacing: -0.5px;
        }
        .architecture-description {
          color: #666;
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 30px;
        }
        .architecture-image {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        }
        .architecture-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        @media (max-width: 991px) {
          .tc-architecture-content {
            padding: 80px 0;
          }
          .architecture-content-wrapper {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .architecture-title {
            font-size: 36px;
          }
          .architecture-image {
            order: -1;
          }
        }
        @media (max-width: 767px) {
          .tc-architecture-content {
            padding: 60px 0;
          }
          .architecture-content-wrapper {
            gap: 40px;
          }
          .architecture-subtitle {
            font-size: 12px;
            padding: 6px 16px;
          }
          .architecture-title {
            font-size: 32px;
            margin-bottom: 30px;
          }
          .architecture-description {
            font-size: 15px;
            margin-bottom: 25px;
          }
        }
        @media (max-width: 575px) {
          .architecture-title {
            font-size: 28px;
          }
          .architecture-description {
            font-size: 14px;
          }
        }
      `}} />
      <section className="tc-architecture-content">
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
          <div className="architecture-content-wrapper">
            <div className="architecture-text">
              <div className="architecture-subtitle">[ WHAT WE OFFER ]</div>
              <h4 style={{ fontSize: '34px', fontWeight: '600', color: '#1a1a1a', marginBottom: '20px', lineHeight: '1.3', letterSpacing: '-0.5px' }}>
                Our Goal is to Create Incredible Custom Architecture Design
              </h4>
              <div className="architecture-description">
                Architecture is the art and science of designing and constructing buildings, structures, and other physical environments. It encompasses a wide range of disciplines, from the design of individual buildings to the planning of entire cities. The building design is mostly concerned with the aesthetic look, functionality of the space, sustainable environment, and cultural aspects of the residents.
              </div>
              <div className="architecture-description">
                Architects are responsible for conceptualizing the design; understanding client needs, creating initial designs, and refining the vision. They create blueprints, 3D models, and other technical specifications of the design.
              </div>
              <div className="architecture-description">
                Architecture not only provides shelter but also shapes the built environment in ways that influence society and culture, offering a reflection of the values, technologies, and artistic movements of different periods in history.
              </div>
            </div>
            <div className="architecture-image">
              <img
                src="/home_preview/assets/img/Architecture-scaled.jpg"
                alt="Custom Architecture Design"
                className="img-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ArchitectureContent;

