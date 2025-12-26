import React from 'react';
import { Link } from 'react-router-dom';

function ContactSection() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .tc-interior-contact {
          position: relative;
          padding: 120px 0;
          background: #fff;
          overflow: hidden;
        }
        .contact-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }
        .contact-subtitle {
          color: #73bf44;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 20px;
          display: inline-block;
          padding: 8px 20px;
          background: rgba(115, 191, 68, 0.1);
          border-radius: 30px;
          border: 1px solid rgba(115, 191, 68, 0.2);
        }
        .contact-title {
          font-size: 48px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 30px;
          line-height: 1.3;
          letter-spacing: -0.5px;
        }
        .contact-description {
          color: #666;
          font-size: 18px;
          line-height: 1.8;
          margin-bottom: 50px;
        }
        .contact-btn {
          display: inline-block;
          padding: 18px 50px;
          background: #73bf44;
          color: #fff;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 4px 15px rgba(115, 191, 68, 0.3);
        }
        .contact-btn:hover {
          background: #5fa336;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(115, 191, 68, 0.4);
          color: #fff;
        }
        @media (max-width: 991px) {
          .tc-interior-contact {
            padding: 80px 0;
          }
          .contact-title {
            font-size: 36px;
          }
        }
        @media (max-width: 767px) {
          .tc-interior-contact {
            padding: 60px 0;
          }
          .contact-subtitle {
            font-size: 12px;
            padding: 6px 16px;
          }
          .contact-title {
            font-size: 32px;
            margin-bottom: 25px;
          }
          .contact-description {
            font-size: 16px;
            margin-bottom: 40px;
          }
          .contact-btn {
            padding: 15px 40px;
            font-size: 15px;
          }
        }
        @media (max-width: 575px) {
          .contact-title {
            font-size: 28px;
          }
          .contact-description {
            font-size: 15px;
          }
          .contact-btn {
            padding: 14px 35px;
            font-size: 14px;
          }
        }
      `}} />
      <section className="tc-interior-contact">
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
          <div className="contact-content">
            <div className="contact-subtitle">[ CONTACT US ]</div>
            <h2 className="contact-title">Let's Start a Project</h2>
            <p className="contact-description">
              Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.
            </p>
            <Link to="/innerpages/contact" className="contact-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactSection;

