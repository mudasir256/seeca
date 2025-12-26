import React from 'react';
import PageLayout from '../../components/common/PageLayout';
import Footer from '../../components/home1/Footer';
import Menu from '../../components/innerpage/Menu';
import Navbar from '../../components/home_preview/Navbar';
import StartButton from '../../components/home5_residence/StartButton';
import Header from '../../components/innerpage/contact/Header';
import SmartBuildingTechnologiesContent from '../../components/innerpage/smart-building-technologies/SmartBuildingTechnologiesContent';
import Testimonials from '../../components/home1/Testimonials';
import ContactSection from '../../components/innerpage/smart-building-technologies/ContactSection';

function SmartBuildingTechnologiesPage() {
  return (
    <PageLayout
      cssFiles={[
        '/common/assets/css/navbar-global.css',
        '/innerpages/assets/css/innerpages.css',
      ]}
      bodyClassName="inner-pages-style1 smart-building-technologies-pg-style1"
      fixedElements={<><Menu /><Navbar /></>}
    >
      <Header
        title="Building Technologies"
        description="Integrating cutting-edge technology to create intelligent and efficient buildings"
        backgroundImage="/home_preview/assets/img/Slider-scaled.jpg"
      />
      <main>
        <SmartBuildingTechnologiesContent />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <StartButton />
    </PageLayout>
  );
}

export default SmartBuildingTechnologiesPage;

