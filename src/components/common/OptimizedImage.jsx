import React from 'react';

/**
 * OptimizedImage – drop-in replacement for <img> with performance optimizations.
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
  ...rest
}) {
  return (
    <img
      src={src}
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
