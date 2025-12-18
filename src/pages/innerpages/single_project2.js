import React from 'react';
import PageLayout from '../../components/common/PageLayout';
import Footer from '../../components/innerpage/Footer';
import Menu from '../../components/innerpage/Menu';
import Navbar from '../../components/home_preview/Navbar';
import StartButton from '../../components/home5_residence/StartButton';
import Header from '../../components/innerpage/single_project2/Header';
import MainInfo from '../../components/innerpage/single_project2/MainInfo';
import Challenge from '../../components/innerpage/single_project2/Challenge';
import Testimonials from '../../components/innerpage/single_project2/Testimonials';
import MainVideo from '../../components/innerpage/single_project2/MainVideo';
import Contact from '../../components/innerpage/single_project2/Contact';

function SingleProject2() {
  return (
    <PageLayout
      cssFiles={[
        '/common/assets/css/navbar-global.css',
        '/innerpages/assets/css/innerpages.css',
      ]}
      bodyClassName="inner-pages-style1 s-project-pg-style2"
      fixedElements={<><Menu /><Navbar /></>}
    >
      <Header />
      <main>
        <MainInfo />
        <Challenge />
        <Testimonials />
        <MainVideo />
        <Contact />
      </main>
      <Footer />
      <StartButton />
    </PageLayout>
  );
}

export default SingleProject2;
