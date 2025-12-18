import React from 'react';
import PageLayout from '../../components/common/PageLayout';
import Footer from '../../components/innerpage/Footer';
import Menu from '../../components/innerpage/Menu';
import Navbar from '../../components/home_preview/Navbar';
import StartButton from '../../components/home5_residence/StartButton';
import Header from '../../components/innerpage/services/Header';
import Services from '../../components/innerpage/services/Services';
import Process from '../../components/innerpage/services/Process';
import Testimonials from '../../components/innerpage/services/Testimonials';

function ServicesPage() {
  return (
    <PageLayout
      cssFiles={[
        '/common/assets/css/navbar-global.css',
        '/innerpages/assets/css/innerpages.css',
      ]}
      bodyClassName="inner-pages-style1 services-pg-style1"
      fixedElements={<><Menu /><Navbar /></>}
    >
      <Header />
      <main>
        <Services />
        <Process />
        <Testimonials />
      </main>
      <Footer />
      <StartButton />
    </PageLayout>
  );
}

export default ServicesPage;
