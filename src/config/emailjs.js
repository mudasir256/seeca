import emailjs from '@emailjs/browser';

export const EMAILJS_SERVICE_ID =
  process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_blpvock';

export const EMAILJS_PUBLIC_KEY =
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'ANYOauXAWYAjyU9Zm';

export const EMAILJS_INTERNSHIP_TEMPLATE_ID =
  process.env.REACT_APP_EMAILJS_INTERNSHIP_TEMPLATE_ID || 'template_icj17ut';

export const EMAILJS_JOB_TEMPLATE_ID =
  process.env.REACT_APP_EMAILJS_JOB_TEMPLATE_ID || 'template_wp5p6ps';

let initialized = false;

export function initEmailJS() {
  if (initialized || !EMAILJS_PUBLIC_KEY) return;
  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  initialized = true;
}
