import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function useReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    let active = true;

    async function loadReviews() {
      const { data, error } = await supabase
        .from('reviews')
        .select('id, review, username, company, created_at')
        .order('created_at', { ascending: true });

      if (!active) return;

      if (error) {
        console.error('Could not load reviews:', error.message);
        return;
      }

      setReviews(
        (data || []).map((item) => ({
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
