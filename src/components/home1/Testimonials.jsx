import React, { useState, useEffect } from 'react';
import testimonialsData from '../../data/home1/testimonials.json';

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .tc-testimonials-style1 {
          position: relative;
          overflow: hidden;
          padding: 120px 0 80px;
        }
        .testimonials-bg-shades {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }
        .testimonials-bg-shade {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
        }
        .testimonials-bg-shade-1 {
          top: 10%;
          left: 5%;
          width: clamp(200px, 30vw, 400px);
          height: clamp(150px, 25vh, 300px);
          background: rgba(115, 191, 68, 0.2);
        }
        .testimonials-bg-shade-2 {
          bottom: 15%;
          right: 8%;
          width: clamp(200px, 30vw, 400px);
          height: clamp(150px, 25vh, 300px);
          background: rgba(115, 191, 68, 0.2);
        }
        .testimonials-content-wrapper {
          position: relative;
          z-index: 1;
        }
        .testimonials-header {
          text-align: center;
          margin-bottom: 50px;
        }
        .testimonials-header h2 {
          font-size: 42px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 15px;
          letter-spacing: -1px;
        }
        .testimonials-slider-container {
          position: relative;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 60px;
        }
        .testimonials-card-wrapper {
          position: relative;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(115, 191, 68, 0.2);
          border-radius: 24px;
          padding: 50px 40px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
          min-height: 400px;
          overflow: hidden;
        }
        .testimonial-slide {
          position: absolute;
          inset: 0;
          padding: 50px 40px;
          transition: opacity 0.7s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .testimonial-slide.active {
          opacity: 1;
          z-index: 10;
        }
        .testimonial-slide.inactive {
          opacity: 0;
          z-index: 0;
          pointer-events: none;
        }
        .testimonial-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, #73bf44 0%, #8dd65a 100%);
          border: 4px solid #fff;
          box-shadow: 0 8px 20px rgba(115, 191, 68, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .testimonial-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }
        .testimonial-avatar-icon {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }
        .testimonial-avatar-icon svg {
          width: 40px;
          height: 40px;
          color: #fff;
        }
        .testimonial-stars {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          margin-bottom: 25px;
        }
        .testimonial-star {
          width: 20px;
          height: 20px;
          color: #ffc107;
        }
        .testimonial-text {
          font-size: 18px;
          line-height: 1.8;
          color: #333;
          margin-bottom: 30px;
          font-style: italic;
          max-width: 700px;
        }
        .testimonial-name {
          font-size: 20px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 8px;
        }
        .testimonial-role {
          font-size: 14px;
          color: #666;
        }
        .testimonials-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid #73bf44;
          color: #73bf44;
          border-radius: 50%;
          display: none;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 20;
          box-shadow: 0 4px 15px rgba(115, 191, 68, 0.2);
        }
        .testimonials-nav-btn:hover {
          background: #73bf44;
          color: #fff;
          transform: translateY(-50%) scale(1.1);
        }
        .testimonials-nav-btn.prev {
          left: 0;
        }
        .testimonials-nav-btn.next {
          right: 0;
        }
        @media (min-width: 768px) {
          .testimonials-nav-btn {
            display: flex;
          }
        }
        .testimonials-nav-btn svg {
          width: 20px;
          height: 20px;
        }
        .testimonials-dots {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          z-index: 20;
        }
        .testimonial-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(115, 191, 68, 0.3);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }
        .testimonial-dot.active {
          width: 32px;
          height: 8px;
          border-radius: 4px;
          background: #73bf44;
        }
        .testimonial-dot:hover {
          background: rgba(115, 191, 68, 0.5);
        }
        .tc-testimonials-style1 .c-line {
          filter: hue-rotate(120deg) saturate(1.8) brightness(1.1);
          opacity: 0.8;
        }
        .marq-slider {
          margin-top: 60px;
        }
        .marq-slider .swiper-slide a {
          color: #666;
          text-decoration: none;
          transition: color 0.3s ease;
          font-weight: 500;
        }
        .marq-slider .swiper-slide a:hover {
          color: #73bf44;
        }
        @media (max-width: 991px) {
          .tc-testimonials-style1 {
            padding: 80px 0 60px;
          }
          .testimonials-header h2 {
            font-size: 36px;
          }
          .testimonials-card-wrapper {
            padding: 40px 30px;
            min-height: 350px;
          }
          .testimonial-slide {
            padding: 40px 30px;
          }
          .testimonial-text {
            font-size: 16px;
          }
          .testimonials-nav-btn {
            width: 40px;
            height: 40px;
          }
          .testimonials-slider-container {
            padding: 0 50px;
          }
          .testimonials-nav-btn.prev {
            left: 0;
          }
          .testimonials-nav-btn.next {
            right: 0;
          }
        }
        @media (max-width: 767px) {
          .tc-testimonials-style1 {
            padding: 60px 0 50px;
          }
          .testimonials-header {
            margin-bottom: 40px;
          }
          .testimonials-header h2 {
            font-size: 32px;
            padding: 0 15px;
          }
          .testimonials-card-wrapper {
            padding: 30px 20px 60px 20px;
            min-height: 360px;
            border-radius: 20px;
          }
          .testimonial-slide {
            padding: 30px 20px 50px 20px;
          }
          .testimonial-avatar {
            width: 70px;
            height: 70px;
            margin-bottom: 15px;
          }
          .testimonial-avatar-icon svg {
            width: 35px;
            height: 35px;
          }
          .testimonial-stars {
            margin-bottom: 20px;
          }
          .testimonial-star {
            width: 18px;
            height: 18px;
          }
          .testimonial-text {
            font-size: 15px;
            line-height: 1.7;
            margin-bottom: 25px;
            padding: 0 10px;
          }
          .testimonial-name {
            font-size: 18px;
          }
          .testimonial-role {
            font-size: 13px;
          }
          .testimonials-nav-btn {
            width: 36px;
            height: 36px;
          }
          .testimonials-slider-container {
            padding: 0 50px;
          }
          .testimonials-nav-btn.prev {
            left: 10px;
          }
          .testimonials-nav-btn.next {
            right: 10px;
          }
          .testimonials-dots {
            bottom: 20px;
          }
        }
        @media (max-width: 575px) {
          .tc-testimonials-style1 {
            padding: 50px 0 40px;
          }
          .testimonials-header h2 {
            font-size: 28px;
          }
          .testimonials-card-wrapper {
            padding: 25px 15px 55px 15px;
            min-height: 340px;
            border-radius: 16px;
          }
          .testimonial-slide {
            padding: 25px 15px 45px 15px;
          }
          .testimonial-avatar {
            width: 60px;
            height: 60px;
            margin-bottom: 12px;
          }
          .testimonial-avatar-icon svg {
            width: 30px;
            height: 30px;
          }
          .testimonial-text {
            font-size: 14px;
            margin-bottom: 20px;
          }
          .testimonials-dots {
            bottom: 18px;
          }
          .testimonial-name {
            font-size: 16px;
          }
          .testimonial-role {
            font-size: 12px;
          }
        }
      `}} />
    <section className="tc-testimonials-style1">
        <div className="testimonials-bg-shades">
          <div className="testimonials-bg-shade testimonials-bg-shade-1 d-none d-md-block"></div>
          <div className="testimonials-bg-shade testimonials-bg-shade-2 d-none d-md-block"></div>
            </div>
        <div className="container testimonials-content-wrapper">
          <div className="testimonials-header">
            <h2>CLIENT REVIEW</h2>
          </div>
          <div className="testimonials-slider-container">
            <div className="testimonials-card-wrapper">
              {testimonialsData.map((testimonial, index) => (
                <div
                  key={index}
                  className={`testimonial-slide ${index === currentIndex ? 'active' : 'inactive'}`}
                >
                  <div className="testimonial-avatar">
                    {testimonial.img ? (
                      <img src={testimonial.img} alt={testimonial.name} />
                    ) : (
                      <div className="testimonial-avatar-icon">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="testimonial-star"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="testimonial-text">
                    {testimonial.text}
                  </p>
                  <h3 className="testimonial-name">
                    {testimonial.name}
                  </h3>
                  <p className="testimonial-role">
                    {testimonial.role}
                  </p>
                </div>
              ))}
              <button
                onClick={prevSlide}
                className="testimonials-nav-btn prev"
                aria-label="Previous testimonial"
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="testimonials-nav-btn next"
                aria-label="Next testimonial"
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div className="testimonials-dots">
                {testimonialsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`testimonial-dot ${index === currentIndex ? 'active' : ''}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
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
            <a href="#"> Flexiable </a>
          </div>
          <div className="swiper-slide">
            <a href="#"> Dedicated </a>
          </div>
        </div>
      </div>
      <img src="/home1/assets/img/c_line3.png" alt="" className="c-line" />
    </section>
    </>
  );
}

export default Testimonials;
