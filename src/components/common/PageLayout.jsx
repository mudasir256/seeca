import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import Loader from './Loader';
import { useScrollSmoother } from '../../hooks/useScrollSmoother';
import { useLoader } from '../../hooks/useLoader';
import { useCommonScripts } from '../../hooks/useCommonScripts';

/**
 * Layout component that handles common initialization for all pages
 * Prevents duplicate initialization and ensures proper cleanup
 */
const PageLayout = ({ 
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

  // Apply body className
  useEffect(() => {
    if (bodyClassName) {
      const classes = bodyClassName.split(' ').filter(Boolean);
      document.body.classList.add(...classes);
      return () => {
        document.body.classList.remove(...classes);
      };
    }
  }, [bodyClassName]);

  // Handle container ref to prevent React from managing it during unmount
  useEffect(() => {
    // Store the original parent before ScrollSmoother wraps it
    if (containerRef.current) {
      const container = containerRef.current;
      // Mark container to prevent React from trying to remove ScrollSmoother's wrappers
      container.setAttribute('data-smoother-managed', 'true');
    }
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        {cssFiles.map((cssFile, index) => (
          <link
            key={index}
            rel="stylesheet"
            type="text/css"
            href={cssFile}
          />
        ))}
      </Helmet>
      {showLoader && <Loader />}
      {fixedElements}
      {/* Use a stable wrapper that React manages, and ScrollSmoother manages the inner content */}
      <div key={`wrapper-${location.pathname}`}>
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
};

export default PageLayout;

