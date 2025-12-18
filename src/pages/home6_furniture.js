import React from 'react';
import PageLayout from '../components/common/PageLayout';
import StartButton from '../components/home5_residence/StartButton';
import Menu from '../components/home6_furniture/Menu';
import Navbar from '../components/home_preview/Navbar';
import Header from '../components/home6_furniture/Header';
import About from '../components/home6_furniture/About';
import Featured from '../components/home6_furniture/Featured';
import ByStyle from '../components/home6_furniture/ByStyle';
import Categories from '../components/home6_furniture/Categories';
import Banners from '../components/home6_furniture/Banners';
import Trade from '../components/home6_furniture/Trade';
import Blog from '../components/home6_furniture/Blog';
import Subscribe from '../components/home6_furniture/Subscribe';
import Instagram from '../components/home6_furniture/Instagram';
import Footer from '../components/home6_furniture/Footer';

function Home6() {
  return (
    <PageLayout
      cssFiles={[
        '/common/assets/css/navbar-global.css',
        '/home6_furniture/assets/css/home_6_style.css',
      ]}
      bodyClassName="home-style6"
      fixedElements={<><Menu /><Navbar /></>}
    >
      <Header />
      <main>
        <About />
        <Featured />
        <ByStyle />
        <Categories />
        <Banners />
        <Trade />
        <Blog />
        <Subscribe />
        <Instagram />
      </main>
      <Footer />
      <StartButton />
    </PageLayout>
  );
}

export default Home6;
