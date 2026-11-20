'use client';
import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useBlogs from '../../../hooks/useBlogs';
import { cdnImage, cdnSrcSet } from '../../../lib/imageCdn';
function FilterPosts() {
  const { categories, blogs: data, loading } = useBlogs();
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);
  const navigate = useNavigate();
  const filteredPosts = useMemo(() => {
    if (activeFilter === 'All') return data;
    return data.filter((item) => item.categoryId === activeFilter);
  }, [activeFilter, data]);
  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const remainingPosts = Math.max(filteredPosts.length - visibleCount, 0);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setVisibleCount(6);
  };

  const handleLoadMore = () => {
    setVisibleCount((current) => Math.min(current + 6, filteredPosts.length));
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .tc-filter-posts-style1 {
          position: relative;
          overflow: hidden;
        }
        .tc-filter-posts-style1 .blog-filter-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .tc-filter-posts-style1 .blog-filter-chips .filter-btn {
          display: inline-flex;
          align-items: center;
          padding: 10px 22px;
          margin: 0;
          border: 1px solid #dcdcdc;
          border-radius: 999px;
          background: #fff;
          color: #333;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          line-height: 1.2;
          white-space: nowrap;
          cursor: pointer;
          transition: color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
        }
        .tc-filter-posts-style1 .blog-filter-chips .filter-btn:hover {
          color: #73bf44;
          border-color: #73bf44;
        }
        .tc-filter-posts-style1 .blog-filter-chips .filter-btn.active,
        .tc-filter-posts-style1 .blog-filter-chips .filter-btn.active:hover {
          color: #fff !important;
          background: #73bf44;
          border-color: #73bf44;
        }
        @media (max-width: 767px) {
          .tc-filter-posts-style1 .blog-filter-chips {
            flex-wrap: nowrap;
            overflow-x: auto;
            padding-bottom: 6px;
            scrollbar-width: none;
          }
          .tc-filter-posts-style1 .blog-filter-chips::-webkit-scrollbar { display: none; }
          .tc-filter-posts-style1 .blog-filter-chips .filter-btn { padding: 9px 18px; font-size: 12px; }
        }
        .tc-filter-posts-style1 .post-card .title a:hover,
        .tc-filter-posts-style1 .post-card .title a.hover-orange1:hover {
          color: #73bf44 !important;
        }
        .tc-filter-posts-style1 .post-card .tags a.color-orange1 {
          color: #73bf44 !important;
        }
        .tc-filter-posts-style1 .post-card .tags a.color-orange1:hover {
          color: #73bf44;
        }
        .tc-filter-posts-style1 .butn.color-orange1,
        .tc-filter-posts-style1 .butn.border-orange1,
        .tc-filter-posts-style1 .butn.hover-bg-orange1 {
          color: #73bf44 !important;
          border-color: #73bf44 !important;
        }
        .tc-filter-posts-style1 .butn.hover-bg-orange1:hover {
          background: #73bf44 !important;
          color: #fff !important;
        }
      `}} />
      <section className="tc-filter-posts-style1">
        {/* Blurred circular gradient backgrounds */}
        <div 
          className="d-none d-md-block"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 'clamp(300px, 35vw, 500px)',
            height: 'clamp(180px, 25vh, 300px)',
            background: 'rgba(115, 191, 68, 0.2)',
            filter: 'blur(60px)',
            borderRadius: '500px',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />
        <div 
          className="d-none d-md-block"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: 'clamp(250px, 28vw, 400px)',
            height: 'clamp(250px, 28vw, 400px)',
            background: 'rgba(115, 191, 68, 0.15)',
            filter: 'blur(60px)',
            borderRadius: '350px',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="filter-row wow fadeInUp slow" data-wow-delay="0.2s">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="blog-filter-chips" role="group" aria-label="Filter posts by category">
                <button
                  type="button"
                  onClick={() => handleFilterClick('All')}
                  className={`filter-btn ${activeFilter === 'All' ? 'active' : ''}`}
                  aria-pressed={activeFilter === 'All'}
                >
                  All
                </button>
                {categories.map((category) => (
                  <button
                    type="button"
                    key={category.id}
                    onClick={() => handleFilterClick(category.id)}
                    className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                    aria-pressed={activeFilter === category.id}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="col-lg-4 ms-auto mt-4">
              <div className="search-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search in blog"
                />
                <button>
                  <i className="fal fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="posts-content">
          <div className="row">
            {visiblePosts.map((item, i) => (
              <div key={item.id || i} className={`col-lg-4 mix-item BlogCategory-${item.categoryId}`}>
                <div
                  className="post-card mt-70 wow fadeInUp slow"
                  data-wow-delay="0.2s"
                  onClick={() => navigate(`/blog/${item.slug}`, { state: { blog: item } })}
                  style={{ cursor: 'pointer' }}
                >
                  <div
                    className="img th-280 radius-7 overflow-hidden d-block"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      navigate(`/blog/${item.slug}`, { state: { blog: item } });
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    <img loading="lazy" decoding="async" src={cdnImage(item.img, 800, 82)} srcSet={cdnSrcSet(item.img, [480, 800, 1200])} sizes="(max-width: 991px) 100vw, 33vw" alt={item.title} className="img-cover" />
                  </div>
                  <div className="info pt-30">
                    <div className="tags color-666 text-uppercase fsz-12">
                      <span 
                        className="color-orange1"
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
                        className="hover-orange1 fsz-24"
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
            {!loading && visiblePosts.length === 0 && (
              <div className="col-12">
                <p className="text-center color-666 fsz-18 py-5 mb-0">
                  {activeFilter === 'All'
                    ? 'No blog posts are available yet.'
                    : 'No blog posts are available in this category.'}
                </p>
              </div>
            )}
          </div>
        </div>
        {remainingPosts > 0 && (
          <div className="text-center wow fadeInUp slow" data-wow-delay="0.2s">
            <button
              type="button"
              className="butn border rounded-pill color-orange1 border-orange1 hover-bg-orange1 mt-100 px-5"
              style={{ background: 'transparent' }}
              onClick={handleLoadMore}
            >
              <span> Load More ({Math.min(6, remainingPosts)}) </span>
            </button>
          </div>
        )}
        </div>
      </section>
    </>
  );
}

export default FilterPosts;
