import React from 'react';
import PageLayout from '../../components/common/PageLayout';
import Footer from '../../components/home1/Footer';
import Menu from '../../components/innerpage/Menu';
import Navbar from '../../components/home_preview/Navbar';
import StartButton from '../../components/home5_residence/StartButton';
import Header from '../../components/innerpage/contact/Header';
import Services from '../../components/home1/Services';
import Process from '../../components/home1/Process';
import Testimonials from '../../components/home1/Testimonials';
import Statistics from '../../components/common/Statistics';
import Footer1 from '../../components/home1/Footer';

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
      <Header
        title="Our Services"
        description="We provide comprehensive architecture and design services to bring your vision to life"
        backgroundImage="/home_preview/assets/img/cad-inner-banner-3.jpg"
      />
      <main>
        <Services />
        <div style={{ paddingTop: '100px' }}>
          <Process />
          <Statistics />
          <Testimonials />
        </div>
      </main>
      <Footer />
    </PageLayout>
  );
}
export default ServicesPage;
