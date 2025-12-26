import React from 'react';

function Advantages() {
  const advantages = [
    {
      id: 1,
      number: '01',
      title: 'Residential Design',
      description: 'Residential design creates a personal, comfortable, and functional space by balancing style, layout, materials, and long-term livability.'
    },
    {
      id: 2,
      number: '02',
      title: 'Commercial/ Institutional Design',
      description: 'Commercial and institutional design creates functional, efficient, and aesthetically pleasing spaces while prioritizing durability, user experience, and regulatory compliance.'
    },
    {
      id: 3,
      number: '03',
      title: 'Corporate Office Design',
      description: 'Modern corporate office design prioritizes flexibility, collaboration, and employee well-being to enhance productivity and workplace efficiency.'
    },
    {
      id: 4,
      number: '04',
      title: 'Restaurants/Cafe Design',
      description: 'Restaurant and cafe design blends aesthetics, functionality, and brand identity to create an inviting atmosphere that enhances the dining experience.'
    }
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .tc-advantages-design {
          position: relative;
          padding: 120px 0;
          background: #fff;
          overflow: hidden;
        }
        .advantages-header {
          text-align: center;
          margin-bottom: 80px;
        }
        .advantages-subtitle {
          color: #73bf44;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 15px;
        }
        .advantages-title {
          color: #1a1a1a;
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .advantages-content {
          position: relative;
        }
        .advantages-image-wrapper {
          position: relative;
          margin: 60px 0;
          text-align: center;
        }
        .advantages-image {
          width: 100%;
          max-width: 800px;
          height: 500px;
          object-fit: cover;
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        }
        .advantages-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          margin-top: 60px;
        }
        .advantage-item {
          position: relative;
          padding: 30px;
          background: rgba(115, 191, 68, 0.05);
          border-radius: 12px;
          border: 1px solid rgba(115, 191, 68, 0.1);
          transition: all 0.3s ease;
        }
        .advantage-item:hover {
          background: rgba(115, 191, 68, 0.1);
          border-color: #73bf44;
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(115, 191, 68, 0.2);
        }
        .advantage-number {
          font-size: 60px;
          font-weight: 700;
          color: rgba(115, 191, 68, 0.2);
          line-height: 1;
          margin-bottom: 15px;
        }
        .advantage-title {
          font-size: 24px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 15px;
        }
        .advantage-description {
          font-size: 16px;
          line-height: 1.7;
          color: #666;
        }
        @media (max-width: 991px) {
          .tc-advantages-design {
            padding: 80px 0;
          }
          .advantages-title {
            font-size: 36px;
          }
          .advantages-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .advantages-image {
            height: 400px;
          }
        }
        @media (max-width: 767px) {
          .tc-advantages-design {
            padding: 60px 0;
          }
          .advantages-header {
            margin-bottom: 50px;
          }
          .advantages-title {
            font-size: 32px;
            padding: 0 15px;
          }
          .advantage-item {
            padding: 25px 20px;
          }
          .advantage-number {
            font-size: 50px;
          }
          .advantage-title {
            font-size: 20px;
          }
          .advantage-description {
            font-size: 15px;
          }
          .advantages-image {
            height: 300px;
          }
        }
        @media (max-width: 575px) {
          .advantages-title {
            font-size: 28px;
          }
          .advantage-number {
            font-size: 40px;
          }
          .advantage-title {
            font-size: 18px;
          }
          .advantage-description {
            font-size: 14px;
          }
        }
      `}} />
      <section className="tc-advantages-design">
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
          <div className="advantages-header">
            <div className="advantages-subtitle">[ INTERIOR DESIGN ]</div>
            <h2 className="advantages-title">Our Advantages in Design</h2>
          </div>

          <div className="advantages-content">
            <div className="advantages-image-wrapper">
              <img
                src="/innerpages/assets/img/process/proc1.jpg"
                alt="Interior Design"
                className="advantages-image"
              />
            </div>

            <div className="advantages-grid">
              {advantages.map((advantage) => (
                <div key={advantage.id} className="advantage-item">
                  <div className="advantage-number">{advantage.number}</div>
                  <h3 className="advantage-title">{advantage.title}</h3>
                  <p className="advantage-description">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Advantages;

