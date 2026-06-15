import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import {
  initEmailJS,
  EMAILJS_SERVICE_ID,
  EMAILJS_JOB_TEMPLATE_ID,
} from '../../../config/emailjs';

function ApplyJobForm() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
  });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    initEmailJS();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!EMAILJS_SERVICE_ID || !EMAILJS_JOB_TEMPLATE_ID) {
      setStatus('error');
      setErrorMsg('Email service is not configured. Please try again later.');
      return;
    }

    setStatus('sending');

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_JOB_TEMPLATE_ID,
        formRef.current
      )
      .then(() => {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          position: '',
          experience: '',
          coverLetter: '',
        });
        if (formRef.current) formRef.current.reset();
      })
      .catch((err) => {
        setStatus('error');
        setErrorMsg(err?.text || 'Something went wrong. Please try again.');
      });
  };

  const formStyles = `
    .tc-career-form-section {
      padding: 80px 24px 100px;
      min-height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      background: linear-gradient(180deg, #f8faf8 0%, #fff 50%);
    }
    .tc-career-form-section .form-card {
      max-width: 820px;
      width: 100%;
      background: #fff;
      border-radius: 16px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08), 0 2px 12px rgba(0, 0, 0, 0.04);
      padding: 56px 48px;
      border: 1px solid rgba(115, 191, 68, 0.12);
    }
    .tc-career-form-section .form-card h2 {
      font-size: 36px;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 8px;
      text-align: center;
      letter-spacing: -0.5px;
      line-height: 1.2;
    }
    .tc-career-form-section .form-card .form-subtitle {
      text-align: center;
      color: #666;
      font-size: 15px;
      margin-bottom: 40px;
    }
    .tc-career-form-section .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-bottom: 24px;
    }
    .tc-career-form-section .form-row-full {
      margin-bottom: 24px;
    }
    .tc-career-form-section .form-group {
      margin-bottom: 0;
    }
    .tc-career-form-section .form-row-full .form-group {
      margin-bottom: 24px;
    }
    .tc-career-form-section .form-row-full .form-group:last-child {
      margin-bottom: 0;
    }
    .tc-career-form-section .form-control {
      width: 100%;
      padding: 16px 20px;
      border: 1px solid #e8e8e8;
      border-radius: 10px;
      font-size: 15px;
      color: #1a1a1a;
      background: #fafafa;
      transition: all 0.25s ease;
      font-family: inherit;
    }
    .tc-career-form-section .form-control:hover {
      border-color: #d0d0d0;
      background: #fff;
    }
    .tc-career-form-section .form-control:focus {
      outline: none;
      border-color: #73bf44;
      background: #fff;
      box-shadow: 0 0 0 3px rgba(115, 191, 68, 0.15);
    }
    .tc-career-form-section .form-control::placeholder {
      color: #999;
      font-weight: 400;
    }
    .tc-career-form-section textarea.form-control {
      min-height: 140px;
      resize: vertical;
      font-family: inherit;
    }
    .tc-career-form-section .submit-wrap {
      text-align: center;
      margin-top: 32px;
    }
    .tc-career-form-section .submit-btn {
      padding: 16px 48px;
      background: #73bf44;
      color: #fff;
      border: none;
      border-radius: 10px;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.25s ease;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      box-shadow: 0 4px 14px rgba(115, 191, 68, 0.35);
    }
    .tc-career-form-section .submit-btn:hover {
      background: #5fa836;
      color: #fff;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(115, 191, 68, 0.4);
    }
    .tc-career-form-section .submit-btn:disabled {
      opacity: 0.7;
      cursor: not-allowed;
      transform: none;
    }
    .tc-career-form-section .form-msg {
      text-align: center;
      margin-top: 16px;
      font-size: 14px;
      font-weight: 500;
    }
    .tc-career-form-section .form-msg.success { color: #73bf44; }
    .tc-career-form-section .form-msg.error { color: #e74c3c; }
    @media (max-width: 767px) {
      .tc-career-form-section { padding: 50px 20px 70px; }
      .tc-career-form-section .form-card {
        padding: 40px 24px;
        border-radius: 12px;
      }
      .tc-career-form-section .form-row {
        grid-template-columns: 1fr;
        gap: 20px;
        margin-bottom: 20px;
      }
      .tc-career-form-section .form-card h2 { font-size: 28px; margin-bottom: 6px; }
      .tc-career-form-section .form-card .form-subtitle { font-size: 14px; margin-bottom: 32px; }
      .tc-career-form-section .form-control { padding: 14px 18px; font-size: 15px; }
      .tc-career-form-section .submit-btn { padding: 14px 40px; font-size: 14px; }
    }
    @media (max-width: 575px) {
      .tc-career-form-section .form-card { padding: 32px 20px; }
      .tc-career-form-section .form-card h2 { font-size: 24px; }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: formStyles }} />
      <section className="tc-career-form-section">
        <div className="form-card">
          <h2>Apply for Job</h2>
          <p className="form-subtitle">Join our team — fill in your details below.</p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Full name *"
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
                  placeholder="Email address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  placeholder="Phone number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="position"
                  className="form-control"
                  placeholder="Position applying for *"
                  value={formData.position}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-row-full">
              <div className="form-group">
                <input
                  type="text"
                  name="experience"
                  className="form-control"
                  placeholder="Years of experience (e.g. 2 years, 5+ years)"
                  value={formData.experience}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row-full">
              <div className="form-group">
                <textarea
                  name="coverLetter"
                  className="form-control"
                  placeholder="Cover letter / Tell us about yourself and why you want to join"
                  value={formData.coverLetter}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="submit-wrap">
              <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Submit Application'}
              </button>
              {status === 'success' && (
                <p className="form-msg success">Application submitted successfully!</p>
              )}
              {status === 'error' && (
                <p className="form-msg error">{errorMsg}</p>
              )}
              {status === 'idle' && errorMsg && (
                <p className="form-msg error">{errorMsg}</p>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default ApplyJobForm;
