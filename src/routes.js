import React, { lazy } from 'react';
import { matchPath } from 'react-router-dom';

/**
 * Lazy-loaded page that can also be loaded ahead of time.
 * Preloading the current page before the first render lets the app replace the
 * pre-rendered HTML in one step, without a blank flash while the page code loads.
 */
function lazyWithPreload(factory) {
  let LoadedComponent = null;
  const LazyComponent = lazy(factory);
  function PreloadablePage(props) {
    return LoadedComponent ? <LoadedComponent {...props} /> : <LazyComponent {...props} />;
  }
  PreloadablePage.preload = () =>
    factory().then((module) => {
      LoadedComponent = module.default;
      return module;
    });
  return PreloadablePage;
}

export const AboutPage = lazyWithPreload(() => import('./pages/innerpages/about'));
export const BlogPage = lazyWithPreload(() => import('./pages/innerpages/blog'));
export const ContactPage = lazyWithPreload(() => import('./pages/innerpages/contact'));
export const PortfolioPage = lazyWithPreload(() => import('./pages/innerpages/portfolio'));
export const ServicesPage = lazyWithPreload(() => import('./pages/innerpages/services'));
export const ArchitecturePage = lazyWithPreload(() => import('./pages/innerpages/architecture'));
export const InteriorDesignPage = lazyWithPreload(() => import('./pages/innerpages/interior-design'));
export const ConstructionPage = lazyWithPreload(() => import('./pages/innerpages/construction'));
export const BuildingSustainabilityPage = lazyWithPreload(() => import('./pages/innerpages/building-sustainability'));
export const SmartBuildingTechnologiesPage = lazyWithPreload(() => import('./pages/innerpages/smart-building-technologies'));
export const OurProcessPage = lazyWithPreload(() => import('./pages/innerpages/our-process'));
export const PartnersPage = lazyWithPreload(() => import('./pages/innerpages/partners'));
export const ApplyInternshipPage = lazyWithPreload(() => import('./pages/innerpages/apply-internship'));
export const ApplyJobPage = lazyWithPreload(() => import('./pages/innerpages/apply-job'));
export const SinglePost = lazyWithPreload(() => import('./pages/innerpages/single_post'));
export const NotFound = lazyWithPreload(() => import('./pages/NotFound'));

const PRELOAD_TABLE = [
  ['/about', AboutPage],
  ['/blog', BlogPage],
  ['/blog/:slug', SinglePost],
  ['/contact', ContactPage],
  ['/portfolio', PortfolioPage],
  ['/services', ServicesPage],
  ['/architecture', ArchitecturePage],
  ['/interior-design', InteriorDesignPage],
  ['/construction', ConstructionPage],
  ['/building-sustainability', BuildingSustainabilityPage],
  ['/smart-building-technologies', SmartBuildingTechnologiesPage],
  ['/our-process', OurProcessPage],
  ['/partners', PartnersPage],
  ['/career/internship', ApplyInternshipPage],
  ['/career/job', ApplyJobPage],
];

/** Load the code for the page at `pathname` (resolves immediately for the homepage). */
export function preloadRoute(pathname) {
  if (pathname === '/' || pathname.startsWith('/innerpages')) return Promise.resolve();
  const match = PRELOAD_TABLE.find(([pattern]) => matchPath({ path: pattern, end: true }, pathname.replace(/\/+$/, '') || '/'));
  const Page = match ? match[1] : NotFound;
  return Page.preload().catch(() => undefined);
}
