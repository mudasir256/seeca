import React from 'react';
import { cdnImage, cdnSrcSet } from '../../lib/imageCdn';

/**
 * OptimizedImage – drop-in replacement for <img loading="lazy" decoding="async"> with performance optimizations.
 * Uses native loading="lazy" and decoding="async" for faster page load.
 * (Next.js Image is only available in Next.js; this gives similar benefits in Create React App.)
 */
function OptimizedImage({
  src,
  alt = '',
  className = '',
  style,
  loading = 'lazy',
  decoding = 'async',
  sizes = '(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw',
  ...rest
}) {
  return (
    <img
      src={cdnImage(src, 800)}
      srcSet={cdnSrcSet(src, [400, 800, 1200])}
      sizes={sizes}
      alt={alt}
      className={className}
      style={style}
      loading={loading}
      decoding={decoding}
      {...rest}
    />
  );
}

export default React.memo(OptimizedImage);
