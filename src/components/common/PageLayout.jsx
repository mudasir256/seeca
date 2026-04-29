import React, { useEffect, useRef, useMemo, memo } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import Loader from './Loader';
import { useScrollSmoother } from '../../hooks/useScrollSmoother';
import { useLoader } from '../../hooks/useLoader';
import { useCommonScripts } from '../../hooks/useCommonScripts';

// Memoized static CSS styles to prevent recreation on every render
const SMOOTH_SCROLL_STYLES = `
  html {
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    overflow-x: hidden;
    overflow-y: auto;
    height: auto;
  }
  body {
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    overflow-x: hidden;
    overflow-y: auto;
    position: relative;
    min-height: 100%;
    height: auto;
  }
  .smooth-scroll-content {
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    will-change: scroll-position;
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    contain: layout style paint;
  }
  /* Optimize images for better scrolling performance */
  img {
    content-visibility: auto;
    contain-intrinsic-size: auto 300px;
  }
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  /* Improve scroll performance */
  * {
    -webkit-tap-highlight-color: transparent;
  }
  /* Force hardware acceleration for common animated elements */
  .wow, [class*="animate"], [data-wow] {
    transform: translateZ(0);
    backface-visibility: hidden;
  }
  /* Mobile optimizations - Native smooth scrolling only */
  @media (max-width: 991px) {
    html, body {
      -webkit-overflow-scrolling: touch;
      overflow-scrolling: touch;
      scroll-behavior: auto;
      overscroll-behavior-y: auto;
    }
    .smooth-scroll-content {
      -webkit-overflow-scrolling: touch;
      overflow-scrolling: touch;
      scroll-behavior: auto;
      will-change: auto;
      backface-visibility: visible;
      -webkit-backface-visibility: visible;
      contain: none;
    }
    /* Keep tap highlight optimization only */
    * {
      -webkit-tap-highlight-color: transparent;
    }
    /* Ensure ScrollSmoother container doesn't interfere on mobile / when smoother is disabled */
    #scrollsmoother-container,
    .smooth-scroll-content {
      position: relative !important;
      transform: none !important;
      -webkit-transform: none !important;
      overflow: visible !important;
      min-height: auto;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    html, body, .smooth-scroll-content {
      scroll-behavior: auto;
    }
  }
`;

/**
 * Layout component that handles common initialization for all pages
 * Prevents duplicate initialization and ensures proper cleanup
 * Optimized with React.memo and useMemo for better performance
 */
const PageLayout = memo(({ 
  children, 
  cssFiles = [], 
  bodyClassName = '',
  showLoader = true,
  enableScrollSmoother = true,
  containerId = 'scrollsmoother-container',
  fixedElements = null // Elements that should be outside scroll container (like fixed navbar)
}) => {
  const location = useLocation();
  const containerRef = useRef(null);
  
  // Initialize common scripts
  useCommonScripts();

  // Initialize loader (only shows once per session)
  useLoader(showLoader);

  // Initialize scroll smoother
  useScrollSmoother(containerId, enableScrollSmoother);

  // Memoize body class names parsing
  const bodyClasses = useMemo(() => {
    return bodyClassName ? bodyClassName.split(' ').filter(Boolean) : [];
  }, [bodyClassName]);

  // Apply body className
  useEffect(() => {
    if (bodyClasses.length > 0) {
      document.body.classList.add(...bodyClasses);
      return () => {
        document.body.classList.remove(...bodyClasses);
      };
    }
  }, [bodyClasses]);

  // Guard against global scroll-lock leftovers from modal/libs on mobile Android.
  useEffect(() => {
    const unlockIfStuck = () => {
      const hasFancybox = !!document.querySelector('.fancybox-container');
      const hasLity = !!document.querySelector('.lity.lity-opened');
      const hasLoader = !!document.querySelector('.loader-wrap:not([style*="display: none"])');

      if (hasFancybox || hasLity || hasLoader) return;

      document.documentElement.classList.remove('fancybox-enabled');
      document.body.classList.remove('compensate-for-scrollbar');
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.style.height = '';
      document.body.style.overflow = '';
      document.documentElement.style.height = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.overflowY = '';
      document.body.style.overflowY = '';
    };

    unlockIfStuck();
    const t1 = setTimeout(unlockIfStuck, 200);
    const t2 = setTimeout(unlockIfStuck, 1200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [location.pathname]);

  // Handle container ref to prevent React from managing it during unmount
  useEffect(() => {
    // Store the original parent before ScrollSmoother wraps it
    if (containerRef.current) {
      const container = containerRef.current;
      // Mark container to prevent React from trying to remove ScrollSmoother's wrappers
      container.setAttribute('data-smoother-managed', 'true');
    }
  }, [location.pathname]);

  // Memoize CSS file links to prevent recreation
  const cssLinks = useMemo(() => {
    return cssFiles.map((cssFile, index) => (
      <link
        key={`${cssFile}-${index}`}
        rel="stylesheet"
        type="text/css"
        href={cssFile}
      />
    ));
  }, [cssFiles]);

  // Memoize wrapper key
  const wrapperKey = useMemo(() => `wrapper-${location.pathname}`, [location.pathname]);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: SMOOTH_SCROLL_STYLES}} />
      <Helmet>
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        {/* Preload critical CSS */}
        {cssFiles.length > 0 && (
          <link rel="preload" href={cssFiles[0]} as="style" />
        )}
        {cssLinks}
        {/* Resource hints for better performance */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      </Helmet>
      {showLoader && <Loader />}
      {fixedElements}
      {/* Use a stable wrapper that React manages, and ScrollSmoother manages the inner content */}
      <div key={wrapperKey}>
        <div 
          ref={containerRef}
          className="smooth-scroll-content" 
          id={containerId}
        >
          {children}
        </div>
      </div>
    </>
  );
});

PageLayout.displayName = 'PageLayout';

export default PageLayout;

