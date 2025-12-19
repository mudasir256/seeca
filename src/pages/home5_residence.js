import React from 'react';
import PageLayout from '../components/common/PageLayout';
import StartButton from '../components/home5_residence/StartButton';
import Menu from '../components/home5_residence/Menu';
import Navbar from '../components/home_preview/Navbar';
import Header from '../components/home5_residence/Header';
import About from '../components/home5_residence/About';
import Flawless from '../components/home5_residence/Flawless';
import Location from '../components/home5_residence/Location';
import Apartments from '../components/home5_residence/Apartments';
import Testimonials from '../components/home5_residence/Testimonials';
import Services from '../components/home5_residence/Services';
import Blog from '../components/home5_residence/Blog';
import Footer from '../components/home1/Footer';

function Home5() {
  return (
    <PageLayout
      cssFiles={[
        '/common/assets/css/navbar-global.css',
        '/home5_residence/assets/css/home_5_style.css',
      ]}
      bodyClassName="home-style5"
      fixedElements={<><Menu /><Navbar /></>}
    >
      <Header />
      <main>
        <About />
        <Flawless />
        <Location />
        <Apartments />
        <Testimonials />
        <Services />
        <Blog />
      </main>
      <Footer />
      <StartButton />
    </PageLayout>
  );
}

export default Home5;
