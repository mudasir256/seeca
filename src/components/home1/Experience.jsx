import React, { useEffect, useRef } from 'react';
import { logos } from './partner';

function Experience() {
  const duplicatedLogos = [...logos, ...logos];
  const scrollRef = useRef(null);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    let animationId;
    let position = 0;
    const speed = 1.5; // Slightly reduced for better performance
    const totalWidth = scrollContainer.scrollWidth / 2;
    let lastTime = performance.now();
    
    const scroll = (currentTime) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;
      
      // Use time-based animation for consistent speed
      position += speed * (deltaTime / 16); // Normalize to 60fps
      
      if (position >= totalWidth) {
        position = 0;
      }
      
      if (scrollContainer) {
        // Use transform3d for GPU acceleration
        scrollContainer.style.transform = `translate3d(-${position}px, 0, 0)`;
      }
      
      animationId = requestAnimationFrame(scroll);
    };
    
    animationId = requestAnimationFrame(scroll);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .tc-experience-style1 .exp-num {
          text-align: center;
        }
        .tc-experience-style1 .mobile-contact {
          display: none;
        }
        @media (min-width: 1200px) {
          .tc-experience-style1 .info-col {
            margin-left: 40px;
          }
        }
        @media (max-width: 1199px) {
          .tc-experience-style1 .info-col {
            margin-left: 0 !important;
            margin-top: 30px;
          }
        }
        @media (max-width: 991px) {
          .tc-experience-style1 .img {
            transform: rotate(0deg) scale(1) !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
            height: auto !important;
            min-height: 300px !important;
            margin-bottom: 30px;
          }
          .tc-experience-style1 .img img {
            transform: rotate(0deg) !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
            width: 100% !important;
            height: auto !important;
            max-height: 400px !important;
            object-fit: contain !important;
          }
          .tc-experience-style1 .rotate-txt {
            display: none !important;
          }
          .tc-experience-style1 .mobile-contact {
            display: block !important;
            text-align: center;
            margin-top: 30px;
            padding-top: 30px;
            border-top: 1px solid #e5e5e5;
          }
          .tc-experience-style1 .mobile-contact ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .tc-experience-style1 .mobile-contact li {
            margin: 10px 0;
          }
          .tc-experience-style1 .mobile-contact a {
            color: #1a1a1a;
            text-decoration: none;
            font-size: 16px;
          }
          .tc-experience-style1 .exp-num {
            margin-bottom: 40px !important;
          }
          .tc-experience-style1 .info h3 {
            font-size: 32px !important;
            text-align: center;
          }
          .tc-experience-style1 .info .text {
            font-size: 14px !important;
            text-align: center;
          }
          .tc-experience-style1 .info .butn {
            display: block;
            text-align: center;
            margin: 30px auto 0;
            width: fit-content;
          }
        }
        @media (max-width: 767px) {
          .tc-experience-style1 .img {
            transform: rotate(0deg) scale(1) !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
            height: auto !important;
            min-height: 250px !important;
            margin-bottom: 25px;
          }
          .tc-experience-style1 .img img {
            transform: rotate(0deg) !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
            width: 100% !important;
            height: auto !important;
            max-height: 350px !important;
            object-fit: contain !important;
          }
          .tc-experience-style1 .rotate-txt {
            display: none !important;
          }
          .tc-experience-style1 .info h3 {
            font-size: 28px !important;
          }
          .tc-experience-style1 .info .text {
            font-size: 13px !important;
          }
          .tc-experience-style1 .partners-title {
            font-size: 32px !important;
            margin-bottom: 30px !important;
          }
          .tc-experience-style1 .partners-container {
            margin-top: 50px !important;
          }
        }
        @media (max-width: 575px) {
          .tc-experience-style1 .img {
            transform: rotate(0deg) scale(1) !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
            height: auto !important;
            min-height: 200px !important;
            margin-bottom: 20px;
          }
          .tc-experience-style1 .img img {
            transform: rotate(0deg) !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
            width: 100% !important;
            height: auto !important;
            max-height: 300px !important;
            object-fit: contain !important;
          }
          .tc-experience-style1 .rotate-txt {
            display: none !important;
          }
          .tc-experience-style1 .exp-num h5 {
            font-size: 14px !important;
          }
          .tc-experience-style1 .exp-num h2 {
            font-size: 36px !important;
          }
          .tc-experience-style1 .info h3 {
            font-size: 24px !important;
            margin-bottom: 20px !important;
          }
          .tc-experience-style1 .info .text {
            font-size: 12px !important;
            line-height: 1.6;
          }
          .tc-experience-style1 .info .butn {
            margin-top: 20px !important;
            padding: 10px 20px;
            font-size: 14px;
          }
          .tc-experience-style1 .partners-title {
            font-size: 28px !important;
            margin-bottom: 25px !important;
          }
          .tc-experience-style1 .partners-container {
            margin-top: 40px !important;
          }
          .tc-experience-style1 .partner-logo {
            margin: 0 24px !important;
            width: 100px !important;
            height: 60px !important;
          }
          .tc-experience-style1 .partner-logo img {
            height: 60px !important;
          }
        }
      `}} />
    <section 
      className="tc-experience-style1 section-padding-x"
      style={{
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Blurred circular gradient backgrounds */}
      <div 
        className="d-none d-md-block"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
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
          bottom: 0,
          right: 'clamp(200px, 38vw, 550px)',
          width: 'clamp(250px, 28vw, 400px)',
          height: 'clamp(250px, 28vw, 400px)',
          background: 'rgba(115, 191, 68, 0.2)',
          filter: 'blur(60px)',
          borderRadius: '350px',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div 
        className="d-none d-md-block"
        style={{
          position: 'absolute',
          top: '20%',
          left: 'clamp(150px, 20vw, 250px)',
          width: 'clamp(200px, 21vw, 300px)',
          height: 'clamp(200px, 21vw, 300px)',
          background: 'rgba(115, 191, 68, 0.2)',
          filter: 'blur(60px)',
          borderRadius: '300px',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      
      <div className="container-fluid" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-6 col-lg-2">
            <div className="exp-num mb-100 wow zoomIn" data-wow-delay="0.3s">
              <h5 className="fsz-18 text-uppercase">
                years of <br /> experience
              </h5>
              <h2 className="num" style={{ color: '#73bf44' }}> 9 </h2>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="img wow">
              <img
                src="/home1/assets/img/CAM01.jpg"
                alt=""
                className="img-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-3 info-col">
            <div className="info wow fadeInUp" data-wow-delay="0.3s">
              <h3 className="fsz-45 fw-600 mb-30"> Est. 2018 </h3>
              <div className="text fsz-15 color-666">
              SEECA (SEE Consultants & Architects) is a multidisciplinary design firm in Lahore delivering premium architectural and interior design services. Our architects and interior designers handle commercial, institutional, residential, and corporate office projects, including malls, spaces, schools, colleges, homes, apartments, farmhouses, and workplaces.
              </div>
              <a
                href="./innerpages/about"
                className="butn rounded-pill mt-50 hover-bg-green2 bg-white"
              >
                <span>
                  Learn More <i className="small ms-1 ti-arrow-top-right"></i>
                </span>
              </a>
              <div className="mobile-contact">
                <ul>
                  <li>
                    <a href="mailto:info@seeca.pk"> info@seeca.pk</a>
                  </li>
                  <li>
                    <a href="tel:+923331498340"> +92 333 1498340 </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 d-none d-lg-block">
            <div className="rotate-txt justify-content-lg-end">
              <ul>
                <li>
                  <a href="mailto:info@seeca.pk"> info@seeca.pk</a>
                </li>
                <li>
                  <a href="tel:+923331498340"> +92 333 1498340 </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div 
        className="c-line wow" 
        style={{ 
          backgroundColor: '#73bf44',
          maskImage: 'url(/home1/assets/img/c_line.png)',
          WebkitMaskImage: 'url(/home1/assets/img/c_line.png)',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
        }}
      />

      <div className="container-fluid partners-container" style={{ position: 'relative', zIndex: 1, marginTop: '80px' }}>
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="text-center fsz-45 fw-600 mb-50 partners-title" style={{ color: '#1a1a1a' }}>
              Our Partners
            </h2>
            
            <div className="relative overflow-hidden w-100" style={{ position: 'relative' }}>
              <div 
                ref={scrollRef}
                className="d-flex"
                style={{ 
                  willChange: 'transform', 
                  width: 'fit-content',
                  transform: 'translateZ(0)', // Force GPU acceleration
                  backfaceVisibility: 'hidden'
                }}
              >
                {duplicatedLogos.map((logo, index) => (
                  <div
                    key={`logo-${index}`}
                    className="flex-shrink-0 d-flex align-items-center justify-content-center partner-logo"
                    style={{ 
                      margin: '0 48px',
                      width: '140px',
                      height: '80px'
                    }}
                  >
                    <img
                      src={logo.logo}
                      alt={logo.name}
                      loading="lazy"
                      decoding="async"
                      style={{ 
                        height: '80px',
                        width: 'auto',
                        objectFit: 'contain',
                        // opacity: 0.7,
                        transition: 'all 0.3s ease'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Experience;
