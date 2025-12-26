import React from 'react';

function Testimonials() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .tc-building-sustainability-testimonials {
          position: relative;
          padding: 120px 0;
          background: #fff;
          overflow: hidden;
        }
        .tc-building-sustainability-testimonials .lg-icon.color-orange1 {
          color: #73bf44 !important;
        }
        .tc-building-sustainability-testimonials .clients-card .text {
          color: #1a1a1a;
        }
        .tc-building-sustainability-testimonials .swiper-button-prev,
        .tc-building-sustainability-testimonials .swiper-button-next {
          color: #73bf44;
        }
        .tc-building-sustainability-testimonials .swiper-button-prev:hover,
        .tc-building-sustainability-testimonials .swiper-button-next:hover {
          color: #73bf44;
        }
        .tc-building-sustainability-testimonials .swiper-pagination-bullet-active {
          background: #73bf44;
        }
        @media (max-width: 991px) {
          .tc-building-sustainability-testimonials {
            padding: 80px 0;
          }
        }
        @media (max-width: 767px) {
          .tc-building-sustainability-testimonials {
            padding: 60px 0;
          }
        }
      `}} />
      <section className="tc-testimonials-style1 tc-building-sustainability-testimonials">
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
          <div className="row">
            <div className="col-lg-4 wow zoomIn slow" data-wow-delay="0.2s">
              <h6 className="fsz-18 text-uppercase lh-4">
                what clients say <br /> about us
              </h6>
              <div className="lg-icon color-orange1">
                <i className="la la-quote-right"></i>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tc-clients-style1">
                <div className="clients-slider1">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="clients-card">
                        <div className="text fsz-45 fw-600 lh-2 js-splittext-lines">
                          "The sustainable building design exceeded our expectations. The energy-efficient systems and eco-friendly materials have significantly reduced our operational costs while creating a healthier environment."
                        </div>
                        <div className="author">
                          <div className="au-img">
                            <img
                              src="/innerpages/assets/img/team/team1.jpg"
                              alt=""
                              className="img-cover"
                            />
                          </div>
                          <div className="au-inf">
                            <h6 className="text-capitalize mb-2 fsz-16 fw-bold">
                              David Thompson
                            </h6>
                            <p className="text-capitalize fsz-14 color-666">
                              Green Building Developer
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="clients-card">
                        <div className="text fsz-45 fw-600 lh-2 js-splittext-lines">
                          "Outstanding commitment to sustainability. The building incorporates innovative green technologies and biophilic design elements that create a truly exceptional and environmentally responsible space."
                        </div>
                        <div className="author">
                          <div className="au-img">
                            <img
                              src="/innerpages/assets/img/team/team2.jpg"
                              alt=""
                              className="img-cover"
                            />
                          </div>
                          <div className="au-inf">
                            <h6 className="text-capitalize mb-2 fsz-16 fw-bold">
                              Maria Garcia
                            </h6>
                            <p className="text-capitalize fsz-14 color-666">
                              Sustainable Architecture Consultant
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="clients-card">
                        <div className="text fsz-45 fw-600 lh-2 js-splittext-lines">
                          "The sustainable building practices implemented in our project have not only reduced our carbon footprint but also created a more comfortable and productive workspace for our team."
                        </div>
                        <div className="author">
                          <div className="au-img">
                            <img
                              src="/innerpages/assets/img/team/team3.jpg"
                              alt=""
                              className="img-cover"
                            />
                          </div>
                          <div className="au-inf">
                            <h6 className="text-capitalize mb-2 fsz-16 fw-bold">
                              Christopher Park
                            </h6>
                            <p className="text-capitalize fsz-14 color-666">
                              Corporate Sustainability Director
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider-controls">
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-next"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="marq-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <a href="#"> Creative </a>
            </div>
            <div className="swiper-slide">
              <a href="#"> Flexible </a>
            </div>
            <div className="swiper-slide">
              <a href="#"> Dedicated </a>
            </div>
          </div>
        </div>
        <img src="/innerpages/assets/img/c_line3.png" alt="" className="c-line" />
      </section>
    </>
  );
}

export default Testimonials;

