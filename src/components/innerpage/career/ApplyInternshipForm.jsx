import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import {
  initEmailJS,
  EMAILJS_SERVICE_ID,
  EMAILJS_INTERNSHIP_TEMPLATE_ID,
} from '../../../config/emailjs';
import { uploadResume } from '../../../lib/resumeUpload';

const MAX_RESUME_SIZE = 5 * 1024 * 1024;
const RESUME_EXTENSIONS = /\.(pdf|doc|docx)$/i;

function ApplyInternshipForm() {
  const formRef = useRef();
  const resumeInputRef = useRef();
  const resumeUrlRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    degree: '',
    fieldOfStudy: '',
    preferredDuration: '',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    const resume = resumeInputRef.current?.files?.[0];
    if (!resume) {
      setStatus('error');
      setErrorMsg('Please upload your resume.');
      return;
    }
    if (!RESUME_EXTENSIONS.test(resume.name)) {
      setStatus('error');
      setErrorMsg('Resume must be a PDF, DOC, or DOCX file.');
      return;
    }
    if (resume.size > MAX_RESUME_SIZE) {
      setStatus('error');
      setErrorMsg('Resume must be 5 MB or smaller.');
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_INTERNSHIP_TEMPLATE_ID) {
      setStatus('error');
      setErrorMsg('Email service is not configured. Please try again later.');
      return;
    }

    setStatus('sending');

    try {
      const resumeUrl = await uploadResume(resume, 'internships');
      resumeUrlRef.current.value = resumeUrl;
      formRef.current.elements.coverLetter.value = [
        formData.coverLetter,
        `Click here to get Resume: ${resumeUrl}`,
      ]
        .filter(Boolean)
        .join('\n\n');

      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_INTERNSHIP_TEMPLATE_ID,
        formRef.current
      );

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        institution: '',
        degree: '',
        fieldOfStudy: '',
        preferredDuration: '',
        coverLetter: '',
      });
      if (formRef.current) formRef.current.reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg(err?.text || err?.message || 'Something went wrong. Please try again.');
    }
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
    .tc-career-form-section .file-label {
      display: block;
      margin-bottom: 8px;
      color: #333;
      font-size: 14px;
      font-weight: 600;
    }
    .tc-career-form-section input[type="file"].form-control {
      padding: 12px;
      cursor: pointer;
    }
    .tc-career-form-section input[type="file"].form-control::file-selector-button {
      padding: 9px 16px;
      margin-right: 14px;
      border: 0;
      border-radius: 7px;
      background: #73bf44;
      color: #fff;
      font-family: inherit;
      font-weight: 600;
      cursor: pointer;
    }
    .tc-career-form-section .file-help {
      display: block;
      margin-top: 7px;
      color: #777;
      font-size: 12px;
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
          <h2>Apply for Internship</h2>
          <p className="form-subtitle">Start your career with us — fill in your details below.</p>
          <form ref={formRef} onSubmit={handleSubmit} encType="multipart/form-data">
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
                  name="institution"
                  className="form-control"
                  placeholder="University / College *"
                  value={formData.institution}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="degree"
                  className="form-control"
                  placeholder="Degree (e.g. B.Arch, B.Sc) *"
                  value={formData.degree}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="fieldOfStudy"
                  className="form-control"
                  placeholder="Field of study *"
                  value={formData.fieldOfStudy}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-row-full">
              <div className="form-group">
                <input
                  type="text"
                  name="preferredDuration"
                  className="form-control"
                  placeholder="Preferred internship duration (e.g. 3 months, 6 months)"
                  value={formData.preferredDuration}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row-full">
              <div className="form-group">
                <textarea
                  name="coverLetter"
                  className="form-control"
                  placeholder="Cover letter / Why do you want to intern with us?"
                  value={formData.coverLetter}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row-full">
              <div className="form-group">
                <label className="file-label" htmlFor="internship-resume">
                  Upload resume *
                </label>
                <input
                  id="internship-resume"
                  type="file"
                  ref={resumeInputRef}
                  className="form-control"
                  accept=".pdf,.doc,.docx"
                  required
                />
                <small className="file-help">PDF, DOC, or DOCX — maximum 5 MB</small>
              </div>
            </div>
            <input ref={resumeUrlRef} type="hidden" name="resume_url" />
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

export default ApplyInternshipForm;
