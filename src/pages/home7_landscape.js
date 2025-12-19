import React from 'react';
import PageLayout from '../components/common/PageLayout';
import StartButton from '../components/home5_residence/StartButton';
import Navbar from '../components/home_preview/Navbar';
import Header from '../components/home7_landscape/Header';
import About from '../components/home7_landscape/About';
import Services from '../components/home7_landscape/Services';
import Project from '../components/home7_landscape/Project';
import Process from '../components/home7_landscape/Process';
import Testimonials from '../components/home7_landscape/Testimonials';
import Blog from '../components/home7_landscape/Blog';
import Footer from '../components/home1/Footer';

function Home7() {
  return (
    <PageLayout
      cssFiles={[
        '/common/assets/css/navbar-global.css',
        '/home7_landscape/assets/css/home_7_style.css',
      ]}
      bodyClassName="home-style7"
      fixedElements={<Navbar />}
    >
      <Header />
      <main>
        <About />
        <Services />
        <Project />
        <Process />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
      <StartButton />
    </PageLayout>
  );
}

export default Home7;
