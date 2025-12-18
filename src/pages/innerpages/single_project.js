import React from 'react';
import PageLayout from '../../components/common/PageLayout';
import Footer from '../../components/innerpage/Footer';
import Menu from '../../components/innerpage/Menu';
import Navbar from '../../components/home_preview/Navbar';
import StartButton from '../../components/home5_residence/StartButton';
import Project from '../../components/innerpage/single_project/Project';
import Testimonials from '../../components/innerpage/single_project/Testimonials';
import RelatedProjects from '../../components/innerpage/single_project/RelatedProjects';
import Chat from '../../components/innerpage/single_project/Chat';

function SingleProject() {
  return (
    <PageLayout
      cssFiles={[
        '/common/assets/css/navbar-global.css',
        '/innerpages/assets/css/innerpages.css',
      ]}
      bodyClassName="inner-pages-style1 s-project-pg-style1"
      fixedElements={<><Menu /><Navbar /></>}
    >
      <main>
        <Project />
        <Testimonials />
        <RelatedProjects />
        <Chat />
      </main>
      <Footer />
      <StartButton />
    </PageLayout>
  );
}

export default SingleProject;
