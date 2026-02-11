import React, { useEffect, useRef } from 'react';

function Process() {
  const swiperRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 50;
    
    const initSwiper = () => {
      if (typeof window === 'undefined' || !window.Swiper) {
        retryCount++;
        if (retryCount < maxRetries) {
          setTimeout(initSwiper, 100);
        }
        return;
      }

      if (!sliderRef.current || swiperRef.current) {
        return;
      }

      const sliderElement = sliderRef.current;
      const wrapper = sliderElement.querySelector('.swiper-wrapper');
      
      if (!wrapper || !wrapper.querySelector('.swiper-slide')) {
        retryCount++;
        if (retryCount < maxRetries) {
          setTimeout(initSwiper, 100);
        }
        return;
      }

      const Swiper = window.Swiper;
      
      const paginationEl = sliderElement.querySelector('.swiper-pagination');
      const nextEl = sliderElement.querySelector('.swiper-button-next');
      const prevEl = sliderElement.querySelector('.swiper-button-prev');
      
        try {
        swiperRef.current = new Swiper(sliderElement, {
          slidesPerView: 1,
          spaceBetween: 0,
          centeredSlides: true,
          speed: 1200,
          effect: 'fade',
          fadeEffect: {
            crossFade: true
          },
          pagination: paginationEl ? {
            el: paginationEl,
            clickable: true,
            dynamicBullets: false,
          } : false,
          navigation: (nextEl && prevEl) ? {
            nextEl: nextEl,
            prevEl: prevEl,
          } : false,
          mousewheel: false,
          keyboard: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          },
          loop: true,
          grabCursor: true,
        });
      } catch (error) {
        console.error('Error initializing Swiper:', error);
      }
    };

    const timer = setTimeout(initSwiper, 200);

    return () => {
      clearTimeout(timer);
      if (swiperRef.current) {
        try {
          swiperRef.current.destroy(true, true);
        } catch (e) {
          console.warn('Error destroying Swiper:', e);
        }
        swiperRef.current = null;
      }
    };
  }, []);

  const sliderData = [
    {
      id: 1,
      image: "/home_preview/assets/img/Architecture_Deisgn/5682.MasuadTech-Daroghewala,Lahore/02.jpg",
      text: "Integrity",
      color: ""
    },
    {
      id: 2,
      image: "/home_preview/assets/img/Interior_Design/5737.BashirKhayreResidence-Somalia/5737.CAM01(5).jpg",
      text: "Humanity",
      color: "#73bf44"
    },
    {
      id: 3,
      image: "/home_preview/assets/img/Interior_Design/5897.SheikhCharghaHouse,CitiHousing,Jhelum/5897.Autumn/Autumn(5).jpg",
      text: "Creativity",
      color: ""
    },
    {
      id: 4,
      image: "/home_preview/assets/img/Architecture_Deisgn/5861.VocationalVilla-Turks%26CaicosIsland/View-11-1.jpg",
      text: "Sustainability",
      color: ""
    }
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .tc-process-style2 .accordion-button:not(.collapsed) {
          color: #73bf44 !important;
        }
        .tc-process-style2 .accordion-button:not(.collapsed) h3 {
          color: #73bf44 !important;
        }
        .tc-process-style2 .accordion-button:not(.collapsed) .num {
          color: #73bf44 !important;
        }
        
        /* Beautiful Slider Styles */
        .tc-process-style2 .process-slider {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          height: 550px;
          transition: box-shadow 0.3s ease;
          margin: 0 auto;
          display: block;
        }
        
        .tc-process-style2 .process-slider:hover {
          box-shadow: 0 25px 80px rgba(115, 191, 68, 0.2);
        }
        
        .tc-process-style2 .process-slider .swiper-wrapper {
          height: 100%;
        }
        
        .tc-process-style2 .process-slider .swiper-slide {
          height: 100%;
          opacity: 0;
          transition: opacity 0.25s ease-out;
        }
        
        .tc-process-style2 .process-slider .swiper-slide-active {
          opacity: 1;
        }
        
        .tc-process-style2 .process-slider .swiper-slide .img {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 20px;
        }
        
        .tc-process-style2 .process-slider .swiper-slide .img::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%);
          z-index: 1;
          transition: opacity 0.4s ease;
        }
        
        .tc-process-style2 .process-slider .swiper-slide-active .img::before {
          opacity: 0.6;
        }
        
        .tc-process-style2 .process-slider .swiper-slide .img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1);
        }
        
        .tc-process-style2 .process-slider .swiper-slide .img .txt {
          position: absolute;
          bottom: 30px;
          left: 30px;
          font-size: 36px;
          font-weight: 600;
          color: #fff;
          z-index: 2;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          transform: translateY(0);
          opacity: 1;
          letter-spacing: 1px;
          white-space: nowrap;
        }
        
        .tc-process-style2 .process-slider .swiper-slide .img .txt[style*="color: #73bf44"] {
          color: #73bf44 !important;
          text-shadow: 0 2px 10px rgba(115, 191, 68, 0.4);
        }
        
        /* Special positioning for Sustainability */
        .tc-process-style2 .process-slider .swiper-slide:nth-child(4) .img .txt {
          left: auto;
          right: 30px;
        }
        
        @media (max-width: 991px) {
          .tc-process-style2 .process-slider .swiper-slide:nth-child(4) .img .txt {
            right: 30px;
          }
        }
        
        @media (max-width: 576px) {
          .tc-process-style2 .process-slider .swiper-slide:nth-child(4) .img .txt {
            right: 20px;
          }
        }
        
        /* Navigation Buttons */
        .tc-process-style2 .process-slider .swiper-button-next,
        .tc-process-style2 .process-slider .swiper-button-prev {
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 50%;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
          margin-top: -25px;
        }
        
        .tc-process-style2 .process-slider .swiper-button-next::after,
        .tc-process-style2 .process-slider .swiper-button-prev::after {
          font-size: 18px;
          font-weight: 700;
          color: #73bf44;
        }
        
        .tc-process-style2 .process-slider .swiper-button-next:hover,
        .tc-process-style2 .process-slider .swiper-button-prev:hover {
          background: #73bf44;
          transform: scale(1.1);
          box-shadow: 0 6px 25px rgba(115, 191, 68, 0.4);
        }
        
        .tc-process-style2 .process-slider .swiper-button-next:hover::after,
        .tc-process-style2 .process-slider .swiper-button-prev:hover::after {
          color: #fff;
        }
        
        .tc-process-style2 .process-slider .swiper-button-next {
          right: 20px;
        }
        
        .tc-process-style2 .process-slider .swiper-button-prev {
          left: 20px;
        }
        
        /* Pagination */
        .tc-process-style2 .process-slider .swiper-pagination {
          bottom: 20px !important;
          left: 50% !important;
          transform: translateX(-50%);
          width: auto !important;
          display: flex;
          gap: 10px;
          justify-content: center;
          align-items: center;
        }
        
        .tc-process-style2 .process-slider .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          margin: 0 !important;
          transition: all 0.3s ease;
          border: 2px solid rgba(255, 255, 255, 0.8);
        }
        
        .tc-process-style2 .process-slider .swiper-pagination-bullet-active {
          width: 40px;
          height: 12px;
          background: #73bf44;
          border-radius: 6px;
          border-color: #73bf44;
          box-shadow: 0 0 15px rgba(115, 191, 68, 0.6);
        }
        
        /* Responsive */
        @media (max-width: 991px) {
          .tc-process-style2 .process-slider {
            height: 450px;
            margin-top: 40px;
          }
          
          .tc-process-style2 .process-slider .swiper-slide .img .txt {
            font-size: 28px;
            bottom: 25px;
            left: 25px;
          }
          
          .tc-process-style2 .process-slider .swiper-button-next,
          .tc-process-style2 .process-slider .swiper-button-prev {
            width: 40px;
            height: 40px;
            margin-top: -20px;
          }
          
          .tc-process-style2 .process-slider .swiper-button-next::after,
          .tc-process-style2 .process-slider .swiper-button-prev::after {
            font-size: 14px;
          }
          
          .tc-process-style2 .process-slider .swiper-button-next {
            right: 15px;
          }
          
          .tc-process-style2 .process-slider .swiper-button-prev {
            left: 15px;
          }
        }
        
        @media (max-width: 576px) {
          .tc-process-style2 .process-slider {
            height: 380px;
            border-radius: 15px;
            margin-top: 30px;
          }
          
          .tc-process-style2 .process-slider .swiper-slide .img {
            border-radius: 15px;
          }
          
          .tc-process-style2 .process-slider .swiper-slide .img .txt {
            font-size: 20px;
            bottom: 15px;
            left: 15px;
          }
        }
      `}} />
    <section 
      className="tc-process-style2"
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
      
      <div 
        className="container"
        style={{
          position: 'relative',
          zIndex: 1
        }}
      >
        <h2 className="fsz-45 fw-500 mb-80 text-center">
        Our Core 
          <span 
            className="sub-font fst-italic fw-400"
            style={{ color: '#73bf44',  marginLeft:"1px"}}
          >
          Values
          </span>
        </h2>
        <div className="content">
          <div className="row">
            <div className="col-lg-5">
              <div className="accordion-side">
                <div className="accordion" id="accordionProcess">
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                      >
                        <span className="num"> 1 / </span> <h3> Integrity </h3>
                      </button>
                    </div>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                        Integrity is the foundation of everything we do.
                        We build trust through honesty, professionalism, and collaboration—ensuring every commitment we make is fulfilled with excellence and delivered beyond expectations.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                      >
                        <span className="num"> 2 / </span> <h3> Humanity </h3>
                      </button>
                    </div>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">Humanity is at the heart of our practice.
                        Whether working nationally or internationally, we design spaces that serve people, enrich lives, and respect the communities they belong to—because every project begins and ends with people.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                      >
                        <span className="num"> 3 / </span> <h3> Creativity </h3>
                      </button>
                    </div>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                        Creativity fuels everything we do.   It shapes our designs and inspires innovative, technology-driven solutions that transform challenges—simple or complex—into meaningful outcomes.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                      >
                        <span className="num"> 4 / </span> <h3> Sustainability </h3>
                      </button>
                    </div>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                        Sustainability is integral to our design philosophy.
                        By embracing environmentally responsible solutions, we aim to create lasting value—for our clients, our company, and the communities we serve.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="butn bg-white rounded-pill mt-50 hover-bg-green2"
                >
                  <span>
                    Get A Free Quotes
                    <i className="ms-2 fal fa-long-arrow-right ico-45"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="process-slider swiper" ref={sliderRef} style={{ margin: '0 auto' }}>
                <div className="swiper-wrapper">
                  {sliderData.map((item) => (
                    <div key={item.id} className="swiper-slide">
                      <div className="img">
                        <img
                          src={item.image}
                          alt={item.text}
                          className="img-cover"
                        />
                        <span 
                          className="txt sub-font" 
                          style={{ 
                            color: item.color || ''
                          }}
                        >
                          {item.text}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/innerpages/assets/img/prc_bg.png"
        alt=""
        className="bg"
        style={{
          position: 'absolute',
          zIndex: 0
        }}
      />
    </section>
    </>
  );
}

export default Process;
