/**
 * Lead tracking for Google Analytics 4.
 *
 * Events (mark these as "Key events" in GA4 > Admin > Events):
 *   whatsapp_click       – any wa.me / WhatsApp link
 *   phone_click          – any tel: link
 *   email_click          – any mailto: link
 *   contact_form_submit  – contact form sent successfully
 *   job_application_submit / internship_application_submit
 */

export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', name, {
    page_path: window.location.pathname,
    ...params,
  });
}

function classifyLink(href) {
  if (!href) return null;
  if (/^tel:/i.test(href)) return 'phone_click';
  if (/^mailto:/i.test(href)) return 'email_click';
  if (/(wa\.me|api\.whatsapp\.com|whatsapp:\/\/)/i.test(href)) return 'whatsapp_click';
  return null;
}

/** One listener for the whole site, so every contact link is tracked wherever it appears. */
export function initLeadTracking() {
  if (typeof document === 'undefined' || window.__seecaLeadTracking) return;
  window.__seecaLeadTracking = true;
  document.addEventListener(
    'click',
    (event) => {
      const link = event.target && event.target.closest ? event.target.closest('a[href]') : null;
      if (!link) return;
      const href = link.getAttribute('href');
      const name = classifyLink(href);
      if (!name) return;
      trackEvent(name, {
        link_url: href,
        link_text: (link.innerText || link.getAttribute('aria-label') || '').trim().slice(0, 80),
      });
    },
    true
  );
}
