import React from 'react';
import data from '../../../data/innerpages/about/awards';
function Awards() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .tc-awards-style2 .award-card {
          transition: all 0.3s ease;
        }
        .tc-awards-style2 .award-card:hover {
          border: 1px solid #73bf44 !important;
          border-radius: 8px;
        }
      `}} />
    <section 
      className="tc-awards-style2"
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
        <h2 className="fsz-45 fw-500 text-center mb-30">
          Featured
          <span 
            className="sub-font fst-italic fw-400"
            style={{ color: '#73bf44' }}
          >
            awards
          </span>
        </h2>
        <div className="awards">
          <div className="row">
            {data.map((item, i) => (
              <div key={i} className="col-lg-3">
                <div
                  className="award-card wow fadeInUp slow"
                  data-wow-delay="0.2s"
                >
                  <div className="logo">
                    <img src={item.img} alt="" />
                  </div>
                  <h5 className="fsz-24 sub-font title">{item.title}</h5>
                  <a href="#" className="color-666 text-capitalize">
                    {item.subTitle}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Awards;
