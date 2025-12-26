import React from 'react';
import PageLayout from '../../components/common/PageLayout';
import Header from '../../components/innerpage/about/Header';
import Navbar from '../../components/home_preview/Navbar';
import Process from '../../components/innerpage/about/Process';
import Projects from '../../components/innerpage/about/Projects';
import Awards from '../../components/innerpage/about/Awards';
import Footer from '../../components/home1/Footer';
import Menu from '../../components/innerpage/Menu';
import Testimonials from '../../components/home1/Testimonials';
import Statistics from '../../components/common/Statistics';
function AboutPage() {
  return (
    <PageLayout
      cssFiles={[
        '/common/assets/css/navbar-global.css',
        '/innerpages/assets/css/innerpages.css',
      ]}
      bodyClassName="inner-pages-style1 about-pg-style1"
      fixedElements={<><Menu /><Navbar /></>}
    >
      <Header />
      <main>
        <Process />
        <Statistics />
        <Projects />
        <Awards />
        <Testimonials />
      </main>
      <Footer />
    </PageLayout>
  );
}

export default AboutPage;
