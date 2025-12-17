import React from 'react';
import Loader from '../../components/common/Loader';
import Menu from '../../components/home1/Menu';
import Navbar from '../../components/home1/Navbar';
import Footer from '../../components/home1/Footer';
import { Helmet } from 'react-helmet';

function AboutPage() {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="/home1/assets/css/home_1_style.css"
        />
        <script src="/common/assets/js/common_js.js"></script>
        <script src="/home1/assets/js/home_1_scripts.js"></script>
      </Helmet>
      <body className="home-style1">
        <Loader />
        <Menu />
        <div className="smooth-scroll-content" id="scrollsmoother-container">
          <Navbar />
          <main className="section-padding">
            <div className="container">
              <h1>About Us</h1>
              <p>About page content goes here.</p>
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </>
  );
}

export default AboutPage;

