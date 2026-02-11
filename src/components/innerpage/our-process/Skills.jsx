import React, { useEffect, useRef, useState, useCallback } from 'react';

const skills = [
  { 
    id: 1, 
    name: 'LAYOUT PLANNING', 
    percentage: 99,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 3v18"/>
      </svg>
    ),
    description: 'Comprehensive space planning and layout optimization for maximum efficiency'
  },
  { 
    id: 2, 
    name: '2D DRAFTING', 
    percentage: 96,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    description: 'Precise technical drawings and detailed blueprints with industry standards'
  },
  { 
    id: 3, 
    name: '3D MODELING', 
    percentage: 90,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2"/>
        <path d="M7 2v20M17 2v20M2 7h20M2 17h20"/>
      </svg>
    ),
    description: 'Advanced 3D visualization and digital modeling with cutting-edge technology'
  },
  { 
    id: 4, 
    name: '3D RENDERING', 
    percentage: 85,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <path d="M21 15l-5-5L5 21"/>
      </svg>
    ),
    description: 'Photorealistic renders and visual presentations that bring designs to life'
  }
];

function Skills() {
  const skillRefs = useRef([]);
  const [visibleSkills, setVisibleSkills] = useState(new Set());
  const observerRef = useRef(null);

  const handleIntersection = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = skillRefs.current.findIndex(ref => ref === entry.target);
        if (index !== -1) {
          setVisibleSkills(prev => {
            const newSet = new Set(prev);
            newSet.add(index);
            return newSet;
          });
        }
      }
    });
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '50px'
    };

    observerRef.current = new IntersectionObserver(handleIntersection, observerOptions);

    const currentRefs = skillRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observerRef.current.observe(ref);
    });

    return () => {
      if (observerRef.current) {
        currentRefs.forEach((ref) => {
          if (ref) observerRef.current.unobserve(ref);
        });
      }
    };
  }, [handleIntersection]);

  const getLevel = useCallback((percentage) => {
    if (percentage >= 95) return { level: 'Expert', bars: 5, gradient: 'linear-gradient(135deg, #73bf44 0%, #8dd65a 100%)' };
    if (percentage >= 85) return { level: 'Advanced', bars: 4, gradient: 'linear-gradient(135deg, #8dd65a 0%, #a8e075 100%)' };
    if (percentage >= 75) return { level: 'Proficient', bars: 3, gradient: 'linear-gradient(135deg, #a8e075 0%, #c3ea90 100%)' };
    return { level: 'Competent', bars: 2, gradient: 'linear-gradient(135deg, #c3ea90 0%, #d9f0a5 100%)' };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        /* ===== Section Styles ===== */
        .tc-skills-section {
          position: relative;
          padding: 120px 0;
          background: #fff;
          overflow-x: hidden;
          overflow-y: visible;
          touch-action: pan-y;
          -webkit-overflow-scrolling: touch;
        }

        /* ===== Header Styles ===== */
        .skills-header {
          text-align: center;
          margin-bottom: 80px;
        }
        .skills-title {
          font-size: 64px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 20px;
          text-transform: lowercase;
          letter-spacing: -1px;
        }
        .skills-title .highlight {
          color: #73bf44;
        }
        .skills-description {
          font-size: 18px;
          line-height: 1.8;
          color: #666;
          font-weight: 300;
          max-width: 600px;
          margin: 0 auto;
        }

        /* ===== Content Layout ===== */
        .skills-content {
          position: relative;
          min-height: 800px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: visible;
        }
        .skills-list {
          position: relative;
          width: 100%;
          min-height: 800px;
          overflow: visible;
        }

        /* ===== Skill Item Styles ===== */
        .skill-item {
          position: absolute;
          background: #fff;
          border-radius: 16px;
          padding: 28px;
          width: 300px;
          border: 1px solid #e8e8e8;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          cursor: default;
          overflow: visible;
          opacity: 0;
          transform: translateY(20px) scale(0.95);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform, opacity;
          z-index: 10;
        }
        .skill-item.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .skill-item:hover {
          box-shadow: 0 12px 40px rgba(115, 191, 68, 0.2);
          border-color: rgba(115, 191, 68, 0.3);
        }

        /* Skill Item Positions */
        .skill-item:nth-child(1) {
          top: 5%;
          left: 50%;
          transform: translateX(-50%) translateY(20px) scale(0.95);
        }
        .skill-item:nth-child(1).visible {
          transform: translateX(-50%) translateY(0) scale(1);
        }
        .skill-item:nth-child(1):hover {
          transform: translateX(-50%) translateY(-8px) scale(1.02);
        }

        .skill-item:nth-child(2) {
          top: 50%;
          right: 5%;
          transform: translateY(calc(-50% + 20px)) scale(0.95);
        }
        .skill-item:nth-child(2).visible {
          transform: translateY(-50%) scale(1);
        }
        .skill-item:nth-child(2):hover {
          transform: translateY(calc(-50% - 8px)) scale(1.02);
        }

        .skill-item:nth-child(3) {
          bottom: 5%;
          left: 50%;
          transform: translateX(-50%) translateY(20px) scale(0.95);
        }
        .skill-item:nth-child(3).visible {
          transform: translateX(-50%) translateY(0) scale(1);
        }
        .skill-item:nth-child(3):hover {
          transform: translateX(-50%) translateY(-8px) scale(1.02);
        }

        .skill-item:nth-child(4) {
          top: 50%;
          left: 5%;
          transform: translateY(calc(-50% + 20px)) scale(0.95);
        }
        .skill-item:nth-child(4).visible {
          transform: translateY(-50%) scale(1);
        }
        .skill-item:nth-child(4):hover {
          transform: translateY(calc(-50% - 8px)) scale(1.02);
        }

        /* Top Border Animation */
        .skill-item::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #73bf44 0%, #8dd65a 100%);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .skill-item.visible::after {
          transform: scaleX(1);
        }

        /* ===== Skill Header ===== */
        .skill-header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 16px;
        }
        .skill-icon-wrapper {
          width: 56px;
          height: 56px;
          min-width: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8f9fa;
          border-radius: 12px;
          color: #73bf44;
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .skill-icon-wrapper::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(115, 191, 68, 0.1) 0%, rgba(141, 214, 90, 0.1) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .skill-item:hover .skill-icon-wrapper::before {
          opacity: 1;
        }
        .skill-item:hover .skill-icon-wrapper {
          transform: scale(1.1) rotate(5deg);
        }
        .skill-icon-wrapper svg {
          width: 24px;
          height: 24px;
          stroke-width: 2;
          position: relative;
          z-index: 1;
        }
        .skill-info {
          flex: 1;
        }
        .skill-name {
          font-size: 16px;
          font-weight: 700;
          color: #1a1a1a;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 6px;
          line-height: 1.3;
        }
        .skill-level {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          color: #73bf44;
          text-transform: uppercase;
          padding: 3px 10px;
          background: rgba(115, 191, 68, 0.08);
          border-radius: 12px;
          letter-spacing: 0.5px;
        }
        .skill-description {
          font-size: 14px;
          line-height: 1.6;
          color: #666;
          margin-top: 12px;
          font-weight: 300;
        }

        /* ===== Skill Bars ===== */
        .skill-bars {
          display: flex;
          gap: 6px;
          margin-top: 18px;
          align-items: center;
        }
        .skill-bar {
          flex: 1;
          height: 4px;
          background: #e8e8e8;
          border-radius: 4px;
          overflow: hidden;
          position: relative;
          opacity: 0;
          transform: scaleX(0);
          transform-origin: left;
        }
        .skill-item.visible .skill-bar {
          animation: fillBar 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .skill-bar.active {
          background: linear-gradient(90deg, #73bf44 0%, #8dd65a 100%);
        }
        @keyframes fillBar {
          from {
            opacity: 0;
            transform: scaleX(0);
          }
          to {
            opacity: 1;
            transform: scaleX(1);
          }
        }

        /* ===== Center Image ===== */
        .skills-image {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 420px;
          height: 420px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          z-index: 1;
          border: 10px solid #fff;
          background: #f5f5f5;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          animation: floatImage 6s ease-in-out infinite;
        }
        .skills-image::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(115, 191, 68, 0.15) 0%, rgba(115, 191, 68, 0.05) 50%, transparent 100%);
          z-index: -1;
          pointer-events: none;
          animation: rotateGradient 20s linear infinite;
        }
        .skills-image:hover {
          transform: translate(-50%, -50%) scale(1.05);
          box-shadow: 0 25px 80px rgba(115, 191, 68, 0.2);
        }
        .skills-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .skills-image:hover img {
          transform: scale(1.1);
        }
        @keyframes floatImage {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-10px);
          }
        }
        @keyframes rotateGradient {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* ===== Accessibility ===== */
        @media (prefers-reduced-motion: reduce) {
          .skill-item,
          .skill-item.visible,
          .skill-item:hover {
            transition: opacity 0.3s ease;
            transform: none !important;
          }
          .skills-image {
            animation: none;
          }
          .skills-image::before {
            animation: none;
          }
          .skill-bar {
            animation: none;
          }
        }

        /* ===== Responsive Design ===== */
        @media (max-width: 991px) {
          .tc-skills-section {
            padding: 80px 0;
          }
          .skills-header {
            margin-bottom: 60px;
          }
          .skills-content {
            min-height: 700px;
          }
          .skills-title {
            font-size: 48px;
          }
          .skills-list {
            min-height: 700px;
          }
          .skills-image {
            width: 320px;
            height: 320px;
            border-width: 8px;
          }
          .skill-item {
            width: 260px;
            padding: 24px;
          }
          .skill-item:nth-child(1) {
            top: 2%;
          }
          .skill-item:nth-child(2) {
            right: 2%;
          }
          .skill-item:nth-child(3) {
            bottom: 2%;
          }
          .skill-item:nth-child(4) {
            left: 2%;
          }
        }

        @media (max-width: 767px) {
          .tc-skills-section {
            padding: 60px 0;
          }
          .skills-header {
            margin-bottom: 50px;
          }
          .skills-content {
            min-height: auto;
            flex-direction: column;
          }
          .skills-title {
            font-size: 36px;
          }
          .skills-description {
            font-size: 16px;
          }
          .skills-list {
            min-height: auto;
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 20px;
            align-items: center;
            margin-top: 40px;
          }
          .skill-item {
            width: 100%;
            max-width: 400px;
            padding: 24px;
            position: relative !important;
            transform: none !important;
            margin: 0 !important;
            top: auto !important;
            left: auto !important;
            right: auto !important;
            bottom: auto !important;
          }
          .skill-item.visible {
            transform: none !important;
          }
          .skill-item:hover {
            transform: translateY(-4px) !important;
          }
          .skills-image {
            position: relative;
            width: 280px;
            height: 280px;
            margin: 0 auto;
            transform: none;
            border-width: 6px;
            order: -1;
            margin-bottom: 40px;
          }
        }

        @media (max-width: 575px) {
          .skills-title {
            font-size: 32px;
          }
          .skills-description {
            font-size: 15px;
          }
          .skill-item {
            padding: 20px;
          }
          .skill-icon-wrapper {
            width: 48px;
            height: 48px;
          }
          .skill-icon-wrapper svg {
            width: 20px;
            height: 20px;
          }
          .skill-name {
            font-size: 14px;
          }
          .skill-description {
            font-size: 13px;
          }
          .skills-image {
            width: 240px;
            height: 240px;
            border-width: 5px;
          }
        }
      `}} />
      <section className="tc-skills-section">
        {/* Background Gradients */}
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
          <div className="skills-header">
            <h2 className="skills-title">
              our <span className="highlight">skills</span>
            </h2>
            <p className="skills-description">
              We constantly improve and learn from the daily challenges of every project. Client satisfaction is our top priority.
            </p>
          </div>

          <div className="skills-content">
            <div className="skills-image">
              <img
                src="/home1/assets/img/View-8.jpg"
                alt="Our Skills"
                loading="lazy"
              />
            </div>

            <div className="skills-list">
              {skills.map((skill, index) => {
                const levelInfo = getLevel(skill.percentage);
                const isVisible = visibleSkills.has(index);
                
                return (
                  <div
                    key={skill.id}
                    className={`skill-item ${isVisible ? 'visible' : ''}`}
                    ref={(el) => {
                      if (el) skillRefs.current[index] = el;
                    }}
                    style={{
                      transitionDelay: `${index * 0.1}s`
                    }}
                  >
                    <div className="skill-header">
                      <div className="skill-icon-wrapper">
                        {skill.icon}
                      </div>
                      <div className="skill-info">
                        <div className="skill-name">{skill.name}</div>
                        <span className="skill-level">{levelInfo.level}</span>
                      </div>
                    </div>
                    <p className="skill-description">{skill.description}</p>
                    <div className="skill-bars">
                      {[...Array(5)].map((_, barIndex) => (
                        <div
                          key={barIndex}
                          className={`skill-bar ${barIndex < levelInfo.bars ? 'active' : ''}`}
                          style={{
                            background: barIndex < levelInfo.bars ? levelInfo.gradient : '#e8e8e8',
                            animationDelay: `${(index * 0.1) + (barIndex * 0.08)}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
