import { useEffect } from 'react';

/**
 * Custom hook to initialize common scripts that don't need cleanup
 * Runs once and handles common functionality
 */
export const useCommonScripts = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initialize WOW if available
    if (window.WOW) {
      const wow = new window.WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: false,
        live: false,
      });
      wow.init();
    }

    // Background image setup
    const pageSections = document.querySelectorAll('.bg-img');
    pageSections.forEach((section) => {
      const background = section.getAttribute('data-background');
      if (background) {
        section.style.backgroundImage = `url(${background})`;
      }
    });

    // Counter initialization
    if (window.jQuery && window.jQuery.fn.countUp) {
      window.jQuery('.counter').countUp({
        delay: 10,
        time: 2000,
      });
    }

    // Parallaxie (desktop only)
    if (window.innerWidth > 991 && window.jQuery && window.jQuery.fn.parallaxie) {
      window.jQuery('.parallaxie').parallaxie({});
    }

    // Bootstrap tooltips
    if (window.bootstrap) {
      const tooltipTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
      );
      tooltipTriggerList.map((tooltipTriggerEl) => {
        return new window.bootstrap.Tooltip(tooltipTriggerEl);
      });
    }

    // Float box container
    const floatBoxContainers = document.querySelectorAll('.float_box_container');
    floatBoxContainers.forEach((container) => {
      const floatBox = container.querySelector('.float_box');
      if (!floatBox) return;

      container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const relX = e.pageX - rect.left;
        const relY = e.pageY - rect.top;
        floatBox.style.left = `${relX}px`;
        floatBox.style.top = `${relY}px`;
        floatBox.classList.add('show');
      });

      container.addEventListener('mouseleave', () => {
        floatBox.classList.remove('show');
      });
    });

    // Fav button
    const favButtons = document.querySelectorAll('.fav-btn');
    favButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        btn.classList.toggle('active');
      });
    });

    // Close button
    const closeButtons = document.querySelectorAll('.cls');
    closeButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const parent = btn.parentElement;
        if (parent) {
          parent.style.display = 'none';
        }
      });
    });

    // Scroll to top handlers
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const toTopElements = document.querySelectorAll('#to_top, .to_top');
      toTopElements.forEach((el) => {
        if (scrollTop > 700) {
          el.classList.add('show');
        } else {
          el.classList.remove('show');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // To top click handlers
    const toTopElements = document.querySelectorAll('#to_top, .to_top');
    toTopElements.forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return false;
      });
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

