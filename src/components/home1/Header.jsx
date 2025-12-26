import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import data from '../../data/home1/header-slider';

function Header() {
  const swiperRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 50; // Maximum 5 seconds wait time
    
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
      
      // Initialize Swiper
      try {
        swiperRef.current = new Swiper(sliderElement, {
          slidesPerView: 1,
          spaceBetween: 0,
          centeredSlides: true,
          speed: 1500,
          parallax: true,
          pagination: paginationEl ? {
            el: paginationEl,
            type: 'fraction',
          } : false,
          navigation: (nextEl && prevEl) ? {
            nextEl: nextEl,
            prevEl: prevEl,
          } : false,
          mousewheel: false,
          keyboard: true,
          autoplay: {
            delay: 6000,
          },
          loop: true,
          on: {
            init: function () {
              const swiper = this;
              // Set parallax for images
              for (let i = 0; i < swiper.slides.length; i++) {
                const imgElement = swiper.slides[i].querySelector('.img');
                if (imgElement) {
                  imgElement.setAttribute('data-swiper-parallax', 0.75 * swiper.width);
                }
              }
            },
            resize: function () {
              this.update();
            },
          },
        });
      } catch (error) {
        console.error('Error initializing Swiper:', error);
      }
    };

    // Initialize after React has rendered
    const timer = setTimeout(initSwiper, 100);

    // Cleanup function
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

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 991px) {
          .tc-header-style1 .header-slider .slider-card .info {
            text-align: center;
            top: 50% !important;
            transform: translateY(-50%) !important;
            bottom: auto !important;
            padding-left: 30px !important;
            padding-right: 30px !important;
          }
          .tc-header-style1 .header-slider .slider-card .info h1 {
            font-size: 56px !important;
            line-height: 1.2;
          }
          .tc-header-style1 .header-slider .slider-card .info h5 {
            font-size: 22px !important;
            margin-top: 15px !important;
          }
          .tc-header-style1 .header-slider .slider-card .info .text {
            font-size: 15px !important;
            line-height: 1.6;
          }
          .tc-header-style1 .header-slider .slider-card .info .butn {
            font-size: 13px;
            padding: 10px 25px;
          }
        }
        @media (max-width: 767px) {
          .tc-header-style1 .header-slider .slider-card .info {
            text-align: center;
            top: 50% !important;
            transform: translateY(-50%) !important;
            bottom: auto !important;
            padding-left: 40px !important;
            padding-right: 40px !important;
            padding-bottom: 0 !important;
          }
          .tc-header-style1 .header-slider .slider-card .info .row {
            flex-direction: column;
            align-items: center;
          }
          .tc-header-style1 .header-slider .slider-card .info .col-lg-6,
          .tc-header-style1 .header-slider .slider-card .info .col-lg-3 {
            width: 100%;
            max-width: 100%;
            text-align: center;
          }
          .tc-header-style1 .header-slider .slider-card .info h1 {
            font-size: 42px !important;
            line-height: 1.2;
            text-align: center;
          }
          .tc-header-style1 .header-slider .slider-card .info h5 {
            font-size: 20px !important;
            margin-top: 12px !important;
            text-align: center;
          }
          .tc-header-style1 .header-slider .slider-card .info .text {
            font-size: 14px !important;
            line-height: 1.6;
            text-align: center;
            margin-bottom: 20px;
          }
          .tc-header-style1 .header-slider .slider-card .info .butn {
            margin-top: 20px !important;
            font-size: 12px;
            padding: 10px 20px;
            display: inline-block;
          }
        }
        @media (max-width: 575px) {
          .tc-header-style1 .header-slider .slider-card .info {
            text-align: center;
            top: 50% !important;
            transform: translateY(-50%) !important;
            bottom: auto !important;
            padding-left: 30px !important;
            padding-right: 30px !important;
            padding-bottom: 0 !important;
          }
          .tc-header-style1 .header-slider .slider-card .info h1 {
            font-size: 32px !important;
            line-height: 1.2;
            text-align: center;
          }
          .tc-header-style1 .header-slider .slider-card .info h5 {
            font-size: 18px !important;
            margin-top: 10px !important;
            text-align: center;
          }
          .tc-header-style1 .header-slider .slider-card .info .text {
            font-size: 13px !important;
            line-height: 1.6;
            text-align: center;
          }
          .tc-header-style1 .header-slider .slider-card .info .butn {
            margin-top: 15px !important;
            font-size: 11px;
            padding: 8px 18px;
          }
        }
      `}} />
      <header className="tc-header-style1">
        <div className="header-slider" ref={sliderRef}>
        <div className="swiper-wrapper">
          {data.map((item, i) => (
            <div key={i} className="swiper-slide">
              <div className="slider-card">
                <div className="img">
                  <img src={item.img} alt="" className="img-cover" />
                </div>
                <div className="info section-padding-x pb-70">
                  <div className="row align-items-end gx-5">
                    <div className="col-lg-6 offset-lg-2">
                      <h1 data-swiper-parallax="-2000" className="js-title" style={{ fontSize: '100px' }}>
                        {item.title}
                      </h1>
                      <h5 className="fsz-30 mt-30 fw-400">{item.subTitle}</h5>
                    </div>
                    <div className="col-lg-3">
                      <div className="cont pb-30">
                        <div className="text fsz-17 fw-300 lh-4">
                          {item.desc}
                        </div>
                        <Link
                          to="/innerpages/services"
                          className="butn border rounded-pill mt-60 hover-bg-white"
                        >
                          <span>
                            Our Services
                            <i className="small ms-1 ti-arrow-top-right"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-controls">
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </header>
    </>
  );
}

export default Header;
