import React from 'react';
import { useLocation } from 'react-router-dom';
import PageLayout from '../../components/common/PageLayout';
import Footer from '../../components/home1/Footer';
import Menu from '../../components/innerpage/Menu';
import Navbar from '../../components/home_preview/Navbar';
import StartButton from '../../components/home5_residence/StartButton';
import Header from '../../components/innerpage/contact/Header';
import Content from '../../components/innerpage/single_post/Content';
import Testimonials from '../../components/home1/Testimonials';
import ContactSection from '../../components/innerpage/architecture/ContactSection';

function SinglePost() {
  const location = useLocation();
  const blog = location.state?.blog;

  // Default header values
  const headerTitle = blog?.title || 'Blog Post';
  const headerDescription = blog?.description || 'Read our latest blog post';
  const headerBackgroundImage = blog?.img || '/home_preview/assets/img/blogbg.jpg';

  return (
    <PageLayout
      cssFiles={[
        '/common/assets/css/navbar-global.css',
        '/innerpages/assets/css/innerpages.css',
      ]}
      bodyClassName="inner-pages-style1 post-pg-style1"
      fixedElements={<><Menu /><Navbar /></>}
    >
      <Header
        title={headerTitle}
        description={headerDescription}
        backgroundImage={headerBackgroundImage}
      />
      <main>
        <Content blog={blog} />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <StartButton />
    </PageLayout>
  );
}

export default SinglePost;
