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
          .tc-navbar-preview .navbar-toggler {
            border: 1px solid rgba(255, 255, 255, 0.3);
            padding: 8px 12px;
          }
          .tc-navbar-preview .navbar-toggler:focus {
            box-shadow: 0 0 0 0.2rem rgba(115, 191, 68, 0.25);
          }
          .tc-navbar-preview .navbar-toggler-icon {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
          }
          @media screen and (max-width: 991px) {
            .tc-navbar-preview {
              padding: 15px 20px !important;
              background: #000 !important;
            }
            .tc-navbar-preview.scrolled {
              padding: 10px 20px !important;
            }
            .tc-navbar-preview .content {
              padding: 0 !important;
            }
            .tc-navbar-preview .content .navbar-brand {
              max-width: 180px;
              margin-inline-end: 0;
            }
            .tc-navbar-preview .content .navbar-brand .logo {
              max-height: 40px !important;
            }
            .tc-navbar-preview .navbar-nav {
              margin: 20px 0;
              padding: 0;
            }
            .tc-navbar-preview .navbar-nav .nav-item {
              margin-bottom: 5px;
            }
            .tc-navbar-preview .navbar-nav .nav-link {
              font-size: 15px;
              margin: 0;
              padding: 12px 15px;
              border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }
            .tc-navbar-preview .navbar-nav .nav-link:last-child {
              border-bottom: none;
            }
            .tc-navbar-preview .dropdown-menu {
              background: rgba(0, 0, 0, 0.8);
              border: 1px solid rgba(255, 255, 255, 0.1);
              margin-top: 5px;
              margin-left: 15px;
              border-radius: 8px;
            }
            .tc-navbar-preview .dropdown-menu .dropdown-item {
              padding: 12px 20px;
              font-size: 14px;
              border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            }
            .tc-navbar-preview .dropdown-menu .dropdown-item:hover {
              background-color: rgba(115, 191, 68, 0.2);
              color: #73bf44;
            }
            .tc-navbar-preview .nav-side {
              margin-top: 20px;
              padding-top: 20px;
              border-top: 1px solid rgba(255, 255, 255, 0.1);
            }
            .tc-navbar-preview .nav-side .butn {
              width: 100%;
              text-align: center;
              padding: 12px 20px;
              font-size: 14px;
            }
          }
          @media screen and (max-width: 767px) {
            .tc-navbar-preview {
              padding: 12px 15px !important;
            }
            .tc-navbar-preview.scrolled {
              padding: 8px 15px !important;
            }
            .tc-navbar-preview .content .navbar-brand {
              max-width: 150px;
            }
            .tc-navbar-preview .content .navbar-brand .logo {
              max-height: 35px !important;
            }
            .tc-navbar-preview .navbar-nav .nav-link {
              font-size: 14px;
              padding: 10px 12px;
            }
            .tc-navbar-preview .dropdown-menu {
              margin-left: 10px;
            }
            .tc-navbar-preview .dropdown-menu .dropdown-item {
              padding: 10px 15px;
              font-size: 13px;
            }
          }
          @media screen and (max-width: 575px) {
            .tc-navbar-preview {
              padding: 10px 12px !important;
            }
            .tc-navbar-preview.scrolled {
              padding: 6px 12px !important;
            }
            .tc-navbar-preview .content .navbar-brand {
              max-width: 120px;
            }
            .tc-navbar-preview .content .navbar-brand .logo {
              max-height: 30px !important;
            }
            .tc-navbar-preview .navbar-toggler {
              padding: 6px 10px;
            }
            .tc-navbar-preview .navbar-nav .nav-link {
              font-size: 13px;
              padding: 8px 10px;
            }
            .tc-navbar-preview .nav-side .butn {
              padding: 10px 15px;
              font-size: 13px;
            }
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
