import React from 'react';
import PageLayout from '../../components/common/PageLayout';
import Footer from '../../components/home1/Footer';
import Menu from '../../components/innerpage/Menu';
import Navbar from '../../components/home_preview/Navbar';
import StartButton from '../../components/home5_residence/StartButton';
import Header from '../../components/innerpage/contact/Header';
import ConstructionContent from '../../components/innerpage/construction/ConstructionContent';
import Testimonials from '../../components/home1/Testimonials';
import ContactSection from '../../components/innerpage/construction/ContactSection';

function ConstructionPage() {
  return (
    <PageLayout
      cssFiles={[
        '/common/assets/css/navbar-global.css',
        '/innerpages/assets/css/innerpages.css',
      ]}
      bodyClassName="inner-pages-style1 construction-pg-style1"
      fixedElements={<><Menu /><Navbar /></>}
    >
      <Header
        title="Construction"
        description="Delivering high-quality construction services with precision, safety, and excellence"
        backgroundImage="/home_preview/assets/img/Slider-4-scaled.jpg"
      />
      <main>
        <ConstructionContent />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <StartButton />
    </PageLayout>
  );
}

export default ConstructionPage;

