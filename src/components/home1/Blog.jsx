import React from 'react';
import data from '../../data/home1/blogs';

function Blog({ limit = 3, showViewAll = true }) {
  const displayPosts = limit ? data.slice(0, limit) : data;

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .tc-blog-style1 {
          position: relative;
          padding: 120px 0 80px;
          background-color: #fff;
        }
        .tc-blog-style1 .blog-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 60px;
        }
        .tc-blog-style1 .blog-header h2 {
          font-size: 42px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0;
        }
        .tc-blog-style1 .blog-view-all-btn {
          padding: 12px 30px;
          border: 2px solid #73bf44;
          border-radius: 50px;
          color: #73bf44;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .tc-blog-style1 .blog-view-all-btn:hover {
          background-color: #73bf44;
          color: #fff;
        }
        .tc-blog-style1 .blog-view-all-btn i {
          font-size: 14px;
        }
        .tc-blog-style1 .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        .tc-blog-style1 .blog-card {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .tc-blog-style1 .blog-card:hover {
          box-shadow: 0 10px 30px rgba(115, 191, 68, 0.15);
          transform: translateY(-5px);
        }
        .tc-blog-style1 .blog-card .img {
          position: relative;
          width: 100%;
          height: 250px;
          overflow: hidden;
        }
        .tc-blog-style1 .blog-card .img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .tc-blog-style1 .blog-card:hover .img img {
          transform: scale(1.05);
        }
        .tc-blog-style1 .blog-card .info {
          padding: 25px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .tc-blog-style1 .blog-card .date {
          margin-bottom: 20px;
        }
        .tc-blog-style1 .blog-card .date .num {
          font-size: 42px;
          font-weight: 700;
          color: #73bf44;
          line-height: 1;
          margin-bottom: 8px;
        }
        .tc-blog-style1 .blog-card .date small {
          font-size: 12px;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .tc-blog-style1 .blog-card .cont {
          flex-grow: 1;
        }
        .tc-blog-style1 .blog-card .title {
          font-size: 22px;
          font-weight: 600;
          color: #1a1a1a;
          text-decoration: none;
          display: block;
          margin-bottom: 12px;
          line-height: 1.4;
          transition: color 0.3s ease;
        }
        .tc-blog-style1 .blog-card .title:hover {
          color: #73bf44;
        }
        .tc-blog-style1 .blog-card .description {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 15px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .tc-blog-style1 .blog-card .subTitle {
          font-size: 12px;
          color: #73bf44;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 500;
        }
        @media (max-width: 991px) {
          .tc-blog-style1 {
            padding: 80px 0 60px;
          }
          .tc-blog-style1 .blog-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
            margin-bottom: 50px;
          }
          .tc-blog-style1 .blog-header h2 {
            font-size: 36px;
          }
          .tc-blog-style1 .blog-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }
          .tc-blog-style1 .blog-card .img {
            height: 220px;
          }
          .tc-blog-style1 .blog-card .title {
            font-size: 20px;
          }
        }
        @media (max-width: 767px) {
          .tc-blog-style1 {
            padding: 60px 0 50px;
          }
          .tc-blog-style1 .blog-header h2 {
            font-size: 32px;
          }
          .tc-blog-style1 .blog-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }
          .tc-blog-style1 .blog-card .img {
            height: 200px;
          }
          .tc-blog-style1 .blog-card .info {
            padding: 20px;
          }
          .tc-blog-style1 .blog-card .date .num {
            font-size: 36px;
          }
          .tc-blog-style1 .blog-card .title {
            font-size: 18px;
          }
        }
        @media (max-width: 575px) {
          .tc-blog-style1 {
            padding: 50px 0 40px;
          }
          .tc-blog-style1 .blog-header h2 {
            font-size: 28px;
          }
          .tc-blog-style1 .blog-card .img {
            height: 180px;
          }
          .tc-blog-style1 .blog-card .date .num {
            font-size: 32px;
          }
        }
      `}} />
      <section className="tc-blog-style1">
        <div className="container">
          <div className="blog-header">
            <h2 className="fsz-45">Latest Blogs</h2>
            {showViewAll && limit && (
              <a href="#" className="blog-view-all-btn">
                <span>View All</span>
                <i className="ti-arrow-top-right"></i>
              </a>
            )}
          </div>
          <div className="blog-grid">
            {displayPosts.map((item, i) => (
              <div key={item.slug || i} className="blog-card">
                <div className="img">
                  <img src={item.coverImage || item.img} alt={item.title} className="img-cover" />
                </div>
                <div className="info">
                  <div className="date">
                    <div className="num fsz-45 mb-2">{item.num || '01'}</div>
                    <small className="fsz-12 text-uppercase color-666">
                      {item.history ? (
                        <>
                          {item.history.split('<br />')[0]} <br />
                          {item.history.split('<br />')[1]}
                        </>
                      ) : (
                        'January 2024'
                      )}
                    </small>
                  </div>
                  <div className="cont">
                    <a href="#" className="title d-block fsz-24 mb-15 fw-600">
                      {item.title}
                    </a>
                    {item.description && (
                      <p className="description">{item.description}</p>
                    )}
                    <small className="fsz-12 subTitle">
                      {item.subTitle || 'Blog'}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;

