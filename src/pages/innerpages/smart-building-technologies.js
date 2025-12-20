import React from 'react';
import PageLayout from '../../components/common/PageLayout';
import Footer from '../../components/home1/Footer';
import Menu from '../../components/innerpage/Menu';
import Navbar from '../../components/home_preview/Navbar';
import StartButton from '../../components/home5_residence/StartButton';
import Header from '../../components/innerpage/contact/Header';

function SmartBuildingTechnologiesPage() {
  return (
    <PageLayout
      cssFiles={[
        '/common/assets/css/navbar-global.css',
        '/innerpages/assets/css/innerpages.css',
      ]}
      bodyClassName="inner-pages-style1 smart-building-technologies-pg-style1"
      fixedElements={<><Menu /><Navbar /></>}
    >
      <Header
        title="Building Technologies"
        description="Integrating cutting-edge technology to create intelligent and efficient buildings"
        backgroundImage="/home_preview/assets/img/architecturecontact.jpg"
      />
      <main>
        <div className="container section-padding">
          <div className="row">
            <div className="col-12">
              <h2>Smart Building Technologies Services</h2>
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

export default SmartBuildingTechnologiesPage;

