import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Services = memo(function Services({ removeTopPadding = false }) {
  return (
    <>
    <section className="tc-services-style1-modern" style={{ position: 'relative', overflow: 'hidden', background: '#f8f9fa' }}>
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

      <div className="content " style={{ position: 'relative', zIndex: 1, paddingTop: removeTopPadding ? '0' : '60px', paddingBottom: '60px'}}>
        <div className="container">
          <div className="services-modern-title text-center mb-50">
            <div className="title-badge wow fadeInUp" data-wow-delay="0.1s" style={{
              display: 'inline-block',
              padding: '8px 20px',
              background: 'rgba(115, 191, 68, 0.1)',
              border: '1px solid rgba(115, 191, 68, 0.2)',
              borderRadius: '30px',
              fontSize: '12px',
              fontWeight: '600',
              color: '#73bf44',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '20px'
            }}>
              <span>Our Expertise</span>
            </div>
            <h2 className="services-title-main wow fadeInUp" data-wow-delay="0.2s" style={{
              fontSize: '52px',
              fontWeight: '800',
              color: '#1a1a1a',
              marginBottom: '20px',
              lineHeight: '1.2',
              letterSpacing: '-1px'
            }}>What We Offer</h2>
            <p className="title-subtitle wow fadeInUp" data-wow-delay="0.3s" style={{
              fontSize: '17px',
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.7'
            }}>
             Discover our comprehensive range of professional services that we designed to “Bring Your Vision to Life” 
            </p>
          </div>
          
          <style dangerouslySetInnerHTML={{__html: `
            .service-card-compact {
              height: 100%;
              margin-bottom: 20px;
              min-height: 350px;
            }
            .service-card-compact-inner {
              position: relative;
              border-radius: 16px;
              padding: 24px;
              height: 100%;
              min-height: 350px;
              display: flex;
              flex-direction: column;
              overflow: hidden;
              transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
              cursor: pointer;
            }
            .service-card-compact-inner::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              width: 100%;
              height: 100%;
              background-size: 100% 100%;
              background-position: center center;
              background-repeat: no-repeat;
              transition: transform 0.5s ease;
              z-index: 0;
            }
            .service-card-compact-inner::after {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: rgba(0, 0, 0, 0.4);
              transition: all 0.4s ease;
              z-index: 1;
            }
            .service-card-compact-inner:hover::before {
              transform: scale(1.1);
            }
            .service-card-compact-inner:hover::after {
              background: rgba(0, 0, 0, 0.5);
            }
            .service-card-compact-inner:hover {
              transform: translateY(-8px);
              box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
            }
            .service-content-wrapper {
              position: relative;
              z-index: 2;
              display: flex;
              flex-direction: column;
              height: 100%;
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
              transition: all 0.3s ease;
              margin-bottom: 16px;
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            }
            .service-card-compact:hover .service-icon-compact {
              transform: translateY(-5px) scale(1.15);
              box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
            }
            .service-title-compact {
              font-size: 22px;
              font-weight: 700;
              color: #FFFFFF;
              margin-bottom: 12px;
              line-height: 1.3;
              text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
            }
            .service-description-compact {
              font-size: 14px;
              line-height: 1.7;
              color: rgba(255, 255, 255, 0.95);
              margin-bottom: 20px;
              flex-grow: 1;
              text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
            }
            .service-read-more-compact {
              display: inline-flex;
              align-items: center;
              gap: 8px;
              font-size: 12px;
              font-weight: 600;
              color: #FFFFFF;
              text-transform: uppercase;
              letter-spacing: 1px;
              text-decoration: none;
              transition: all 0.3s ease;
              margin-top: auto;
              padding: 10px 20px;
              background: rgba(255, 255, 255, 0.2);
              border-radius: 25px;
              border: 1px solid rgba(255, 255, 255, 0.3);
              width: fit-content;
            }
            .service-read-more-compact i {
              font-size: 12px;
              transition: transform 0.3s ease;
            }
            .service-card-compact:hover .service-read-more-compact {
              background: rgba(255, 255, 255, 0.3);
              transform: translateX(5px);
            }
            .service-card-compact:hover .service-read-more-compact i {
              transform: translate(3px, -3px);
            }
            /* Unique Card Styles with Color Accents */
            .card-1 .service-icon-compact {
              background: linear-gradient(135deg, #73bf44 0%, #8dd65a 100%);
            }
            .card-1:hover .service-card-compact-inner::after {
              background: rgba(115, 191, 68, 0.3);
            }
            .card-2 .service-icon-compact {
              background: linear-gradient(135deg, #4a90e2 0%, #6ba3f0 100%);
            }
            .card-2:hover .service-card-compact-inner::after {
              background: rgba(74, 144, 226, 0.3);
            }
            .card-3 .service-icon-compact {
              background: linear-gradient(135deg, #e67e22 0%, #f39c12 100%);
            }
            .card-3:hover .service-card-compact-inner::after {
              background: rgba(230, 126, 34, 0.3);
            }
            .card-4 .service-icon-compact {
              background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
            }
            .card-4:hover .service-card-compact-inner::after {
              background: rgba(39, 174, 96, 0.3);
            }
            .card-5 .service-icon-compact {
              background: linear-gradient(135deg, #9b59b6 0%, #bb8fce 100%);
            }
            .card-5:hover .service-card-compact-inner::after {
              background: rgba(155, 89, 182, 0.3);
            }
            .service-row-bottom {
              margin-top: 30px;
            }
            .services-cta-wrapper {
              margin-top: 40px !important;
            }
            .services-cta-btn {
              padding: 16px 40px;
              font-size: 15px;
              font-weight: 600;
              border-radius: 50px;
              transition: all 0.3s ease;
            }
            .services-cta-btn:hover {
              transform: translateY(-2px);
              box-shadow: 0 8px 25px rgba(115, 191, 68, 0.4);
            }
            @media screen and (max-width: 991px) {
              .service-card-compact {
                min-height: 320px;
              }
              .service-card-compact-inner {
                padding: 20px;
                min-height: 320px;
              }
              .service-icon-compact {
                width: 45px;
                height: 45px;
                font-size: 20px;
                margin-bottom: 14px;
              }
              .service-title-compact {
                font-size: 20px;
                margin-bottom: 10px;
              }
              .service-description-compact {
                font-size: 13px;
                margin-bottom: 16px;
              }
            }
            @media screen and (max-width: 767px) {
              .service-card-compact {
                min-height: 300px;
              }
              .service-card-compact-inner {
                padding: 18px;
                min-height: 300px;
              }
              .service-icon-compact {
                width: 42px;
                height: 42px;
                font-size: 18px;
                margin-bottom: 12px;
              }
              .service-title-compact {
                font-size: 18px;
                margin-bottom: 10px;
              }
              .service-description-compact {
                font-size: 12px;
                margin-bottom: 14px;
              }
              .service-read-more-compact {
                font-size: 11px;
                padding: 8px 16px;
              }
            }
            @media screen and (max-width: 575px) {
              .service-card-compact {
                margin-bottom: 20px;
                min-height: 280px;
              }
              .service-card-compact-inner {
                padding: 16px;
                border-radius: 14px;
                min-height: 280px;
              }
              .service-icon-compact {
                width: 40px;
                height: 40px;
                font-size: 16px;
                margin-bottom: 10px;
              }
              .service-title-compact {
                font-size: 16px;
                margin-bottom: 8px;
              }
              .service-description-compact {
                font-size: 11px;
                margin-bottom: 12px;
              }
              .service-read-more-compact {
                font-size: 10px;
                padding: 8px 14px;
              }
            }
          `}} />
          <div className="services-modern-grid">
            <div className="row g-3">
              {/* Top Row - 3 Cards */}
              <div className="col-lg-4 col-md-6 col-sm-12">
                <Link
                  to="/innerpages/architecture"
                  className="service-card-compact card-1 wow fadeInUp"
                  data-wow-delay="0.1s"
                  style={{ textDecoration: 'none', display: 'block' }}
                >
                  <div 
                    className="service-card-compact-inner"
                    style={{ backgroundImage: 'url(/home_preview/assets/img/Architecture-scaled.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                  >
                    <div className="service-content-wrapper">
                      <div className="service-icon-compact">
                        <i className="la la-drafting-compass"></i>
                      </div>
                      <h5 className="service-title-compact">Architecture</h5>
                      <p className="service-description-compact">
                        We will help you to get the result you dreamed of.
                      </p>
                      <div className="service-read-more-compact">
                        <span>READ MORE</span>
                        <i className="ti-arrow-top-right"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <Link
                  to="/innerpages/interior-design"
                  className="service-card-compact card-2 wow fadeInUp"
                  data-wow-delay="0.2s"
                  style={{ textDecoration: 'none', display: 'block' }}
                >
                  <div 
                    className="service-card-compact-inner"
                    style={{ backgroundImage: 'url(/home_preview/assets/img/Slider-1-scaled.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                  >
                    <div className="service-content-wrapper">
                      <div className="service-icon-compact">
                        <i className="la la-couch"></i>
                      </div>
                      <h5 className="service-title-compact">Interior Design</h5>
                      <p className="service-description-compact">
                        Individual, aesthetically stunning solutions for customers.
                      </p>
                      <div className="service-read-more-compact">
                        <span>READ MORE</span>
                        <i className="ti-arrow-top-right"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <Link
                  to="/innerpages/construction"
                  className="service-card-compact card-3 wow fadeInUp"
                  data-wow-delay="0.3s"
                  style={{ textDecoration: 'none', display: 'block' }}
                >
                  <div 
                    className="service-card-compact-inner"
                    style={{ backgroundImage: 'url(/home_preview/assets/img/Construction-scaled.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                  >
                    <div className="service-content-wrapper">
                      <div className="service-icon-compact">
                        <i className="la la-building"></i>
                      </div>
                      <h5 className="service-title-compact">Construction</h5>
                      <p className="service-description-compact">
                        We create and produce our product design lines.
                      </p>
                      <div className="service-read-more-compact">
                        <span>READ MORE</span>
                        <i className="ti-arrow-top-right"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Bottom Row - 2 Cards (Centered) */}
              <div className="col-lg-4 col-md-6 col-sm-12 offset-lg-2 service-row-bottom">
                <Link
                  to="/innerpages/building-sustainability"
                  className="service-card-compact card-4 wow fadeInUp"
                  data-wow-delay="0.4s"
                  style={{ textDecoration: 'none', display: 'block' }}
                >
                  <div 
                    className="service-card-compact-inner"
                    style={{ backgroundImage: 'url(/home_preview/assets/img/Evening-View-scaled.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                  >
                    <div className="service-content-wrapper">
                      <div className="service-icon-compact">
                        <i className="la la-recycle"></i>
                      </div>
                      <h5 className="service-title-compact">Building Sustainability</h5>
                      <p className="service-description-compact">
                        We will help you to get the result you dreamed of.
                      </p>
                      <div className="service-read-more-compact">
                        <span>READ MORE</span>
                        <i className="ti-arrow-top-right"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 service-row-bottom">
                <Link
                  to="/innerpages/smart-building-technologies"
                  className="service-card-compact card-5 wow fadeInUp"
                  data-wow-delay="0.5s"
                  style={{ textDecoration: 'none', display: 'block' }}
                >
                  <div 
                    className="service-card-compact-inner"
                    style={{ backgroundImage: 'url(/home_preview/assets/img/Smart-Technologies-scaled.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                  >
                    <div className="service-content-wrapper">
                      <div className="service-icon-compact">
                        <i className="la la-network-wired"></i>
                      </div>
                      <h5 className="service-title-compact">Smart Building Technologies</h5>
                      <p className="service-description-compact">
                        Individual, aesthetically stunning solutions for customers.
                      </p>
                      <div className="service-read-more-compact">
                        <span>READ MORE</span>
                        <i className="ti-arrow-top-right"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center services-cta-wrapper">
            <Link
              to="/innerpages/contact"
              className="butn rounded-pill text-white services-cta-btn"
              style={{ backgroundColor: '#73bf44' }}
            >
              <span>
                Contact Us
                <i className="small ms-1 ti-arrow-top-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
      <div className="ser-img">
        <img src="/home1/assets/img/services/ser(1).jpg" alt="" loading="lazy" decoding="async" />
      </div>
    </> 
  );
});

Services.displayName = 'Services';

export default Services;
