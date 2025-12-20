import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .tc-contact-form-section {
          padding: 100px 80px;
          background: #fff;
          min-height: 100%;
          display: flex;
          align-items: center;
          position: relative;
        }
        .tc-contact-form-section .form-wrapper {
          max-width: 600px;
          width: 100%;
        }
        .tc-contact-form-section h2 {
          font-size: 52px;
          font-weight: 700;
          color: #000;
          margin-bottom: 50px;
          text-transform: none;
          letter-spacing: -1px;
          line-height: 1.1;
        }
        .tc-contact-form-section .form-group {
          margin-bottom: 25px;
        }
        .tc-contact-form-section .form-control {
          width: 100%;
          padding: 18px 22px;
          border: 1px solid #e5e5e5;
          border-radius: 0;
          font-size: 16px;
          color: #000;
          background: #fff;
          transition: all 0.3s ease;
          font-family: inherit;
        }
        .tc-contact-form-section .form-control:focus {
          outline: none;
          border-color: #73bf44;
          box-shadow: none;
        }
        .tc-contact-form-section .form-control::placeholder {
          color: #999;
          font-weight: 400;
        }
        .tc-contact-form-section textarea.form-control {
          min-height: 140px;
          resize: vertical;
          font-family: inherit;
        }
        .tc-contact-form-section .submit-btn {
          padding: 18px 50px;
          background: #f5f5f5;
          color: #000;
          border: none;
          border-radius: 0;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 10px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .tc-contact-form-section .submit-btn:hover {
          background: #e8e8e8;
          transform: translateY(-2px);
        }
        @media (max-width: 1199px) {
          .tc-contact-form-section {
            padding: 80px 60px;
          }
          .tc-contact-form-section h2 {
            font-size: 42px;
            margin-bottom: 40px;
          }
        }
        @media (max-width: 991px) {
          .tc-contact-form-section {
            padding: 70px 50px;
            min-height: auto;
          }
          .tc-contact-form-section .form-wrapper {
            max-width: 100%;
          }
          .tc-contact-form-section h2 {
            font-size: 38px;
            margin-bottom: 35px;
          }
        }
        @media (max-width: 767px) {
          .tc-contact-form-section {
            padding: 60px 40px;
          }
          .tc-contact-form-section h2 {
            font-size: 32px;
            margin-bottom: 30px;
          }
          .tc-contact-form-section .form-control {
            padding: 15px 18px;
            font-size: 15px;
          }
          .tc-contact-form-section .submit-btn {
            padding: 15px 40px;
            font-size: 15px;
          }
        }
        @media (max-width: 575px) {
          .tc-contact-form-section {
            padding: 50px 30px;
          }
          .tc-contact-form-section h2 {
            font-size: 28px;
            margin-bottom: 25px;
          }
        }
      `}} />
      <section className="tc-contact-form-section">
        <div className="form-wrapper">
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                className="form-control"
                placeholder="Your message (optional)"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
