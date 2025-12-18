import React from 'react';
import PageLayout from '../../components/common/PageLayout';
import Footer from '../../components/innerpage/Footer';
import Menu from '../../components/innerpage/Menu';
import Navbar from '../../components/home_preview/Navbar';
import Header from '../../components/innerpage/blog/Header';
import Slider from '../../components/innerpage/blog/Slider';
import LatestPosts from '../../components/innerpage/blog/LatestPosts';
import FilterPosts from '../../components/innerpage/blog/FilterPosts';
import StartButton from '../../components/home5_residence/StartButton';

function BlogPage() {
  return (
    <PageLayout
      cssFiles={[
        '/common/assets/css/navbar-global.css',
        '/innerpages/assets/css/innerpages.css',
      ]}
      bodyClassName="inner-pages-style1 blog-pg-style1"
      fixedElements={<><Menu /><Navbar /></>}
    >
      <Header />
      <main>
        <Slider />
        <LatestPosts />
        <FilterPosts />
      </main>
      <Footer />
      <StartButton />
    </PageLayout>
  );
}

export default BlogPage;
