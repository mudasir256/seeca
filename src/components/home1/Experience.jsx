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
    const speed = 2; 
    const totalWidth = scrollContainer.scrollWidth / 2;
    
    const scroll = () => {
      position += speed;
      
      if (position >= totalWidth) {
        position = 0;
      }
      
      if (scrollContainer) {
        scrollContainer.style.transform = `translateX(-${position}px)`;
      }
      
      animationId = requestAnimationFrame(scroll);
    };
    
    scroll(); 
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 991px) {
          .tc-experience-style1 .img {
            transform: rotate(0deg) scale(1) !important;
          }
          .tc-experience-style1 .img img {
            transform: rotate(0deg) !important;
          }
          .tc-experience-style1 .rotate-txt {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .tc-experience-style1 .img {
            transform: rotate(0deg) scale(1) !important;
          }
          .tc-experience-style1 .img img {
            transform: rotate(0deg) !important;
          }
          .tc-experience-style1 .rotate-txt {
            display: none !important;
          }
        }
        @media (max-width: 575px) {
          .tc-experience-style1 .img {
            transform: rotate(0deg) scale(1) !important;
          }
          .tc-experience-style1 .img img {
            transform: rotate(0deg) !important;
          }
          .tc-experience-style1 .rotate-txt {
            display: none !important;
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
          <div className="col-lg-2">
            <div className="exp-num mb-100 wow zoomIn" data-wow-delay="0.3s">
              <h5 className="fsz-18 text-uppercase">
                years of <br /> experience
              </h5>
              <h2 className="num" style={{ color: '#73bf44' }}> 15 </h2>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="img wow">
              <img
                src="/home1/assets/img/exp.png"
                alt=""
                className="img-cover"
              />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="info wow fadeInUp" data-wow-delay="0.3s">
              <h3 className="fsz-45 fw-600 mb-30"> Est. 2010 </h3>
              <div className="text fsz-15 color-666">
                SEECA (SEE Consultants & Architects) with expert interior designers and professional architects in Lahore providing high-quality designing services for the Commercial (includes malls, shops, stores, multiplexes, exhibitions), Institutional (includes schools, colleges, training centers) Residential (Independent houses, flats, farm houses), and corporate offices.
              </div>
              <a
                href="#"
                className="butn rounded-pill mt-50 hover-bg-green2 bg-white"
              >
                <span>
                  Our Studio <i className="small ms-1 ti-arrow-top-right"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="rotate-txt justify-content-lg-end">
              <ul>
                <li>
                  <a href="#"> info@seeca.pk</a>
                </li>
                <li>
                  <a href="#"> +92 333 1498340 </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <img src="/home1/assets/img/c_line.png" alt="" className="c-line wow" /> */}
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

      {/* Our Partners Section */}
      <div className="container-fluid" style={{ position: 'relative', zIndex: 1, marginTop: '80px' }}>
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="text-center fsz-45 fw-600 mb-50" style={{ color: '#1a1a1a' }}>
              Our Partners
            </h2>
            
            <div className="relative overflow-hidden w-100" style={{ position: 'relative' }}>
              <div 
                ref={scrollRef}
                className="d-flex"
                style={{ willChange: 'transform', width: 'fit-content' }}
              >
                {duplicatedLogos.map((logo, index) => (
                  <div
                    key={`logo-${index}`}
                    className="flex-shrink-0 d-flex align-items-center justify-content-center"
                    style={{ 
                      margin: '0 48px',
                      width: '140px',
                      height: '80px'
                    }}
                  >
                    <img
                      src={logo.logo}
                      alt={logo.name}
                      style={{ 
                        height: '80px',
                        width: 'auto',
                        objectFit: 'contain',
                        filter: 'grayscale(100%)',
                        opacity: 0.7,
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.filter = 'grayscale(0%)';
                        e.target.style.opacity = '1';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.filter = 'grayscale(100%)';
                        e.target.style.opacity = '0.7';
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
