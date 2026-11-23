import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { trackEvent } from '../../../lib/analytics';

export const SERVICE_OPTIONS = [
  'Architecture (house / building design)',
  'Interior Design',
  'Construction',
  'Renovation',
  'Sustainable / Smart Building',
  'Other',
];

const EMPTY = { name: '', phone: '', email: '', service: '', city: '', size: '', message: '' };

function ContactForm() {
  const formRef = useRef();
  const [formData, setFormData] = useState(EMPTY);
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    const { name, phone, email, service, city, size, message } = formData;
    // Everything is also written into "subject" and "message", so the enquiry arrives in
    // full even with the existing email template (which only shows name/email/subject/message).
    const params = {
      name,
      email: email || 'not provided',
      phone,
      service,
      city,
      size,
      subject: `${service} enquiry – ${city}`,
      message: [
        `Phone / WhatsApp: ${phone}`,
        `Email: ${email || 'not provided'}`,
        `Service: ${service}`,
        `City / area: ${city}`,
        `Plot or project size: ${size || 'not given'}`,
        '',
        message || '(no message)',
      ].join('\n'),
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_INTERNSHIP_TEMPLATE_ID,
        params,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus('success');
        trackEvent('contact_form_submit', { service });
        setFormData(EMPTY);
        if (formRef.current) formRef.current.reset();
      })
      .catch((err) => {
        setStatus('error');
        setErrorMsg(err?.text || 'Something went wrong. Please try again, or message us on WhatsApp.');
      });
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
          margin-bottom: 20px;
        }
        .tc-contact-form-section .form-intro {
          font-size: 17px;
          color: #555;
          margin: -30px 0 35px;
          line-height: 1.7;
        }
        .tc-contact-form-section .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 20px;
        }
        .tc-contact-form-section select.form-control {
          appearance: none;
          -webkit-appearance: none;
          background-image: linear-gradient(45deg, transparent 50%, #999 50%), linear-gradient(135deg, #999 50%, transparent 50%);
          background-position: calc(100% - 22px) 50%, calc(100% - 16px) 50%;
          background-size: 6px 6px, 6px 6px;
          background-repeat: no-repeat;
          color: #000;
        }
        .tc-contact-form-section select.form-control:invalid {
          color: #999;
        }
        .tc-contact-form-section .form-whatsapp {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin: 22px 0 0 24px;
          color: #2f7a12;
          font-weight: 500;
        }
        .tc-contact-form-section .form-whatsapp i {
          font-size: 20px;
          color: #25d366;
        }
        @media (max-width: 575px) {
          .tc-contact-form-section .form-row-2 {
            grid-template-columns: 1fr;
          }
          .tc-contact-form-section .form-whatsapp {
            display: flex;
            margin: 18px 0 0;
          }
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
          background: #73bf44;
          color: #fff;
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
          background: #5fa338;
          transform: translateY(-2px);
        }
        .tc-contact-form-section .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }
        .tc-contact-form-section .form-msg {
          margin-top: 16px;
          font-size: 15px;
        }
        .tc-contact-form-section .form-msg.success {
          color: #73bf44;
        }
        .tc-contact-form-section .form-msg.error {
          color: #c00;
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
          <p className="form-intro">
            Tell us a little about your project and we&apos;ll call you back within one business day.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-row-2">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your name *"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  placeholder="Phone / WhatsApp *"
                  autoComplete="tel"
                  inputMode="tel"
                  pattern="[0-9+()\-\s]{7,20}"
                  title="Please enter a valid phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email (optional)"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-row-2">
              <div className="form-group">
                <select
                  name="service"
                  className="form-control"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  aria-label="Service you need"
                >
                  <option value="" disabled>Service you need *</option>
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="city"
                  className="form-control"
                  placeholder="City / area *"
                  autoComplete="address-level2"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="size"
                className="form-control"
                placeholder="Plot or project size, e.g. 1 kanal, 10 marla, 3,000 sq ft (optional)"
                value={formData.size}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                className="form-control"
                placeholder="Tell us about your project (optional)"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Enquiry'}
            </button>
            <a
              className="form-whatsapp"
              href="https://wa.me/923331498340"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp" aria-hidden="true"></i> Prefer WhatsApp? Message us directly
            </a>
            {status === 'success' && (
              <p className="form-msg success">Thank you! Your enquiry has been sent. Our team will call you within one business day.</p>
            )}
            {status === 'error' && (
              <p className="form-msg error">{errorMsg}</p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
