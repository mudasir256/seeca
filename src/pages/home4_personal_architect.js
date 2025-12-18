import React from 'react';
import PageLayout from '../components/common/PageLayout';
import Menu from '../components/home4_personal_architect/Menu';
import Navbar from '../components/home_preview/Navbar';
import Header from '../components/home4_personal_architect/Header';
import Portfolio from '../components/home4_personal_architect/Portfolio';
import Clients from '../components/home4_personal_architect/Clients';
import Career from '../components/home4_personal_architect/Career';
import Insatgram from '../components/home4_personal_architect/Insatgram';
import Footer from '../components/home4_personal_architect/Footer';
import Blog from '../components/home4_personal_architect/Blog';
import Contact from '../components/home4_personal_architect/Contact';

function Home4() {
  return (
    <PageLayout
      cssFiles={[
        '/common/assets/css/navbar-global.css',
        '/home4_personal_architect/assets/css/home_4_style.css',
      ]}
      bodyClassName="home-style4"
      fixedElements={<><Menu /><Navbar /></>}
    >
      <Header />
      <main>
        <Portfolio />
        <Clients />
        <Career />
        <Insatgram />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </PageLayout>
  );
}

export default Home4;
