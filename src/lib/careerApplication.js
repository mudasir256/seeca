import emailjs from '@emailjs/browser';
import { EMAILJS_SERVICE_ID } from '../config/emailjs';

export function normalizeResumeLink(value = '') {
  const trimmed = value.trim();
  if (!trimmed) return '';
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

export async function submitCareerApplication({ templateId, emailFields }) {
  await emailjs.send(EMAILJS_SERVICE_ID, templateId, emailFields);
}
