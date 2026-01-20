'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../../../data/home1/projects/projects1.json';
import mixitup from 'mixitup';
function LatestCases() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 9;
  const mixitupContainerRef = useRef(null);
  const navigate = useNavigate();

  // Category mapping: maps data categories to filter categories
  const getFilterClasses = (item) => {
    const classes = [];
    const sub1 = item.sub1?.toLowerCase() || '';
    const sub2 = item.sub2?.toLowerCase().replace(/\s+/g, '') || '';
    
    // Check if it's an Interior Design project by image path
    const hasInteriorImage = item.images?.some(img => img.includes('Interior_Design')) || 
                             item.img?.includes('Interior_Design');
    const hasArchitectureImage = item.images?.some(img => img.includes('Architecture_Deisgn')) || 
                                item.img?.includes('Architecture_Deisgn');
    
    // Architecture projects
    if (hasArchitectureImage || sub2.includes('architecturedesign') || sub1.includes('architecture')) {
      classes.push('Architecture');
    }
    
    // Interior projects - check image path first, then category
    if (hasInteriorImage || sub2.includes('interiordesign') || sub1.includes('interior')) {
      classes.push('Interior');
    }
    
    // Additional categories
    if (sub1.includes('office') || sub1.includes('commercial') || sub2.includes('commercial')) {
      classes.push('Commercial');
    }
    if (sub1.includes('restaurant') || sub2.includes('hospitality')) {
      classes.push('Hospitality');
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

  // Filter projects based on active filter
  const getFilteredProjects = () => {
    if (activeFilter === 'All') {
      return data;
    }
    return data.filter(item => {
      const classes = getFilterClasses(item);
      return classes.includes(activeFilter);
    });
  };

  // Get paginated projects
  const filteredProjects = getFilteredProjects();
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  useEffect(() => {
    const initializeMixitup = () => {
      if (mixitupContainerRef.current) {
        // Destroy existing instance if any
        const existingInstance = mixitup(mixitupContainerRef.current);
        if (existingInstance && existingInstance.destroy) {
          existingInstance.destroy();
        }
        
        // Initialize new instance
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

    // Small delay to ensure DOM is updated
    const timer = setTimeout(() => {
      initializeMixitup();
    }, 100);

    return () => clearTimeout(timer);
  }, [paginatedProjects, activeFilter]);
  
  const handleFilterClick = (filter, e) => {
    e.preventDefault();
    setActiveFilter(filter);
    setCurrentPage(1);

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

  const handlePageChange = (page, e) => {
    e.preventDefault();
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getPaginationNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      // Show all pages if total is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show first page
      pages.push(1);
      
      if (currentPage <= 3) {
        // Near the start
        for (let i = 2; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Near the end
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // In the middle
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
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
                {paginatedProjects.map((item, i) => (
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
              {totalPages > 1 && (
                <nav aria-label="Page navigation example" className="mt-60">
                  <ul className="pagination justify-content-center">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                      <a 
                        className="page-link" 
                        href="#"
                        onClick={(e) => handlePageChange(currentPage - 1, e)}
                        style={{ pointerEvents: currentPage === 1 ? 'none' : 'auto', opacity: currentPage === 1 ? 0.5 : 1 }}
                      >
                        <i className="fal fa-chevron-left"></i>
                      </a>
                    </li>
                    {getPaginationNumbers().map((page, index) => (
                      <li key={index} className={`page-item ${page === '...' ? 'disabled' : ''} ${page === currentPage ? 'active' : ''}`}>
                        {page === '...' ? (
                          <span className="page-link" style={{ pointerEvents: 'none' }}>...</span>
                        ) : (
                          <a 
                            className={`page-link ${page === currentPage ? 'active' : ''}`}
                            href="#"
                            onClick={(e) => handlePageChange(page, e)}
                          >
                            {page}
                          </a>
                        )}
                      </li>
                    ))}
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                      <a 
                        className="page-link" 
                        href="#"
                        onClick={(e) => handlePageChange(currentPage + 1, e)}
                        style={{ pointerEvents: currentPage === totalPages ? 'none' : 'auto', opacity: currentPage === totalPages ? 0.5 : 1 }}
                      >
                        <i className="fal fa-chevron-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              )}
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

export default LatestCases;
