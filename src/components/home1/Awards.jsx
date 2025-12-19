import React from 'react';
import data from '../../data/home1/awards';
function Awards() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .tc-awards-style1 {
          position: relative;
          z-index: 10;
          padding: 150px 0;
          border-radius: 40px 40px 0 0;
          margin-top: -40px;
          background-color: #262929;
          color: #fff;
          overflow: hidden;
        }
        .awards-bg-shades {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }
        .awards-bg-shade {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
        }
        .awards-bg-shade-1 {
          top: 10%;
          left: 5%;
          width: clamp(200px, 30vw, 400px);
          height: clamp(150px, 25vh, 300px);
          background: rgba(115, 191, 68, 0.15);
        }
        .awards-bg-shade-2 {
          bottom: 15%;
          right: 8%;
          width: clamp(200px, 30vw, 400px);
          height: clamp(150px, 25vh, 300px);
          background: rgba(115, 191, 68, 0.15);
        }
        .awards-content {
          position: relative;
          z-index: 1;
        }
        .tc-awards-style1 .awards-content .awards-list .award-row {
          padding: 30px;
          text-transform: capitalize;
          transition: all 0.3s ease;
          border-radius: 15px;
          cursor: pointer;
        }
        .tc-awards-style1 .awards-content .awards-list .award-row:hover {
          background-color: rgba(115, 191, 68, 0.2);
        }
        .tc-awards-style1 .awards-content .awards-list .award-row .year {
          color: #73bf44;
          font-weight: 600;
          font-size: 18px;
        }
        .tc-awards-style1 .awards-content .awards-list .award-row .title {
          color: #fff;
        }
        .tc-awards-style1 .awards-content .awards-list .award-row p {
          color: rgba(255, 255, 255, 0.7);
        }
        .tc-awards-style1 .awards-content .awards-list .award-row .la-map-marker {
          color: #73bf44;
        }
        .tc-awards-style1 .awards-content .awards-list .award-row .ti-arrow-top-right {
          color: #73bf44;
          transition: all 0.3s ease;
        }
        .tc-awards-style1 .awards-content .awards-list .award-row:hover .ti-arrow-top-right {
          transform: translate(5px, -5px);
          color: #8dd65a;
        }
        .tc-awards-style1 .butn.border {
          border-color: #73bf44 !important;
          color: #73bf44;
          background: transparent;
          transition: all 0.3s ease;
        }
        .tc-awards-style1 .butn.border:hover {
          background-color: #73bf44 !important;
          color: #fff !important;
          border-color: #73bf44 !important;
        }
        .tc-awards-style1 .butn.border:hover span {
          color: #fff !important;
        }
        .tc-awards-style1 .butn.border span {
          color: #73bf44;
          transition: color 0.3s ease;
        }
        .tc-awards-style1 .butn.border i {
          color: inherit;
        }
        @media screen and (max-width: 991px) {
          .tc-awards-style1 {
            padding: 80px 0 60px;
          }
          .tc-awards-style1 .awards-content .awards-list .award-row {
            background-color: rgba(255, 255, 255, 0.05);
            margin-bottom: 20px;
            padding: 25px 20px;
          }
          .tc-awards-style1 .mb-80 {
            margin-bottom: 50px !important;
          }
          .tc-awards-style1 .mt-100 {
            margin-top: 60px !important;
          }
        }
        @media screen and (max-width: 767px) {
          .tc-awards-style1 {
            padding: 60px 0 50px;
            border-radius: 30px 30px 0 0;
          }
          .tc-awards-style1 .awards-content .awards-list .award-row {
            padding: 20px 15px;
            margin-bottom: 15px;
          }
          .tc-awards-style1 .awards-content .awards-list .award-row .year {
            font-size: 16px;
            margin-bottom: 10px;
          }
          .tc-awards-style1 .awards-content .awards-list .award-row .title {
            font-size: 18px !important;
            margin-bottom: 10px;
          }
          .tc-awards-style1 .mb-80 {
            margin-bottom: 40px !important;
          }
          .tc-awards-style1 .fsz-45 {
            font-size: 32px !important;
          }
        }
        @media screen and (max-width: 575px) {
          .tc-awards-style1 {
            padding: 50px 0 40px;
          }
          .tc-awards-style1 .awards-content .awards-list .award-row {
            padding: 18px 12px;
          }
          .tc-awards-style1 .fsz-45 {
            font-size: 28px !important;
          }
        }
      `}} />
      <section className="tc-awards-style1">
        <div className="awards-bg-shades">
          <div className="awards-bg-shade awards-bg-shade-1 d-none d-md-block"></div>
          <div className="awards-bg-shade awards-bg-shade-2 d-none d-md-block"></div>
        </div>
        <div className="container">
          <div className="awards-content">
            <div className="mb-80 text-center js-splittext-lines">
              <h2 className="fsz-45"> Awards & Recognition </h2>
            </div>
            <div className="awards-list wow fadeInUp" data-wow-delay="0.2s">
              {data.map((item, i) => (
                <div key={i} className="award-row">
                  <div className="row gx-0 align-items-center">
                    <div className="col-lg-2">
                      <div className="year"> {item.year} </div>
                    </div>
                    <div className="col-lg-6 my-3 my-lg-0">
                      <h6 className="title fsz-23 fw-400">{item.title}</h6>
                    </div>
                    <div className="col-lg-2">
                      <p>
                        <i className="la la-map-marker me-3"></i> {item.location}
                      </p>
                    </div>
                    <div className="col-lg-2 text-lg-end mt-4 mt-lg-0">
                      <i className="ti-arrow-top-right fsz-20"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-100 mb-40">
              <a href="#" className="butn border rounded-pill">
                <span>
                  Show More <i className="small ms-1 la la-angle-down"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Awards;
