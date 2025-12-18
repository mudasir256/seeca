import React from 'react';

function Experience() {
  return (
    <section 
      className="tc-experience-style1 section-padding-x"
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
      {/* <div 
        className="d-none d-md-block"
        style={{
          position: 'absolute',
          top: 0,
          left: 'clamp(200px, 32vw, 450px)',
          width: 'clamp(220px, 24vw, 350px)',
          height: 'clamp(220px, 24vw, 350px)',
          background: 'rgba(115, 191, 68, 0.3)',
          filter: 'blur(60px)',
          borderRadius: '400px',
          pointerEvents: 'none',
          zIndex: 0
        }}
      /> */}
      <div 
        className="d-none d-md-block"
        style={{
          position: 'absolute',
          bottom: 0,
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
      
      <div className="container-fluid" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-2">
            <div className="exp-num mb-100 wow zoomIn" data-wow-delay="0.3s">
              <h5 className="fsz-18 text-uppercase">
                years of <br /> experience
              </h5>
              <h2 className="num" style={{ color: '#73bf44' }}> 15 </h2>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="img wow">
              <img
                src="/home1/assets/img/exp.png"
                alt=""
                className="img-cover"
              />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="info wow fadeInUp" data-wow-delay="0.3s">
              <h3 className="fsz-45 fw-600 mb-30"> Est. 1986 </h3>
              <div className="text fsz-15 color-666">
                Archin Studio is an archiectural practice based in Boston. We
                cut ourteeth on designing and creating buildings that are both
                beautiful and sustainable.
              </div>
              <a
                href="#"
                className="butn rounded-pill mt-50 hover-bg-green2 bg-white"
              >
                <span>
                  Our Studio <i className="small ms-1 ti-arrow-top-right"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="rotate-txt justify-content-lg-end">
              <ul>
                <li>
                  <a href="#"> hello@archinstudio.co </a>
                </li>
                <li>
                  <a href="#"> (054) 3256 78 87 </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <img src="/home1/assets/img/c_line.png" alt="" className="c-line wow" /> */}
      <div 
        className="c-line wow" 
        style={{ 
          backgroundColor: '#73bf44',
          maskImage: 'url(/home1/assets/img/c_line.png)',
          WebkitMaskImage: 'url(/home1/assets/img/c_line.png)',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
        }}
      />
    </section>
  );
}

export default Experience;
