import React from 'react';

function Map() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .tc-contact-map-section {
          padding: 0;
          background: #f8f8f8;
          width: 100%;
        }
        .tc-contact-map-section .map-container {
          width: 100%;
          height: 550px;
          position: relative;
          overflow: hidden;
        }
        .tc-contact-map-section .map-container iframe {
          width: 100%;
          height: 100%;
          border: 0;
          filter: grayscale(100%);
          display: block;
        }
        @media (max-width: 991px) {
          .tc-contact-map-section .map-container {
            height: 450px;
          }
        }
        @media (max-width: 767px) {
          .tc-contact-map-section .map-container {
            height: 400px;
          }
        }
        @media (max-width: 575px) {
          .tc-contact-map-section .map-container {
            height: 350px;
          }
        }
      `}} />
      <section className="tc-contact-map-section">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.1234567890123!2d74.3589!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e57107d9%3A0x1234567890abcdef!2s903-C%2C%20Maulana%20Shaukat%20Ali%20Road%2C%20Faisal%20Town%2C%20Lahore!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SEECA Office Location"
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default Map;
