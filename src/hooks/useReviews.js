import { useEffect, useState } from 'react';
import { snapshot } from '../lib/cmsFallback';
import { supabase } from '../lib/supabase';

export default function useReviews() {
  const [reviews, setReviews] = useState(snapshot.reviews);

  useEffect(() => {
    let active = true;

    async function loadReviews() {
      const result = await supabase
        .from('reviews')
        .select('id, review, username, company, created_at')
        .order('created_at', { ascending: true });

      if (!active) return;

      if (result.error) {
        console.error('Could not load reviews:', result.error.message);
        setReviews(snapshot.reviews);
        return;
      }

      setReviews(
        (result.data || []).map((item) => ({
          id: item.id,
          text: item.review,
          name: item.username,
          role: item.company,
        })),
      );
    }

    loadReviews();

    return () => {
      active = false;
    };
  }, []);

  return reviews;
}
