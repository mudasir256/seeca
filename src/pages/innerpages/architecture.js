import React from 'react';
import PageLayout from '../../components/common/PageLayout';
import Footer from '../../components/home1/Footer';
import Menu from '../../components/innerpage/Menu';
import Navbar from '../../components/home_preview/Navbar';
import StartButton from '../../components/home5_residence/StartButton';
import Header from '../../components/innerpage/contact/Header';

function ArchitecturePage() {
  return (
    <PageLayout
      cssFiles={[
        '/common/assets/css/navbar-global.css',
        '/innerpages/assets/css/innerpages.css',
      ]}
      bodyClassName="inner-pages-style1 architecture-pg-style1"
      fixedElements={<><Menu /><Navbar /></>}
    >
      <Header
        title="Architecture"
        description="Creating innovative architectural solutions that blend functionality with aesthetic excellence"
        backgroundImage="/home_preview/assets/img/architecturecontact.jpg"
      />
      <main>
        <div className="container section-padding">
          <div className="row">
            <div className="col-12">
              <h2>Architecture Services</h2>
              <p>Content coming soon...</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <StartButton />
    </PageLayout>
  );
}

export default ArchitecturePage;

