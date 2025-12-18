import React from 'react';
import PageLayout from '../components/common/PageLayout';
import Navbar from '../components/home_preview/Navbar';
import SideMenu from '../components/home8_portfolio/SideMenu';
import Starting from '../components/home8_portfolio/Starting';
import About from '../components/home8_portfolio/About';
import Services from '../components/home8_portfolio/Services';
import Portfolio from '../components/home8_portfolio/Portfolio';
import Clients from '../components/home8_portfolio/Clients';
import Partners from '../components/home8_portfolio/Partners';
import Team from '../components/home8_portfolio/Team';
import Contact from '../components/home8_portfolio/Contact';
import Control from '../components/home8_portfolio/Control';

function Home8() {
  return (
    <PageLayout
      cssFiles={[
        '/common/assets/css/navbar-global.css',
        '/home8_portfolio/assets/css/home_8_style.css',
      ]}
      bodyClassName="home-style8"
      fixedElements={<><SideMenu /><Navbar /></>}
    >
      <Starting />
      <main className="fullpage-slider8">
        <div className="swiper-wrapper">
          <About />
          <Services />
          <Portfolio />
          <Clients />
          <Partners />
          <Team />
          <Contact />
        </div>
        <Control />
      </main>
    </PageLayout>
  );
}

export default Home8;
