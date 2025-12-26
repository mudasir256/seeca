import React from 'react';
import PageLayout from '../../components/common/PageLayout';
import Footer from '../../components/home1/Footer';
import Menu from '../../components/innerpage/Menu';
import Navbar from '../../components/home_preview/Navbar';
import StartButton from '../../components/home5_residence/StartButton';
import Header from '../../components/innerpage/contact/Header';
import WorkingProcess from '../../components/innerpage/our-process/WorkingProcess';
import Advantages from '../../components/innerpage/our-process/Advantages';
import Skills from '../../components/innerpage/our-process/Skills';

function OurProcessPage() {
  return (
    <PageLayout
      cssFiles={[
        '/common/assets/css/navbar-global.css',
        '/innerpages/assets/css/innerpages.css',
      ]}
      bodyClassName="inner-pages-style1 our-process-pg-style1"
      fixedElements={<><Menu /><Navbar /></>}
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
  );
}

export default OurProcessPage;

