import React from 'react';
import PageLayout from '../../components/common/PageLayout';
import Footer from '../../components/home1/Footer';
import Menu from '../../components/innerpage/Menu';
import Navbar from '../../components/home_preview/Navbar';
import Header from '../../components/innerpage/partners/Header';
import PartnersGrid from '../../components/innerpage/partners/PartnersGrid';

function PartnersPage() {
  return (
    <PageLayout
      cssFiles={[
        '/common/assets/css/navbar-global.css',
        '/innerpages/assets/css/innerpages.css',
      ]}
      bodyClassName="inner-pages-style1 partners-pg-style1"
      fixedElements={
        <>
          <Menu />
          <Navbar />
        </>
      }
      enableScrollSmoother={false}
    >
      <Header />
      <main>
        <PartnersGrid />
      </main>
      <Footer />
    </PageLayout>
  );
}

export default PartnersPage;
