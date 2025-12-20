import React from 'react';

function Process() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .tc-process-style1 .accordion-item .accordion-button:not(.collapsed) h3 {
          color: #73bf44 !important;
        }
        .tc-process-style1 .accordion-item .accordion-button:not(.collapsed) {
          border-color: #73bf44 !important;
        }
        .tc-process-style1 .accordion-item .accordion-button:hover h3 {
          color: #73bf44 !important;
        }
        .tc-process-style1 .accordion-item .accordion-button:hover {
          border-color: rgba(115, 191, 68, 0.3) !important;
        }
        .tc-process-style1 .c-line {
          filter: hue-rotate(120deg) saturate(1.8) brightness(1.1);
          opacity: 0.8;
        }
        .tc-process-style1 .accordion-button .num {
          color: #73bf44 !important;
        }
        .tc-process-style1 .accordion-button:not(.collapsed) .num {
          color: #73bf44 !important;
          font-weight: 400;
        }
        .process-btn-green {
          color: #73bf44 !important;
          border-color: #73bf44 !important;
          transition: all 0.3s ease;
        }
        .process-btn-green:hover {
          background-color: #73bf44 !important;
          border-color: #73bf44 !important;
          color: #fff !important;
        }
        .process-btn-green:hover span,
        .process-btn-green:hover i {
          color: #fff !important;
        }
        
        /* Mobile Responsive Styles */
        @media screen and (max-width: 991px) {
          .tc-process-style1 {
            padding: 80px 0 60px !important;
            margin-top: -20px !important;
            border-radius: 30px 30px 0 0 !important;
          }
          .tc-process-style1 .title {
            margin-bottom: 50px !important;
          }
          .tc-process-style1 .title h2 {
            font-size: 36px !important;
            line-height: 1.2;
          }
          .tc-process-style1 .accordion-item .accordion-button {
            padding: 20px 15px !important;
            font-size: 16px;
          }
          .tc-process-style1 .accordion-item .accordion-button h3 {
            font-size: 18px !important;
            line-height: 1.4;
          }
          .tc-process-style1 .accordion-item .accordion-body {
            padding: 15px 20px 20px 20px !important;
          }
          .tc-process-style1 .accordion-item .accordion-body .text {
            font-size: 14px !important;
            line-height: 1.6;
          }
          .tc-process-style1 .img {
            margin-top: 40px !important;
            height: 300px !important;
            border-radius: 20px;
            overflow: hidden;
            transform: rotate(0deg) scale(1) !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
          }
          .tc-process-style1 .img img {
            transform: rotate(0deg) !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
          }
          .process-btn-green {
            padding: 14px 30px !important;
            font-size: 14px !important;
            margin-top: 40px !important;
            width: 100%;
            text-align: center;
            display: block;
          }
          .tc-process-style1 .c-line {
            display: none;
          }
        }
        
        @media screen and (max-width: 767px) {
          .tc-process-style1 {
            padding: 60px 0 50px !important;
            margin-top: -15px !important;
            border-radius: 25px 25px 0 0 !important;
          }
          .tc-process-style1 .title {
            margin-bottom: 40px !important;
          }
          .tc-process-style1 .title h2 {
            font-size: 32px !important;
            padding: 0 15px;
          }
          .tc-process-style1 .accordion-item .accordion-button {
            padding: 18px 12px !important;
            flex-wrap: wrap;
          }
          .tc-process-style1 .accordion-item .accordion-button h3 {
            font-size: 17px !important;
            margin: 0;
            width: 100%;
            margin-top: 5px;
          }
          .tc-process-style1 .accordion-item .accordion-button .num {
            font-size: 18px !important;
            margin-right: 10px !important;
            margin-bottom: 0;
          }
          .tc-process-style1 .accordion-item .accordion-body {
            padding: 12px 15px 18px 15px !important;
          }
          .tc-process-style1 .accordion-item .accordion-body .text {
            font-size: 13px !important;
            line-height: 1.7;
          }
          .tc-process-style1 .img {
            margin-top: 30px !important;
            height: 250px !important;
            border-radius: 15px;
            transform: rotate(0deg) scale(1) !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
          }
          .tc-process-style1 .img img {
            transform: rotate(0deg) !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
          }
          .process-btn-green {
            padding: 12px 25px !important;
            font-size: 13px !important;
            margin-top: 30px !important;
          }
          .tc-process-style1 .row {
            margin: 0;
          }
          .tc-process-style1 .col-lg-5,
          .tc-process-style1 .col-lg-4 {
            padding-left: 15px;
            padding-right: 15px;
          }
          .tc-process-style1 .offset-lg-2 {
            margin-left: 0 !important;
          }
          .tc-process-style1 .row > [class*="col-"] {
            margin-bottom: 20px;
          }
        }
        
        @media screen and (max-width: 991px) {
          .tc-process-style1 .offset-lg-2 {
            margin-left: 0 !important;
          }
        }
        
        @media screen and (max-width: 575px) {
          .tc-process-style1 {
            padding: 50px 0 40px !important;
            margin-top: -10px !important;
            border-radius: 20px 20px 0 0 !important;
          }
          .tc-process-style1 .title {
            margin-bottom: 35px !important;
          }
          .tc-process-style1 .title h2 {
            font-size: 28px !important;
            padding: 0 10px;
            line-height: 1.3;
          }
          .tc-process-style1 .accordion-item .accordion-button {
            padding: 16px 10px !important;
          }
          .tc-process-style1 .accordion-item .accordion-button h3 {
            font-size: 16px !important;
            line-height: 1.4;
          }
          .tc-process-style1 .accordion-item .accordion-button .num {
            font-size: 16px !important;
            margin-right: 8px !important;
          }
          .tc-process-style1 .accordion-item .accordion-body {
            padding: 10px 12px 15px 12px !important;
          }
          .tc-process-style1 .accordion-item .accordion-body .text {
            font-size: 12px !important;
            line-height: 1.7;
          }
          .tc-process-style1 .img {
            margin-top: 25px !important;
            height: 220px !important;
            border-radius: 12px;
            transform: rotate(0deg) scale(1) !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
          }
          .tc-process-style1 .img img {
            transform: rotate(0deg) !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
          }
          .process-btn-green {
            padding: 11px 20px !important;
            font-size: 12px !important;
            margin-top: 25px !important;
          }
          .process-btn-green span {
            font-size: 12px !important;
          }
        }
      `}} />
      <section className="tc-process-style1" style={{ position: 'relative', overflow: 'hidden' }}>
      <div 
        className="d-none d-md-block"
        style={{
          position: 'absolute',
          top: '10%',
          left: '3%',
          width: 'clamp(300px, 35vw, 500px)',
          height: 'clamp(180px, 25vh, 300px)',
          background: 'rgba(115, 191, 68, 0.25)',
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
          top: '30%',
          right: '5%',
          width: 'clamp(300px, 35vw, 500px)',
          height: 'clamp(180px, 25vh, 300px)',
          background: 'rgba(115, 191, 68, 0.25)',
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
          top: '55%',
          left: '8%',
          width: 'clamp(300px, 35vw, 500px)',
          height: 'clamp(180px, 25vh, 300px)',
          background: 'rgba(115, 191, 68, 0.25)',
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
          bottom: '15%',
          right: '10%',
          width: 'clamp(300px, 35vw, 500px)',
          height: 'clamp(180px, 25vh, 300px)',
          background: 'rgba(115, 191, 68, 0.25)',
          filter: 'blur(60px)',
          borderRadius: '500px',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="title mb-100 text-center">
          <h2 className="fsz-45"> Our Process Work </h2>
        </div>
        <div className="content">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12">
              <div className="info">
                <div
                  className="accordion wow fadeInUp slow"
                  id="accordionProcess"
                >
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                      >
                        <span className="num"> 1 / </span>
                        <h3> Survey & Quotes </h3>
                      </button>
                    </div>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                          After surveying and obtaining the necessary
                          information, we will create a preliminary design
                          including technical drawings, 3D images of the
                          interior and provide a 3D VR experience to help
                          customers get a visual view of their project.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                      >
                        <span className="num"> 2 / </span>
                        <h3> Design & Perfomance </h3>
                      </button>
                    </div>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                          After surveying and obtaining the necessary
                          information, we will create a preliminary design
                          including technical drawings, 3D images of the
                          interior and provide a 3D VR experience to help
                          customers get a visual view of their project.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                      >
                        <span className="num"> 3 / </span> <h3> Hand Over </h3>
                      </button>
                    </div>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                          After surveying and obtaining the necessary
                          information, we will create a preliminary design
                          including technical drawings, 3D images of the
                          interior and provide a 3D VR experience to help
                          customers get a visual view of their project.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="butn border rounded-pill mt-80 process-btn-green"
                >
                  <span>
                    Our Projects
                    <i className="small ms-1 ti-arrow-top-right"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-2 col-md-12 col-sm-12">
              <div className="img wow">
                <img
                  src="/home1/assets/img/process.jpg"
                  alt=""
                  className="img-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/home1/assets/img/c_line2.png" alt="" className="c-line wow" />
    </section>
    </>
  );
}

export default Process;
