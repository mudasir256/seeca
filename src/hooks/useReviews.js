import { useEffect, useState } from 'react';
import { mergeWithSnapshot, snapshot } from '../lib/cmsFallback';
import { supabase } from '../lib/supabase';

/** The same review text should only be shown once. */
function uniqueReviews(list) {
  const seen = new Set();
  return list.filter((item) => {
    const key = (item.text || '').trim().toLowerCase();
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export default function useReviews() {
  const [reviews, setReviews] = useState(() => uniqueReviews(snapshot.reviews));

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
        setReviews(uniqueReviews(snapshot.reviews));
        return;
      }

      setReviews(
        uniqueReviews(mergeWithSnapshot(
          (result.data || []).map((item) => ({
            id: item.id,
            text: item.review,
            name: item.username,
            role: item.company,
          })),
          snapshot.reviews,
        )),
      );
    }

    loadReviews();

    return () => {
      active = false;
    };
  }, []);

  return reviews;
}
