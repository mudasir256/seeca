import React, { memo, useMemo } from 'react';
import PageLayout from '../components/common/PageLayout';
import Menu from '../components/home1/Menu';
import Navbar from '../components/home_preview/Navbar';
import Header from '../components/home1/Header';
import Experience from '../components/home1/Experience';
import Services from '../components/home1/Services';
import Statistics from '../components/common/Statistics';
import Process from '../components/home1/Process';
import Awards from '../components/home1/Awards';
import Projects from '../components/home1/Projects';
import Testimonials from '../components/home1/Testimonials';
import Team from '../components/home1/Team';
import Blog from '../components/home1/Blog';
import Footer from '../components/home1/Footer';

// Memoize CSS files array to prevent recreation
const CSS_FILES = [
  '/common/assets/css/navbar-global.css',
  '/home1/assets/css/home_1_style.css',
];

const Home1 = memo(() => {
  // Memoize fixed elements to prevent recreation
  const fixedElements = useMemo(() => (
    <>
      <Menu />
      <Navbar />
    </>
  ), []);

  return (
    <PageLayout
      cssFiles={CSS_FILES}
      fixedElements={fixedElements}
    >
      <Header />
      <main>
        <Experience />
        <Services removeTopPadding={true} />
        <Statistics />
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
});

Home1.displayName = 'Home1';

export default Home1;
