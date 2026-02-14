import React from 'react';
import PageLayout from '../../components/common/PageLayout';
import Footer from '../../components/home1/Footer';
import Menu from '../../components/innerpage/Menu';
import Navbar from '../../components/home_preview/Navbar';
import StartButton from '../../components/home5_residence/StartButton';
import Header from '../../components/innerpage/contact/Header';
import ApplyInternshipForm from '../../components/innerpage/career/ApplyInternshipForm';

function ApplyInternshipPage() {
  return (
    <PageLayout
      cssFiles={[
        '/common/assets/css/navbar-global.css',
        '/innerpages/assets/css/innerpages.css',
      ]}
      bodyClassName="inner-pages-style1 career-pg-style1"
      fixedElements={<><Menu /><Navbar /></>}
      enableScrollSmoother={false}
    >
      <Header
        title="Apply for Internship"
        description="Start your career with us. Fill out the form below to apply for an internship opportunity."
        backgroundImage="/home_preview/assets/img/architecturecontact.jpg"
      />
      <main>
        <ApplyInternshipForm />
      </main>
      <Footer />
      <StartButton />
    </PageLayout>
  );
}

export default ApplyInternshipPage;
