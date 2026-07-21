import { supabase } from './supabase';

export async function uploadResume(file, applicationType) {
  const body = new FormData();
  body.append('resume', file);
  body.append('application_type', applicationType);

  const { data, error } = await supabase.functions.invoke('upload-resume', { body });

  if (error || !data?.resume_url) {
    throw new Error(data?.error || error?.message || 'Resume upload failed.');
  }

  return data.resume_url;
}
