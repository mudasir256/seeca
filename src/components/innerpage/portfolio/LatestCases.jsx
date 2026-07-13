'use client';
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import OptimizedImage from '../../common/OptimizedImage';
import usePortfolio from '../../../hooks/usePortfolio';

function LatestCases() {
  const { categories, projects: data, loading } = usePortfolio();
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 9;
  const navigate = useNavigate();

  const getFilterClasses = useCallback((item) => {
    return item.categoryId ? `PortfolioCategory-${item.categoryId}` : '';
  }, []);

  // Filter projects based on active filter (memoized)
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return data;
    }
    return data.filter((item) => item.categoryId === activeFilter);
  }, [activeFilter, data]);

  const totalPages = useMemo(
    () => Math.ceil(filteredProjects.length / projectsPerPage),
    [filteredProjects.length, projectsPerPage]
  );

  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    return filteredProjects.slice(startIndex, endIndex);
  }, [filteredProjects, currentPage, projectsPerPage]);

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  const handleFilterClick = useCallback((filter, e) => {
    e.preventDefault();
    setActiveFilter(filter);
    setCurrentPage(1);
  }, []);

  const handlePageChange = useCallback((page, e) => {
    e.preventDefault();
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [totalPages]);

  const getPaginationNumbers = useMemo(() => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      
      if (currentPage <= 3) {
        for (let i = 2; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  }, [totalPages, currentPage]);

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
                {categories.map((category) => (
                  <a
                    key={category.id}
                    href="#0"
                    onClick={(e) => handleFilterClick(category.id, e)}
                    className={`filter-btn ${
                      activeFilter === category.id ? 'active' : ''
                    }`}
                    data-filter={`.PortfolioCategory-${category.id}`}
                  >
                    {category.name}
                  </a>
                ))}
              </div>
            </div>
            <div
              className="cases-content wow fadeInUp slow"
              data-wow-delay="0.4s"
            >
              <div className="row mixitup">
                {paginatedProjects.map((item, i) => (
                  <div key={item.id || i} className={`col-lg-4 mix-item ${getFilterClasses(item)}`}>
                    <div 
                      className="case-card"
                      onClick={() => navigate(`/innerpages/single_project?project=${encodeURIComponent(item.id)}`, { state: { project: item } })}
                    >
                      <div className="img">
                        <OptimizedImage src={item.img} alt={item.title || ''} className="img-cover" />
                      </div>
                      <div className="info">
                        <div className="tags mb-30">
                          <span> {item.sub1} </span>
                          {item.sub2 && (
                            <span> {item.sub2} </span>
                          )}
                        </div>
                        <h3 className="title mb-20">
                          <span className="hover-orange1">
                            {item.title}
                          </span>
                        </h3>
                        <div className="text color-666">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {!loading && paginatedProjects.length === 0 && (
                  <div className="col-12">
                    <p className="text-center color-666 fsz-18 py-5 mb-0">
                      {activeFilter === 'All'
                        ? 'No portfolio projects are available yet.'
                        : 'No portfolio projects are available in this category.'}
                    </p>
                  </div>
                )}
              </div>
              {totalPages > 1 && (
                <nav aria-label="Page navigation example" className="mt-60">
                  <ul className="pagination justify-content-center">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                      <button 
                        type="button"
                        className="page-link" 
                        onClick={(e) => handlePageChange(currentPage - 1, e)}
                        disabled={currentPage === 1}
                        style={{ pointerEvents: currentPage === 1 ? 'none' : 'auto', opacity: currentPage === 1 ? 0.5 : 1 }}
                      >
                        <i className="fal fa-chevron-left"></i>
                      </button>
                    </li>
                    {getPaginationNumbers.map((page, index) => (
                      <li key={index} className={`page-item ${page === '...' ? 'disabled' : ''} ${page === currentPage ? 'active' : ''}`}>
                        {page === '...' ? (
                          <span className="page-link" style={{ pointerEvents: 'none' }}>...</span>
                        ) : (
                          <button 
                            type="button"
                            className={`page-link ${page === currentPage ? 'active' : ''}`}
                            onClick={(e) => handlePageChange(page, e)}
                          >
                            {page}
                          </button>
                        )}
                      </li>
                    ))}
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                      <button 
                        type="button"
                        className="page-link" 
                        onClick={(e) => handlePageChange(currentPage + 1, e)}
                        disabled={currentPage === totalPages}
                        style={{ pointerEvents: currentPage === totalPages ? 'none' : 'auto', opacity: currentPage === totalPages ? 0.5 : 1 }}
                      >
                        <i className="fal fa-chevron-right"></i>
                      </button>
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
