import React from 'react';

function ConstructionContent() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .tc-construction-content {
          position: relative;
          padding: 120px 0;
          background: #fff;
          overflow: hidden;
        }
        .construction-content-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .construction-text {
          position: relative;
        }
        .construction-subtitle {
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
        .construction-title {
          font-size: 48px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 40px;
          line-height: 1.3;
          letter-spacing: -0.5px;
        }
        .construction-description {
          color: #666;
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 30px;
        }
        .construction-description strong {
          color: #1a1a1a;
          font-weight: 700;
        }
        .construction-image {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        }
        .construction-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        @media (max-width: 991px) {
          .tc-construction-content {
            padding: 80px 0;
          }
          .construction-content-wrapper {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .construction-title {
            font-size: 36px;
          }
          .construction-image {
            order: -1;
          }
        }
        @media (max-width: 767px) {
          .tc-construction-content {
            padding: 60px 0;
          }
          .construction-content-wrapper {
            gap: 40px;
          }
          .construction-subtitle {
            font-size: 12px;
            padding: 6px 16px;
          }
          .construction-title {
            font-size: 32px;
            margin-bottom: 30px;
          }
          .construction-description {
            font-size: 15px;
            margin-bottom: 25px;
          }
        }
        @media (max-width: 575px) {
          .construction-title {
            font-size: 28px;
          }
          .construction-description {
            font-size: 14px;
          }
        }
      `}} />
      <section className="tc-construction-content">
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
          <div className="construction-content-wrapper">
            <div className="construction-text">
              <div className="construction-subtitle">[ WHAT WE OFFER ]</div>
              <h4 style={{ fontSize: '34px', fontWeight: '600', color: '#1a1a1a', marginBottom: '20px', lineHeight: '1.3', letterSpacing: '-0.5px' }}>
                We will Help You to Get the Result You Dreamed of
              </h4>
              <div className="construction-description">
                <strong>Construction</strong> is the process of building or assembling infrastructure, buildings, and other structures. It involves a series of steps, including planning, design, execution, and completion. Construction projects can range from small residential buildings to large-scale commercial and industrial facilities, as well as public infrastructure like roads, bridges, and airports. The construction industry involves various professionals, including architects, engineers, project managers, contractors, and skilled workers, all working together to bring a project from concept to reality.
              </div>
              <div className="construction-description">
                The construction industry is flourishing, and modern technologies like Building Information Modeling (BIM), Drones, Virtual Reality (VR), Robotics, and Smart Construction are being used to improve work efficiency and reduce labor costs. These innovations help streamline processes, enhance accuracy, and create more sustainable building practices.
              </div>
              <div className="construction-description">
                Construction is a multifaceted industry that plays a vital role in shaping the built environment, from homes to complex infrastructure. It requires careful planning, coordination, and expertise, involving a wide range of materials and technologies. By focusing on safety and sustainability, the construction industry helps achieve long-term success and create functional, durable, and aesthetically pleasing spaces.
              </div>
            </div>
            <div className="construction-image">
              <img
                src="/home_preview/assets/img/Construction-scaled.jpg"
                alt="Construction Building"
                className="img-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ConstructionContent;

