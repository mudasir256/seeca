import React, { useEffect } from 'react';
import PageLayout from '../../components/common/PageLayout';
import Footer from '../../components/home1/Footer';
import Menu from '../../components/innerpage/Menu';
import Navbar from '../../components/home_preview/Navbar';
import StartButton from '../../components/home5_residence/StartButton';
import Header from '../../components/innerpage/contact/Header';
import ContactInfo from '../../components/innerpage/contact/ContactInfo';
import Map from '../../components/innerpage/contact/Map';
import ContactForm from '../../components/innerpage/contact/ContactForm';

function ContactPage() {
  useEffect(() => {
    // Enhanced smooth scrolling for better cross-browser support
    const handleSmoothScroll = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        const href = target.getAttribute('href');
        if (href !== '#' && href.startsWith('#')) {
          e.preventDefault();
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }
    };

    // Add smooth scroll to all anchor links
    document.addEventListener('click', handleSmoothScroll);

    // Smooth scroll on page load if hash exists
    if (window.location.hash) {
      setTimeout(() => {
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <PageLayout
      cssFiles={[
        '/common/assets/css/navbar-global.css',
        '/innerpages/assets/css/innerpages.css',
      ]}
      bodyClassName="inner-pages-style1 contact-pg-style1"
      fixedElements={<><Menu /><Navbar /></>}
      enableScrollSmoother={false}
    >
      <style dangerouslySetInnerHTML={{__html: `
        html {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          overflow-y: auto !important;
          overflow-x: hidden !important;
          height: auto !important;
        }
        body.contact-pg-style1 {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          overflow-y: auto !important;
          overflow-x: hidden !important;
          height: auto !important;
        }
        #scrollsmoother-container,
        .smooth-scroll-content {
          overflow: visible !important;
          height: auto !important;
          position: relative !important;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
        * {
          scroll-behavior: smooth;
        }
        .contact-main-wrapper {
          display: flex;
          width: 100%;
          min-height: 700px;
        }
        .contact-main-wrapper > section {
          flex: 1 1 50%;
          width: 50%;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        @media (prefers-reduced-motion: reduce) {
          html, body, * {
            scroll-behavior: auto !important;
          }
        }
        @media (max-width: 991px) {
          .contact-main-wrapper {
            flex-direction: column;
            min-height: auto;
          }
          .contact-main-wrapper > section {
            flex: 1 1 100%;
            width: 100%;
          }
        }
      `}} />
      <Header
        title="Contact Us"
        description="Want to chat further? We'd love to hear from you, let us opportunity to make your dream become reality"
        backgroundImage="/home_preview/assets/img/architecturecontact.jpg"
      />
      <main>
        <div className="contact-main-wrapper">
          <ContactForm />
          <ContactInfo />
        </div>
        <Map />
      </main>
      <Footer />
      <StartButton />
    </PageLayout>
  );
}

export default ContactPage;
