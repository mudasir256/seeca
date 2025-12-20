import React from 'react';

function ContactInfo() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .tc-contact-info-section {
          padding: 100px 80px;
          background: #1a1a1a;
          position: relative;
          overflow: hidden;
          min-height: 100%;
          display: flex;
          align-items: center;
        }
        .tc-contact-info-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url('/home_preview/assets/img/architecturecontact.jpg');
          background-size: cover;
          background-position: center;
          opacity: 0.08;
          z-index: 1;
        }
        .tc-contact-info-section::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 100%);
          z-index: 1;
        }
        .tc-contact-info-section .content {
          position: relative;
          z-index: 2;
          max-width: 600px;
          width: 100%;
        }
        .tc-contact-info-section .section-title {
          font-size: 13px;
          font-weight: 600;
          color: #73bf44;
          text-transform: uppercase;
          letter-spacing: 3px;
          margin-bottom: 20px;
          display: block;
        }
        .tc-contact-info-section .main-title {
          font-size: 52px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 35px;
          line-height: 1.2;
          letter-spacing: -1px;
        }
        .tc-contact-info-section .description {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.9;
          margin-bottom: 60px;
          font-weight: 300;
        }
        .tc-contact-info-section .contact-group {
          margin-bottom: 45px;
        }
        .tc-contact-info-section .contact-item {
          display: flex;
          align-items: flex-start;
        }
        .tc-contact-info-section .contact-item i {
          font-size: 22px;
          color: #73bf44;
          margin-right: 25px;
          margin-top: 3px;
          min-width: 26px;
        }
        .tc-contact-info-section .contact-item .contact-label {
          font-size: 12px;
          font-weight: 600;
          color: #73bf44;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 12px;
          display: block;
        }
        .tc-contact-info-section .contact-item .contact-text {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.9;
        }
        .tc-contact-info-section .contact-item .contact-text > div {
          margin-bottom: 8px;
        }
        .tc-contact-info-section .contact-item .contact-text a {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          display: block;
          margin-bottom: 8px;
          transition: color 0.3s ease;
        }
        .tc-contact-info-section .contact-item .contact-text a:hover {
          color: #73bf44;
        }
        @media (max-width: 1199px) {
          .tc-contact-info-section {
            padding: 80px 60px;
          }
          .tc-contact-info-section .main-title {
            font-size: 42px;
            margin-bottom: 30px;
          }
        }
        @media (max-width: 991px) {
          .tc-contact-info-section {
            padding: 70px 50px;
            min-height: auto;
          }
          .tc-contact-info-section .content {
            max-width: 100%;
          }
          .tc-contact-info-section .main-title {
            font-size: 38px;
            margin-bottom: 25px;
          }
          .tc-contact-info-section .description {
            font-size: 15px;
            margin-bottom: 50px;
          }
        }
        @media (max-width: 767px) {
          .tc-contact-info-section {
            padding: 60px 40px;
          }
          .tc-contact-info-section .main-title {
            font-size: 32px;
            margin-bottom: 20px;
          }
          .tc-contact-info-section .description {
            font-size: 14px;
            margin-bottom: 40px;
          }
          .tc-contact-info-section .contact-group {
            margin-bottom: 35px;
          }
          .tc-contact-info-section .contact-item i {
            font-size: 20px;
            margin-right: 20px;
          }
        }
        @media (max-width: 575px) {
          .tc-contact-info-section {
            padding: 50px 30px;
          }
          .tc-contact-info-section .main-title {
            font-size: 28px;
          }
          .tc-contact-info-section .section-title {
            font-size: 11px;
            letter-spacing: 2px;
          }
        }
      `}} />
      <section className="tc-contact-info-section">
        <div className="content">
          <span className="section-title">[ OUR CONTACT DETAILS ]</span>
          <h2 className="main-title">Let's Start a Project</h2>
          <p className="description">
            Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.
          </p>
          
          <div className="contact-group">
            <div className="contact-item">
              <i className="la la-map-marker"></i>
              <div>
                <span className="contact-label">OUR ADDRESS</span>
                <div className="contact-text">
                  <div>903C, Maulana Shaukat Ali Road, Faisal Town, Lahore, Pakistan.</div>
                  <div>Downtown Hargeisa, Road # 01, Office # 01 Hargeisa, Somaliland</div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-group">
            <div className="contact-item">
              <i className="la la-envelope"></i>
              <div>
                <span className="contact-label">OUR MAILBOX</span>
                <div className="contact-text">
                  <a href="mailto:info@seeca.pk">info@seeca.pk</a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-group">
            <div className="contact-item">
              <i className="la la-phone"></i>
              <div>
                <span className="contact-label">OUR PHONE</span>
                <div className="contact-text">
                  <a href="tel:+923331498340">+92 333 1498340</a>
                  <a href="tel:+923002500556">+92 300 2500556</a>
                  <a href="tel:+252633810971">+252 633 8109 71</a>
                  <a href="tel:+252634633331">+252 634 6333 31</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactInfo;
