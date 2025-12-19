import React from 'react';

function Footer() {

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .tc-footer-style1 {
          background-color: #000;
          color: #fff;
          position: relative;
        }
        .tc-footer-style1 .top-content {
          padding: 80px 0 60px;
        }
        .tc-footer-style1 .logo-section {
          margin-bottom: 30px;
        }
        .tc-footer-style1 .logo-section .logo {
          max-height: 60px;
          margin-bottom: 20px;
        }
        .tc-footer-style1 .logo-section .company-name {
          font-size: 14px;
          color: #fff;
          line-height: 1.6;
          margin-bottom: 25px;
        }
        .tc-footer-style1 .service-desc {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin-bottom: 30px;
        }
        .tc-footer-style1 .foot-social {
          display: flex;
          gap: 15px;
        }
        .tc-footer-style1 .foot-social a {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .tc-footer-style1 .foot-social a:hover {
          background: #73bf44;
          transform: translateY(-3px);
        }
        .tc-footer-style1 .foot-social a i {
          font-size: 16px;
        }
        .tc-footer-style1 .contact-section {
          margin-bottom: 40px;
        }
        .tc-footer-style1 .contact-section h5 {
          font-size: 18px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 20px;
        }
        .tc-footer-style1 .contact-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 15px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
          line-height: 1.6;
        }
        .tc-footer-style1 .contact-item i {
          color: #73bf44;
          margin-right: 12px;
          margin-top: 4px;
          font-size: 16px;
          min-width: 20px;
        }
        .tc-footer-style1 .contact-item .contact-text {
          flex: 1;
        }
        .tc-footer-style1 .contact-item .contact-text a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .tc-footer-style1 .contact-item .contact-text a:hover {
          color: #73bf44;
        }
        .tc-footer-style1 .map-container {
          height: 400px;
          border-radius: 8px;
          overflow: hidden;
        }
        .tc-footer-style1 .map-container iframe {
          width: 100%;
          height: 100%;
          border: 0;
        }
        .tc-footer-style1 .foot {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 30px 0;
        }
        .tc-footer-style1 .foot p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 13px;
          margin: 0;
        }
        .tc-footer-style1 .foot-links {
          display: flex;
          gap: 20px;
          justify-content: flex-end;
          flex-wrap: wrap;
        }
        .tc-footer-style1 .foot-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 13px;
          transition: color 0.3s ease;
          position: relative;
        }
        .tc-footer-style1 .foot-links a:not(:last-child)::after {
          content: '|';
          margin-left: 20px;
          color: rgba(255, 255, 255, 0.3);
        }
        .tc-footer-style1 .foot-links a:hover {
          color: #73bf44;
        }
        .whatsapp-float {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 1000;
          width: 50px;
          height: 50px;
          border-radius: 8px;
          background: #73bf44;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(115, 191, 68, 0.4);
          transition: all 0.3s ease;
        }
        .whatsapp-float:hover {
          background: #8dd65a;
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(115, 191, 68, 0.6);
        }
        .whatsapp-float i {
          font-size: 24px;
        }
        @media (max-width: 991px) {
          .tc-footer-style1 .top-content {
            padding: 60px 0 40px;
          }
          .tc-footer-style1 .map-container {
            height: 300px;
            margin-top: 30px;
          }
          .whatsapp-float {
            bottom: 20px;
            right: 20px;
            width: 45px;
            height: 45px;
          }
        }
        @media (max-width: 767px) {
          .tc-footer-style1 .top-content {
            padding: 50px 0 30px;
          }
          .tc-footer-style1 .foot-links {
            justify-content: flex-start;
            margin-top: 15px;
          }
          .tc-footer-style1 .map-container {
            height: 250px;
          }
        }
      `}} />
      <footer className="tc-footer-style1">
        <div className="container">
          <div className="top-content section-padding">
            <div className="row gx-5">
              <div className="col-lg-4">
                <div className="logo-section">
                  <img
                    src="/home_preview/assets/img/logo.png"
                    alt="SEECA"
                    className="logo"
                    style={{ maxHeight: '50px' }}
                  />
                  <div className="company-name">
                    EE CONSULTANTS & ARCHITECTS (PRIVATE) LIMITED
                  </div>
                  <div className="service-desc">
                    We provide a full range of Architecture and Interior Design services.
                  </div>
                  <div className="foot-social">
                    <a href="#" aria-label="Facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" aria-label="LinkedIn">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" aria-label="YouTube">
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a href="#" aria-label="Instagram">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" aria-label="Pinterest">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="contact-section">
                  <h5>Head Office</h5>
                  <div className="contact-item">
                    <i className="la la-map-marker"></i>
                    <div className="contact-text">
                      903-C, Maulana Shaukat Ali Road, Faisal Town, Lahore
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="la la-phone"></i>
                    <div className="contact-text">
                      <a href="tel:+923331498340">+92 333 1498340</a>
                      <br />
                      <a href="tel:+923002500556">+92 300 2500556</a>
                    </div>
                  </div>
                </div>
                <div className="contact-section">
                  <h5>Somalia Office</h5>
                  <div className="contact-item">
                    <i className="la la-map-marker"></i>
                    <div className="contact-text">
                      Downtown Hargeisa, Road # 01, Office # 01 Hargeisa, Somaliland
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="la la-phone"></i>
                    <div className="contact-text">
                      <a href="tel:+252633810971">+252 633 8109 71</a>
                      <br />
                      <a href="tel:+252634633331">+252 634 6333 31</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.1234567890123!2d74.3589!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e57107d9%3A0x1234567890abcdef!2s903-C%2C%20Maulana%20Shaukat%20Ali%20Road%2C%20Faisal%20Town%2C%20Lahore!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SEECA Office Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="foot">
            <div className="row">
              <div className="col-lg-6">
                <p>Copyright © 2025 SEECA by <span style={{ color: '#73bf44' }}>CLAPIT.SOLUTIONS</span> All Rights Reserved.</p>
              </div>
              <div className="col-lg-6">
                <div className="foot-links">
                  <a href="#">Terms of use</a>
                  <a href="#">Privacy Environmental Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
}

export default Footer;
