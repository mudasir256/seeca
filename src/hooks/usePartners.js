import { useEffect, useState } from 'react';
import { getPublicImageUrl, supabase } from '../lib/supabase';

export default function usePartners() {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function loadPartners() {
      const { data, error } = await supabase
        .from('partners')
        .select('id, title, description, logo_path, created_at')
        .order('created_at', { ascending: true });

      if (!active) return;

      if (error) {
        console.error('Could not load partners:', error.message);
        setLoading(false);
        return;
      }

      setPartners(
        (data || []).map((partner) => ({
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
