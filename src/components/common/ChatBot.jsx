import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../../lib/analytics';

/**
 * Quick enquiry box (the round chat button).
 *
 * Instead of a scripted "bot" with canned answers, visitors pick what they need, add a few
 * details and continue on WhatsApp with the message already written, or call directly.
 * Every enquiry reaches a real person.
 */

const WHATSAPP_NUMBER = '923331498340';
const PHONE_DISPLAY = '+92 333 1498340';

const TOPICS = [
  'House / building design',
  'Interior design',
  'Construction',
  'Renovation',
  'Commercial project',
  'Something else',
];

const STYLES = `
  .seeca-chatbot-fab {
    position: fixed;
    bottom: 90px;
    right: 20px;
    width: 56px;
    height: 56px;
    background-color: #73bf44;
    border-radius: 50%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 14px rgba(115, 191, 68, 0.4);
    z-index: 9998;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .seeca-chatbot-fab:hover {
    transform: scale(1.08);
    box-shadow: 0 6px 20px rgba(115, 191, 68, 0.5);
  }
  .seeca-chatbot-fab i { color: #fff; font-size: 24px; }

  .seeca-enquiry {
    position: fixed;
    bottom: 90px;
    right: 20px;
    width: 360px;
    max-width: calc(100vw - 40px);
    max-height: calc(100vh - 120px);
    overflow-y: auto;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.18);
    z-index: 9999;
    font-size: 15px;
  }
  .seeca-enquiry .enq-head {
    background: #73bf44;
    color: #fff;
    padding: 18px 20px;
    border-radius: 16px 16px 0 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
  }
  .seeca-enquiry .enq-head h3 { color: #fff; font-size: 18px; font-weight: 600; margin: 0 0 4px; }
  .seeca-enquiry .enq-head p { color: rgba(255, 255, 255, 0.92); font-size: 13px; margin: 0; line-height: 1.5; }
  .seeca-enquiry .enq-close {
    background: rgba(255, 255, 255, 0.2);
    border: 0;
    color: #fff;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    flex-shrink: 0;
    cursor: pointer;
    font-size: 16px;
  }
  .seeca-enquiry .enq-body { padding: 18px 20px 20px; }
  .seeca-enquiry .enq-label { font-weight: 600; color: #111; margin: 0 0 10px; font-size: 14px; }
  .seeca-enquiry .enq-topics { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
  .seeca-enquiry .enq-topic {
    border: 1px solid #dcdcdc;
    background: #fff;
    border-radius: 999px;
    padding: 7px 14px;
    font-size: 13px;
    color: #333;
    cursor: pointer;
  }
  .seeca-enquiry .enq-topic.active { background: #73bf44; border-color: #73bf44; color: #fff; }
  .seeca-enquiry input,
  .seeca-enquiry textarea {
    width: 100%;
    border: 1px solid #e3e3e3;
    border-radius: 10px;
    padding: 11px 14px;
    font-size: 14px;
    margin-bottom: 10px;
    font-family: inherit;
  }
  .seeca-enquiry textarea { min-height: 80px; resize: vertical; }
  .seeca-enquiry input:focus,
  .seeca-enquiry textarea:focus { outline: none; border-color: #73bf44; }
  .seeca-enquiry .enq-whatsapp {
    width: 100%;
    border: 0;
    border-radius: 999px;
    background: #25d366;
    color: #fff;
    font-weight: 600;
    padding: 13px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    margin-top: 4px;
  }
  .seeca-enquiry .enq-whatsapp:disabled { opacity: 0.55; cursor: not-allowed; }
  .seeca-enquiry .enq-whatsapp i { font-size: 18px; }
  .seeca-enquiry .enq-alt {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-top: 14px;
    font-size: 13px;
  }
  .seeca-enquiry .enq-alt a { color: #2f7a12; font-weight: 500; }
  @media (max-width: 575px) {
    .seeca-enquiry { right: 12px; left: 12px; width: auto; max-width: none; bottom: 80px; }
  }
`;

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [topic, setTopic] = useState('');
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const panelRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKey);
    if (panelRef.current) panelRef.current.focus();
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const openPanel = () => {
    setIsOpen(true);
    trackEvent('enquiry_box_open');
  };

  const sendOnWhatsApp = (e) => {
    e.preventDefault();
    const lines = [
      `Assalam o Alaikum SEECA, I'd like to discuss a project.`,
      `Service: ${topic}`,
      name ? `Name: ${name}` : null,
      details ? `Details: ${details}` : null,
      `(Sent from seeca.pk${typeof window !== 'undefined' ? window.location.pathname : ''})`,
    ].filter(Boolean);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
    // Same key event as every other WhatsApp link on the site.
    trackEvent('whatsapp_click', { link_url: 'wa.me', link_text: 'Enquiry box', service: topic });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      {!isOpen && (
        <button
          type="button"
          onClick={openPanel}
          className="seeca-chatbot-fab"
          aria-label="Start a project enquiry with SEECA"
        >
          <i className="fas fa-comments" aria-hidden="true" />
        </button>
      )}

      {isOpen && (
        <div
          className="seeca-enquiry"
          role="dialog"
          aria-modal="false"
          aria-labelledby="seeca-enquiry-title"
          tabIndex={-1}
          ref={panelRef}
        >
          <div className="enq-head">
            <div>
              <h3 id="seeca-enquiry-title">Start your project</h3>
              <p>Tell us what you need and our team will reply on WhatsApp.</p>
            </div>
            <button
              type="button"
              className="enq-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close enquiry box"
            >
              <i className="fas fa-times" aria-hidden="true" />
            </button>
          </div>

          <form className="enq-body" onSubmit={sendOnWhatsApp}>
            <p className="enq-label">What can we help you with?</p>
            <div className="enq-topics" role="group" aria-label="Choose a service">
              {TOPICS.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`enq-topic ${topic === item ? 'active' : ''}`}
                  aria-pressed={topic === item}
                  onClick={() => setTopic(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="Your name (optional)"
              aria-label="Your name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              placeholder="City and project details, e.g. 1 kanal house in Bahria Town (optional)"
              aria-label="Project details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
            <button type="submit" className="enq-whatsapp" disabled={!topic}>
              <i className="fab fa-whatsapp" aria-hidden="true" />
              {topic ? 'Continue on WhatsApp' : 'Choose a service to continue'}
            </button>
            <div className="enq-alt">
              <a href={`tel:+${WHATSAPP_NUMBER}`}>
                <i className="fas fa-phone-alt" aria-hidden="true" /> {PHONE_DISPLAY}
              </a>
              <Link to="/contact" onClick={() => setIsOpen(false)}>Use the contact form</Link>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
