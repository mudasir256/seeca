import React, { useEffect, useRef } from 'react';
import data from '../../data/home1/header-slider';

function Header() {
  const swiperRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 50; // Maximum 5 seconds wait time
    
    // Wait for Swiper to be available and DOM to be ready
    const initSwiper = () => {
      if (typeof window === 'undefined' || !window.Swiper) {
        // If Swiper is not loaded yet, wait a bit and try again
        retryCount++;
        if (retryCount < maxRetries) {
          setTimeout(initSwiper, 100);
        }
        return;
      }

      if (!sliderRef.current || swiperRef.current) {
        return; // Already initialized or element not ready
      }

      const sliderElement = sliderRef.current;
      const wrapper = sliderElement.querySelector('.swiper-wrapper');
      
      // Ensure wrapper and slides exist
      if (!wrapper || !wrapper.querySelector('.swiper-slide')) {
        retryCount++;
        if (retryCount < maxRetries) {
          setTimeout(initSwiper, 100);
        }
        return;
      }

      const Swiper = window.Swiper;
      
      // Find pagination and navigation elements
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
                      <h1 data-swiper-parallax="-2000" className="js-title">
                        {item.title}
                      </h1>
                      <h5 className="fsz-30 mt-30 fw-400">{item.subTitle}</h5>
                    </div>
                    <div className="col-lg-3">
                      <div className="cont pb-30">
                        <div className="text fsz-17 fw-300 lh-4">
                          {item.desc}
                        </div>
                        <a
                          href="#"
                          className="butn border rounded-pill mt-60 hover-bg-white"
                        >
                          <span>
                            Our Services
                            <i className="small ms-1 ti-arrow-top-right"></i>
                          </span>
                        </a>
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
  );
}

export default Header;
