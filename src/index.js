import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App';

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

const rootElement = document.getElementById('root');
const app = <App />;

// react-snap prerenders HTML; hydrate when root already has content.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
