import React from 'react';

function Header() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .partners-pg-hero {
          position: relative;
        }
        .partners-pg-hero .partners-pg-hero-inner {
          position: relative;
          height: min(70vh, 820px);
          min-height: 360px;
        }
        .partners-pg-hero .partners-pg-hero-inner::after {
          content: "";
          position: absolute;
          inset: 0;
          background: #000;
          opacity: 0.4;
          pointer-events: none;
        }
        .partners-pg-hero .partners-pg-hero-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      `,
        }}
      />
      <header className="partners-pg-hero">
        <div className="partners-pg-hero-inner">
          <img
            src="/innerpages/assets/img/about/5918.Exterior04.jpg"
            alt=""
          />
        </div>
      </header>
    </>
  );
}

export default Header;
