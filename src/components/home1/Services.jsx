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
            }
            .service-card-compact-inner {
              background: #ffffff;
              border-radius: 14px;
              padding: 16px;
              height: 100%;
              display: flex;
              flex-direction: column;
              position: relative;
              overflow: hidden;
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
              border: 1px solid rgba(0, 0, 0, 0.06);
              cursor: pointer;
            }
            .service-card-compact-inner:hover {
              transform: translateY(-5px);
              box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
              border-color: rgba(0, 0, 0, 0.1);
            }
            .service-icon-compact {
              width: 42px;
              height: 42px;
              border-radius: 10px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 20px;
              color: #FFFFFF;
              transition: all 0.3s ease;
              margin-bottom: 12px;
            }
            .service-card-compact:hover .service-icon-compact {
              transform: translateY(-3px) scale(1.1);
            }
            .service-title-compact {
              font-size: 18px;
              font-weight: 700;
              color: #1a1a1a;
              margin-bottom: 10px;
              line-height: 1.3;
            }
            .service-image-compact {
              width: 100%;
              height: 160px;
              border-radius: 10px;
              overflow: hidden;
              margin-bottom: 12px;
              background: #f5f5f5;
            }
            .service-image-compact img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: transform 0.5s ease;
            }
            .service-card-compact:hover .service-image-compact img {
              transform: scale(1.05);
            }
            .service-description-compact {
              font-size: 13px;
              line-height: 1.6;
              color: #666666;
              margin-bottom: 12px;
              flex-grow: 1;
            }
            .service-read-more-compact {
              display: inline-flex;
              align-items: center;
              gap: 5px;
              font-size: 11px;
              font-weight: 600;
              color: #1a1a1a;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              text-decoration: none;
              transition: all 0.3s ease;
              margin-top: auto;
            }
            .service-read-more-compact i {
              font-size: 11px;
              transition: transform 0.3s ease;
            }
            .service-card-compact:hover .service-read-more-compact i {
              transform: translate(2px, -2px);
            }
            /* Unique Card Styles */
            .card-1 .service-card-compact-inner {
              border-top: 3px solid #73bf44;
            }
            .card-1 .service-icon-compact {
              background: linear-gradient(135deg, #73bf44 0%, #8dd65a 100%);
              box-shadow: 0 3px 10px rgba(115, 191, 68, 0.25);
            }
            .card-1:hover .service-card-compact-inner {
              border-top-color: #73bf44;
              box-shadow: 0 8px 24px rgba(115, 191, 68, 0.15);
            }
            .card-1:hover .service-title-compact {
              color: #73bf44;
            }
            .card-1:hover .service-read-more-compact {
              color: #73bf44;
            }
            .card-2 .service-card-compact-inner {
              border-top: 3px solid #4a90e2;
            }
            .card-2 .service-icon-compact {
              background: linear-gradient(135deg, #4a90e2 0%, #6ba3f0 100%);
              box-shadow: 0 3px 10px rgba(74, 144, 226, 0.25);
            }
            .card-2:hover .service-card-compact-inner {
              border-top-color: #4a90e2;
              box-shadow: 0 8px 24px rgba(74, 144, 226, 0.15);
            }
            .card-2:hover .service-title-compact {
              color: #4a90e2;
            }
            .card-2:hover .service-read-more-compact {
              color: #4a90e2;
            }
            .card-3 .service-card-compact-inner {
              border-top: 3px solid #e67e22;
            }
            .card-3 .service-icon-compact {
              background: linear-gradient(135deg, #e67e22 0%, #f39c12 100%);
              box-shadow: 0 3px 10px rgba(230, 126, 34, 0.25);
            }
            .card-3:hover .service-card-compact-inner {
              border-top-color: #e67e22;
              box-shadow: 0 8px 24px rgba(230, 126, 34, 0.15);
            }
            .card-3:hover .service-title-compact {
              color: #e67e22;
            }
            .card-3:hover .service-read-more-compact {
              color: #e67e22;
            }
            .card-4 .service-card-compact-inner {
              border-top: 3px solid #27ae60;
            }
            .card-4 .service-icon-compact {
              background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
              box-shadow: 0 3px 10px rgba(39, 174, 96, 0.25);
            }
            .card-4:hover .service-card-compact-inner {
              border-top-color: #27ae60;
              box-shadow: 0 8px 24px rgba(39, 174, 96, 0.15);
            }
            .card-4:hover .service-title-compact {
              color: #27ae60;
            }
            .card-4:hover .service-read-more-compact {
              color: #27ae60;
            }
            .card-5 .service-card-compact-inner {
              border-top: 3px solid #9b59b6;
            }
            .card-5 .service-icon-compact {
              background: linear-gradient(135deg, #9b59b6 0%, #bb8fce 100%);
              box-shadow: 0 3px 10px rgba(155, 89, 182, 0.25);
            }
            .card-5:hover .service-card-compact-inner {
              border-top-color: #9b59b6;
              box-shadow: 0 8px 24px rgba(155, 89, 182, 0.15);
            }
            .card-5:hover .service-title-compact {
              color: #9b59b6;
            }
            .card-5:hover .service-read-more-compact {
              color: #9b59b6;
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
              .service-row-bottom {
                margin-top: 20px;
              }
              .service-card-compact-inner {
                padding: 14px;
              }
              .service-icon-compact {
                width: 40px;
                height: 40px;
                font-size: 18px;
                margin-bottom: 10px;
              }
              .service-title-compact {
                font-size: 16px;
                margin-bottom: 8px;
              }
              .service-image-compact {
                height: 140px;
                margin-bottom: 10px;
              }
              .service-description-compact {
                font-size: 12px;
                margin-bottom: 10px;
              }
            }
            @media screen and (max-width: 767px) {
              .service-card-compact-inner {
                padding: 12px;
              }
              .service-icon-compact {
                width: 38px;
                height: 38px;
                font-size: 17px;
                margin-bottom: 10px;
              }
              .service-title-compact {
                font-size: 15px;
                margin-bottom: 8px;
              }
              .service-image-compact {
                height: 130px;
                margin-bottom: 10px;
              }
              .service-description-compact {
                font-size: 11px;
                margin-bottom: 10px;
              }
              .service-read-more-compact {
                font-size: 10px;
              }
            }
            @media screen and (max-width: 575px) {
              .service-card-compact {
                margin-bottom: 20px;
              }
              .service-card-compact-inner {
                padding: 12px;
                border-radius: 12px;
              }
              .service-icon-compact {
                width: 36px;
                height: 36px;
                font-size: 16px;
                margin-bottom: 8px;
              }
              .service-title-compact {
                font-size: 14px;
                margin-bottom: 6px;
              }
              .service-image-compact {
                height: 120px;
                margin-bottom: 8px;
                border-radius: 8px;
              }
              .service-description-compact {
                font-size: 11px;
                margin-bottom: 8px;
              }
              .service-read-more-compact {
                font-size: 9px;
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
                  <div className="service-card-compact-inner">
                    <div className="service-icon-compact">
                      <i className="la la-drafting-compass"></i>
                    </div>
                    <h5 className="service-title-compact">Architecture</h5>
                    <div className="service-image-compact">
                      <img
                        src="/home_preview/assets/img/Architecture-scaled.jpg"
                        alt="Architecture"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <p className="service-description-compact">
                      We will help you to get the result you dreamed of.
                    </p>
                    <div className="service-read-more-compact">
                      <span>READ MORE</span>
                      <i className="ti-arrow-top-right"></i>
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
                  <div className="service-card-compact-inner">
                    <div className="service-icon-compact">
                      <i className="la la-couch"></i>
                    </div>
                    <h5 className="service-title-compact">Interior Design</h5>
                    <div className="service-image-compact">
                      <img
                        src="/home_preview/assets/img/Slider-1-scaled.jpg"
                        alt="Interior Design"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <p className="service-description-compact">
                      Individual, aesthetically stunning solutions for customers.
                    </p>
                    <div className="service-read-more-compact">
                      <span>READ MORE</span>
                      <i className="ti-arrow-top-right"></i>
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
                  <div className="service-card-compact-inner">
                    <div className="service-icon-compact">
                      <i className="la la-building"></i>
                    </div>
                    <h5 className="service-title-compact">Construction</h5>
                    <div className="service-image-compact">
                      <img
                        src="/home_preview/assets/img/Construction-scaled.jpg"
                        alt="Construction"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <p className="service-description-compact">
                      We create and produce our product design lines.
                    </p>
                    <div className="service-read-more-compact">
                      <span>READ MORE</span>
                      <i className="ti-arrow-top-right"></i>
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
                  <div className="service-card-compact-inner">
                    <div className="service-icon-compact">
                      <i className="la la-recycle"></i>
                    </div>
                    <h5 className="service-title-compact">Building Sustainability</h5>
                    <div className="service-image-compact">
                      <img
                        src="/home_preview/assets/img/Evening-View-scaled.jpg"
                        alt="Building Sustainability"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <p className="service-description-compact">
                      We will help you to get the result you dreamed of.
                    </p>
                    <div className="service-read-more-compact">
                      <span>READ MORE</span>
                      <i className="ti-arrow-top-right"></i>
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
                  <div className="service-card-compact-inner">
                    <div className="service-icon-compact">
                      <i className="la la-network-wired"></i>
                    </div>
                    <h5 className="service-title-compact">Smart Building Technologies</h5>
                    <div className="service-image-compact">
                      <img
                        src="/home_preview/assets/img/Smart-Technologies-scaled.jpg"
                        alt="Smart Building Technologies"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <p className="service-description-compact">
                      Individual, aesthetically stunning solutions for customers.
                    </p>
                    <div className="service-read-more-compact">
                      <span>READ MORE</span>
                      <i className="ti-arrow-top-right"></i>
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
        <img src="/home1/assets/img/services/ser.jpg" alt="" loading="lazy" decoding="async" />
      </div>
    </> 
  );
});

Services.displayName = 'Services';

export default Services;
