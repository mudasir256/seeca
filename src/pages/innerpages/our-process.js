import React, { useEffect } from 'react';
import PageLayout from '../../components/common/PageLayout';
import Footer from '../../components/home1/Footer';
import Menu from '../../components/innerpage/Menu';
import Navbar from '../../components/home_preview/Navbar';
import StartButton from '../../components/home5_residence/StartButton';
import Header from '../../components/innerpage/contact/Header';
import WorkingProcess from '../../components/innerpage/our-process/WorkingProcess';
import Advantages from '../../components/innerpage/our-process/Advantages';
import Skills from '../../components/innerpage/our-process/Skills';

// Ensure native scroll works when ScrollSmoother is disabled
const OUR_PROCESS_SCROLL_STYLES = `
  body.our-process-pg-style1 #scrollsmoother-container,
  body.our-process-pg-style1 .smooth-scroll-content {
    overflow: visible !important;
    contain: none !important;
    will-change: auto !important;
    min-height: auto !important;
    height: auto !important;
  }
  html body.our-process-pg-style1 {
    -webkit-overflow-scrolling: touch !important;
    overscroll-behavior-y: auto !important;
  }
  body.our-process-pg-style1 {
    overflow-x: hidden !important;
    overflow-y: auto !important;
    height: auto !important;
    min-height: 100% !important;
  }
`;

function OurProcessPage() {
  useEffect(() => {
    const unlockScroll = () => {
      document.documentElement.classList.remove('fancybox-enabled');
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.height = '';
      document.body.style.overflow = '';
      document.body.style.overflowY = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.overflowY = '';
      document.documentElement.style.height = '';
    };

    unlockScroll();
    const t1 = setTimeout(unlockScroll, 150);
    const t2 = setTimeout(unlockScroll, 800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: OUR_PROCESS_SCROLL_STYLES }} />
    <PageLayout
      cssFiles={[
        '/common/assets/css/navbar-global.css',
        '/innerpages/assets/css/innerpages.css',
      ]}
      bodyClassName="inner-pages-style1 our-process-pg-style1"
      fixedElements={<><Menu /><Navbar /></>}
      enableScrollSmoother={false}
    >
      <Header
        title="Our Process"
        description="Discover how we transform your vision into reality through our proven methodology"
        backgroundImage="/home_preview/assets/img/architecturecontact.jpg"
      />
      <main>
        <Advantages />
        <WorkingProcess />
        <Skills />
      </main>
      <Footer />
      <StartButton />
    </PageLayout>
    </>
  );
}

export default OurProcessPage;

