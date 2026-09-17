import emailjs from '@emailjs/browser';
import { EMAILJS_SERVICE_ID } from '../config/emailjs';

const CAREER_INBOX =
  process.env.REACT_APP_CAREER_INBOX || 'seeca.pk@gmail.com';

function formSubmitSucceeded(response, data) {
  if (!response.ok) return false;
  if (data?.success === true || data?.success === 'true') return true;
  return typeof data?.message === 'string' && /success|sent|submitted/i.test(data.message);
}

async function sendWithResumeAttachment({ subject, inboxFields, resume }) {
  const body = new FormData();
  body.append('_subject', subject);
  body.append('_template', 'table');
  body.append('_captcha', 'false');
  body.append('_honey', '');
  if (inboxFields.Email) {
    body.append('_replyto', inboxFields.Email);
  }

  Object.entries(inboxFields).forEach(([label, value]) => {
    if (value == null || String(value).trim() === '') return;
    body.append(label, String(value));
  });

  body.append('attachment', resume, resume.name);

  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(CAREER_INBOX)}`,
    {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body,
    }
  );

  const data = await response.json().catch(() => ({}));
  if (!formSubmitSucceeded(response, data)) {
    throw new Error(data.message || 'Could not send the resume.');
  }
}

async function sendEmailJsNotification({ templateId, emailFields }) {
  await emailjs.send(EMAILJS_SERVICE_ID, templateId, emailFields);
}

export async function submitCareerApplication({
  templateId,
  emailFields,
  inboxFields,
  resume,
  subject,
}) {
  let resumeDelivered = false;
  let notificationSent = false;
  let lastError;

  try {
    await sendWithResumeAttachment({ subject, inboxFields, resume });
    resumeDelivered = true;
  } catch (error) {
    lastError = error;
  }

  try {
    await sendEmailJsNotification({ templateId, emailFields });
    notificationSent = true;
  } catch (error) {
    lastError = error;
  }

  if (resumeDelivered || notificationSent) {
    return { resumeDelivered, notificationSent };
  }

  throw new Error(
    lastError?.text ||
      lastError?.message ||
      `Could not send the application. Please email your resume to ${CAREER_INBOX}.`
  );
}
