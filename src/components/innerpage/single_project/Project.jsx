import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';

function Project() {
  const location = useLocation();
  const projectFromState = location.state?.project;
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Default values if no project data is passed
  const defaultProject = {
    title: "Gordon's Villa",
    sub1: "Architecture",
    sub2: "Landscape",
    desc: "This area will is short description of project, you can select to show or hide it",
    img: "/innerpages/assets/img/s_project/m1.jpg",
    client: "",
    location: "Ecoriver Residence, Boston MA 02108, US",
    area: ""
  };

  // Use project from state or defaultProject as fallback
  // This ensures the full JSON object (including images array) is available
  const finalProjectData = projectFromState || defaultProject;

  const openImageModal = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (finalProjectData.images && currentImageIndex < finalProjectData.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
      setSelectedImage(finalProjectData.images[currentImageIndex + 1]);
    }
  };

  const prevImage = () => {
    if (finalProjectData.images && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
      setSelectedImage(finalProjectData.images[currentImageIndex - 1]);
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage && finalProjectData.images) {
        if (e.key === 'Escape') {
          setSelectedImage(null);
        } else if (e.key === 'ArrowRight' && currentImageIndex < finalProjectData.images.length - 1) {
          const nextIndex = currentImageIndex + 1;
          setCurrentImageIndex(nextIndex);
          setSelectedImage(finalProjectData.images[nextIndex]);
        } else if (e.key === 'ArrowLeft' && currentImageIndex > 0) {
          const prevIndex = currentImageIndex - 1;
          setCurrentImageIndex(prevIndex);
          setSelectedImage(finalProjectData.images[prevIndex]);
        }
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage, currentImageIndex, finalProjectData.images]);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .tc-project-style1 {
          position: relative;
          overflow: hidden;
        }
        .tc-project-style1::before {
          content: '';
          position: absolute;
          top: 10%;
          right: -10%;
          width: clamp(300px, 40vw, 600px);
          height: clamp(300px, 40vw, 600px);
          background: rgba(115, 191, 68, 0.15);
          filter: blur(80px);
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }
        .tc-project-style1::after {
          content: '';
          position: absolute;
          bottom: 10%;
          left: -5%;
          width: clamp(250px, 35vw, 500px);
          height: clamp(250px, 35vw, 500px);
          background: rgba(115, 191, 68, 0.12);
          filter: blur(80px);
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }
        .tc-project-style1 > * {
          position: relative;
          z-index: 1;
        }
        .tc-project-style1 .main-info .tags a {
          display: inline-block;
          padding: 8px 20px;
          background: rgba(115, 191, 68, 0.1);
          color: #73bf44;
          border: 1px solid rgba(115, 191, 68, 0.2);
          border-radius: 30px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-right: 10px;
          margin-bottom: 10px;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .tc-project-style1 .main-info .tags a:hover {
          background: #73bf44;
          color: #fff;
          border-color: #73bf44;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(115, 191, 68, 0.3);
        }
        .tc-project-style1 .main-info .title {
          color: #1a1a1a;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .tc-project-style1 .main-info .text {
          color: #666;
          line-height: 1.8;
        }
        .tc-project-style1 .sub-title {
          color: #1a1a1a;
          font-weight: 700;
          position: relative;
        }
        .tc-project-style1 .sub-title::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 0;
          width: 60px;
          height: 3px;
          background: #73bf44;
          border-radius: 2px;
        }
        .tc-project-style1 .description .text {
          color: #666;
          line-height: 1.8;
        }
        .tc-project-style1 .description {
          position: relative;
        }
        .tc-project-style1 .description::before {
          content: '';
          position: absolute;
          top: -50px;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          height: 200px;
          background: rgba(115, 191, 68, 0.08);
          filter: blur(60px);
          border-radius: 50%;
          pointer-events: none;
        }
        .tc-project-style1 .services {
          position: relative;
        }
        .tc-project-style1 .services::after {
          content: '';
          position: absolute;
          top: 50%;
          right: -100px;
          width: 300px;
          height: 300px;
          background: rgba(115, 191, 68, 0.1);
          filter: blur(70px);
          border-radius: 50%;
          pointer-events: none;
        }
        .tc-project-style1 .services .item {
          padding: 30px;
          background: #f8f9fa;
          border-radius: 10px;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }
        .tc-project-style1 .services .item:hover {
          background: #fff;
          border-color: rgba(115, 191, 68, 0.2);
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transform: translateY(-5px);
        }
        .tc-project-style1 .services .item small {
          color: #73bf44;
          font-weight: 600;
          letter-spacing: 1px;
        }
        .tc-project-style1 .services .item .links {
          color: #1a1a1a;
        }
        .tc-project-style1 .line {
          filter: brightness(0) saturate(100%) invert(58%) sepia(95%) saturate(400%) hue-rotate(65deg) brightness(95%) contrast(85%);
          opacity: 1;
        }
        .tc-project-style1 .imgs .img {
          border-radius: 10px;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }
        .tc-project-style1 .imgs .img:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(115, 191, 68, 0.2);
        }
        .tc-project-style1 .challenge .dots-list li {
          color: #666;
          line-height: 1.8;
        }
        .tc-project-style1 .challenge .dots-list .icon {
          color: #73bf44;
          font-weight: bold;
        }
        .tc-project-style1 .challenge {
          position: relative;
        }
        .tc-project-style1 .challenge::before {
          content: '';
          position: absolute;
          top: 20%;
          left: -150px;
          width: 400px;
          height: 400px;
          background: rgba(115, 191, 68, 0.08);
          filter: blur(80px);
          border-radius: 50%;
          pointer-events: none;
        }
        .tc-project-style1 .main-slider-img {
          position: relative;
        }
        .tc-project-style1 .main-slider-img .swiper-button-prev,
        .tc-project-style1 .main-slider-img .swiper-button-next {
          color: #73bf44;
          background: rgba(115, 191, 68, 0.1);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .tc-project-style1 .main-slider-img .swiper-button-prev:hover,
        .tc-project-style1 .main-slider-img .swiper-button-next:hover {
          background: #73bf44;
          color: #fff;
        }
        .tc-project-style1 .main-slider-img .swiper-pagination-bullet {
          background: rgba(115, 191, 68, 0.3);
        }
        .tc-project-style1 .main-slider-img .swiper-pagination-bullet-active {
          background: #73bf44;
        }
        .tc-project-style1 .imgs .img {
          cursor: pointer;
          position: relative;
        }
        .tc-project-style1 .imgs .img:hover {
          opacity: 0.9;
        }
        .tc-project-style1 .imgs .img:hover::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(115, 191, 68, 0.1);
          pointer-events: none;
        }
        .tc-project-style1 .main-slider-img .img {
          cursor: pointer;
        }
        .image-modal {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          background: rgba(0, 0, 0, 0.95) !important;
          z-index: 99999 !important;
          display: flex !important;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .image-modal-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .image-modal-content img {
          max-width: 100%;
          max-height: 90vh;
          object-fit: contain;
          border-radius: 8px;
        }
        .image-modal-close {
          position: absolute;
          top: 30px;
          right: 30px;
          background: rgba(0, 0, 0, 0.7);
          color: #fff;
          border: 2px solid rgba(255, 255, 255, 0.2);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          font-size: 28px;
          font-weight: 300;
          line-height: 1;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          transition: all 0.3s ease;
          padding: 0;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
          font-family: Arial, sans-serif;
        }
        .image-modal-close::before {
          content: '×';
          display: block;
          line-height: 1;
        }
        .image-modal-close:hover {
          background: #73bf44;
          border-color: #73bf44;
          transform: rotate(90deg) scale(1.1);
          box-shadow: 0 6px 20px rgba(115, 191, 68, 0.5);
        }
        .image-modal-close:active {
          transform: rotate(90deg) scale(0.95);
        }
        @media (max-width: 767px) {
          .image-modal-close {
            top: 15px;
            right: 15px;
            width: 40px;
            height: 40px;
            font-size: 24px;
          }
        }
        .image-modal-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.5);
          color: #fff;
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          font-size: 24px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          transition: all 0.3s ease;
        }
        .image-modal-nav:hover {
          background: rgba(115, 191, 68, 0.8);
        }
        .image-modal-nav.prev {
          left: 20px;
        }
        .image-modal-nav.next {
          right: 20px;
        }
        .image-modal-nav:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        .image-modal-counter {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.5);
          color: #fff;
          padding: 10px 20px;
          border-radius: 30px;
          font-size: 14px;
        }
        @media (max-width: 767px) {
          .tc-project-style1 .sub-title {
            font-size: 32px !important;
          }
          .tc-project-style1 .description .text {
            font-size: 18px !important;
            line-height: 1.6;
          }
          .tc-project-style1 .services .item small {
            font-size: 11px !important;
          }
          .tc-project-style1 .services .item .links {
            font-size: 16px !important;
          }
          .tc-project-style1 .challenge .text {
            font-size: 18px !important;
            line-height: 1.6;
          }
          .tc-project-style1 .challenge .dots-list {
            font-size: 16px !important;
          }
        }
        @media (max-width: 575px) {
          .tc-project-style1 .sub-title {
            font-size: 28px !important;
          }
          .tc-project-style1 .description .text {
            font-size: 16px !important;
            line-height: 1.5;
          }
          .tc-project-style1 .services .item {
            padding: 20px;
            margin-top: 0 !important;
          }
          .tc-project-style1 .services .item small {
            font-size: 10px !important;
            margin-bottom: 15px;
          }
          .tc-project-style1 .services .item .links {
            font-size: 14px !important;
          }
          .tc-project-style1 .services .items .row > div {
            margin-bottom: 15px;
            padding: 0 10px;
          }
          .tc-project-style1 .challenge .text {
            font-size: 16px !important;
            line-height: 1.5;
          }
          .tc-project-style1 .challenge .dots-list {
            font-size: 14px !important;
          }
          .tc-project-style1 .challenge .dots-list li {
            line-height: 1.6;
          }
        }
      `}} />
      <section className="tc-project-style1">
      <div className="description">
        <div className="container">
          <h3
            className="sub-title fsz-45 mb-60 wow fadeInUp slow"
            data-wow-delay="0.2s"
          >
            Description
          </h3>
          <div
            className="text fsz-24 mb-20 fw-500 wow fadeInUp slow"
            data-wow-delay="0.2s"
          >
            {finalProjectData.desc}
          </div>
        </div>
        <div className="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="items">
                  <div className="row">
                    {finalProjectData.client && (
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4 mb-md-3 mb-sm-3">
                      <div
                        className="item mt-100 mt-md-60 mt-sm-40 mt-3 wow fadeInUp slow"
                        data-wow-delay="0.2s"
                      >
                        <small className="d-block color-666 text-uppercase fsz-12 mb-30 mb-md-20 mb-sm-15 mb-2">
                            client
                        </small>
                        <div className="links fsz-18 fw-500">
                            {finalProjectData.client}
                          </div>
                        </div>
                      </div>
                    )}
                    {finalProjectData.location && (
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4 mb-md-3 mb-sm-3">
                      <div
                        className="item mt-100 mt-md-60 mt-sm-40 mt-3 wow fadeInUp slow"
                        data-wow-delay="0.4s"
                      >
                        <small className="d-block color-666 text-uppercase fsz-12 mb-30 mb-md-20 mb-sm-15 mb-2">
                          location
                        </small>
                        <div className="links fsz-18 fw-500">
                            {finalProjectData.location}
                          </div>
                        </div>
                      </div>
                    )}
                    {finalProjectData.area && (
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4 mb-md-3 mb-sm-3">
                      <div
                        className="item mt-100 mt-md-60 mt-sm-40 mt-3 wow fadeInUp slow"
                        data-wow-delay="0.2s"
                      >
                        <small className="d-block color-666 text-uppercase fsz-12 mb-30 mb-md-20 mb-sm-15 mb-2">
                            area
                        </small>
                        <div className="links fsz-18 fw-500">
                            {finalProjectData.area}
                          </div>
                        </div>
                      </div>
                    )}
                    {finalProjectData.sub1 && finalProjectData.sub2 && (
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4 mb-md-3 mb-sm-3">
                      <div
                        className="item mt-100 mt-md-60 mt-sm-40 mt-3 wow fadeInUp slow"
                        data-wow-delay="0.4s"
                      >
                        <small className="d-block color-666 text-uppercase fsz-12 mb-30 mb-md-20 mb-sm-15 mb-2">
                            category
                        </small>
                        <div className="links fsz-18 fw-500">
                            {finalProjectData.sub1}, {finalProjectData.sub2}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="/innerpages/assets/img/c_line.png"
            alt=""
            className="line wow"
          />
        </div>
        {finalProjectData.images && finalProjectData.images.length > 0 && (
        <div className="imgs mt-120">
          <div className="container">
            <div className="row">
                {finalProjectData.images.map((image, index) => (
                  <div key={index} className="col-lg-4 col-md-6 mb-4">
                    <div
                      className="img th-400 radius-7 overflow-hidden mt-30 wow zoomIn slow"
                      data-wow-delay={`${(index + 1) * 0.1}s`}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        openImageModal(image, index);
                      }}
                      style={{ cursor: 'pointer' }}
                >
                  <img
                        src={image}
                        alt={finalProjectData.title}
                    className="img-cover"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          openImageModal(image, index);
                        }}
                  />
                </div>
              </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="challenge pb-120">
        <div className="container">
          <h3
            className="sub-title fsz-45 mb-60 wow fadeInUp slow"
            data-wow-delay="0.2s"
          >
            Challenge
          </h3>
          <div
            className="text fsz-24 mb-20 fw-500 wow fadeInUp slow"
            data-wow-delay="0.2s"
          >
            Create an unconventional yet user-friendly website – innovative,
            with a clean and simple design that communicates brand values and
            showcases multi-media content. Site that spreads the message:
            &quot;Islamic stories your child will love&quot;
          </div>
          <ul
            className="dots-list fsz-18 color-666 wow fadeInUp slow"
            data-wow-delay="0.2s"
          >
            <li className="d-flex my-4">
              <span className="icon me-3"> • </span> Develop easy-to-find and
              easy-to-navigate mobile friendly website
            </li>
            <li className="d-flex my-4">
              <span className="icon me-3"> • </span> Showcase each type of
              content: interactive books, animated stories and picture books,
              audio stories. <br /> Create an experience people want to share
              with others
            </li>
            <li className="d-flex my-4">
              <span className="icon me-3"> • </span> Persuade to download app
              and subscribe
            </li>
          </ul>
          <h3
            className="sub-title fsz-45 mb-60 mt-150 wow fadeInUp slow"
            data-wow-delay="0.2s"
          >
            Solution
          </h3>
          <div
            className="text fsz-24 mb-20 fw-500 wow fadeInUp slow"
            data-wow-delay="0.2s"
          >
            Our approach was to present the site as a visual editorial platform
            with quarterly features based on events and occasions the brand was
            focused on. Each quarterly focus would be marked by the hero and
            custom tags that filter content.
          </div>
        </div>
      </div>
      {finalProjectData.images && finalProjectData.images.length > 0 && (
      <div className="main-slider-img wow fadeInUp slow" data-wow-delay="0.2s">
        <div className="swiper-wrapper">
            {finalProjectData.images.map((image, index) => (
              <div key={index} className="swiper-slide">
                <div 
                  className="img" 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    openImageModal(image, index);
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={image}
                    alt={finalProjectData.title}
                className="img-cover"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      openImageModal(image, index);
                    }}
              />
            </div>
          </div>
            ))}
        </div>
        <div className="arrows">
          <div className="swiper-button-prev"></div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
      )}
    </section>
    {selectedImage && typeof document !== 'undefined' && createPortal(
      <div className="image-modal" onClick={closeImageModal}>
        <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="image-modal-close" onClick={closeImageModal} aria-label="Close">
          </button>
          {finalProjectData.images && currentImageIndex > 0 && (
            <button 
              className="image-modal-nav prev" 
              onClick={prevImage}
              aria-label="Previous image"
            >
              ‹
            </button>
          )}
          <img src={selectedImage} alt={finalProjectData.title} />
          {finalProjectData.images && currentImageIndex < finalProjectData.images.length - 1 && (
            <button 
              className="image-modal-nav next" 
              onClick={nextImage}
              aria-label="Next image"
            >
              ›
            </button>
          )}
          {finalProjectData.images && (
            <div className="image-modal-counter">
              {currentImageIndex + 1} / {finalProjectData.images.length}
            </div>
          )}
        </div>
      </div>,
      document.body
    )}
    </>
  );
}

export default Project;
