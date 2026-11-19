import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation, useParams } from 'react-router-dom';
import PageLayout from '../../components/common/PageLayout';
import Footer from '../../components/home1/Footer';
import Menu from '../../components/innerpage/Menu';
import Navbar from '../../components/home_preview/Navbar';
import StartButton from '../../components/home5_residence/StartButton';
import Header from '../../components/innerpage/contact/Header';
import Content from '../../components/innerpage/single_post/Content';
import Testimonials from '../../components/home1/Testimonials';
import ContactSection from '../../components/innerpage/architecture/ContactSection';
import useBlogs from '../../hooks/useBlogs';
import NotFound from '../NotFound';

// Link each post to the most relevant service page (by keywords, then by category).
const SERVICE_LINKS = [
  { test: /smart/i, path: '/smart-building-technologies', label: 'Smart Building Technologies' },
  { test: /sustainab/i, path: '/building-sustainability', label: 'Building Sustainability' },
  { test: /interior/i, path: '/interior-design', label: 'Interior Design' },
  { test: /construct/i, path: '/construction', label: 'Construction' },
  { test: /architect/i, path: '/architecture', label: 'Architecture' },
];

function relatedService(blog) {
  if (!blog) return null;
  const text = `${blog.slug} ${blog.title}`;
  return (
    SERVICE_LINKS.find((s) => s.test.test(text)) ||
    SERVICE_LINKS.find((s) => s.test.test(blog.subTitle || '')) ||
    null
  );
}

function SinglePost() {
  const location = useLocation();
  const { slug } = useParams();
  const { blogs, loaded } = useBlogs();
  const blogFromState = location.state?.blog;
  const blogFromSlug = slug ? blogs.find((item) => item.slug === slug) : null;
  const blog = blogFromState || blogFromSlug;

  // The CMS has answered and there is no post with this address: show a real 404 page.
  if (!blog && loaded) {
    return <NotFound />;
  }

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
      {blog && (
        <Helmet>
          <title>{`${blog.title} | SEECA Blog`}</title>
          <meta name="description" content={blog.description} />
          <meta property="og:title" content={`${blog.title} | SEECA Blog`} />
          <meta property="og:description" content={blog.description} />
          <meta name="twitter:title" content={`${blog.title} | SEECA Blog`} />
          <meta name="twitter:description" content={blog.description} />
        </Helmet>
      )}
      <Header
        title={headerTitle}
        description={headerDescription}
        backgroundImage={headerBackgroundImage}
      />
      <main>
        <Content blog={blog} blogs={blogs} />
        {relatedService(blog) && (
          <section className="container" style={{ padding: '10px 15px 60px' }}>
            <p style={{ fontSize: 18, borderLeft: '4px solid #73bf44', paddingLeft: 16 }}>
              Planning a project? See SEECA&apos;s{' '}
              <Link to={relatedService(blog).path}>{relatedService(blog).label} services in Lahore</Link>{' '}
              or <Link to="/portfolio">browse our projects</Link>.
            </p>
          </section>
        )}
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <StartButton />
    </PageLayout>
  );
}

export default SinglePost;
