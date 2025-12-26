import React, { useState, useEffect, useCallback } from 'react';
import data1 from '../../data/home1/projects/projects1';

const truncateToWords = (text, limit) => {
  if (!text) return "";
  const words = text.split(" ");
  if (words.length <= limit) return text;
  return words.slice(0, limit).join(" ") + "...";
};

function Projects() {
  // Ensure data1 is an array
  const projectsData = Array.isArray(data1) ? data1 : [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [activeTab, setActiveTab] = useState('pills-proj1');

  const nextSlide = useCallback(() => {
    if (isAnimating || projectsData.length === 0) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, projectsData.length]);

  const prevSlide = useCallback(() => {
    if (isAnimating || projectsData.length === 0) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, projectsData.length]);

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex || index < 0 || index >= projectsData.length) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    if (projectsData.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projectsData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [projectsData.length]);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const getSlidePosition = (index) => {
    if (projectsData.length === 0) return "hidden";
    const total = projectsData.length;
    let relativeIndex = (index - currentIndex + total) % total;
    
    // Handle the case where relativeIndex wraps around
    // If relativeIndex is more than half the array, it's actually on the left side
    if (relativeIndex > total / 2) {
      relativeIndex = relativeIndex - total;
    }
    
    // Center card (main/active)
    if (relativeIndex === 0) {
      return "active";
    } 
    // Right side: next-1, next-2
    else if (relativeIndex > 0 && relativeIndex <= 2) {
      return `next-${relativeIndex}`;
    } 
    // Left side: prev-1, prev-2
    else if (relativeIndex < 0 && relativeIndex >= -2) {
      return `prev-${Math.abs(relativeIndex)}`;
    } 
    // Hidden cards
    else {
      return "hidden";
    }
  };

  // Reset index when tab changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  // Don't render if no data
  if (projectsData.length === 0) {
  return (
    <section className="tc-projects-style1">
      <div className="container">
        <div className="title mb-70">
            <h2 className="fsz-45">Featured Projects</h2>
          </div>
          <p>No projects available.</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .projects-circular-slider {
          position: relative;
          min-height: 600px;
          padding: 40px 0;
          
        }
        .projects-circular-slider-container {
          position: relative;
          height: 600px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: visible;
          max-width: 100%;
        }
        .project-slide-card {
          position: absolute;
          top: 50%;
          left: 50%;
          transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          transform-origin: center center;
        }
        .project-slide-card.active {
          opacity: 1 !important;
          transform: translate(-50%, -50%) scale(1) !important;
          z-index: 30;
          cursor: grab;
          filter: brightness(1);
          box-shadow: 0 30px 80px rgba(115, 191, 68, 0.3);
        }
        .project-slide-card.active:active {
          cursor: grabbing;
        }
        .project-slide-card.next-1 {
          opacity: 0.8;
          transform: translate(calc(-50% + 240px), -50%) scale(0.85);
          z-index: 25;
          filter: brightness(0.9);
        }
        .project-slide-card.next-2 {
          opacity: 0.6;
          transform: translate(calc(-50% + 450px), -50%) scale(0.7);
          z-index: 20;
          filter: brightness(0.8);
        }
        .project-slide-card.prev-1 {
          opacity: 0.8;
          transform: translate(calc(-50% - 240px), -50%) scale(0.85);
          z-index: 25;
          filter: brightness(0.9);
        }
        .project-slide-card.prev-2 {
          opacity: 0.6;
          transform: translate(calc(-50% - 450px), -50%) scale(0.7);
          z-index: 20;
          filter: brightness(0.8);
        }
        .project-slide-card.hidden {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.5);
          z-index: 10;
          pointer-events: none;
        }
        .project-slide-card.animating {
          pointer-events: none;
        }
        .project-card-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .project-card-modern {
          background: rgba(26, 26, 26, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(115, 191, 68, 0.2);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          transition: all 0.5s ease;
          display: flex;
          flex-direction: column;
          margin: 0 auto;
        }
        .project-card-modern.active {
          width: 380px;
          height: 520px;
        }
        .project-card-modern.inactive {
          width: 280px;
          height: 360px;
        }
        .project-card-modern:hover {
          box-shadow: 0 25px 70px rgba(115, 191, 68, 0.2);
          border-color: rgba(115, 191, 68, 0.4);
        }
        .project-card-img {
          position: relative;
          height: 240px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .project-card-modern.active .project-card-img {
          height: 300px;
        }
        .project-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s ease;
        }
        .project-card-modern:hover .project-card-img img {
          transform: scale(1.1);
        }
        .project-card-img::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
        }
        .project-card-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          background: #73bf44;
          color: #fff;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          z-index: 2;
        }
        .project-card-content {
          flex: 1;
          padding: 24px;
          display: flex;
          flex-direction: column;
          min-height: 0;
        }
        .project-card-tags {
          display: flex;
          gap: 8px;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }
        .project-card-tags a {
          background: rgba(115, 191, 68, 0.1);
          color: #73bf44;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .project-card-tags a:hover {
          background: #73bf44;
          color: #fff;
        }
        .project-card-title {
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
          line-height: 1.3;
          transition: all 0.3s ease;
        }
        .project-card-modern.inactive .project-card-title {
          font-size: 18px;
        }
        .project-card-title a {
          color: inherit;
          text-decoration: none;
        }
        .project-card-title a:hover {
          color: #73bf44;
        }
        .project-card-desc {
          font-size: 14px;
          color: #ccc;
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: 12px;
        }
        .project-card-modern.active .project-card-desc {
          -webkit-line-clamp: 5;
        }
        .project-card-modern.inactive .project-card-desc {
          font-size: 13px;
          -webkit-line-clamp: 3;
        }
        .project-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 16px;
          margin-top: auto;
          border-top: 1px solid rgba(115, 191, 68, 0.1);
        }
        .project-card-footer.active {
          display: flex;
        }
        .project-card-footer.inactive {
          display: none;
        }
        .project-view-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #73bf44;
          font-weight: 600;
          font-size: 13px;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .project-view-btn:hover {
          color: #5fa836;
        }
        .project-view-btn-icon {
          width: 24px;
          height: 24px;
          background: #73bf44;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .project-view-btn:hover .project-view-btn-icon {
          background: #5fa836;
          transform: translateX(2px);
        }
        .project-view-btn-icon svg {
          width: 12px;
          height: 12px;
          color: #fff;
        }
        .project-nav-buttons {
          position: absolute;
          inset: 0;
          display: none;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          pointer-events: none;
          z-index: 40;
        }
        @media (min-width: 768px) {
          .project-nav-buttons {
            display: flex;
          }
        }
        .project-nav-btn {
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid #73bf44;
          color: #73bf44;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          pointer-events: auto;
          z-index: 50;
        }
        .project-nav-btn:hover {
          background: #73bf44;
          color: #fff;
          transform: scale(1.1);
        }
        .project-nav-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .project-nav-btn svg {
          width: 20px;
          height: 20px;
          color: #73bf44;
          stroke: #73bf44;
        }
        .project-nav-btn:hover svg {
          color: #fff;
          stroke: #fff;
        }
        .project-slider-pagination {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 30px;
          justify-content: center;
        }
        .project-slider-counter {
          font-family: monospace;
          font-size: 13px;
          color: #73bf44;
          font-weight: 600;
        }
        .project-slider-dots {
          display: flex;
          gap: 8px;
        }
        .project-slider-dot {
          height: 4px;
          border-radius: 2px;
          transition: all 0.5s ease;
          cursor: pointer;
        }
        .project-slider-dot.active {
          background: #73bf44;
          width: 32px;
        }
        .project-slider-dot.inactive {
          background: #ccc;
          width: 16px;
        }
        .project-slider-dot.inactive:hover {
          background: #999;
        }
        .project-mobile-nav {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        @media (min-width: 768px) {
          .project-mobile-nav {
            display: none;
          }
        }
        .project-mobile-nav-btn {
          width: 32px;
          height: 32px;
          border: 1px solid #73bf44;
          color: #73bf44;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          background: transparent;
        }
        .project-mobile-nav-btn:hover {
          background: #73bf44;
          color: #fff;
        }
        .project-mobile-nav-btn,
        .project-mobile-nav-btn * {
          color: #73bf44;
        }
        .project-mobile-nav-btn:hover,
        .project-mobile-nav-btn:hover * {
          color: #fff;
        }
        .projects-bg-shades {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }
        .projects-bg-shade {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
        }
        .projects-bg-shade-1 {
          top: 10%;
          left: 5%;
          width: clamp(200px, 30vw, 400px);
          height: clamp(150px, 25vh, 300px);
          background: rgba(115, 191, 68, 0.2);
        }
        .projects-bg-shade-2 {
          bottom: 15%;
          right: 8%;
          width: clamp(200px, 30vw, 400px);
          height: clamp(150px, 25vh, 300px);
          background: rgba(115, 191, 68, 0.2);
        }
        .projects-slider-wrapper {
          position: relative;
          z-index: 1;
        }
        @media (max-width: 991px) {
          .tc-projects-style1 .nav-pills {
            justify-content: center;
            display: flex;
            flex-wrap: wrap;
          }
          .tc-projects-style1 .tabs-links .row .col-lg-3 {
            text-align: center;
            display: flex;
            justify-content: center;
          }
          .projects-circular-slider {
            min-height: 550px;
            padding: 30px 0;
          }
          .projects-circular-slider-container {
            height: 550px;
            overflow: visible;
          }
          .project-card-modern.active {
            width: 340px;
            height: 480px;
          }
          .project-card-modern.inactive {
            width: 250px;
            height: 340px;
          }
          .project-slide-card.next-1 {
            transform: translate(calc(-50% + 210px), -50%) scale(0.82);
          }
          .project-slide-card.next-2 {
            transform: translate(calc(-50% + 400px), -50%) scale(0.68);
          }
          .project-slide-card.prev-1 {
            transform: translate(calc(-50% - 210px), -50%) scale(0.82);
          }
          .project-slide-card.prev-2 {
            transform: translate(calc(-50% - 400px), -50%) scale(0.68);
          }
        }
        @media (max-width: 767px) {
          .projects-circular-slider {
            min-height: 500px;
            padding: 20px 0;
          }
          .projects-circular-slider-container {
            height: 500px;
            overflow: hidden;
          }
          .project-card-modern.active {
            width: 300px;
            height: 450px;
          }
          .project-card-modern.inactive {
            width: 220px;
            height: 300px;
          }
          .project-card-img {
            height: 200px;
          }
          .project-card-modern.active .project-card-img {
            height: 250px;
          }
          .project-card-content {
            padding: 18px;
          }
          .project-card-title {
            font-size: 19px;
            margin-bottom: 10px;
          }
          .project-card-modern.inactive .project-card-title {
            font-size: 15px;
          }
          .project-card-desc {
            font-size: 13px;
          }
          .project-card-modern.inactive .project-card-desc {
            font-size: 12px;
          }
          .project-slide-card.next-2,
          .project-slide-card.prev-2 {
            opacity: 0.2;
            pointer-events: none;
          }
          .project-slide-card.next-1 {
            transform: translate(calc(-50% + 180px), -50%) scale(0.8);
            opacity: 0.6;
          }
          .project-slide-card.prev-1 {
            transform: translate(calc(-50% - 180px), -50%) scale(0.8);
            opacity: 0.6;
          }
          .project-slider-pagination {
            margin-top: 20px;
            gap: 8px;
          }
          .project-slider-counter {
            font-size: 12px;
          }
          .project-slider-dot {
            height: 3px;
          }
          .project-slider-dot.active {
            width: 24px;
          }
          .project-slider-dot.inactive {
            width: 12px;
          }
        }
        @media (max-width: 575px) {
          .projects-circular-slider {
            min-height: 480px;
            padding: 15px 0;
          }
          .projects-circular-slider-container {
            height: 480px;
            overflow: hidden;
            width: 100%;
            max-width: 100vw;
            padding: 0 10px;
          }
          .project-card-modern.active {
            width: calc(100vw - 40px);
            max-width: 320px;
            height: 420px;
          }
          .project-card-modern.inactive {
            width: 180px;
            height: 260px;
          }
          .project-card-img {
            height: 180px;
          }
          .project-card-modern.active .project-card-img {
            height: 230px;
          }
          .project-card-content {
            padding: 16px;
          }
          .project-card-title {
            font-size: 17px;
            margin-bottom: 8px;
          }
          .project-card-modern.inactive .project-card-title {
            font-size: 14px;
          }
          .project-card-desc {
            font-size: 12px;
            line-height: 1.5;
          }
          .project-card-modern.inactive .project-card-desc {
            font-size: 11px;
          }
          .project-card-tags a {
            padding: 3px 10px;
            font-size: 10px;
          }
          .project-view-btn {
            font-size: 12px;
          }
          .project-view-btn-icon {
            width: 20px;
            height: 20px;
          }
          .project-view-btn-icon svg {
            width: 10px;
            height: 10px;
          }
          .project-slide-card.next-2,
          .project-slide-card.prev-2 {
            opacity: 0;
            pointer-events: none;
            display: none;
          }
          .project-slide-card.next-1 {
            transform: translate(calc(-50% + 120px), -50%) scale(0.7);
            opacity: 0.4;
          }
          .project-slide-card.prev-1 {
            transform: translate(calc(-50% - 120px), -50%) scale(0.7);
            opacity: 0.4;
          }
          .project-slider-pagination {
            margin-top: 15px;
            gap: 6px;
            padding: 0 10px;
          }
          .project-slider-counter {
            font-size: 11px;
          }
          .project-slider-dot {
            height: 3px;
          }
          .project-slider-dot.active {
            width: 20px;
          }
          .project-slider-dot.inactive {
            width: 10px;
          }
          .project-nav-buttons {
            padding: 0 10px;
          }
          .project-nav-btn {
            width: 40px;
            height: 40px;
          }
          .project-nav-btn svg {
            width: 16px;
            height: 16px;
          }
        }
        @media (max-width: 430px) {
          .projects-circular-slider {
            min-height: 460px;
            padding: 10px 0;
          }
          .projects-circular-slider-container {
            height: 460px;
            padding: 0 8px;
            overflow: hidden;
            max-width: 100vw;
          }
          .project-card-modern.active {
            width: calc(100vw - 30px);
            max-width: 300px;
            height: 400px;
          }
          .project-card-modern.inactive {
            width: 160px;
            height: 240px;
          }
          .project-card-modern.active .project-card-img {
            height: 220px;
          }
          .project-card-img {
            height: 160px;
          }
          .project-card-content {
            padding: 14px;
          }
          .project-card-title {
            font-size: 16px;
          }
          .project-card-desc {
            font-size: 11px;
          }
          .project-slide-card.next-1 {
            transform: translate(calc(-50% + 100px), -50%) scale(0.65);
            opacity: 0.3;
          }
          .project-slide-card.prev-1 {
            transform: translate(calc(-50% - 100px), -50%) scale(0.65);
            opacity: 0.3;
          }
        }
        @media (max-width: 400px) {
          .projects-circular-slider {
            min-height: 440px;
            padding: 8px 0;
          }
          .projects-circular-slider-container {
            height: 440px;
            padding: 0 5px;
          }
          .project-card-modern.active {
            width: calc(100vw - 20px);
            max-width: 280px;
            height: 380px;
          }
          .project-card-modern.inactive {
            width: 150px;
            height: 220px;
          }
          .project-card-modern.active .project-card-img {
            height: 200px;
          }
          .project-card-img {
            height: 150px;
          }
          .project-card-content {
            padding: 12px;
          }
          .project-card-title {
            font-size: 15px;
          }
          .project-card-desc {
            font-size: 10px;
            -webkit-line-clamp: 3;
          }
          .project-slide-card.next-1 {
            transform: translate(calc(-50% + 90px), -50%) scale(0.6);
            opacity: 0.25;
          }
          .project-slide-card.prev-1 {
            transform: translate(calc(-50% - 90px), -50%) scale(0.6);
            opacity: 0.25;
          }
          .project-slider-pagination {
            margin-top: 12px;
            gap: 4px;
            padding: 0 5px;
          }
        }
        .tc-projects-style1 {
          position: relative;
          overflow: hidden;
          background: #0f0f0f;
          padding: 120px 0;
          border-radius: 40px 40px 0 0;
        }
        .tc-projects-style1 .title h2 {
          color: #fff !important;
        }
        .tc-projects-style1 .title {
          color: #fff !important;
        }
        .tc-projects-style1 .nav-pills .nav-link {
          color: #fff !important;
        }
        .tc-projects-style1 .nav-pills button.nav-link {
          color: #fff !important;
        }
        .tc-projects-style1 button.nav-link {
          color: #fff !important;
        }
        .projects-tabs-btn {
          color: #fff !important;
          transition: all 0.3s ease;
        }
        .tc-projects-style1 button:not(.active):not(:hover) {
          color: #fff !important;
        }
        .projects-tabs-btn.active,
        .projects-tabs-btn:hover,
        .tc-projects-style1 .nav-pills .nav-link.active,
        .tc-projects-style1 .nav-pills button.nav-link.active,
        .tc-projects-style1 button.nav-link.active,
        .tc-projects-style1 .nav-pills .nav-link:hover,
        .tc-projects-style1 .nav-pills button.nav-link:hover,
        .tc-projects-style1 button.nav-link:hover {
          color: #73bf44 !important;
        }
        .projects-see-all-btn {
          color: #73bf44 !important;
          border-color: #73bf44 !important;
          transition: all 0.3s ease;
        }
        .projects-see-all-btn span {
          color: #73bf44 !important;
        }
        .projects-see-all-btn i,
        .projects-see-all-btn .ti-arrow-top-right {
          color: #73bf44 !important;
        }
        .projects-see-all-btn:hover {
          background-color: #73bf44 !important;
          border-color: #73bf44 !important;
          color: #fff !important;
        }
        .projects-see-all-btn:hover span,
        .projects-see-all-btn:hover i {
          color: #fff !important;
        }
        .project-slider-counter {
          color: #73bf44;
        }
        .tc-projects-style1 .tabs-links {
          color: #fff;
        }
        .tc-projects-style1 .tabs-links * {
          color: #fff;
        }
      `}} />
    <section className="tc-projects-style1" >
      <div className="container" >
        <div className="title mb-70" style={{ textAlign: 'center', }}>
          <h2 className="fsz-40"> Featured Projects </h2>
        </div>
        <div className="tabs-links mb-50" style={{ textAlign: 'center',  }}>
          <div className="row align-items-center" style={{ justifyContent: 'center', display: 'flex', flexWrap: 'wrap', }}>
            <div className="col-lg-9" style={{ textAlign: 'center',  flexWrap: 'wrap'}}>
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist" style={{  width: `110%` }}>
                <li className="nav-item" role="presentation" style={{ margin: '0 10px' }}>
                  <button
                      className={`nav-link projects-tabs-btn ${activeTab === 'pills-proj1' ? 'active' : ''}`}
                    id="pills-proj1-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-proj1"
                    type="button"
                      onClick={() => setActiveTab('pills-proj1')}
                  >
                    Featured
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                      className={`nav-link projects-tabs-btn ${activeTab === 'pills-proj2' ? 'active' : ''}`}
                    id="pills-proj2-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-proj2"
                    type="button"
                      onClick={() => setActiveTab('pills-proj2')}
                  >
                    Architecture
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                      className="nav-link projects-tabs-btn"
                    id="pills-proj3-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-proj1"
                    type="button"
                      onClick={() => setActiveTab('pills-proj1')}
                  >
                    Interior
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                      className="nav-link projects-tabs-btn"
                    id="pills-proj4-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-proj2"
                    type="button"
                      onClick={() => setActiveTab('pills-proj2')}
                  >
                    Landscape
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                      className="nav-link projects-tabs-btn"
                    id="pills-proj5-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-proj1"
                    type="button"
                      onClick={() => setActiveTab('pills-proj1')}
                  >
                    Furniture
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 mt-4 mt-lg-0 text-lg-end">
              <a
                href="#"
                  className="butn border rounded-pill projects-see-all-btn"
              >
                <span>
                  See All Projects
                  <i className="small ms-1 ti-arrow-top-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="projects">
          <div className="tab-content" id="pills-tabContent">
            <div
                className={`tab-pane fade ${activeTab === 'pills-proj1' ? 'show active' : ''}`}
              id="pills-proj1"
              role="tabpanel"
              aria-labelledby="pills-proj1-tab"
            >
                <div className="projects-slider-wrapper">
                  <div className="projects-bg-shades">
                    <div className="projects-bg-shade projects-bg-shade-1 d-none d-md-block"></div>
                    <div className="projects-bg-shade projects-bg-shade-2 d-none d-md-block"></div>
                  </div>
                  <div className="projects-circular-slider">
                    <div 
                      className="projects-circular-slider-container"
                      onTouchStart={handleTouchStart}
                      onTouchEnd={handleTouchEnd}
                    >
                      {projectsData.map((item, index) => {
                        const position = getSlidePosition(index);
                        const isActive = position === "active";
                        
                        return (
                          <div
                            key={index}
                            style={{ backgroundColor: 'transparent', borderRadius: '240px' }}
                            className={`project-slide-card ${position} ${isAnimating ? 'animating' : ''}`}
                            onClick={() => {
                              if (position.startsWith("next")) {
                                const nextCount = parseInt(position.split("-")[1]) || 1;
                                const targetIndex = (currentIndex + nextCount) % projectsData.length;
                                goToSlide(targetIndex);
                              }
                              if (position.startsWith("prev")) {
                                const prevCount = parseInt(position.split("-")[1]) || 1;
                                const targetIndex = (currentIndex - prevCount + projectsData.length) % projectsData.length;
                                goToSlide(targetIndex);
                              }
                            }}
                          >
                            <div className="project-card-wrapper" >
                              <div className={`project-card-modern ${isActive ? 'active' : 'inactive'}`}>
                                <div className="project-card-img">
                                  <img src={item.img} alt={item.title} />
                                  <div className="project-card-badge">Project</div>
                                </div>
                                <div className="project-card-content">
                                  <div className="project-card-tags">
                                    <a href="#">{item.sub1}</a>
                                    <a href="#">{item.sub2}</a>
                                  </div>
                                  <h3 className="project-card-title">
                                    <a href="#">{item.title}</a>
                                  </h3>
                                  <div className="project-card-desc">
                                    {item.desc}
                                  </div>
                                  {isActive && (
                                    <div className="project-card-footer active">
                                      <a href={item.img} className="project-view-btn" data-fancybox="proj">
                                        <span>See Detail</span>
                                        <div className="project-view-btn-icon">
                                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                          </svg>
                                        </div>
                                      </a>
                                      <div className="project-mobile-nav">
                                        <button 
                                          className="project-mobile-nav-btn"
                                          onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                                        >
                                          ←
                                        </button>
                                        <button 
                                          className="project-mobile-nav-btn"
                                          onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                                        >
                                          →
                                        </button>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      <div className="project-nav-buttons">
                        <button 
                          className="project-nav-btn"
                          onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                          disabled={isAnimating}
                          aria-label="Previous slide"
                        >
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button 
                          className="project-nav-btn"
                          onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                          disabled={isAnimating}
                          aria-label="Next slide"
                        >
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                          </div>
                        </div>
                    <div className="project-slider-pagination">
                      <span className="project-slider-counter">
                        {(currentIndex + 1).toString().padStart(2, '0')}
                      </span>
                      <div className="project-slider-dots">
                        {projectsData.map((_, index) => (
                          <button
                            key={index}
                            className={`project-slider-dot ${index === currentIndex ? 'active' : 'inactive'}`}
                            onClick={() => goToSlide(index)}
                          />
                        ))}
                      </div>
                      <span className="project-slider-counter">
                        {data1.length.toString().padStart(2, '0')}
                      </span>
                  </div>
                </div>
              </div>
            </div>
            <div
                className={`tab-pane fade ${activeTab === 'pills-proj2' ? 'show active' : ''}`}
              id="pills-proj2"
              role="tabpanel"
              aria-labelledby="pills-proj2-tab"
            >
                <div className="projects-slider-wrapper">
                  <div className="projects-bg-shades">
                    <div className="projects-bg-shade projects-bg-shade-1 d-none d-md-block"></div>
                    <div className="projects-bg-shade projects-bg-shade-2 d-none d-md-block"></div>
                  </div>
                  <div className="projects-circular-slider">
                    <div 
                      className="projects-circular-slider-container"
                      onTouchStart={handleTouchStart}
                      onTouchEnd={handleTouchEnd}
                    >
                      {projectsData.map((item, index) => {
                        const position = getSlidePosition(index);
                        const isActive = position === "active";
                        
                        return (
                          <div
                            key={index}
                            className={`project-slide-card ${position} ${isAnimating ? 'animating' : ''}`}
                            onClick={() => {
                              if (position.startsWith("next")) {
                                const nextCount = parseInt(position.split("-")[1]) || 1;
                                const targetIndex = (currentIndex + nextCount) % projectsData.length;
                                goToSlide(targetIndex);
                              }
                              if (position.startsWith("prev")) {
                                const prevCount = parseInt(position.split("-")[1]) || 1;
                                const targetIndex = (currentIndex - prevCount + projectsData.length) % projectsData.length;
                                goToSlide(targetIndex);
                              }
                            }}
                          >
                            <div className="project-card-wrapper">
                              <div className={`project-card-modern ${isActive ? 'active' : 'inactive'}`}>
                                <div className="project-card-img">
                                  <img src={item.img} alt={item.title} />
                                  <div className="project-card-badge">Project</div>
                                </div>
                                <div className="project-card-content">
                                  <div className="project-card-tags">
                                    <a href="#">{item.sub1}</a>
                                    <a href="#">{item.sub2}</a>
                                  </div>
                                  <h3 className="project-card-title">
                                    <a href="#">{item.title}</a>
                                  </h3>
                                  <div className="project-card-desc">
                                    {item.desc}
                                  </div>
                                  {isActive && (
                                    <div className="project-card-footer active">
                                      <a href={item.img} className="project-view-btn" data-fancybox="proj">
                                        <span>See Detail</span>
                                        <div className="project-view-btn-icon">
                                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                          </svg>
                                        </div>
                                      </a>
                                      <div className="project-mobile-nav">
                                        <button 
                                          className="project-mobile-nav-btn"
                                          onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                                        >
                                          ←
                                        </button>
                                        <button 
                                          className="project-mobile-nav-btn"
                                          onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                                        >
                                          →
                                        </button>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      <div className="project-nav-buttons">
                        <button 
                          className="project-nav-btn"
                          onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                          disabled={isAnimating}
                          aria-label="Previous slide"
                        >
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button 
                          className="project-nav-btn"
                          onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                          disabled={isAnimating}
                          aria-label="Next slide"
                        >
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                          </div>
                        </div>
                    <div className="project-slider-pagination">
                      <span className="project-slider-counter">
                        {(currentIndex + 1).toString().padStart(2, '0')}
                      </span>
                      <div className="project-slider-dots">
                        {projectsData.map((_, index) => (
                          <button
                            key={index}
                            className={`project-slider-dot ${index === currentIndex ? 'active' : 'inactive'}`}
                            onClick={() => goToSlide(index)}
                          />
                        ))}
                      </div>
                      <span className="project-slider-counter">
                        {data1.length.toString().padStart(2, '0')}
                      </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Projects;
