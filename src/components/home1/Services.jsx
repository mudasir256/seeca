import React from 'react';

function Services() {
  return (
    <>
    <section className="tc-services-style1-modern" style={{ position: 'relative', overflow: 'hidden' }}>
      <div 
        className="d-none d-md-block"
        style={{
          position: 'absolute',
          top: '5%',
          left: '5%',
          width: 'clamp(300px, 35vw, 500px)',
          height: 'clamp(180px, 25vh, 300px)',
          background: 'rgba(115, 191, 68, 0.3)',
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
          top: '45%',
          right: '8%',
          width: 'clamp(300px, 35vw, 500px)',
          height: 'clamp(180px, 25vh, 300px)',
          background: 'rgba(115, 191, 68, 0.3)',
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
          top: '75%',
          left: '12%',
          width: 'clamp(300px, 35vw, 500px)',
          height: 'clamp(180px, 25vh, 300px)',
          background: 'rgba(115, 191, 68, 0.3)',
          filter: 'blur(60px)',
          borderRadius: '500px',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="content " style={{ position: 'relative', zIndex: 1, paddingBottom: '10px'}}>
        <div className="container">
          <div className="services-modern-title text-center">
            <div className="title-badge wow fadeInUp" data-wow-delay="0.1s">
              <span>Our Expertise</span>
            </div>
            <h2 className="services-title-main wow fadeInUp" data-wow-delay="0.2s">What Can We Offer</h2>
            <p className="title-subtitle wow fadeInUp" data-wow-delay="0.3s">
              Discover our comprehensive range of professional services designed to bring your vision to life
            </p>
            <div className="title-underline wow fadeInUp" data-wow-delay="0.4s"></div>
          </div>
          
          <style dangerouslySetInnerHTML={{__html: `
            .service-card-compact {
              height: 100%;
              margin-bottom: 20px;
            }
            .service-card-compact-inner {
              background: #FFFFFF;
              border-radius: 16px;
              padding: 20px;
              height: 100%;
              display: flex;
              flex-direction: column;
              position: relative;
              overflow: hidden;
              transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
              box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
            }
            .service-card-compact-inner:hover {
              transform: translateY(-5px);
              box-shadow: 0 6px 25px rgba(0, 0, 0, 0.12);
            }
            .service-icon-compact {
              width: 50px;
              height: 50px;
              border-radius: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 24px;
              color: #FFFFFF;
              transition: all 0.4s ease;
              margin-bottom: 15px;
            }
            .service-card-compact:hover .service-icon-compact {
              transform: translateY(-3px) scale(1.1);
            }
            .service-title-compact {
              font-size: 20px;
              font-weight: 700;
              color: #1a1a1a;
              margin-bottom: 12px;
              line-height: 1.3;
            }
            .service-image-compact {
              width: 100%;
              height: 140px;
              border-radius: 12px;
              overflow: hidden;
              margin-bottom: 15px;
              background: #f5f5f5;
            }
            .service-image-compact img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: transform 0.6s ease;
            }
            .service-card-compact:hover .service-image-compact img {
              transform: scale(1.08);
            }
            .service-description-compact {
              font-size: 13px;
              line-height: 1.6;
              color: #666;
              margin-bottom: 15px;
              flex-grow: 1;
            }
            .service-read-more-compact {
              display: inline-flex;
              align-items: center;
              gap: 6px;
              font-size: 12px;
              font-weight: 600;
              color: #1a1a1a;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              text-decoration: none;
              transition: all 0.3s ease;
            }
            .service-read-more-compact i {
              font-size: 14px;
              transition: transform 0.3s ease;
            }
            .service-card-compact:hover .service-read-more-compact i {
              transform: translate(2px, -2px);
            }
            /* Unique Card Styles */
            .card-1 .service-card-compact-inner {
              border-top: 3px solid #73bf44;
              border-left: 2px solid rgba(115, 191, 68, 0.1);
            }
            .card-1 .service-icon-compact {
              background: linear-gradient(135deg, #73bf44 0%, #8dd65a 100%);
              box-shadow: 0 4px 12px rgba(115, 191, 68, 0.3);
            }
            .card-1:hover .service-card-compact-inner {
              border-color: rgba(115, 191, 68, 0.4);
              box-shadow: 0 6px 25px rgba(115, 191, 68, 0.2);
            }
            .card-1:hover .service-title-compact {
              color: #73bf44;
            }
            .card-1:hover .service-read-more-compact {
              color: #73bf44;
            }
            .card-2 .service-card-compact-inner {
              border-top: 3px solid #4a90e2;
              border-right: 2px solid rgba(74, 144, 226, 0.1);
            }
            .card-2 .service-icon-compact {
              background: linear-gradient(135deg, #4a90e2 0%, #6ba3f0 100%);
              box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
            }
            .card-2:hover .service-card-compact-inner {
              border-color: rgba(74, 144, 226, 0.4);
              box-shadow: 0 6px 25px rgba(74, 144, 226, 0.2);
            }
            .card-2:hover .service-title-compact {
              color: #4a90e2;
            }
            .card-2:hover .service-read-more-compact {
              color: #4a90e2;
            }
            .card-3 .service-card-compact-inner {
              border-top: 3px solid #e67e22;
              border-left: 2px solid rgba(230, 126, 34, 0.1);
            }
            .card-3 .service-icon-compact {
              background: linear-gradient(135deg, #e67e22 0%, #f39c12 100%);
              box-shadow: 0 4px 12px rgba(230, 126, 34, 0.3);
            }
            .card-3:hover .service-card-compact-inner {
              border-color: rgba(230, 126, 34, 0.4);
              box-shadow: 0 6px 25px rgba(230, 126, 34, 0.2);
            }
            .card-3:hover .service-title-compact {
              color: #e67e22;
            }
            .card-3:hover .service-read-more-compact {
              color: #e67e22;
            }
            .card-4 .service-card-compact-inner {
              border-top: 3px solid #27ae60;
              border-right: 2px solid rgba(39, 174, 96, 0.1);
            }
            .card-4 .service-icon-compact {
              background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
              box-shadow: 0 4px 12px rgba(39, 174, 96, 0.3);
            }
            .card-4:hover .service-card-compact-inner {
              border-color: rgba(39, 174, 96, 0.4);
              box-shadow: 0 6px 25px rgba(39, 174, 96, 0.2);
            }
            .card-4:hover .service-title-compact {
              color: #27ae60;
            }
            .card-4:hover .service-read-more-compact {
              color: #27ae60;
            }
            .card-5 .service-card-compact-inner {
              border-top: 3px solid #9b59b6;
              border-left: 2px solid rgba(155, 89, 182, 0.1);
            }
            .card-5 .service-icon-compact {
              background: linear-gradient(135deg, #9b59b6 0%, #bb8fce 100%);
              box-shadow: 0 4px 12px rgba(155, 89, 182, 0.3);
            }
            .card-5:hover .service-card-compact-inner {
              border-color: rgba(155, 89, 182, 0.4);
              box-shadow: 0 6px 25px rgba(155, 89, 182, 0.2);
            }
            .card-5:hover .service-title-compact {
              color: #9b59b6;
            }
            .card-5:hover .service-read-more-compact {
              color: #9b59b6;
            }
            .service-row-bottom {
              margin-top: 50px;
            }
            @media screen and (max-width: 991px) {
              .service-row-bottom {
                margin-top: 30px;
              }
            }
            .services-cta-wrapper {
              margin-top: 0 !important;
            }
            .services-cta-btn.mt-80 {
              margin-top: 0 !important;
            }
          `}} />
          <div className="services-modern-grid">
            <div className="row g-3">
              {/* Top Row - 3 Cards */}
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="service-card-compact card-1 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="service-card-compact-inner">
                    <div className="service-icon-compact">
                      <i className="la la-drafting-compass"></i>
                    </div>
                    <h5 className="service-title-compact">Architecture</h5>
                    <div className="service-image-compact">
                      <img
                        src="/home1/assets/img/services/ser1.jpg"
                        alt="Architecture"
                      />
                    </div>
                    <p className="service-description-compact">
                      We will help you to get the result you dreamed of.
                    </p>
                    <a href="#" className="service-read-more-compact">
                      <span>READ MORE</span>
                      <i className="ti-arrow-top-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="service-card-compact card-2 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="service-card-compact-inner">
                    <div className="service-icon-compact">
                      <i className="la la-couch"></i>
                    </div>
                    <h5 className="service-title-compact">Interior Design</h5>
                    <div className="service-image-compact">
                      <img
                        src="/home1/assets/img/services/ser2.jpg"
                        alt="Interior Design"
                      />
                    </div>
                    <p className="service-description-compact">
                      Individual, aesthetically stunning solutions for customers.
                    </p>
                    <a href="#" className="service-read-more-compact">
                      <span>READ MORE</span>
                      <i className="ti-arrow-top-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="service-card-compact card-3 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="service-card-compact-inner">
                    <div className="service-icon-compact">
                      <i className="la la-building"></i>
                    </div>
                    <h5 className="service-title-compact">Construction</h5>
                    <div className="service-image-compact">
                      <img
                        src="/home1/assets/img/services/ser3.jpg"
                        alt="Construction"
                      />
                    </div>
                    <p className="service-description-compact">
                      We create and produce our product design lines.
                    </p>
                    <a href="#" className="service-read-more-compact">
                      <span>READ MORE</span>
                      <i className="ti-arrow-top-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Row - 2 Cards (Centered) */}
              <div className="col-lg-4 col-md-6 col-sm-12 offset-lg-2 service-row-bottom">
                <div
                  className="service-card-compact card-4 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="service-card-compact-inner">
                    <div className="service-icon-compact">
                      <i className="la la-recycle"></i>
                    </div>
                    <h5 className="service-title-compact">Building Sustainability</h5>
                    <div className="service-image-compact">
                      <img
                        src="/home1/assets/img/services/ser4.jpg"
                        alt="Building Sustainability"
                      />
                    </div>
                    <p className="service-description-compact">
                      We will help you to get the result you dreamed of.
                    </p>
                    <a href="#" className="service-read-more-compact">
                      <span>READ MORE</span>
                      <i className="ti-arrow-top-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 service-row-bottom">
                <div
                  className="service-card-compact card-5 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="service-card-compact-inner">
                    <div className="service-icon-compact">
                      <i className="la la-network-wired"></i>
                    </div>
                    <h5 className="service-title-compact">Smart Building Technologies</h5>
                    <div className="service-image-compact">
                      <img
                        src="/home1/assets/img/services/ser1.jpg"
                        alt="Smart Building Technologies"
                      />
                    </div>
                    <p className="service-description-compact">
                      Individual, aesthetically stunning solutions for customers.
                    </p>
                    <a href="#" className="service-read-more-compact">
                      <span>READ MORE</span>
                      <i className="ti-arrow-top-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center services-cta-wrapper">
            <a
              href="#"
              className="butn rounded-pill text-white services-cta-btn"
              style={{ backgroundColor: '#73bf44' }}
            >
              <span>
                Get A Free Quote Now
                <i className="small ms-1 ti-arrow-top-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
      <div className="ser-img">
        <img src="/home1/assets/img/services/ser.jpg" alt="" />
      </div>
    </>
  );
}

export default Services;
