import React from 'react';
import { useLocation } from 'react-router-dom';
import PageLayout from '../../components/common/PageLayout';
import Footer from '../../components/home1/Footer';
import Menu from '../../components/innerpage/Menu';
import Navbar from '../../components/home_preview/Navbar';
import StartButton from '../../components/home5_residence/StartButton';
import Header from '../../components/innerpage/contact/Header';
import Project from '../../components/innerpage/single_project/Project';
import Testimonials from '../../components/home1/Testimonials';
import ContactSection from '../../components/innerpage/architecture/ContactSection';
import usePortfolio from '../../hooks/usePortfolio';

function SingleProject() {
  const location = useLocation();
  const { projects } = usePortfolio();
  const projectId = new URLSearchParams(location.search).get('project');
  const project = location.state?.project || projects.find((item) => item.id === projectId);

  // Default header values
  const headerTitle = project?.title || 'Project Details';
  const headerDescription = project?.desc || 'Discover the details of our exceptional project';
  const headerBackgroundImage = project?.img || '/home_preview/assets/img/pages/portfoliobg.jpg';

  return (
    <PageLayout
      cssFiles={[
        '/common/assets/css/navbar-global.css',
        '/innerpages/assets/css/innerpages.css',
      ]}
      bodyClassName="inner-pages-style1 s-project-pg-style1"
      fixedElements={<><Menu /><Navbar /></>}
    >
      <Header
        title={headerTitle}
        description={headerDescription}
        backgroundImage={headerBackgroundImage}
      />
      <main>
        <Project project={project} />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <StartButton />
    </PageLayout>
  );
}

export default SingleProject;
