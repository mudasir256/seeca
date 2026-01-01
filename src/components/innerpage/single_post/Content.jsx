import React from 'react';
import { useNavigate } from 'react-router-dom';
import blogData from '../../../data/innerpages/blog/filter';

function RelatedPosts({ currentBlog }) {
  const navigate = useNavigate();
  
  // Get related posts (exclude current blog, get first 3)
  const relatedPosts = blogData
    .filter(item => item.slug !== currentBlog?.slug)
    .slice(0, 3);

  if (relatedPosts.length === 0) return null;

  return (
            <div className="related-posts">
              <div className="title mb-70">
                <div
                  className="row align-items-center wow fadeInUp slow"
                  data-wow-delay="0.2s"
                >
                  <div className="col-lg-8">
                    <h3 className="fsz-45 text-capitalize"> Related Posts </h3>
                  </div>
                  <div className="col-lg-4 mt-4 mt-lg-0">
                    <div className="arrows me-lg-0 ms-lg-auto">
                      <div className="swiper-button-prev"></div>
                      <div className="swiper-button-next"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="related-slider wow fadeInUp slow"
                data-wow-delay="0.2s"
              >
                <div className="swiper-wrapper">
          {relatedPosts.map((item, index) => (
            <div key={index} className="swiper-slide">
                    <div className="post-card">
                <div
                        className="img th-280 radius-7 overflow-hidden d-block"
                  onClick={() => navigate('/innerpages/single_post', { state: { blog: item } })}
                  style={{ cursor: 'pointer' }}
                      >
                        <img
                    src={item.img}
                    alt={item.title}
                          className="img-cover"
                        />
                </div>
                      <div className="info pt-30">
                        <div className="tags color-666 text-uppercase fsz-12">
                    <a 
                      href="#" 
                      className="color-green1"
                      onClick={(e) => e.preventDefault()}
                      style={{ color: '#73bf44' }}
                    >
                      {item.subTitle}
                          </a>
                          <span className="circle icon-3 bg-666 rounded-circle mx-3"></span>
                    <a 
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    > 
                      {item.history} 
                    </a>
                        </div>
                        <h3 className="title mt-15">
                    <a 
                      href="#" 
                      className="hover-green1 fsz-24"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate('/innerpages/single_post', { state: { blog: item } });
                      }}
                      style={{ color: 'inherit' }}
                    >
                      {item.title}
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Content({ blog }) {
  // Default values if no blog data is passed
  const defaultBlog = {
    title: "Top 10 Wooden Architecture Building 2023",
    subTitle: "Architecture, Building",
    history: "march 24, 2024",
    description: "Discover the latest trends in modern architecture.",
    content: "Success needs hard work. Don't listen to these 'get rich quick' schemes. You need to build your character and work hard on yourself and your business to achieve greatness. Worked hard and work smart. Do the right things and do them in the right way. Don't think much to procrastinate. Take bold actions. Work long hours and craft your legacy. Successful people do not see failures as failures. They see them as important learning lessons. Be with people who have utmost conviction and patience. The battle is never lost until you've abandon your vision."
  };

  const blogData = blog || defaultBlog;
  
  // Split content into paragraphs if it contains newlines
  const contentParagraphs = blogData.content ? blogData.content.split('\n\n') : [blogData.description || defaultBlog.content];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .tc-post-content-style1 {
          position: relative;
          padding: 120px 0;
          background-color: #fff;
        }
        .tc-post-content-style1 .breadcromb a {
          color: #666;
          transition: color 0.3s ease;
        }
        .tc-post-content-style1 .breadcromb a:hover {
          color: #73bf44;
        }
        .tc-post-content-style1 .tags a {
          color: #73bf44 !important;
          transition: color 0.3s ease;
        }
        .tc-post-content-style1 .tags a:hover {
          color: #5a9a35 !important;
        }
        .tc-post-content-style1 .share .links a {
          color: #666;
          transition: color 0.3s ease;
        }
        .tc-post-content-style1 .share .links a:hover {
          color: #73bf44;
        }
        .tc-post-content-style1 .social-links a {
          color: #666;
          transition: color 0.3s ease;
        }
        .tc-post-content-style1 .social-links a:hover {
          color: #73bf44;
        }
        .tc-post-content-style1 .related-posts .post-card .title a {
          transition: color 0.3s ease;
        }
        .tc-post-content-style1 .related-posts .post-card .title a:hover {
          color: #73bf44 !important;
        }
      `}} />
      <section className="tc-post-content-style1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="info">
                <div
                  className="breadcromb wow fadeInUp slow"
                  data-wow-delay="0.2s"
                >
                  <a href="#" onClick={(e) => e.preventDefault()}> Home </a>
                  <span className="icon">/</span>
                  <a href="#" onClick={(e) => e.preventDefault()}> Blog </a>
                  <span className="icon">/</span>
                  <a href="#" onClick={(e) => e.preventDefault()}> {blogData.title} </a>
                </div>
                <h6
                  className="fsz-24 fw-600 mb-60 wow fadeInUp slow"
                  data-wow-delay="0.2s"
                >
                  {blogData.description || "Discover the latest insights and trends in architecture and design."}
                </h6>
                {contentParagraphs.map((paragraph, index) => (
                  <div
                    key={index}
                    className="text fsz-14 color-666 mb-70 wow fadeInUp slow"
                    data-wow-delay="0.2s"
                    style={{ whiteSpace: 'pre-line', lineHeight: '1.8' }}
                  >
                    {index === 0 && <span className="lg-letter"> {paragraph.charAt(0)} </span>}
                    {index === 0 ? paragraph.substring(1) : paragraph}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                className="share-content wow fadeInUp slow"
                data-wow-delay="0.2s"
              >
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="tags">
                      {blogData.subTitle && blogData.subTitle.split(',').map((tag, index) => (
                        <a 
                          key={index} 
                        href="#"
                          onClick={(e) => e.preventDefault()}
                        > 
                          {tag.trim()} 
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="share mt-4 mt-lg-0 justify-content-lg-end">
                      <span className="txt me-3"> Share on </span>
                      <div className="links">
                        <a href="#" onClick={(e) => e.preventDefault()}>
                          <i className="fab fa-x-twitter"></i>
                        </a>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                          <i className="fab fa-blogger"></i>
                        </a>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                          <i className="fab fa-discord"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <RelatedPosts currentBlog={blogData} />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Content;
