import React from 'react';

function SmartBuildingTechnologiesContent() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .tc-smart-building-technologies-content {
          position: relative;
          padding: 120px 0;
          background: #fff;
          overflow: hidden;
        }
        .smart-building-technologies-content-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .smart-building-technologies-text {
          position: relative;
        }
        .smart-building-technologies-subtitle {
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
        .smart-building-technologies-title {
          font-size: 48px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 40px;
          line-height: 1.3;
          letter-spacing: -0.5px;
        }
        .smart-building-technologies-description {
          color: #666;
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 30px;
        }
        .smart-building-technologies-description strong {
          color: #1a1a1a;
          font-weight: 700;
        }
        .smart-building-technologies-image {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        }
        .smart-building-technologies-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        @media (max-width: 991px) {
          .tc-smart-building-technologies-content {
            padding: 80px 0;
          }
          .smart-building-technologies-content-wrapper {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .smart-building-technologies-title {
            font-size: 36px;
          }
          .smart-building-technologies-image {
            order: -1;
          }
        }
        @media (max-width: 767px) {
          .tc-smart-building-technologies-content {
            padding: 60px 0;
          }
          .smart-building-technologies-content-wrapper {
            gap: 40px;
          }
          .smart-building-technologies-subtitle {
            font-size: 12px;
            padding: 6px 16px;
          }
          .smart-building-technologies-title {
            font-size: 32px;
            margin-bottom: 30px;
          }
          .smart-building-technologies-description {
            font-size: 15px;
            margin-bottom: 25px;
          }
        }
        @media (max-width: 575px) {
          .smart-building-technologies-title {
            font-size: 28px;
          }
          .smart-building-technologies-description {
            font-size: 14px;
          }
        }
      `}} />
      <section className="tc-smart-building-technologies-content">
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
          <div className="smart-building-technologies-content-wrapper">
            <div className="smart-building-technologies-text">
              <div className="smart-building-technologies-subtitle">[ WHAT WE OFFER ]</div>
              <h4 style={{ fontSize: '34px', fontWeight: '600', color: '#1a1a1a', marginBottom: '20px', lineHeight: '1.3', letterSpacing: '-0.5px' }}>
                We incorporate Smart and Innovative Solutions for your comfort
              </h4>
              <div className="smart-building-technologies-description">
                <strong>Smart building technologies</strong> are systems and devices integrated into a building's infrastructure to enhance efficiency, comfort, security, and performance. These technologies use sensors, automation, and data analytics to optimize operations, reduce energy consumption, improve well-being, and provide control. Smart buildings incorporate <strong>Internet of Things (IoT)</strong> devices, advanced monitoring systems, and automation tools for intelligent, data-driven decisions.
              </div>
              <div className="smart-building-technologies-description">
                The key smart building technologies are <strong>Building Management Systems (BMS) / Building Automation Systems (BAS)</strong>. These systems are the "brain" of a smart building, controlling and monitoring systems like lighting, HVAC, security, fire alarms, and energy management.
              </div>
              <div className="smart-building-technologies-description">
                Smart building technologies are revolutionizing building design, operation, and management. They offer benefits such as energy savings, enhanced comfort, improved security, and greater sustainability. Smart buildings will be critical in shaping urban development and the built environment.
              </div>
            </div>
            <div className="smart-building-technologies-image">
              <img
                src="/home_preview/assets/img/Smart-Technologies-scaled.jpg"
                alt="Smart Building Interior"
                className="img-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SmartBuildingTechnologiesContent;

