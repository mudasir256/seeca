import React from 'react';

function Header({
  title = 'Contact Us',
  description = "Want to chat further? We'd love to hear from you, let us opportunity to make your dream become reality",
  backgroundImage = '/home_preview/assets/img/architecturecontact.jpg',
  overlayOpacity = 0.75,
  minHeight = 500,
  titleClassName = 'js-title'
}) {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .tc-contact-header {
          position: relative;
          min-height: ${minHeight}px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: url('${backgroundImage}');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: scroll;
          overflow: hidden;
        }
        .tc-contact-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0, 0, 0, ${overlayOpacity}) 0%, rgba(0, 0, 0, ${overlayOpacity * 0.8}) 100%);
          z-index: 1;
          transition: opacity 0.6s ease;
        }
        .tc-contact-header::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at center, rgba(115, 191, 68, 0.1) 0%, transparent 70%);
          z-index: 2;
          transition: opacity 0.6s ease;
          animation: pulseGlow 4s ease-in-out infinite;
        }
        @keyframes pulseGlow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        .tc-contact-header .container {
          position: relative;
          z-index: 3;
        }
        .tc-contact-header .info {
          text-align: center;
          color: #fff;
          padding: 80px 20px;
          animation: fadeInUp 0.8s ease-out;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .tc-contact-header .info h1 {
          font-size: 72px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 25px;
          text-transform: uppercase;
          letter-spacing: 3px;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
          animation: fadeInUp 1s ease-out 0.2s both;
        }
        .tc-contact-header .info .text {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.8;
          max-width: 700px;
          margin: 0 auto;
          animation: fadeInUp 1s ease-out 0.4s both;
        }
        @media (max-width: 991px) {
          .tc-contact-header {
            min-height: ${Math.max(300, minHeight * 0.8)}px;
            background-attachment: scroll;
          }
          .tc-contact-header .info {
            padding: 60px 20px;
          }
          .tc-contact-header .info h1 {
            font-size: 56px;
            margin-bottom: 20px;
          }
          .tc-contact-header .info .text {
            font-size: 16px;
          }
        }
        @media (max-width: 767px) {
          .tc-contact-header {
            min-height: ${Math.max(300, minHeight * 0.7)}px;
            background-attachment: scroll;
          }
          .tc-contact-header .info {
            padding: 50px 20px;
          }
          .tc-contact-header .info h1 {
            font-size: 42px;
            margin-bottom: 18px;
            letter-spacing: 2px;
          }
          .tc-contact-header .info .text {
            font-size: 15px;
            line-height: 1.7;
          }
        }
        @media (max-width: 575px) {
          .tc-contact-header {
            min-height: 300px;
            background-attachment: scroll;
          }
          .tc-contact-header .info {
            padding: 40px 15px;
          }
          .tc-contact-header .info h1 {
            font-size: 32px;
            margin-bottom: 15px;
            letter-spacing: 1px;
          }
          .tc-contact-header .info .text {
            font-size: 14px;
            line-height: 1.6;
          }
        }
      `}} />
      <header className="tc-contact-header">
        <div className="container">
          <div className="info">
            <h1 className={titleClassName}>{title}</h1>
            <div className="text">
              {typeof description === 'string' && description.includes('\n') ? (
                description.split('\n').map((line, index, array) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < array.length - 1 && (
                      <br className="d-none d-md-block" />
                    )}
                  </React.Fragment>
                ))
              ) : (
                description
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
