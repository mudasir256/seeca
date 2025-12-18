import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    <>
      <style>
        {`
          .tc-navbar-preview .content .navbar-nav .nav-link:hover,
          .tc-navbar-preview .content .navbar-nav .nav-link.active {
            color: #73bf44 !important;
          }
        `}
      </style>
      <nav className={`navbar navbar-expand-lg navbar-dark tc-navbar-preview ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid content">
        <Link className="navbar-brand" to="/">
          <img
            src="/home_preview/assets/img/logo.png"
            alt=""
            style={{ maxHeight: '50px' }}
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
            <li className="nav-item">
              <Link className="nav-link" to="/" >
              
                HOME
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ABOUT
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/innerpages/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/innerpages/process">
                    Our Process
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
                OUR SERVICES
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/innerpages/architecture">
                    Architecture
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/innerpages/interior-design">
                    Interior Design
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/innerpages/construction">
                    Construction
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/innerpages/building-sustainability">
                    Building Sustainability
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/innerpages/smart-building-technologies">
                    Smart Building Technologies
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/innerpages/portfolio">
                PORTFOLIO
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/innerpages/contact">
                CONTACT US
              </Link>
            </li>
          </ul>
          <div className="nav-side">
            <a
              href="#"
              className="butn hover-bg-black text-capitalize  rounded-pill text-white"
              style={{ backgroundColor: '#73bf44' }}
            >
              <span> Purchase Now </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
