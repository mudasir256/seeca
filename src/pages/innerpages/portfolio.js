import React from 'react';
import PageLayout from '../../components/common/PageLayout';
import Footer from '../../components/home1/Footer';
import Menu from '../../components/innerpage/Menu';
import Navbar from '../../components/home_preview/Navbar';
import StartButton from '../../components/home5_residence/StartButton';
import Header from '../../components/innerpage/contact/Header';
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
      <style dangerouslySetInnerHTML={{__html: `
        body.portfolio-pg-style1 {
          overflow-x: hidden;
        }
        #scrollsmoother-container {
          overflow: visible !important;
          height: auto !important;
        }
        .smooth-scroll-content {
          overflow: visible !important;
          height: auto !important;
        }
      `}} />
      <Header
        title="Portfolio"
        description="Explore our exceptional portfolio of architectural and design projects"
        backgroundImage="/home_preview/assets/img/pages/portfoliobg.jpg"
      />
      <main>
        <LatestCases />
      </main>
      <Footer />
      <StartButton />
    </PageLayout>
  );
}

export default PortfolioPage;
