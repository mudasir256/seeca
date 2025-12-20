import React from 'react';
import PageLayout from '../../components/common/PageLayout';
import Footer from '../../components/home1/Footer';
import Menu from '../../components/innerpage/Menu';
import Navbar from '../../components/home_preview/Navbar';
import StartButton from '../../components/home5_residence/StartButton';
import Header from '../../components/innerpage/contact/Header';

function OurProcessPage() {
  return (
    <PageLayout
      cssFiles={[
        '/common/assets/css/navbar-global.css',
        '/innerpages/assets/css/innerpages.css',
      ]}
      bodyClassName="inner-pages-style1 our-process-pg-style1"
      fixedElements={<><Menu /><Navbar /></>}
    >
      <Header
        title="Our Process"
        description="Discover how we transform your vision into reality through our proven methodology"
        backgroundImage="/home_preview/assets/img/architecturecontact.jpg"
      />
      <main>
        <div className="container section-padding">
          <div className="row">
            <div className="col-12">
              <h2>Our Process</h2>
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

export default OurProcessPage;

