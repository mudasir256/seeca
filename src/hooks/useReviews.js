import { useEffect, useState } from 'react';
import { mergeWithSnapshot, snapshot } from '../lib/cmsFallback';
import { supabase } from '../lib/supabase';

// Reviews that are not from clients (e.g. the website developer's test review in the CMS).
const NOT_CLIENT_REVIEW = /clapit|mudasir/i;

/** Client reviews only, and the same review text only once. */
function uniqueReviews(list) {
  const seen = new Set();
  return list.filter((item) => {
    if (NOT_CLIENT_REVIEW.test(`${item.name || ''} ${item.role || ''}`)) return false;
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
