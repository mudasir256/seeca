import React, { useEffect, useMemo, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function RelatedPosts({ currentBlog, blogs }) {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const swiperRef = useRef(null);

  const relatedPosts = useMemo(() => {
    return [...blogs]
      .filter((item) => item.slug !== currentBlog?.slug)
      .sort((a, b) => {
        const aMatches = a.categoryId === currentBlog?.categoryId ? 1 : 0;
        const bMatches = b.categoryId === currentBlog?.categoryId ? 1 : 0;
        return bMatches - aMatches;
      })
      .slice(0, 3);
  }, [blogs, currentBlog?.categoryId, currentBlog?.slug]);

  useEffect(() => {
    if (relatedPosts.length === 0) return undefined;

    let retryCount = 0;
    let retryTimer;

    const initializeSlider = () => {
      if (typeof window === 'undefined' || !window.Swiper || !sliderRef.current) {
        retryCount += 1;
        if (retryCount < 50) {
          retryTimer = setTimeout(initializeSlider, 100);
        }
        return;
      }

      swiperRef.current = new window.Swiper(sliderRef.current, {
        slidesPerView: 2,
        spaceBetween: 30,
        speed: 1000,
        pagination: false,
        navigation: {
          nextEl: '.related-posts .swiper-button-next',
          prevEl: '.related-posts .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
          delay: 5000,
        },
        loop: relatedPosts.length > 1,
        breakpoints: {
          0: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          787: { slidesPerView: 2 },
          991: { slidesPerView: 2 },
          1200: { slidesPerView: 2 },
        },
      });
    };

    const startTimer = setTimeout(initializeSlider, 200);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(retryTimer);
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
        swiperRef.current = null;
      }
    };
  }, [currentBlog?.slug, relatedPosts.length]);

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
                ref={sliderRef}
              >
                <div className="swiper-wrapper">
          {relatedPosts.map((item, index) => (
            <div key={item.id || index} className="swiper-slide">
                    <div className="post-card">
                <div
                        className="img th-280 radius-7 overflow-hidden d-block"
                  onClick={() => navigate(`/blog/${item.slug}`, { state: { blog: item } })}
                  style={{ cursor: 'pointer' }}
                      >
                        <img loading="lazy" decoding="async"
                    src={item.img}
                    alt={item.title}
                          className="img-cover"
                        />
                </div>
                      <div className="info pt-30">
                        <div className="tags color-666 text-uppercase fsz-12">
                    <span 
                      className="color-green1"
                      style={{ color: '#73bf44' }}
                    >
                      {item.subTitle}
                          </span>
                          <span className="circle icon-3 bg-666 rounded-circle mx-3"></span>
                    <span> 
                      {item.history} 
                    </span>
                        </div>
                        <h3 className="title mt-15">
                    <button 
                      type="button"
                      className="hover-green1 fsz-24"
                      onClick={() => {
                        navigate(`/blog/${item.slug}`, { state: { blog: item } });
                      }}
                      style={{ color: 'inherit', background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left', width: '100%' }}
                    >
                      {item.title}
                          </button>
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

// Inline formatting inside a paragraph: **bold** and [text](/link).
function renderInline(text) {
  const parts = [];
  const pattern = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let match;
  let key = 0;
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    const token = match[0];
    if (token.startsWith('**')) {
      parts.push(<strong key={key++}>{token.slice(2, -2)}</strong>);
    } else {
      const label = token.slice(1, token.indexOf(']'));
      const href = token.slice(token.indexOf('(') + 1, -1);
      parts.push(
        href.startsWith('/')
          ? <Link key={key++} to={href}>{label}</Link>
          : <a key={key++} href={href} target="_blank" rel="noopener noreferrer">{label}</a>
      );
    }
    last = match.index + token.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function Content({ blog, blogs = [] }) {
  if (!blog) return null;

  const blogData = blog;
  
  // Split content into paragraphs if it contains newlines
  const contentParagraphs = blogData.content ? blogData.content.split('\n\n') : [blogData.description];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .tc-post-content-style1 {
          position: relative;
          padding: 120px 0;
          background-color: #fff;
        }
        .tc-post-content-style1 .post-heading { font-size: 28px; font-weight: 600; color: #1a1a1a; margin: 50px 0 20px; line-height: 1.3; }
        .tc-post-content-style1 .post-subheading { font-size: 21px; font-weight: 600; color: #1a1a1a; margin: 30px 0 14px; }
        .tc-post-content-style1 .post-list { margin: 0 0 30px; padding-left: 22px; color: #666; line-height: 1.8; font-size: 14px; }
        .tc-post-content-style1 .post-list li { margin-bottom: 8px; }
        .tc-post-content-style1 .info .text a, .tc-post-content-style1 .post-list a { color: #4e9a2a; text-decoration: underline; }
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
                  <span> Home </span>
                  <span className="icon">/</span>
                  <span> Blog </span>
                  <span className="icon">/</span>
                  <span> {blogData.title} </span>
                </div>
                <h6
                  className="fsz-24 fw-600 mb-60 wow fadeInUp slow"
                  data-wow-delay="0.2s"
                >
                  {blogData.description || "Discover the latest insights and trends in architecture and design."}
                </h6>
                {contentParagraphs.map((paragraph, index) => {
                  const block = paragraph.trim();
                  // Simple formatting: "## " heading, "### " sub-heading, "- " list items.
                  if (block.startsWith('### ')) {
                    return <h3 key={index} className="post-subheading">{renderInline(block.slice(4))}</h3>;
                  }
                  if (block.startsWith('## ')) {
                    return <h2 key={index} className="post-heading">{renderInline(block.slice(3))}</h2>;
                  }
                  const lines = block.split('\n');
                  if (lines.every((line) => line.trim().startsWith('- '))) {
                    return (
                      <ul key={index} className="post-list">
                        {lines.map((line, i) => <li key={i}>{renderInline(line.trim().slice(2))}</li>)}
                      </ul>
                    );
                  }
                  const isFirst = index === 0;
                  return (
                    <div
                      key={index}
                      className={`text fsz-14 color-666 ${isFirst ? 'mb-70' : 'mb-30'}`}
                      data-wow-delay="0.2s"
                      style={{ whiteSpace: 'pre-line', lineHeight: '1.8' }}
                    >
                      {isFirst && <span className="lg-letter"> {block.charAt(0)} </span>}
                      {renderInline(isFirst ? block.substring(1) : block)}
                    </div>
                  );
                })}
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
                        {blogData.subTitle && blogData.subTitle.split(/[,\s]+/).filter(Boolean).map((tag, index) => (
                        <span 
                          key={index} 
                        > 
                          {tag.trim()} 
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="share mt-4 mt-lg-0 justify-content-lg-end">
                      <span className="txt me-3"> Share on </span>
                      <div className="links">
                        <button type="button" onClick={(e) => e.preventDefault()}>
                          <i className="fab fa-x-twitter"></i>
                        </button>
                        <button type="button" onClick={(e) => e.preventDefault()}>
                          <i className="fab fa-facebook-f"></i>
                        </button>
                        <button type="button" onClick={(e) => e.preventDefault()}>
                          <i className="fab fa-blogger"></i>
                        </button>
                        <button type="button" onClick={(e) => e.preventDefault()}>
                          <i className="fab fa-discord"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <RelatedPosts currentBlog={blogData} blogs={blogs} />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Content;
