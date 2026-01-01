import React from 'react';

function Slider({ blog }) {
  // Default values if no blog data is passed
  const defaultBlog = {
    img: "/innerpages/assets/img/blog/b1.jpg",
    subTitle: "inspiration",
    history: "march 24, 2024",
    title: "Top 10 Wooden Architecture Building 2023"
  };

  const blogData = blog || defaultBlog;

  return (
    <section className="tc-main-img-style1 header">
      <div className="main-img">
        <img
          src={blogData.img}
          alt={blogData.title}
          className="img-cover"
          data-speed="1.25"
        />
      </div>
      <div className="content">
        <div className="container">
          <div className="info">
            <div className="date fsz-12 text-uppercase mb-30">
              <a href="#" onClick={(e) => e.preventDefault()}> {blogData.subTitle} </a>
              <span className="circle icon-3 bg-white rounded-circle mx-3"></span>
              <a href="#" onClick={(e) => e.preventDefault()}> {blogData.history} </a>
            </div>
            <h2 className="title">
              <a href="#" className="hover-orange1" onClick={(e) => e.preventDefault()}>
                {blogData.title}
              </a>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
