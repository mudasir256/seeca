import React, { useState, useEffect, useRef, memo } from 'react';

/**
 * LazyLoad component that only renders children when they're about to enter viewport
 * Uses Intersection Observer API for better performance
 */
const LazyLoad = memo(({ children, fallback = null, rootMargin = '100px' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
          // Disconnect observer after loading to save resources
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      observer.disconnect();
    };
  }, [rootMargin, hasLoaded]);

  return (
    <div ref={ref}>
      {isVisible ? children : fallback}
    </div>
  );
});

LazyLoad.displayName = 'LazyLoad';

export default LazyLoad;

