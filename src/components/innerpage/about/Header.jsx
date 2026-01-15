import React from 'react';

function Header() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .tc-header-preview .float-social-links-right {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 1vw;
          z-index: 20;
        }
        .tc-header-preview .float-social-links-right ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .tc-header-preview .float-social-links-right li {
          margin: 0;
        }
        .tc-header-preview .float-social-links-right a {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(0, 0, 0, 0.3);
          font-size: 16px;
          color: #fff;
          margin: 10px 0;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .tc-header-preview .float-social-links-right a:hover {
          background-color: #73bf44;
          transform: scale(1.1);
        }
        @media (max-width: 991px) {
          .tc-header-preview .float-social-links-right {
            right: 10px;
          }
          .tc-header-preview .float-social-links-right a {
            width: 40px;
            height: 40px;
            font-size: 14px;
            margin: 8px 0;
          }
        }
        @media (max-width: 767px) {
          .tc-header-preview .float-social-links-right {
            right: 5px;
          }
          .tc-header-preview .float-social-links-right a {
            width: 35px;
            height: 35px;
            font-size: 12px;
            margin: 6px 0;
          }
        }
      `}} />
      <header className="tc-header-preview">
      <div className="slider-card">
        <div className="img">
          <img
            src="/innerpages/assets/img/about/header1.jpg"
            alt=""
            className="img-cover"
          />
        </div>
        <div className="info">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 offset-lg-6">
                <div className="rotate-box" data-speed="1" data-lag="0.4">
                  <a
                    href="#"
                    className="rotate-circle fsz-35 rotate-text d-inline-block text-uppercase"
                  >
                    <svg className="textcircle" viewBox="0 0 500 500">
                      <defs>
                        <path
                          id="textcircle"
                          d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                        ></path>
                      </defs>
                      <text>
                        <textPath xlinkHref="#textcircle" textLength="900">
                          • Years of experience • since 2013
                        </textPath>
                      </text>
                    </svg>
                  </a>
                  <span className="num"> 13 </span>
                </div>
              </div>
            </div>
            <div className="row ps-lg-5">
              <div className="col-lg-6">
                <h5 className="fsz-30 mt-30 fw-400">
                  Architecture and Interior <br /> Design
                </h5>
                <h1> About us </h1>
              </div>
            </div>
            <ul className="features-txt ps-lg-5">
              <li> Architecture Studio </li>
              <li> Interior design </li>
              <li> 3D modeling & Animation </li>
              <li> Decoration & Furniture </li>
              <li> High Performance </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="float-social-links">
        <ul>
          <li>
            <a href="https://www.instagram.com/seeca_pk/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/seecapl.pk/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/seeconsultantsarchitects/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="float-social-links-right">
        <ul>
          <li>
            <a href="https://x.com/seeca_pk" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <i className="fab fa-x-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.threads.net/@seeca_pk" target="_blank" rel="noopener noreferrer" aria-label="Threads">
              <i className="fab fa-threads"></i>
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
    </header>
    </>
  );
}

export default Header;
