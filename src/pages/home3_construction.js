import React from 'react';
import PageLayout from '../components/common/PageLayout';
import Menu from '../components/home3_construction/Menu';
import StartButton from '../components/home3_construction/StartButton';
import Navbar from '../components/home_preview/Navbar';
import Header from '../components/home3_construction/Header';
import Services from '../components/home3_construction/Services';
import About from '../components/home3_construction/About';
import Portfolio from '../components/home3_construction/Portfolio';
import Partners from '../components/home3_construction/Partners';
import Blog from '../components/home3_construction/Blog';
import Contact from '../components/home3_construction/Contact';
import Footer from '../components/home3_construction/Footer';

function Home3() {
  return (
    <PageLayout
      cssFiles={[
        '/common/assets/css/navbar-global.css',
        '/home3_construction/assets/css/home_3_style.css',
      ]}
      bodyClassName="home-style3"
      fixedElements={<><Menu /><Navbar /></>}
    >
      <Header />
      <main>
        <Services />
        <About />
        <Portfolio />
        <Partners />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <StartButton />
    </PageLayout>
  );
}

export default Home3;
