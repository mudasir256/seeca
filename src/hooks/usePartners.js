import { useEffect, useState } from 'react';
import { snapshot } from '../lib/cmsFallback';
import { getPublicImageUrl, supabase } from '../lib/supabase';

export default function usePartners() {
  const [partners, setPartners] = useState(snapshot.partners);
  const [loading, setLoading] = useState(false);

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
        setPartners(snapshot.partners);
        setLoading(false);
        return;
      }

      setPartners(
        (result.data || []).map((partner) => ({
          id: partner.id,
          name: partner.title,
          logo: getPublicImageUrl('partner-logos', partner.logo_path),
          writeup: partner.description,
        })),
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
