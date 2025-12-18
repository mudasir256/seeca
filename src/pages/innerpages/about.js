import React from 'react';
import PageLayout from '../../components/common/PageLayout';
import Header from '../../components/innerpage/about/Header';
import Navbar from '../../components/home_preview/Navbar';
import About from '../../components/innerpage/about/About';
import Process from '../../components/innerpage/about/Process';
import Projects from '../../components/innerpage/about/Projects';
import Awards from '../../components/innerpage/about/Awards';
import Footer from '../../components/innerpage/Footer';
import Menu from '../../components/innerpage/Menu';

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
        <About />
        <Process />
        <Projects />
        <Awards />
      </main>
      <Footer />
    </PageLayout>
  );
}

export default AboutPage;
