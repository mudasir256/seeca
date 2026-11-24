import { useEffect, useState } from 'react';
import { initialCms, mergeWithSnapshot, rememberCms, snapshot } from '../lib/cmsFallback';
import { getPublicImageUrl, supabase } from '../lib/supabase';

export default function usePartners() {
  const [partners, setPartners] = useState(() => initialCms('partners', snapshot.partners));
  const [loading, setLoading] = useState(false);

  // Pre-render only: record what is shown, so it can be saved into the page.
  useEffect(() => rememberCms('partners', partners), [partners]);

  useEffect(() => {
    let active = true;

    async function loadPartners() {
      const result = await supabase
        .from('partners')
        .select('id, title, description, logo_path, created_at')
        .order('created_at', { ascending: true });

      if (!active) return;

      if (result.error) {
        console.error('Could not load partners:', result.error.message);
        setPartners(initialCms('partners', snapshot.partners));
        setLoading(false);
        return;
      }

      setPartners(
        mergeWithSnapshot(
          (result.data || []).map((partner) => ({
            id: partner.id,
            name: partner.title,
            logo: getPublicImageUrl('partner-logos', partner.logo_path),
            writeup: partner.description,
          })),
          snapshot.partners,
        ),
      );
      setLoading(false);
    }

    loadPartners();
    return () => {
      active = false;
    };
  }, []);

  return { partners, loading };
}
