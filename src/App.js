import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Home1 from './pages/home1';
import ScrollToTop from './components/common/ScrollToTop';
import ChatBot from './components/common/ChatBot';
import ImageProtection from './components/common/ImageProtection';
import SeoManager from './components/common/SeoManager';

import {
  AboutPage,
  BlogPage,
  ContactPage,
  PortfolioPage,
  ServicesPage,
  ArchitecturePage,
  InteriorDesignPage,
  ConstructionPage,
  BuildingSustainabilityPage,
  SmartBuildingTechnologiesPage,
  OurProcessPage,
  PartnersPage,
  ApplyInternshipPage,
  ApplyJobPage,
  SinglePost,
  ProjectPage,
  PrivacyPolicyPage,
  TermsPage,
  NotFound,
} from './routes';

function InnerpagesRedirect() {
  const location = useLocation();
  const newPath = location.pathname.replace(/^\/innerpages/, '') || '/';
  return <Navigate to={`${newPath}${location.search}${location.hash}`} replace />;
}

function WhatsAppFloat() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .whatsapp-float-global {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 9999;
          width: 50px;
          height: 50px;
          border-radius: 8px;
          background: #73bf44;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(115, 191, 68, 0.4);
          transition: all 0.3s ease;
        }
        .whatsapp-float-global:hover {
          background: #8dd65a;
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(115, 191, 68, 0.6);
        }
        .whatsapp-float-global i {
          font-size: 24px;
        }
        @media (max-width: 767px) {
          .whatsapp-float-global {
            bottom: 20px;
            right: 20px;
            width: 45px;
            height: 45px;
          }
          .whatsapp-float-global i {
            font-size: 22px;
          }
        }
      `}} />
      <a
        href="https://wa.me/923331498340"
        className="whatsapp-float-global"
        aria-label="Chat with SEECA on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
}

function App() {
  return (
    <Router>
      <SeoManager />
      <ImageProtection />
      <ScrollToTop />
      <ChatBot />
      <WhatsAppFloat />
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<SinglePost />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:slug" element={<ProjectPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/architecture" element={<ArchitecturePage />} />
        <Route path="/interior-design" element={<InteriorDesignPage />} />
        <Route path="/construction" element={<ConstructionPage />} />
        <Route path="/building-sustainability" element={<BuildingSustainabilityPage />} />
        <Route path="/smart-building-technologies" element={<SmartBuildingTechnologiesPage />} />
        <Route path="/our-process" element={<OurProcessPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/career/internship" element={<ApplyInternshipPage />} />
        <Route path="/career/job" element={<ApplyJobPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        {/* Redirect old /innerpages/* URLs */}
        <Route path="/innerpages/*" element={<InnerpagesRedirect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
