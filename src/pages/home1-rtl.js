import React from 'react';
import PageLayout from '../components/common/PageLayout';
import Menu from '../components/home1-rtl/Menu';
import Navbar from '../components/home_preview/Navbar';
import Header from '../components/home1-rtl/Header';
import Experience from '../components/home1-rtl/Experience';
import Services from '../components/home1-rtl/Services';
import Process from '../components/home1-rtl/Process';
import Projects from '../components/home1-rtl/Projects';
import Testimonials from '../components/home1-rtl/Testimonials';
import Awards from '../components/home1-rtl/Awards';
import Team from '../components/home1-rtl/Team';
import Blog from '../components/home1-rtl/Blog';
import Chat from '../components/home1-rtl/Chat';

function Home1RTL() {
  return (
    <PageLayout
      cssFiles={[
        '/common/assets/css/navbar-global.css',
        '/home1/assets/css/home_1_style.css',
      ]}
      bodyClassName="home-style1"
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
        <Chat />
      </main>
    </PageLayout>
  );
}

export default Home1RTL;
