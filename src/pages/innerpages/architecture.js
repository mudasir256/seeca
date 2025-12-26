import React from 'react';
import PageLayout from '../../components/common/PageLayout';
import Footer from '../../components/home1/Footer';
import Menu from '../../components/innerpage/Menu';
import Navbar from '../../components/home_preview/Navbar';
import StartButton from '../../components/home5_residence/StartButton';
import Header from '../../components/innerpage/contact/Header';
import ArchitectureContent from '../../components/innerpage/architecture/ArchitectureContent';
import Testimonials from '../../components/home1/Testimonials';
import ContactSection from '../../components/innerpage/architecture/ContactSection';

function ArchitecturePage() {
  return (
    <PageLayout
      cssFiles={[
        '/common/assets/css/navbar-global.css',
        '/innerpages/assets/css/innerpages.css',
      ]}
      bodyClassName="inner-pages-style1 architecture-pg-style1"
      fixedElements={<><Menu /><Navbar /></>}
    >
      <Header
        title="Architecture"
        description="Creating innovative architectural solutions that blend functionality with aesthetic excellence"
        backgroundImage="/home_preview/assets/img/Architecture-scaled.jpg"
      />
      <main>
        <ArchitectureContent />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <StartButton />
    </PageLayout>
  );
}

export default ArchitecturePage;

