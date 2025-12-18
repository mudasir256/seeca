import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import demos from '../../data/main-page/demos.json';
import pages from '../../data/main-page/innerpages.json';
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark tc-navbar-preview ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid content">
        <Link className="navbar-brand" to="/">
          <img
            src="/home_preview/assets/img/logo.png"
            alt=""
            className="logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Homes
              </a>
              <ul className="dropdown-menu">
                {demos.map((item, i) => (
                  <li key={i}>
                    <Link className="dropdown-item" to={item.link}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pages
              </a>
              <ul className="dropdown-menu">
                {pages.map((item, i) => (
                  <li key={i}>
                    <Link className="dropdown-item" to={item.link}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Cases
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/innerpages/portfolio">
                    page portfolio
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/innerpages/single_project">
                    page single project
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/innerpages/single_project2">
                    page single project 2
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                News
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/innerpages/blog">
                    page blog
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/innerpages/single_post">
                    page single post
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                shop
              </a>
            </li>
          </ul>
          <div className="nav-side">
            <a
              href="#"
              className="butn hover-bg-black text-capitalize bg-orange1 rounded-pill text-white"
            >
              <span> Purchase Now </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
