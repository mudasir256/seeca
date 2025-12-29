'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../../../data/home1/projects/projects1.json';
import mixitup from 'mixitup';
function LatestCases() {
  const [activeFilter, setActiveFilter] = useState('All');
  const mixitupContainerRef = useRef(null);
  const navigate = useNavigate();

  // Category mapping: maps data categories to filter categories
  const getFilterClasses = (item) => {
    const classes = [];
    const sub1 = item.sub1?.toLowerCase() || '';
    const sub2 = item.sub2?.toLowerCase().replace(/\s+/g, '') || '';
    
    // Map sub1 and sub2 to filter categories
    if (sub1.includes('office') || sub1.includes('commercial') || sub2.includes('commercial')) {
      classes.push('Commercial');
    }
    if (sub1.includes('restaurant') || sub2.includes('hospitality')) {
      classes.push('Hospitality');
    }
    if (sub2.includes('interiordesign') || sub1.includes('interior')) {
      classes.push('Interior');
    }
    if (sub1.includes('retail')) {
      classes.push('Commercial');
    }
    
    // Always add the original sub2 class for backward compatibility
    if (item.sub2) {
      classes.push(item.sub2.replace(/\s+/g, ''));
    }
    
    return classes.join(' ');
  };

  useEffect(() => {
    const initializeMixitup = () => {
      if (mixitupContainerRef.current) {
        mixitup(mixitupContainerRef.current, {
          load: {
            sort: 'order:asc',
          },
          animation: {
            duration: 700,
          },
          classNames: {
            block: 'filter',
            elementFilter: 'filter-btn',
            elementSort: 'sort-btn',
          },
          selectors: {
            target: '.mix-item',
          },
        });
      }
    };

    initializeMixitup();
  }, []);
  
  const handleFilterClick = (filter, e) => {
    e.preventDefault();
    setActiveFilter(filter);

    // Remove 'active' class from all filter buttons
    document.querySelectorAll('.filter-btn').forEach((btn) => {
      btn.classList.remove('active');
    });

    // Add 'active' class to the clicked filter button
    const clickedButton = e.currentTarget;
    if (clickedButton) {
      clickedButton.classList.add('active');
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .tc-latest-cases-style1 {
          position: relative;
          overflow: hidden;
        }
        .tc-latest-cases-style1 .filter-btn.active {
          color: #73bf44 !important;
        }
        .tc-latest-cases-style1 .case-card:hover {
          border-color: #73bf44;
        }
        .tc-latest-cases-style1 .case-card .title a:hover,
        .tc-latest-cases-style1 .case-card .title a.hover-orange1:hover {
          color: #73bf44 !important;
        }
        .tc-latest-cases-style1 .case-card .tags a {
          background: rgba(115, 191, 68, 0.1);
          color: #73bf44;
          border-color: rgba(115, 191, 68, 0.2);
        }
        .tc-latest-cases-style1 .case-card .tags a:hover {
          background: #73bf44;
          color: #fff;
          border-color: #73bf44;
        }
        .tc-latest-cases-style1 .pagination .page-link:hover {
          color: #73bf44;
          border-color: rgba(115, 191, 68, 0.3);
        }
        .tc-latest-cases-style1 .pagination .page-link.active {
          color: #fff;
          background: #73bf44;
          border-color: #73bf44;
        }
        .tc-latest-cases-style1 .filter-btn[data-filter=".GordonsVilla"],
        .tc-latest-cases-style1 .filter-btn[data-filter=".GordonsVilla"].active {
          color: #8B4513;
        }
        .tc-latest-cases-style1 .filter-btn[data-filter=".GordonsVilla"]:hover {
          color: #8B4513;
          border-color: rgba(139, 69, 19, 0.3);
          background: rgba(139, 69, 19, 0.05);
        }
        .tc-latest-cases-style1 .filter-btn[data-filter=".GordonsVilla"].active {
          background: #8B4513;
          border-color: #8B4513;
          color: #fff;
          box-shadow: 0 4px 15px rgba(139, 69, 19, 0.3);
        }
        .tc-latest-cases-style1 .case-card {
          cursor: pointer;
        }
        .tc-latest-cases-style1 .case-card .text {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 1.6;
          max-height: calc(1.6em * 3);
        }
        .tc-latest-cases-style1 .case-card .title {
          font-size: 20px !important;
          line-height: 1.3;
        }
        .tc-latest-cases-style1 .case-card .title a {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display: block;
        }
      `}} />
      <section className="tc-latest-cases-style1">
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
          <div className="content">
            <h3 className="fsz-45 text-capitalize mb-90 js-splittext-lines">
              Latest Cases
            </h3>
            <div className="cases">
              <div
                className="filter mb-60 wow fadeInUp slow"
                data-wow-delay="0.2s"
              >
                <div className="links">
                <a
                  onClick={(e) => handleFilterClick('All', e)}
                  className={`filter-btn ${
                    activeFilter === 'All' ? 'active' : ''
                  }`}
                  href="#0"
                  data-filter="*"
                >
                  All
                </a>
                <a
                  href="#0"
                  onClick={(e) => handleFilterClick('Architecture', e)}
                  className={`filter-btn ${
                    activeFilter === 'Architecture' ? 'active' : ''
                  }`}
                  data-filter=".Architecture"
                >
                  Architecture
                </a>
                <a
                  href="#0"
                  onClick={(e) => handleFilterClick('Interior', e)}
                  className={`filter-btn ${
                    activeFilter === 'Interior' ? 'active' : ''
                  }`}
                  data-filter=".Interior"
                >
                  Interior
                </a>
                <a
                  href="#0"
                  onClick={(e) => handleFilterClick('Landscape', e)}
                  className={`filter-btn ${
                    activeFilter === 'Landscape' ? 'active' : ''
                  }`}
                  data-filter=".Landscape"
                >
                  Landscape
                </a>
                <a
                  href="#0"
                  onClick={(e) => handleFilterClick('Furniture', e)}
                  className={`filter-btn ${
                    activeFilter === 'Furniture' ? 'active' : ''
                  }`}
                  data-filter=".Furniture"
                >
                  Furniture
                </a>
                {/* <a
                  href="#0"
                  onClick={() => handleFilterClick("Gordon's Villa")}
                  className={`filter-btn ${
                    activeFilter === "Gordon's Villa" ? 'active' : ''
                  }`}
                  data-filter=".GordonsVilla"
                >
                  Gordon's Villa
                </a> */}
              </div>
            </div>
            <div
              className="cases-content wow fadeInUp slow"
              data-wow-delay="0.4s"
            >
              <div className="row mixitup" ref={mixitupContainerRef}>
                {data.map((item, i) => (
                  <div key={i} className={`col-lg-4 mix-item ${getFilterClasses(item)}`}>
                    <div 
                      className="case-card"
                      onClick={() => navigate('/innerpages/single_project', { state: { project: item } })}
                    >
                      <div className="img">
                        <img src={item.img} alt="" className="img-cover" />
                      </div>
                      <div className="info">
                        <div className="tags mb-30">
                          <a href="#" onClick={(e) => e.preventDefault()}> {item.sub1} </a>
                          {item.sub2 && (
                            <a href="#" onClick={(e) => e.preventDefault()}> {item.sub2} </a>
                          )}
                        </div>
                        <h3 className="title mb-20">
                          <a href="#" className="hover-orange1" onClick={(e) => e.preventDefault()}>
                            {item.title}
                          </a>
                        </h3>
                        <div className="text color-666">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="fal fa-chevron-left"></i>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link active" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      ...
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      15
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="fal fa-chevron-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

export default LatestCases;
