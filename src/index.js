import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { preloadRoute } from './routes';
import { initLeadTracking } from './lib/analytics';

// Prevent noisy browser ResizeObserver warnings from breaking CRA error overlay.
if (typeof window !== 'undefined') {
  const isResizeObserverError = (message = '') =>
    message.includes('ResizeObserver loop completed with undelivered notifications') ||
    message.includes('ResizeObserver loop limit exceeded');

  const getErrorMessage = (event) => {
    if (!event) return '';
    if (typeof event.message === 'string' && event.message) return event.message;
    if (typeof event.reason === 'string' && event.reason) return event.reason;
    if (event.reason && typeof event.reason.message === 'string') return event.reason.message;
    if (event.error && typeof event.error.message === 'string') return event.error.message;
    return '';
  };

  const swallowResizeObserverError = (event) => {
    const message = getErrorMessage(event);
    if (!isResizeObserverError(message)) return;
    if (typeof event.preventDefault === 'function') event.preventDefault();
    if (typeof event.stopImmediatePropagation === 'function') event.stopImmediatePropagation();
  };

  window.addEventListener('error', swallowResizeObserverError, true);
  window.addEventListener('unhandledrejection', swallowResizeObserverError, true);

  // Stabilize ResizeObserver delivery on heavy layout updates (mobile nav/collapse changes).
  if (window.ResizeObserver && !window.__seecaResizeObserverPatched) {
    const OriginalResizeObserver = window.ResizeObserver;
    window.ResizeObserver = class ResizeObserverPatched extends OriginalResizeObserver {
      constructor(callback) {
        super((entries, observer) => {
          window.requestAnimationFrame(() => callback(entries, observer));
        });
      }
    };
    window.__seecaResizeObserverPatched = true;
  }
}

initLeadTracking();

const rootElement = document.getElementById('root');

// Pages are pre-rendered to static HTML at build time so search engines see full
// content. In the browser we load the current page's code first, then let React
// take over the existing HTML (hydration).
const isPrerendered =
  rootElement.hasChildNodes() && document.documentElement.getAttribute('data-prerendered') === 'true';

preloadRoute(window.location.pathname).then(() => {
  if (isPrerendered) {
    // Attach to the existing HTML instead of redrawing it: no flash, no jump.
    // If something differs (e.g. newer CMS data), React quietly re-renders just that part.
    hydrateRoot(rootElement, <App />, { onRecoverableError: () => {} });
  } else {
    createRoot(rootElement).render(<App />);
  }
});
