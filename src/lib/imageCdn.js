/**
 * Responsive images through Netlify Image CDN.
 *
 * Netlify resizes and converts images on the fly (WebP/AVIF where the browser supports it),
 * so a 400px-wide card no longer downloads a 1920px original. Enabled with
 * REACT_APP_IMAGE_CDN=netlify (set in netlify.toml). Everywhere else (local dev, other hosts)
 * the original image URL is used unchanged.
 */

const ENABLED = process.env.REACT_APP_IMAGE_CDN === 'netlify';
const REMOTE_ALLOWED = /^https:\/\/[a-z0-9]+\.supabase\.co\//i;

function canTransform(src) {
  if (!ENABLED || !src || typeof src !== 'string') return false;
  if (src.startsWith('/.netlify/') || /\.svg(\?|$)/i.test(src)) return false;
  return src.startsWith('/') || REMOTE_ALLOWED.test(src);
}

/** URL of `src` resized to `width` pixels wide. */
export function cdnImage(src, width = 1200, quality = 75) {
  if (!canTransform(src)) return src;
  return `/.netlify/images?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
}

/** srcset with several widths, for <img srcSet> together with a `sizes` attribute. */
export function cdnSrcSet(src, widths = [480, 800, 1200, 1600]) {
  if (!canTransform(src)) return undefined;
  return widths.map((w) => `${cdnImage(src, w)} ${w}w`).join(', ');
}
