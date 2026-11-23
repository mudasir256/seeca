import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import usePortfolio from '../../../hooks/usePortfolio';
import { projectPath, projectSlug } from '../../../lib/projects';
import { cdnImage } from '../../../lib/imageCdn';

// Projects shown on the About page, picked from the portfolio (by URL slug).
const ARCHITECTURE_PICKS = [
  'shopping-mall-architecture-design-oman',
  'high-rise-residential-tower-design-nairobi-kenya',
  '5-5-kanal-luxury-house-design-bhakkar',
  'mixed-use-commercial-building-design-lahore',
];
const INTERIOR_PICKS = [
  '1-kanal-house-interior-design-bahria-town-lahore',
  'hotel-room-and-suite-interior-design-london-uk',
  'restaurant-interior-design-citi-housing-jhelum',
  'ai-company-office-interior-design-opf-society-lahore',
];
// Renovation: projects whose description mentions renovation / retrofitting work.
const RENOVATION_TEXT = /renovat|retrofit|refurbish/i;

function Projects() {
  const { projects } = usePortfolio();

  const { architecture, interior, renovation } = useMemo(() => {
    const toCard = (project, tag) => ({
      id: project.id,
      title: project.title,
      tags: [tag],
      img: project.img,
      path: projectPath(project, projects),
    });
    const pick = (slugs, tag) =>
      slugs
        .map((slug) => projects.find((project) => projectSlug(project, projects) === slug))
        .filter(Boolean)
        .map((project) => toCard(project, tag));
    return {
      architecture: pick(ARCHITECTURE_PICKS, 'Architecture Design'),
      interior: pick(INTERIOR_PICKS, 'Interior Design'),
      renovation: projects
        .filter((project) => RENOVATION_TEXT.test(`${project.title} ${project.desc || ''}`))
        .slice(0, 4)
        .map((project) => toCard(project, 'Renovation')),
    };
  }, [projects]);

    // Furniture (unchanged)
    const furnitureProjects = [
      {
        id: 13,
        title: "Premium Bedroom Furniture Set",
        tags: ["Furniture", "Interior Design"],
        img: "/innerpages/assets/img/projects/proj1.jpg",
        desc: "An exquisite bedroom furniture collection featuring custom-designed beds, wardrobes, and nightstands crafted with premium materials and attention to detail. Each furniture piece is handcrafted to perfection, combining elegant design with superior functionality. The collection includes a luxurious king-size bed with integrated storage, spacious walk-in wardrobes with custom organization systems, and matching nightstands with built-in charging stations. This furniture project showcases premium craftsmanship and creates a cohesive, luxurious bedroom environment.",
        sub1: "Furniture",
        sub2: "Residential",
        client: "Elite Home Collections",
        location: "DHA Phase 5, Lahore, Pakistan",
        area: "N/A",
        images: [
          "/innerpages/assets/img/projects/proj1.jpg"
        ],
        challenge: "Designing and manufacturing a complete bedroom furniture collection that combines luxury aesthetics with practical functionality, ensuring each piece meets high quality standards and creates a cohesive bedroom environment.",
        challengePoints: [
          "Creating furniture pieces that are both beautiful and highly functional for daily use",
          "Ensuring consistent quality and craftsmanship across all furniture items in the collection",
          "Designing storage solutions that maximize space efficiency while maintaining elegant appearance"
        ],
        solution: "We developed a comprehensive furniture design that integrates form and function seamlessly. Each piece was carefully engineered for durability and usability, while maintaining elegant aesthetics. Through meticulous craftsmanship and attention to detail, we created a cohesive bedroom collection that provides luxury, functionality, and lasting quality."
      },
      {
        id: 14,
        title: "Executive Office Desk Collection",
        tags: ["Furniture", "Commercial"],
        img: "/innerpages/assets/img/projects/proj2.jpg",
        desc: "A sophisticated collection of executive office desks and workstations designed for modern corporate environments. The furniture features premium wood finishes, integrated cable management, ergonomic design principles, and modular components that adapt to various office layouts. Each desk is equipped with built-in storage solutions and technology integration points. This furniture collection combines functionality with premium materials and ergonomic design to create productive and professional workspaces.",
        sub1: "Furniture",
        sub2: "Office",
        client: "Corporate Interiors Ltd",
        location: "Clifton, Karachi, Pakistan",
        area: "N/A",
        images: [
          "/innerpages/assets/img/projects/proj2.jpg"
        ],
        challenge: "Designing executive office furniture that meets the functional needs of modern corporate environments while projecting professionalism and supporting productivity through ergonomic design.",
        challengePoints: [
          "Creating furniture that supports various work styles and technology requirements",
          "Ensuring ergonomic design that promotes health and productivity in office settings",
          "Designing modular solutions that adapt to different office layouts and space constraints"
        ],
        solution: "We designed a comprehensive office furniture collection with ergonomics and functionality at its core. Each desk features integrated cable management, adjustable components, and premium materials. The modular design allows for flexible configurations, while the sophisticated aesthetics project professionalism. The result is furniture that enhances both productivity and workplace satisfaction."
      },
      {
        id: 15,
        title: "Luxury Living Room Collection",
        tags: ["Furniture"],
        img: "/innerpages/assets/img/projects/proj3.jpg",
        desc: "A stunning luxury living room furniture collection featuring premium sofas, coffee tables, entertainment units, and accent pieces. The collection includes modular seating solutions, elegant coffee tables with storage, wall-mounted entertainment centers, and complementary side tables. Each furniture piece is designed for comfort, style, and durability, using high-quality materials and finishes. This furniture project creates elegant and comfortable spaces for modern homes, combining contemporary design with timeless appeal.",
        sub1: "Furniture",
        sub2: "Living Room",
        client: "Premium Home Design",
        location: "F-7, Islamabad, Pakistan",
        area: "N/A",
        images: [
          "/innerpages/assets/img/projects/proj3.jpg"
        ],
        challenge: "Creating a luxury living room furniture collection that balances comfort, style, and durability, ensuring pieces work together harmoniously while meeting diverse lifestyle needs.",
        challengePoints: [
          "Designing furniture that is comfortable for daily use while maintaining elegant appearance",
          "Creating a cohesive collection where all pieces complement each other aesthetically",
          "Ensuring durability and quality that justifies luxury positioning and pricing"
        ],
        solution: "We developed a comprehensive living room collection with comfort and style as equal priorities. Each piece was designed to work individually and as part of the collection, with consistent design language and quality standards. Through careful material selection and expert craftsmanship, we created furniture that provides lasting comfort, beauty, and value."
      },
      {
        id: 16,
        title: "Custom Kitchen Cabinet Design",
        tags: ["Furniture", "Interior Design"],
        img: "/innerpages/assets/img/projects/proj4.jpg",
        desc: "A bespoke kitchen cabinet and storage solution featuring modern design and premium materials. The custom furniture includes wall-mounted cabinets, base units, pantry storage, and specialized organizers. Each cabinet is precision-built to maximize storage efficiency while maintaining aesthetic appeal. The project incorporates soft-close mechanisms, pull-out shelves, and integrated lighting. This furniture project transforms kitchens into functional and beautiful spaces with custom-built solutions that perfectly fit the space and lifestyle needs.",
        sub1: "Furniture",
        sub2: "Kitchen",
        client: "Kitchen Solutions Pro",
        location: "Gulberg, Lahore, Pakistan",
        area: "N/A",
        images: [
          "/innerpages/assets/img/projects/proj4.jpg"
        ],
        challenge: "Designing custom kitchen cabinets that maximize storage efficiency and functionality while creating a beautiful, cohesive kitchen environment that fits perfectly within the available space.",
        challengePoints: [
          "Maximizing storage capacity while maintaining clean, uncluttered kitchen aesthetics",
          "Designing cabinets that accommodate various kitchen tools, appliances, and storage needs",
          "Ensuring precise fit and finish that creates a seamless, professional appearance"
        ],
        solution: "We designed a comprehensive kitchen cabinet system with custom storage solutions tailored to the specific space and client needs. Through careful planning and precision manufacturing, we created cabinets that maximize storage efficiency while maintaining elegant aesthetics. The result is a kitchen that is both highly functional and beautifully designed."
      }
    ];

  const tabs = [
    { id: 'architecture', label: 'Architecture Design', items: architecture },
    { id: 'interior', label: 'Interior Design', items: interior },
    { id: 'renovation', label: 'Renovation', items: renovation },
    { id: 'furniture', label: 'Furniture', items: furnitureProjects },
  ];
  const [activeTab, setActiveTab] = useState('architecture');
  const active = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .tc-projects-style2 .nav-link {
          background: none;
          border: 0;
        }
        .tc-projects-style2 .nav-link.active {
          color: #73bf44 !important;
          background-color: transparent !important;
        }
        .tc-projects-style2 .nav-link:hover {
          color: #73bf44 !important;
        }
        .tc-projects-style2 .about-projects-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 30px;
        }
        .tc-projects-style2 .about-projects-grid .project-card .img {
          height: 420px !important;
          border-radius: 20px !important;
        }
        @media (max-width: 767px) {
          .tc-projects-style2 .about-projects-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .tc-projects-style2 .about-projects-grid .project-card .img {
            height: 300px !important;
          }
        }
        .tc-projects-style2 .about-projects-empty {
          padding: 40px 0;
          color: #666;
        }
      `}} />
    <section
      className="tc-projects-style2"
      style={{
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Blurred circular gradient backgrounds */}
      <div
        className="d-none d-md-block"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 'clamp(300px, 35vw, 500px)',
          height: 'clamp(180px, 25vh, 300px)',
          background: 'rgba(115, 191, 68, 0.3)',
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
          right: 'clamp(200px, 38vw, 550px)',
          width: 'clamp(250px, 28vw, 400px)',
          height: 'clamp(250px, 28vw, 400px)',
          background: 'rgba(115, 191, 68, 0.2)',
          filter: 'blur(60px)',
          borderRadius: '350px',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1
        }}
      >
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h2 className="fsz-45 fw-500">
              Latest{' '}
              <span
                className="sub-font fst-italic fw-400"
                style={{ color: '#73bf44' }}
              >
                projects
              </span>
            </h2>
          </div>
          <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
            <Link
              to="/portfolio"
              className="butn borderd border rounded-pill hover-bg-green2"
              style={{ padding: '0.75rem 1.5rem' }}
            >
              <span>
                See All Projects
                <i className="ms-2 fal fa-long-arrow-right ico-45"></i>
              </span>
            </Link>
          </div>
        </div>
        <div className="tabs-links mt-40">
          <ul className="nav nav-pills" role="tablist">
            {tabs.map((tab) => (
              <li key={tab.id} className="nav-item" role="presentation">
                <button
                  type="button"
                  role="tab"
                  aria-selected={tab.id === activeTab}
                  className={`nav-link ${tab.id === activeTab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-60" role="tabpanel">
          {active.items.length === 0 ? (
            <p className="about-projects-empty">
              More projects in this category are on our{' '}
              <Link to="/portfolio" style={{ color: '#73bf44' }}>portfolio page</Link>.
            </p>
          ) : (
            <div className="about-projects-grid">
              {active.items.map((project) => {
                const href = project.path || '/portfolio';
                return (
                  <div key={project.id} className="project-card">
                    <Link to={href} className="img" aria-label={project.title}>
                      <img
                        loading="lazy"
                        decoding="async"
                        src={cdnImage(project.img, 1000)}
                        alt={project.title}
                        className="img-cover"
                      />
                      <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div>
                    </Link>
                    <div className="info">
                      <div className="tags">
                        {project.tags.map((tag) => (
                          <span key={tag}> {tag} </span>
                        ))}
                      </div>
                      <h3 className="title">
                        <Link to={href}>{project.title}</Link>
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
    </>
  );
}

export default Projects;
