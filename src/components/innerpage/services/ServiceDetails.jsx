import React from 'react';

function ServiceDetails() {
  const services = [
    {
      title: 'Architecture',
      subtitle: 'Our Goal: Creating Exceptional Custom Architecture',
      content: `Architecture is both an art and a science—the thoughtful design and construction of buildings, structures, and the physical environments we inhabit. It spans multiple disciplines, from the creation of individual spaces to the planning of entire communities and cities.
At its core, architectural design balances aesthetic excellence, functional efficiency, environmental sustainability, and cultural sensitivity. Every building is shaped not only by form and function, but also by the lifestyle, values, and aspirations of the people who use it.
Architects play a vital role in transforming ideas into reality. This process begins with understanding client needs and vision, followed by conceptual development, detailed design, and technical refinement. Through blueprints, 3D visualizations, and precise specifications, architects bring clarity and structure to complex ideas.
Architecture goes beyond providing shelter. It shapes the built environment, influences human behavior, and reflects the social, cultural, and technological progress of its time. Thoughtfully designed spaces have the power to inspire, connect communities, and leave a lasting impact on society.`,
      icon: 'la la-drafting-compass',
      color: '#73bf44'
    },
    {
      title: 'Interior',
      subtitle: 'Designing Spaces That Inspire Living',
      content: `We create interior environments that are functional, safe, and visually compelling by thoughtfully defining space requirements and design intent.
Interior design is both an art and a science—enhancing indoor spaces to promote comfort, health, and aesthetic harmony. It requires a deep understanding of architecture, design principles, color theory, materials, furniture, lighting, and spatial planning. Our goal is to craft interiors that are not only beautiful and practical, but also expressive of the purpose, identity, and lifestyle of those who inhabit them.
Our design approach embraces nature-inspired elements, integrating water features, vegetation, natural light, and organic materials such as wood and stone. By reconnecting built environments with natural systems, we foster spaces that support physical and mental well-being—helping reduce stress, improve focus, and enhance overall comfort.
Interior design plays a vital role in shaping human experience. The look, feel, and flow of a space directly influence mood, productivity, and quality of life, making thoughtful interior design essential to modern living and working environments.`,
      icon: 'la la-couch',
      color: '#4a90e2'
    },
    {
      title: 'Construction',
      subtitle: 'Turning Construction Challenges into Successful Results',
      content: `We help clients achieve the results they envisioned—especially when construction projects fall short due to poor coordination, design gaps, execution errors, or repeated on-site mistakes.
Construction is more than assembling materials; it is a carefully managed process that transforms ideas into lasting structures. From planning and design to execution and completion, successful construction demands precision, experience, and seamless collaboration between architects, engineers, project managers, contractors, and skilled labor. When any part of this chain fails, projects face delays, cost overruns, and compromised quality.
Many clients struggle with miscommunication, design inconsistencies, unskilled workmanship, and avoidable errors on site. Our role is to step in with clarity and control—streamlining workflows, resolving design-to-construction gaps, and ensuring that every decision is executed accurately on the ground.
We leverage modern construction technologies such as Building Information Modeling (BIM), drones, virtual reality (VR), smart construction tools, and advanced project management systems to reduce errors, improve coordination, and increase efficiency. These tools allow us to identify problems before they occur, minimize rework, and maintain strict quality standards throughout the project lifecycle.
Construction plays a vital role in shaping the built environment—from homes and commercial spaces to complex infrastructure. By prioritizing safety, accuracy, sustainability, and accountability, we help deliver projects that are not only functional and durable, but also aligned with the original vision and expectations of our clients.`,
      icon: 'la la-building',
      color: '#e67e22'
    },
    {
      title: 'Sustainability',
      subtitle: 'Redefining Sustainable Building—Smarter, Stronger, More Efficient',
      content: `Our focus is to redefine building sustainability by combining environmentally responsible design with cost-efficient structural engineering solutions.
Building sustainability is not only about reducing environmental impact—it is about designing smarter. Through optimized structural systems, efficient material usage, and integrated engineering strategies, we help clients lower construction costs, reduce waste, and improve long-term building performance. Sustainability, when done correctly, becomes an economic advantage rather than an added expense.
We approach sustainable building as a holistic process that balances energy efficiency, resource conservation, durability, and occupant well-being. By integrating eco-friendly materials, energy-efficient systems, and intelligent structural design, we create buildings that are resilient, efficient, and financially viable over their entire lifecycle.
Our sustainability-driven engineering solutions address today's environmental, economic, and social challenges—delivering buildings that are functional, visually compelling, structurally optimized, and future-ready. The future of construction lies in structures that do more with less, perform better over time, and create lasting value for both people and the planet.`,
      icon: 'la la-recycle',
      color: '#27ae60'
    },
    {
      title: 'Smart & Innovative Solutions',
      subtitle: 'Smart & Innovative Solutions for Intelligent Living',
      content: `We integrate smart and innovative building solutions designed to enhance comfort, efficiency, and control—creating spaces that respond intelligently to the needs of the people within them.
Smart building technologies combine automation, sensors, and data-driven systems to optimize building performance. Through intelligent monitoring and control, these systems reduce energy consumption, improve operational efficiency, and elevate occupant well-being. Our approach ensures technology serves people—not the other way around.
At the core of every smart building is a Building Management System (BMS) / Building Automation System (BAS)—the central intelligence that seamlessly controls lighting, HVAC, security, fire safety, and energy systems. By integrating these systems into a unified platform, we enable real-time monitoring, predictive maintenance, and efficient decision-making.
Smart technologies are transforming how buildings are designed, operated, and experienced. The result is enhanced comfort, improved safety, reduced operating costs, and greater sustainability. As cities evolve, smart buildings will play a vital role in shaping a connected, efficient, and future-ready built environment.`,
      icon: 'la la-network-wired',
      color: '#9b59b6'
    }
  ];

  return (
    <section className="tc-service-details-style1" style={{ 
      position: 'relative', 
      overflow: 'hidden', 
      background: '#ffffff',
      paddingTop: '100px',
      paddingBottom: '100px'
    }}>
      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-12 mb-80" style={{ marginBottom: '80px' }}>
              <div className="service-detail-card" style={{
                background: '#ffffff',
                borderRadius: '20px',
                padding: '60px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease'
              }}>
                <div className="service-detail-header" style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '30px',
                  gap: '20px'
                }}>
                  <div className="service-detail-icon" style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '16px',
                    background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}dd 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '32px',
                    color: '#ffffff',
                    boxShadow: `0 4px 15px ${service.color}40`
                  }}>
                    <i className={service.icon}></i>
                  </div>
                  <div>
                    <h2 className="service-detail-title" style={{
                      fontSize: '42px',
                      fontWeight: '800',
                      color: '#1a1a1a',
                      marginBottom: '10px',
                      lineHeight: '1.2'
                    }}>
                      {service.title}
                    </h2>
                    <p className="service-detail-subtitle" style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: service.color,
                      margin: 0
                    }}>
                      {service.subtitle}
                    </p>
                  </div>
                </div>
                
                <div className="service-detail-content" style={{
                  fontSize: '17px',
                  lineHeight: '1.9',
                  color: '#555555',
                  whiteSpace: 'pre-line'
                }}>
                  {service.content.split('\n').map((paragraph, pIndex) => {
                    if (paragraph.trim() === '') return null;
                    return (
                      <p key={pIndex} style={{ marginBottom: '24px' }}>
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media screen and (max-width: 991px) {
          .service-detail-card {
            padding: 40px !important;
          }
          .service-detail-title {
            font-size: 32px !important;
          }
          .service-detail-subtitle {
            font-size: 18px !important;
          }
          .service-detail-icon {
            width: 60px !important;
            height: 60px !important;
            font-size: 28px !important;
          }
        }
        @media screen and (max-width: 767px) {
          .service-detail-card {
            padding: 30px !important;
            border-radius: 16px !important;
          }
          .service-detail-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 15px !important;
          }
          .service-detail-title {
            font-size: 28px !important;
          }
          .service-detail-subtitle {
            font-size: 16px !important;
          }
          .service-detail-content {
            font-size: 16px !important;
          }
        }
      `}} />
    </section>
  );
}

export default ServiceDetails;

