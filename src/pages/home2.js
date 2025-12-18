import React from 'react';
import PageLayout from '../components/common/PageLayout';
import Navbar from '../components/home_preview/Navbar';
import Header from '../components/home2/Header';
import Services from '../components/home2/Services';
import Process from '../components/home2/Process';
import Projects from '../components/home2/Projects';
import Award from '../components/home2/Award';
import Testimonials from '../components/home2/Testimonials';
import Blog from '../components/home2/Blog';
import Contact from '../components/home2/Contact';
import Footer from '../components/home2/Footer';

function Home2() {
  return (
    <PageLayout
      cssFiles={[
        '/common/assets/css/navbar-global.css',
        '/home2/assets/css/home_2_style.css',
      ]}
      bodyClassName="home-style2"
      fixedElements={<Navbar />}
    >
      <Header />
      <main>
        <Services />
        <Process />
        <Projects />
        <Award />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </PageLayout>
  );
}

export default Home2;
