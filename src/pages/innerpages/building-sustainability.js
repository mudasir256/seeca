import React from 'react';
import PageLayout from '../../components/common/PageLayout';
import Footer from '../../components/home1/Footer';
import Menu from '../../components/innerpage/Menu';
import Navbar from '../../components/home_preview/Navbar';
import StartButton from '../../components/home5_residence/StartButton';
import Header from '../../components/innerpage/contact/Header';
import BuildingSustainabilityContent from '../../components/innerpage/building-sustainability/BuildingSustainabilityContent';
import Testimonials from '../../components/home1/Testimonials';
import ContactSection from '../../components/innerpage/building-sustainability/ContactSection';

function BuildingSustainabilityPage() {
  return (
    <PageLayout
      cssFiles={[
        '/common/assets/css/navbar-global.css',
        '/innerpages/assets/css/innerpages.css',
      ]}
      bodyClassName="inner-pages-style1 building-sustainability-pg-style1"
      fixedElements={<><Menu /><Navbar /></>}
    >
      <Header
        title="Building Sustainability"
        description="Designing eco-friendly and sustainable buildings for a better future"
        backgroundImage="/home_preview/assets/img/slider-3-scaled.jpg"
      />
      <main>
        <BuildingSustainabilityContent />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <StartButton />
    </PageLayout>
  );
}

export default BuildingSustainabilityPage;

