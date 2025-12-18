import React from 'react';
import PageLayout from '../../components/common/PageLayout';
import Footer from '../../components/innerpage/Footer';
import Menu from '../../components/innerpage/Menu';
import Navbar from '../../components/home_preview/Navbar';
import StartButton from '../../components/home5_residence/StartButton';
import Header from '../../components/innerpage/contact/Header';
import ContactInfo from '../../components/innerpage/contact/ContactInfo';
import Map from '../../components/innerpage/contact/Map';
import ContactForm from '../../components/innerpage/contact/ContactForm';

function ContactPage() {
  return (
    <PageLayout
      cssFiles={[
        '/common/assets/css/navbar-global.css',
        '/innerpages/assets/css/innerpages.css',
      ]}
      bodyClassName="inner-pages-style1 contact-pg-style1"
      fixedElements={<><Menu /><Navbar /></>}
    >
      <Header />
      <main>
        <ContactInfo />
        <Map />
        <ContactForm />
      </main>
      <Footer />
      <StartButton />
    </PageLayout>
  );
}

export default ContactPage;
