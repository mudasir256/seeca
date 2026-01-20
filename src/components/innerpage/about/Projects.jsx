import React from 'react';
import { useNavigate } from 'react-router-dom';

function Projects() {
    const navigate = useNavigate();

    // Project data for Architecture Design
    const architectureProjects = [
      {
        id: 1,
        title: "Fahad Residence-Lahore",
        tags: ["Architecture Design"],
        img: "/innerpages/assets/img/projects/LightTest-1(1).jpg",
        desc: "A contemporary residential masterpiece in Lahore featuring innovative architectural design with clean lines and modern aesthetics. The design emphasizes natural light, open spaces, and seamless indoor-outdoor connectivity. This custom-built residence showcases our expertise in creating exceptional living environments that blend functionality with architectural excellence.",
        sub1: "Architecture",
        sub2: "Residential",
        client: "Fahad Family",
        location: "DHA Phase 5, Lahore, Pakistan",
        area: "5,500 sq ft",
        images: [
          "/innerpages/assets/img/projects/LightTest-1(1).jpg"
        ],
        challenge: "Designing a contemporary residential home that balances modern aesthetics with functional living requirements while maximizing natural light and creating seamless indoor-outdoor connections.",
        challengePoints: [
          "Creating open, airy spaces while maintaining privacy and functional zoning",
          "Integrating sustainable design elements without compromising luxury and comfort",
          "Maximizing natural light throughout all living areas while ensuring energy efficiency"
        ],
        solution: "Our architectural approach focused on strategic orientation, large glazed openings, and thoughtful space planning. We designed an open-plan layout with flexible zones, incorporated sustainable materials and systems, and created multiple outdoor living spaces that extend the interior experience. The result is a home that feels spacious, light-filled, and perfectly suited to modern family living."
      },
      {
        id: 2,
        title: "Modern Commercial Complex - Islamabad",
        tags: ["Architecture Design", "Construction"],
        img: "/innerpages/assets/img/projects/proj3.jpg",
        desc: "A landmark commercial development in Islamabad featuring cutting-edge architectural design and state-of-the-art construction. The complex includes retail spaces, offices, and parking facilities designed for maximum efficiency and aesthetic appeal. Our architectural approach combines modern design principles with sustainable building practices to create a premier commercial destination.",
        sub1: "Architecture",
        sub2: "Commercial",
        client: "Commercial Developers Ltd",
        location: "Blue Area, Islamabad, Pakistan",
        area: "45,000 sq ft",
        images: [
          "/innerpages/assets/img/projects/proj3.jpg"
        ],
        challenge: "Designing and constructing a large-scale commercial complex that meets diverse tenant needs while creating an iconic architectural statement in a prime urban location.",
        challengePoints: [
          "Coordinating multiple stakeholders and ensuring design meets various commercial requirements",
          "Balancing aesthetic appeal with functional efficiency and cost-effectiveness",
          "Implementing sustainable construction practices while maintaining project timeline"
        ],
        solution: "We developed a modular architectural design that accommodates flexible tenant configurations while maintaining a cohesive aesthetic. Through integrated design and construction management, we optimized material usage, streamlined workflows, and delivered a landmark building that sets new standards for commercial development in the region."
      },
      {
        id: 3,
        title: "Eco-Friendly Residential Villa - Karachi",
        tags: ["Architecture Design", "Building Sustainability"],
        img: "/innerpages/assets/img/projects/View-1.jpg",
        desc: "An innovative eco-friendly villa in Karachi designed with sustainable architecture principles and green building technologies. The project incorporates solar panels, rainwater harvesting, energy-efficient systems, and sustainable materials. This architectural design demonstrates how luxury living can coexist with environmental responsibility, creating a model for sustainable residential development.",
        sub1: "Architecture",
        sub2: "Sustainability",
        client: "Green Living Corp",
        location: "Clifton, Karachi, Pakistan",
        area: "8,200 sq ft",
        images: [
          "/innerpages/assets/img/projects/View-1.jpg"
        ],
        challenge: "Creating a luxury residential villa that achieves exceptional sustainability standards while maintaining high-end design quality and meeting all environmental performance goals.",
        challengePoints: [
          "Integrating renewable energy systems seamlessly into the architectural design",
          "Selecting sustainable materials that meet both environmental and aesthetic requirements",
          "Achieving energy efficiency targets while ensuring optimal comfort and luxury"
        ],
        solution: "Our integrated design approach combined passive solar strategies, high-performance building envelope, and renewable energy systems. We carefully selected sustainable materials that enhance rather than compromise the design, and implemented smart systems that optimize energy use. The result is a villa that demonstrates luxury and sustainability can coexist beautifully."
      },
      {
        id: 4,
        title: "Smart Office Building - Lahore",
        tags: ["Architecture Design", "Smart Building Technologies"],
        img: "/innerpages/assets/img/projects/proj1.jpg",
        desc: "A revolutionary smart office building in Lahore featuring intelligent architecture integrated with advanced building automation systems. The architectural design incorporates IoT sensors, automated climate control, smart lighting, and energy management systems. This project represents the future of commercial architecture, where intelligent design meets cutting-edge technology to create highly efficient and comfortable work environments.",
        sub1: "Architecture",
        sub2: "Smart Building",
        client: "Tech Solutions Inc",
        location: "Gulberg, Lahore, Pakistan",
        area: "32,000 sq ft",
        images: [
          "/innerpages/assets/img/projects/proj1.jpg"
        ],
        challenge: "Designing an intelligent office building that seamlessly integrates advanced automation systems with architectural design, creating a future-ready workspace that enhances productivity and reduces operational costs.",
        challengePoints: [
          "Integrating complex smart building systems without compromising architectural aesthetics",
          "Ensuring all technology systems work harmoniously and provide real value to occupants",
          "Designing flexible spaces that adapt to changing workplace needs and technologies"
        ],
        solution: "We developed an integrated design approach where smart building systems were planned from the initial architectural concept. By coordinating technology integration with structural and MEP systems, we created a building where intelligence is embedded in the architecture itself. The result is a highly efficient, comfortable, and adaptable workspace that represents the future of commercial office design."
      }
    ];

    // Project data for Interior Design
    const interiorProjects = [
      {
        id: 5,
        title: "Salone Skin & Spa",
        tags: ["Interior Design", "Furniture"],
        img: "/innerpages/assets/img/projects/5561.(8).jpg",
        desc: "A luxurious spa and wellness center featuring sophisticated interior design with custom furniture and elegant finishes. The interior design creates a tranquil sanctuary with soft lighting, natural materials, and flowing spaces. Custom-designed furniture pieces complement the serene atmosphere, while thoughtful color palettes and textures promote relaxation and rejuvenation. This project demonstrates how interior design can transform spaces into therapeutic environments.",
        sub1: "Interior Design",
        sub2: "Spa & Wellness",
        client: "Salone Group",
        location: "DHA Phase 6, Lahore, Pakistan",
        area: "3,200 sq ft",
        images: [
          "/innerpages/assets/img/projects/5561.(8).jpg"
        ],
        challenge: "Creating a serene and luxurious spa environment through interior design that promotes relaxation and wellness while accommodating functional requirements for various spa services.",
        challengePoints: [
          "Designing spaces that feel tranquil and luxurious while meeting practical operational needs",
          "Selecting materials and finishes that enhance the wellness experience and are easy to maintain",
          "Creating distinct zones for different services while maintaining visual flow and harmony"
        ],
        solution: "Our interior design approach focused on creating a sensory experience through carefully selected materials, lighting, and spatial flow. We designed custom furniture that supports both comfort and functionality, used natural materials and soft color palettes to promote relaxation, and created distinct yet connected spaces. The result is a spa environment that truly supports wellness and rejuvenation."
      },
      {
        id: 6,
        title: "Boston D53 Deluxe Apartment",
        tags: ["Interior Design", "Furniture"],
        img: "/innerpages/assets/img/projects/proj4.jpg",
        desc: "A premium apartment interior design project featuring contemporary furniture and sophisticated styling. The interior design transforms this living space into an elegant and functional environment with carefully selected furniture, lighting, and accessories. Modern design elements blend seamlessly with comfort-focused layouts, creating a luxurious yet livable space that reflects contemporary lifestyle preferences.",
        sub1: "Interior Design",
        sub2: "Residential",
        client: "Boston Developers",
        location: "Gulberg, Lahore, Pakistan",
        area: "2,800 sq ft",
        images: [
          "/innerpages/assets/img/projects/proj4.jpg"
        ],
        challenge: "Transforming a standard apartment into a premium living space through interior design that maximizes functionality and creates a sense of luxury within existing structural constraints.",
        challengePoints: [
          "Working within existing architectural limitations while creating a custom, high-end feel",
          "Maximizing storage and functionality without compromising on style and aesthetics",
          "Selecting furniture and finishes that create luxury appeal within budget parameters"
        ],
        solution: "We developed a comprehensive interior design strategy that included custom storage solutions, strategic furniture placement, and carefully curated finishes. By focusing on quality over quantity and using design techniques to create visual interest, we transformed the space into a sophisticated, functional home that feels both luxurious and livable."
      },
      {
        id: 7,
        title: "Momentum Fitness-JoharTown, Lahore",
        tags: ["Interior Design"],
        img: "/innerpages/assets/img/projects/proj2.jpg",
        desc: "A state-of-the-art fitness center interior design featuring dynamic spaces and motivational environments. The interior design incorporates vibrant colors, strategic lighting, and functional layouts that inspire movement and energy. The design creates distinct zones for different workout activities while maintaining visual flow and motivation throughout the space. This project showcases how interior design can enhance performance and create an inspiring fitness experience.",
        sub1: "Interior Design",
        sub2: "Fitness & Wellness",
        client: "Momentum Fitness",
        location: "JoharTown, Lahore, Pakistan",
        area: "6,500 sq ft",
        images: [
          "/innerpages/assets/img/projects/proj2.jpg"
        ],
        challenge: "Designing a fitness center interior that motivates and energizes users while accommodating diverse workout activities and ensuring durability in a high-traffic environment.",
        challengePoints: [
          "Creating an inspiring, energetic atmosphere that motivates fitness activities",
          "Designing flexible spaces that accommodate various workout types and equipment",
          "Selecting materials and finishes that withstand heavy use while maintaining aesthetic appeal"
        ],
        solution: "Our interior design approach used dynamic color schemes, strategic lighting, and functional zoning to create an energizing environment. We designed distinct areas for different activities, selected durable yet attractive materials, and incorporated motivational design elements. The result is a fitness center that inspires members and supports their wellness journey."
      },
      {
        id: 8,
        title: "ABERY Apartment Master Bedroom",
        tags: ["Interior Design", "Furniture"],
        img: "/innerpages/assets/img/projects/proj1.jpg",
        desc: "An exquisite master bedroom interior design featuring custom furniture and luxurious finishes. The interior design creates a serene and elegant personal retreat with carefully curated furniture pieces, soft textiles, and ambient lighting. Custom-built wardrobes and elegant furniture selections maximize both style and functionality, while the color palette and material choices promote rest and relaxation.",
        sub1: "Interior Design",
        sub2: "Residential",
        client: "ABERY Residences",
        location: "DHA Phase 4, Lahore, Pakistan",
        area: "450 sq ft",
        images: [
          "/innerpages/assets/img/projects/proj1.jpg"
        ],
        challenge: "Designing a master bedroom interior that creates a luxurious personal retreat within a compact space, balancing storage needs with aesthetic elegance and relaxation.",
        challengePoints: [
          "Maximizing storage and functionality in a limited space without feeling cramped",
          "Creating a sense of luxury and tranquility in a relatively small area",
          "Selecting furniture and finishes that create a cohesive, elegant bedroom environment"
        ],
        solution: "We designed custom-built furniture that maximizes storage while maintaining clean lines and elegance. Through strategic use of lighting, mirrors, and color, we created a sense of spaciousness. The carefully selected furniture pieces and luxurious finishes work together to create a serene, sophisticated bedroom that serves as a true personal sanctuary."
      }
    ];

    // Project data for Renovation
    const renovationProjects = [
      {
        id: 9,
        title: "Heritage Building Renovation - Old City Lahore",
        tags: ["Renovation", "Architecture Design"],
        img: "/innerpages/assets/img/projects/View-1.jpg",
        desc: "A comprehensive renovation project of a heritage building in Old City Lahore, carefully preserving historical character while introducing modern amenities and structural improvements. The renovation work involved restoring original architectural features, reinforcing structural integrity, and seamlessly integrating contemporary systems. This project showcases our expertise in balancing historical preservation with contemporary functionality, creating a space that honors the past while meeting modern needs.",
        sub1: "Renovation",
        sub2: "Heritage",
        client: "Heritage Trust",
        location: "Old City, Lahore, Pakistan",
        area: "12,000 sq ft",
        images: [
          "/innerpages/assets/img/projects/View-1.jpg"
        ],
        challenge: "Renovating a heritage building while preserving its historical character and architectural integrity, while introducing modern amenities and meeting current building codes and safety standards.",
        challengePoints: [
          "Balancing historical preservation with modern functionality and safety requirements",
          "Sourcing authentic materials and craftsmanship techniques for restoration work",
          "Integrating modern systems (electrical, plumbing, HVAC) without compromising historical integrity"
        ],
        solution: "We conducted extensive research into the building's history and original construction methods. Our renovation approach involved careful restoration of original features, strategic reinforcement of structural elements, and discreet integration of modern systems. By working with skilled craftsmen and using traditional techniques where possible, we successfully preserved the building's heritage while making it functional for contemporary use."
      },
      {
        id: 10,
        title: "Modern Office Space Renovation - Karachi",
        tags: ["Renovation", "Interior Design"],
        img: "/innerpages/assets/img/projects/proj2.jpg",
        desc: "A complete office space renovation transforming outdated facilities into modern, efficient work environments. The renovation included structural updates, new electrical and HVAC systems, and contemporary interior design. The project enhances productivity through thoughtful space planning, improved lighting, and flexible layouts that support collaboration and individual work. This renovation demonstrates how strategic improvements can revitalize commercial spaces.",
        sub1: "Renovation",
        sub2: "Commercial",
        client: "Corporate Solutions Ltd",
        location: "Clifton, Karachi, Pakistan",
        area: "15,000 sq ft",
        images: [
          "/innerpages/assets/img/projects/proj2.jpg"
        ],
        challenge: "Renovating an outdated office space into a modern, efficient workplace while minimizing disruption to ongoing business operations and working within budget and timeline constraints.",
        challengePoints: [
          "Completing renovation work with minimal disruption to daily business operations",
          "Upgrading all building systems (electrical, HVAC, IT) while maintaining functionality",
          "Creating a modern workspace design that improves productivity and employee satisfaction"
        ],
        solution: "We developed a phased renovation approach that allowed business continuity throughout the project. By coordinating system upgrades, space redesign, and construction work efficiently, we transformed the office into a modern, productive environment. The new design incorporates flexible workspaces, improved lighting, and contemporary finishes that enhance both functionality and employee well-being."
      },
      {
        id: 11,
        title: "Luxury Villa Renovation - DHA Lahore",
        tags: ["Renovation", "Interior Design", "Construction"],
        img: "/innerpages/assets/img/projects/proj3.jpg",
        desc: "An extensive luxury villa renovation project combining structural improvements with elegant interior redesign. The renovation work included foundation reinforcement, roof replacement, complete electrical and plumbing upgrades, and comprehensive interior transformation. Modern amenities were seamlessly integrated while preserving the villa's character. This project transforms an existing property into a modern masterpiece that combines luxury living with contemporary design.",
        sub1: "Renovation",
        sub2: "Residential",
        client: "Luxury Homes Group",
        location: "DHA Phase 5, Lahore, Pakistan",
        area: "9,500 sq ft",
        images: [
          "/innerpages/assets/img/projects/proj3.jpg"
        ],
        challenge: "Undertaking a comprehensive villa renovation that addresses structural issues, updates all systems, and transforms the interior design, all while maintaining the property's character and working within established budget parameters.",
        challengePoints: [
          "Addressing structural and system deficiencies while maintaining architectural integrity",
          "Coordinating multiple renovation trades (structural, MEP, interior) efficiently",
          "Transforming the interior design to reflect modern luxury while respecting the villa's character"
        ],
        solution: "We developed a comprehensive renovation plan that addressed all aspects systematically. Structural improvements were completed first, followed by system upgrades, and finally interior transformation. Through careful project management and coordination, we successfully renovated the villa into a modern masterpiece that combines structural integrity, updated systems, and elegant interior design."
      },
      {
        id: 12,
        title: "Restaurant Renovation - Gulberg Lahore",
        tags: ["Renovation", "Interior Design"],
        img: "/innerpages/assets/img/projects/proj4.jpg",
        desc: "A complete restaurant renovation creating an inviting dining atmosphere with modern design elements. The renovation included kitchen upgrades, dining area redesign, new lighting systems, and updated finishes throughout. The project enhances the customer experience through thoughtful interior transformation that balances aesthetics with functionality. This renovation revitalizes the restaurant space, creating an atmosphere that attracts diners and enhances their culinary experience.",
        sub1: "Renovation",
        sub2: "Hospitality",
        client: "Culinary Ventures",
        location: "Gulberg III, Lahore, Pakistan",
        area: "4,200 sq ft",
        images: [
          "/innerpages/assets/img/projects/proj4.jpg"
        ],
        challenge: "Renovating a restaurant space to create an inviting dining atmosphere that attracts customers, enhances their experience, and supports efficient kitchen operations, all while working within operational constraints.",
        challengePoints: [
          "Creating an appealing dining atmosphere that encourages customer return visits",
          "Optimizing kitchen layout and flow for efficient food preparation and service",
          "Completing renovation work with minimal disruption to restaurant operations"
        ],
        solution: "We redesigned the restaurant with a focus on customer experience and operational efficiency. The renovation included kitchen optimization, dining area redesign with improved lighting and acoustics, and updated finishes throughout. By working closely with the restaurant team and completing work in phases, we created an inviting space that enhances the dining experience and supports business success."
      }
    ];

    // Project data for Furniture
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

    const handleProjectClick = (e, project) => {
      e.preventDefault();
      navigate('/innerpages/single_project', { state: { project } });
    };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .tc-projects-style2 .nav-link.active {
          color: #73bf44 !important;
          background-color: transparent !important;
        }
        .tc-projects-style2 .nav-link:hover {
          color: #73bf44 !important;
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
        className="d-none d-md-block"
        style={{
          position: 'absolute',
          top: '20%',
          left: 'clamp(150px, 20vw, 250px)',
          width: 'clamp(200px, 21vw, 300px)',
          height: 'clamp(200px, 21vw, 300px)',
          background: 'rgba(115, 191, 68, 0.2)',
          filter: 'blur(60px)',
          borderRadius: '300px',
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
            <button
              type="button"
              className="butn borderd border rounded-pill hover-bg-green2"
              style={{ background: 'none', border: '1px solid', padding: '0.75rem 1.5rem' }}
            >
              <span>
                See All Projects
                <i className="ms-2 fal fa-long-arrow-right ico-45"></i>
              </span>
            </button>
          </div>
        </div>
        <div className="tabs-links mt-40">
          <ul className="nav nav-pills" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-proj1-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-proj1"
                type="button"
              >
                Architecture Design
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-proj2-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-proj2"
                type="button"
              >
                Interior Design
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-proj3-tab"
                data-bs-toggle="pill"
                  data-bs-target="#pills-proj3"
                type="button"
              >
                  Renovation
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-proj4-tab"
                data-bs-toggle="pill"
                  data-bs-target="#pills-proj4"
                type="button"
              >
                Furniture
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-proj1"
          role="tabpanel"
          aria-labelledby="pills-proj1-tab"
        >
          <div className="projects-slider-content mt-100">
            <div className="projects-slider">
              <div className="swiper-wrapper">
                  {architectureProjects.map((project) => (
                    <div key={project.id} className="swiper-slide">
                  <div className="project-card">
                        <a 
                          href="#" 
                          className="img"
                          onClick={(e) => handleProjectClick(e, project)}
                        >
                          <img
                            src={project.img}
                            alt={project.title}
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> 2025 </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div>
                    </a>
                    <div className="info">
                      <div className="tags">
                            {project.tags.map((tag, index) => (
                              <a key={index} href="#"> {tag} </a>
                            ))}
                      </div>
                      <h3 className="title">
                            <a 
                              href="#"
                              onClick={(e) => handleProjectClick(e, project)}
                            >
                              {project.title}
                            </a>
                      </h3>
                    </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="controls">
                <div className="container">
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-proj2"
          role="tabpanel"
          aria-labelledby="pills-proj2-tab"
        >
          <div className="projects-slider-content mt-100">
            <div className="projects-slider">
              <div className="swiper-wrapper">
                  {interiorProjects.map((project) => (
                    <div key={project.id} className="swiper-slide">
                  <div className="project-card">
                        <a 
                          href="#" 
                          className="img"
                          onClick={(e) => handleProjectClick(e, project)}
                        >
                          <img
                            src={project.img}
                            alt={project.title}
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> 2025 </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div>
                    </a>
                    <div className="info">
                      <div className="tags">
                            {project.tags.map((tag, index) => (
                              <a key={index} href="#"> {tag} </a>
                            ))}
                          </div>
                          <h3 className="title">
                            <a 
                              href="#"
                              onClick={(e) => handleProjectClick(e, project)}
                            >
                              {project.title}
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="controls">
                  <div className="container">
                    <div className="swiper-pagination"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-proj3"
            role="tabpanel"
            aria-labelledby="pills-proj3-tab"
          >
            <div className="projects-slider-content mt-100">
              <div className="projects-slider">
                <div className="swiper-wrapper">
                  {renovationProjects.map((project) => (
                    <div key={project.id} className="swiper-slide">
                  <div className="project-card">
                        <a 
                          href="#" 
                          className="img"
                          onClick={(e) => handleProjectClick(e, project)}
                        >
                          <img
                            src={project.img}
                            alt={project.title}
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> 2025 </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div>
                    </a>
                    <div className="info">
                      <div className="tags">
                            {project.tags.map((tag, index) => (
                              <a key={index} href="#"> {tag} </a>
                            ))}
                          </div>
                          <h3 className="title">
                            <a 
                              href="#"
                              onClick={(e) => handleProjectClick(e, project)}
                            >
                              {project.title}
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="controls">
                  <div className="container">
                    <div className="swiper-pagination"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-proj4"
            role="tabpanel"
            aria-labelledby="pills-proj4-tab"
          >
            <div className="projects-slider-content mt-100">
              <div className="projects-slider">
                <div className="swiper-wrapper">
                  {furnitureProjects.map((project) => (
                    <div key={project.id} className="swiper-slide">
                  <div className="project-card">
                        <a 
                          href="#" 
                          className="img"
                          onClick={(e) => handleProjectClick(e, project)}
                        >
                          <img
                            src={project.img}
                            alt={project.title}
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> 2025 </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div>
                    </a>
                    <div className="info">
                      <div className="tags">
                            {project.tags.map((tag, index) => (
                              <a key={index} href="#"> {tag} </a>
                            ))}
                      </div>
                      <h3 className="title">
                            <a 
                              href="#"
                              onClick={(e) => handleProjectClick(e, project)}
                            >
                              {project.title}
                            </a>
                      </h3>
                    </div>
                  </div>
                </div>
                  ))}
              </div>
              <div className="controls">
                <div className="container">
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Projects;
