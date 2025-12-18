import { useEffect, useRef } from 'react';

/**
 * Custom hook to manage loader animation
 * Prevents continuous loading on route changes
 */
export const useLoader = (showLoader = true) => {
  const loaderRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!showLoader || typeof window === 'undefined' || !window.gsap) return;

    const loaderWrap = document.querySelector('.loader-wrap');
    if (!loaderWrap) return;

    // Only animate once per session or if explicitly reset
    if (hasAnimatedRef.current && sessionStorage.getItem('loaderAnimated') === 'true') {
      // Hide loader immediately if already animated
      loaderWrap.style.display = 'none';
      loaderWrap.style.zIndex = '-1';
      return;
    }

    const svg = document.getElementById('svg');
    if (!svg) return;

    const tl = window.gsap.timeline();
    const curve = 'M0 502S175 272 500 272s500 230 500 230V0H0Z';
    const flat = 'M0 2S175 1 500 1s500 1 500 1V0H0Z';

    tl.to('.loader-wrap-heading .load-text , .loader-wrap-heading .cont', {
      delay: 1.5,
      y: -100,
      opacity: 0,
    });
    tl.to(svg, {
      duration: 0.5,
      attr: { d: curve },
      ease: 'power2.easeIn',
    }).to(svg, {
      duration: 0.5,
      attr: { d: flat },
      ease: 'power2.easeOut',
    });
    tl.to('.loader-wrap', {
      y: -1500,
    });
    tl.to('.loader-wrap', {
      zIndex: -1,
      display: 'none',
    });
    tl.from(
      'header , .header',
      {
        y: 200,
      },
      '-=1.5'
    );
    tl.from(
      'header .container , .header .container',
      {
        y: 40,
        opacity: 0,
        delay: 0.3,
      },
      '-=1.5'
    );

    hasAnimatedRef.current = true;
    sessionStorage.setItem('loaderAnimated', 'true');

    // Mark body as loaded
    const body = document.body;
    body.classList.add('loaded');
    setTimeout(() => {
      body.classList.remove('loaded');
    }, 1500);

    loaderRef.current = tl;

    return () => {
      if (loaderRef.current) {
        loaderRef.current.kill();
      }
    };
  }, [showLoader]);

  // Reset loader animation (call this when needed)
  const resetLoader = () => {
    hasAnimatedRef.current = false;
    sessionStorage.removeItem('loaderAnimated');
  };

  return { resetLoader };
};

