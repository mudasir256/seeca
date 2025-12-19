import React from 'react';
import PageLayout from '../components/common/PageLayout';
import Menu from '../components/home1/Menu';
import Navbar from '../components/home_preview/Navbar';
import Header from '../components/home1/Header';
import Experience from '../components/home1/Experience';
import Services from '../components/home1/Services';
import Process from '../components/home1/Process';
import Awards from '../components/home1/Awards';
import Projects from '../components/home1/Projects';
import Testimonials from '../components/home1/Testimonials';
import Team from '../components/home1/Team';
import Blog from '../components/home1/Blog';
import Footer from '../components/home1/Footer';

function Home1() {
  return (
    <PageLayout
      cssFiles={[
        '/common/assets/css/navbar-global.css',
        '/home1/assets/css/home_1_style.css',
      ]}
      fixedElements={<><Menu /><Navbar /></>}
    >
      <Header />
      <main>
        <Experience />
        <Services />
        <Process />
        <Projects />
        <Testimonials />
        <Awards />
        <Team />
        <Blog />
      </main>
      <Footer />
    </PageLayout>
  );
}

export default Home1;
