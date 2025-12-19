import React from 'react';
import PageLayout from '../../components/common/PageLayout';
import Footer from '../../components/home1/Footer';
import Menu from '../../components/innerpage/Menu';
import Navbar from '../../components/home_preview/Navbar';
import StartButton from '../../components/home5_residence/StartButton';
import Slider from '../../components/innerpage/single_post/Slider';
import Content from '../../components/innerpage/single_post/Content';
import Comments from '../../components/innerpage/single_post/Comments';

function SinglePost() {
  return (
    <PageLayout
      cssFiles={[
        '/common/assets/css/navbar-global.css',
        '/innerpages/assets/css/innerpages.css',
      ]}
      bodyClassName="inner-pages-style1 post-pg-style1"
      fixedElements={<><Menu /><Navbar /></>}
    >
      <main>
        <Slider />
        <Content />
        <Comments />
      </main>
      <Footer />
      <StartButton />
    </PageLayout>
  );
}

export default SinglePost;
