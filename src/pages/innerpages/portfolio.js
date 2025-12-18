import React from 'react';
import PageLayout from '../../components/common/PageLayout';
import Footer from '../../components/innerpage/Footer';
import Menu from '../../components/innerpage/Menu';
import Navbar from '../../components/home_preview/Navbar';
import StartButton from '../../components/home5_residence/StartButton';
import Header from '../../components/innerpage/portfolio/Header';
import Cases from '../../components/innerpage/portfolio/Cases';
import LatestCases from '../../components/innerpage/portfolio/LatestCases';

function PortfolioPage() {
  return (
    <PageLayout
      cssFiles={[
        '/common/assets/css/navbar-global.css',
        '/innerpages/assets/css/innerpages.css',
      ]}
      bodyClassName="inner-pages-style1 portfolio-pg-style1"
      fixedElements={<><Menu /><Navbar /></>}
    >
      <Header />
      <main>
        <Cases />
        <LatestCases />
      </main>
      <Footer />
      <StartButton />
    </PageLayout>
  );
}

export default PortfolioPage;
