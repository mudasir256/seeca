import { createClient } from 'npm:@supabase/supabase-js@2';

const BUCKET = 'career-resumes';
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const LINK_EXPIRY_SECONDS = 60 * 60 * 24 * 7;
const ALLOWED_EXTENSIONS = /\.(pdf|doc|docx)$/i;
const ALLOWED_MIME_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];
const DEFAULT_ORIGINS = [
  'https://seeca.pk',
  'https://www.seeca.pk',
  'http://localhost:3000',
  'http://localhost:3001',
];

function corsHeaders(origin: string | null) {
  const configuredOrigins = Deno.env.get('ALLOWED_ORIGINS')
    ?.split(',')
    .map((value) => value.trim())
    .filter(Boolean);
  const allowedOrigins = configuredOrigins?.length ? configuredOrigins : DEFAULT_ORIGINS;
  const allowedOrigin = origin && allowedOrigins.includes(origin) ? origin : allowedOrigins[0];

  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    Vary: 'Origin',
  };
}

function json(body: Record<string, unknown>, status: number, headers: Record<string, string>) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...headers, 'Content-Type': 'application/json' },
  });
}

Deno.serve(async (request) => {
  const origin = request.headers.get('origin');
  const headers = corsHeaders(origin);

  if (request.method === 'OPTIONS') {
    return new Response('ok', { headers });
  }

  const configuredOrigins = Deno.env.get('ALLOWED_ORIGINS')
    ?.split(',')
    .map((value) => value.trim())
    .filter(Boolean) || DEFAULT_ORIGINS;

  if (request.method !== 'POST' || !origin || !configuredOrigins.includes(origin)) {
    return json({ error: 'Request not allowed.' }, 403, headers);
  }

  try {
    const formData = await request.formData();
    const file = formData.get('resume');
    const applicationType = formData.get('application_type');

    if (!(file instanceof File)) {
      return json({ error: 'A resume file is required.' }, 400, headers);
    }
    if (applicationType !== 'jobs' && applicationType !== 'internships') {
      return json({ error: 'Invalid application type.' }, 400, headers);
    }
    if (!ALLOWED_EXTENSIONS.test(file.name)) {
      return json({ error: 'Resume must be a PDF, DOC, or DOCX file.' }, 400, headers);
    }
    if (file.size > MAX_FILE_SIZE) {
      return json({ error: 'Resume must be 5 MB or smaller.' }, 400, headers);
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    if (!supabaseUrl || !serviceRoleKey) {
      throw new Error('Supabase function credentials are unavailable.');
    }

    const admin = createClient(supabaseUrl, serviceRoleKey);
    const { error: bucketLookupError } = await admin.storage.getBucket(BUCKET);
    if (bucketLookupError) {
      const { error: bucketCreateError } = await admin.storage.createBucket(BUCKET, {
        public: false,
        fileSizeLimit: MAX_FILE_SIZE,
        allowedMimeTypes: ALLOWED_MIME_TYPES,
      });
      if (bucketCreateError && !bucketCreateError.message.toLowerCase().includes('already exists')) {
        throw bucketCreateError;
      }
    }

    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '-');
    const path = `${applicationType}/${new Date().toISOString().slice(0, 10)}/${crypto.randomUUID()}-${safeName}`;

    const { error: uploadError } = await admin.storage.from(BUCKET).upload(path, file, {
      contentType: file.type || 'application/octet-stream',
      upsert: false,
    });
    if (uploadError) throw uploadError;

    const { data, error: linkError } = await admin.storage
      .from(BUCKET)
      .createSignedUrl(path, LINK_EXPIRY_SECONDS);

    if (linkError || !data?.signedUrl) {
      await admin.storage.from(BUCKET).remove([path]);
      throw linkError || new Error('Could not create the resume link.');
    }

    return json({ resume_url: data.signedUrl }, 200, headers);
  } catch (error) {
    console.error('Resume upload failed:', error);
    return json({ error: 'Resume upload failed. Please try again.' }, 500, headers);
  }
});
