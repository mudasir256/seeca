import React from 'react';
import PageLayout from '../../components/common/PageLayout';
import Footer from '../../components/home1/Footer';
import Menu from '../../components/innerpage/Menu';
import Navbar from '../../components/home_preview/Navbar';
import StartButton from '../../components/home5_residence/StartButton';
import Header from '../../components/innerpage/contact/Header';
import InteriorDesignContent from '../../components/innerpage/interior-design/InteriorDesignContent';
import Testimonials from '../../components/home1/Testimonials';
import ContactSection from '../../components/innerpage/interior-design/ContactSection';

function InteriorDesignPage() {
  return (
    <PageLayout
      cssFiles={[
        '/common/assets/css/navbar-global.css',
        '/innerpages/assets/css/innerpages.css',
      ]}
      bodyClassName="inner-pages-style1 interior-design-pg-style1"
      fixedElements={<><Menu /><Navbar /></>}
    >
      <Header
        title="Interior Design"
        description="Transforming spaces into beautiful, functional environments that reflect your style and needs"
        backgroundImage="/home_preview/assets/img/Slider-1-scaled.jpg"
      />
      <main>
        <InteriorDesignContent />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <StartButton />
    </PageLayout>
  );
}

export default InteriorDesignPage;

