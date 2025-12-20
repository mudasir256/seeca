import { useEffect, useLayoutEffect, useRef } from 'react';

/**
 * Custom hook to initialize and cleanup GSAP ScrollSmoother
 * Prevents multiple instances and ensures proper cleanup on route changes
 */
export const useScrollSmoother = (containerId = 'scrollsmoother-container', enabled = true) => {
  const smootherRef = useRef(null);
  const scrollTriggersRef = useRef([]);
  const containerRef = useRef(null);

  // Kill smoother synchronously before React unmounts (useLayoutEffect runs before DOM updates)
  useLayoutEffect(() => {
    return () => {
      // Kill smoother before React tries to unmount
      // This runs synchronously before React's commit phase
      if (window.scrollSmootherInstance) {
        try {
          const smoother = window.scrollSmootherInstance;
          
          // Get the content element before killing
          let contentElement = null;
          try {
            contentElement = smoother.content();
          } catch (e) {
            // Ignore
          }
          
          // Patch Node.prototype.removeChild globally to catch React's removeChild calls
          // This is a workaround for ScrollSmoother's DOM manipulation
          if (!window.__removeChildPatched) {
            const originalRemoveChild = Node.prototype.removeChild;
            Node.prototype.removeChild = function(child) {
              try {
                return originalRemoveChild.call(this, child);
              } catch (e) {
                // If removeChild fails (node not a child), it's likely because ScrollSmoother moved it
                // Check if the child is still in the DOM somewhere
                if (child && child.parentNode) {
                  // Child exists elsewhere, just return it to satisfy React
                  return child;
                }
                // If child doesn't exist, throw the error (normal behavior)
                throw e;
              }
            };
            window.__removeChildPatched = true;
          }
          
          // Kill all ScrollTriggers first
          if (window.ScrollTrigger) {
            try {
              window.ScrollTrigger.getAll().forEach(st => {
                try {
                  st.kill();
                } catch (e) {
                  // Ignore
                }
              });
            } catch (e) {
              // Ignore
            }
          }
          
          // Kill the smoother and restore DOM structure
          try {
            // Try to get the wrapper element that ScrollSmoother might have created
            const wrapper = document.querySelector('#smooth-wrapper, .smooth-wrapper');
            
            // Kill the smoother - this should restore the DOM
            smoother.kill(true); // Use true to let it clean up DOM properly
            
            // If wrapper still exists, manually remove it
            if (wrapper && wrapper.parentElement) {
              try {
                // Move children back to parent if needed
                while (wrapper.firstChild) {
                  wrapper.parentElement.insertBefore(wrapper.firstChild, wrapper);
                }
                wrapper.remove();
              } catch (e) {
                // Ignore
              }
            }
          } catch (e) {
            // If kill fails, try to manually clean up
            try {
              const wrapper = document.querySelector('#smooth-wrapper, .smooth-wrapper');
              if (wrapper && contentElement) {
                // Try to restore content element
                if (wrapper.contains(contentElement)) {
                  const parent = wrapper.parentElement;
                  if (parent) {
                    parent.insertBefore(contentElement, wrapper);
                    wrapper.remove();
                  }
                }
              }
            } catch (e2) {
              // Ignore
            }
          }
          
          // Note: We don't restore removeChild here because other components might still need the patch
          // The patch is global and will remain until page reload
          
          window.scrollSmootherInstance = null;
        } catch (e) {
          // Ignore errors
        }
      }
      if (smootherRef.current) {
        smootherRef.current = null;
      }
      // Clear scroll triggers
      scrollTriggersRef.current = [];
    };
  }, [containerId]);

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    let timeoutId = null;
    let isMounted = true;
    let rafId = null;

    // Helper function to setup animations
    const setupAnimations = (smoother) => {
      if (!isMounted) return;

      // Setup title animations - only if container still exists
      const container = document.getElementById(containerId);
      if (!container) return;

      const headings = window.gsap.utils.toArray('.js-title').reverse();
      headings.forEach((heading, i) => {
        if (!window.SplitText || !heading || !heading.parentElement) return;
        
        try {
          const headingIndex = i + 1;
          const mySplitText = new window.SplitText(heading, { type: 'chars' });
          const chars = mySplitText.chars;

          chars.forEach((char, charIndex) => {
            if (smoother && smoother.effects) {
              smoother.effects(char, { 
                lag: (charIndex + headingIndex) * 0.1, 
                speed: 1 
              });
            }
          });
        } catch (e) {
          // Ignore errors for individual headings
        }
      });

      // Setup split text line animations
      const splitTextLines = window.gsap.utils.toArray('.js-splittext-lines');
      splitTextLines.forEach((splitTextLine) => {
        if (!window.SplitText || !splitTextLine || !splitTextLine.parentElement) return;

        try {
          const tl = window.gsap.timeline({
            scrollTrigger: {
              trigger: splitTextLine,
              start: 'top 90%',
              duration: 2,
              end: 'bottom 60%',
              scrub: false,
              markers: false,
              toggleActions: 'play none none none',
            },
          });

          const itemSplitted = new window.SplitText(splitTextLine, { type: 'lines' });
          window.gsap.set(splitTextLine, { perspective: 400 });
          itemSplitted.split({ type: 'lines' });
          
          tl.from(itemSplitted.lines, {
            duration: 1,
            delay: 0.5,
            opacity: 0,
            rotationX: -80,
            force3D: true,
            transformOrigin: 'top center -50',
            stagger: 0.1,
          });

          scrollTriggersRef.current.push(tl);
        } catch (e) {
          // Ignore errors for individual split text lines
        }
      });
    };

    // Wait for GSAP and plugins to be available
    const checkAndInit = () => {
      if (!isMounted) return;

      if (!window.gsap || !window.ScrollTrigger || !window.ScrollSmoother) {
        // Retry after a short delay if scripts are still loading
        timeoutId = setTimeout(checkAndInit, 100);
        return;
      }

      // Register plugins
      window.gsap.registerPlugin(window.ScrollTrigger, window.ScrollSmoother);

      // Wait for DOM to be ready
      const container = document.getElementById(containerId);
      if (!container) {
        console.warn(`Container with id "${containerId}" not found`);
        return;
      }

      containerRef.current = container;

      // Always kill existing smoother to prevent DOM conflicts on route changes
      const existingSmoother = window.scrollSmootherInstance;
      if (existingSmoother) {
        try {
          existingSmoother.kill(false); // false = don't manipulate DOM, React handles it
        } catch (e) {
          // Ignore kill errors
        }
        window.scrollSmootherInstance = null;
      }

      // Wait multiple frames to ensure DOM is fully ready and React has finished mounting
      rafId = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!isMounted) return;
          
          // Double-check container still exists and is in the DOM
          const containerCheck = document.getElementById(containerId);
          if (!containerCheck || !containerCheck.parentElement) {
            console.warn(`Container with id "${containerId}" not found or not in DOM`);
            return;
          }

          // Create new smoother for this route
          let smoother;
          try {
            const isMobile = window.innerWidth <= 991;
            smoother = window.ScrollSmoother.create({
              content: `#${containerId}`,
              smooth: isMobile ? 1.5 : 2,
              normalizeScroll: true,
              ignoreMobileResize: true,
              effects: true,
              smoothTouch: isMobile ? 0.1 : false,
            });
            smootherRef.current = smoother;
            window.scrollSmootherInstance = smoother;
            
            // Setup animations after smoother is created
            setupAnimations(smoother);
          } catch (e) {
            console.warn('Failed to create ScrollSmoother:', e);
          }
        });
      });
    };

    checkAndInit();

    // Cleanup function
    return () => {
      isMounted = false;
      
      // Cancel any pending operations
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      // Cleanup is handled in useLayoutEffect above
      // Just clear refs here
      scrollTriggersRef.current = [];
      smootherRef.current = null;
    };
  }, [containerId, enabled]);

  return smootherRef.current;
};

