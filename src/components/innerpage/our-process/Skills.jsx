import React, { useEffect, useRef } from 'react';

const skills = [
  { id: 1, name: 'LAYOUT PLANNING', percentage: 99 },
  { id: 2, name: '2D DRAFTING', percentage: 96 },
  { id: 3, name: '3D MODELING', percentage: 90 },
  { id: 4, name: '3D RENDERING', percentage: 85 },
  { id: 5, name: '3D ANIMATION', percentage: 85 }
];

function Skills() {
  const progressRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = progressRefs.current.findIndex(ref => ref === entry.target);
          if (index !== -1 && index < skills.length) {
            const skill = skills[index];
            const progressBar = entry.target.querySelector('.skill-progress-bar');
            if (progressBar) {
              setTimeout(() => {
                progressBar.style.width = `${skill.percentage}%`;
              }, 100 * index);
            }
          }
        }
      });
    }, observerOptions);

    progressRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      progressRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .tc-skills-section {
          position: relative;
          padding: 120px 0;
          background: #fff;
          overflow: hidden;
        }
        .skills-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .skills-text {
          position: relative;
        }
        .skills-title {
          font-size: 60px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 30px;
          text-transform: lowercase;
        }
        .skills-description {
          font-size: 18px;
          line-height: 1.8;
          color: #666;
          margin-bottom: 50px;
        }
        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .skill-item {
          position: relative;
        }
        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        .skill-name {
          font-size: 16px;
          font-weight: 600;
          color: #1a1a1a;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .skill-percentage {
          font-size: 16px;
          font-weight: 700;
          color: #73bf44;
        }
        .skill-progress-container {
          width: 100%;
          height: 6px;
          background: rgba(115, 191, 68, 0.1);
          border-radius: 10px;
          overflow: hidden;
        }
        .skill-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #73bf44 0%, #8dd65a 100%);
          border-radius: 10px;
          width: 0;
          transition: width 1.5s ease;
        }
        .skills-image {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        }
        .skills-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        @media (max-width: 991px) {
          .tc-skills-section {
            padding: 80px 0;
          }
          .skills-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .skills-title {
            font-size: 48px;
          }
          .skills-image {
            order: -1;
            height: 400px;
          }
        }
        @media (max-width: 767px) {
          .tc-skills-section {
            padding: 60px 0;
          }
          .skills-title {
            font-size: 36px;
          }
          .skills-description {
            font-size: 16px;
            margin-bottom: 40px;
          }
          .skills-list {
            gap: 25px;
          }
          .skill-name {
            font-size: 14px;
          }
          .skill-percentage {
            font-size: 14px;
          }
          .skills-image {
            height: 300px;
          }
        }
        @media (max-width: 575px) {
          .skills-title {
            font-size: 32px;
          }
          .skills-description {
            font-size: 15px;
          }
          .skill-name {
            font-size: 13px;
          }
          .skill-percentage {
            font-size: 13px;
          }
        }
      `}} />
      <section className="tc-skills-section">
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
          <div className="skills-content">
            <div className="skills-text">
              <h2 className="skills-title">our skills</h2>
              <p className="skills-description">
                We constantly improve and learn from the daily challenges of every project. Client satisfaction is our top priority.
              </p>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <div
                    key={skill.id}
                    className="skill-item"
                    ref={(el) => (progressRefs.current[index] = el)}
                  >
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.percentage}%</span>
                    </div>
                    <div className="skill-progress-container">
                      <div className="skill-progress-bar"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="skills-image">
              <img
                src="/innerpages/assets/img/process/proc2.jpg"
                alt="Our Skills"
                className="img-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;

