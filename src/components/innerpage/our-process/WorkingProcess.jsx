import React, { useState } from 'react';

function WorkingProcess() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      number: '01',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="40" height="40">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Creating a Concept',
      content: `Conceptualization is the key to design anything. Initially, the designer creates a concept in the mind and then sketches it on paper for better understanding. The design concept is a foundational vision; a collection of ideas, guidelines, and/or creative views—upon which an architect can create. Conceptual designs are informed by a deeper meaning, telling a story about the space it occupies and the community it serves. Fundamentally, design is irrational. Architecture is an impressive blend of art and science. While norms and experience may tell us to conceptualize one way, our artistic ingenuity combined with the client's goals may steer us in a different direction. That means it's sometimes unclear how to start and where we draw that first line. However, going through that process is what makes the architectural process exciting and challenging!`
    },
    {
      id: 2,
      number: '02',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="40" height="40">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Budget Planning',
      content: `Budget planning for interior design involves estimating costs, setting goals, and tracking spending. The budget should be communicated to the client and adjusted as needed.

Steps for budget planning:
• Define goals and scope: Consider the purpose of the space and the client's vision
• Estimate costs: Include the cost of materials, furnishings, and contractor fees
• Create a budget: Include contingencies and a mark-up for purchases and services
• Communicate the budget: Share the budget with the client
• Track spending: Monitor spending and adjust the budget as needed
• Review the budget: Evaluate the budget and make any necessary changes`
    },
    {
      id: 3,
      number: '03',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="40" height="40">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: 'Design Process',
      content: `The architectural design process is a series of phases that lead to the construction of a building. The process typically includes:

Pre-design: The initial phase of the project, where the client's goals are understood and the necessary information is gathered. This phase may include research, zoning analysis, and site surveys.

Schematic design: The preliminary phase, where the building's idea and spatial organization are determined. This phase involves sketches, diagrams, and rough plans.

Design development: The phase where the structural systems, building systems, and building materials are planned. Building components are given dimensions, and code compliances are set.

Construction documents: The phase where the construction documents are created.

Building permits: The phase where the building permits are obtained.

Bidding and negotiation: The phase where the building is put out to bid and negotiated.

Construction administration: The phase where the construction of the building is administered.`
    },
    {
      id: 4,
      number: '04',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="40" height="40">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: 'Building Your Dream',
      content: `When building, it can be easy to focus primarily on the big-picture aspects, the layout of the rooms, and the materials you want to use for construction. While these are all important considerations, it's just as essential to put thought into the smaller details. You should think carefully about what kind of interior finishes you want and also don't forget the exterior details. Your front door and mailbox say a lot about who lives there and should reflect your personality accordingly. Building your dream home is a huge undertaking, but it is also a rewarding experience. By following these tips, you can ensure that the process goes as smoothly as possible and that you end up with a home that truly reflects your style and meets all your needs. Stay organized, stay involved, and don't forget about the details, and you'll be well on your way to making your dream home a reality.`
    }
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .tc-working-process {
          position: relative;
          padding: 120px 0;
          background: linear-gradient(180deg, #0f0f0f 0%, #1a1a1a 100%);
          overflow: hidden;
        }
        .working-process-container {
          padding-left: 15px;
          padding-right: 15px;
        }
        .working-process-header {
          text-align: center;
          margin-bottom: 100px;
        }
        .working-process-subtitle {
          color: #73bf44;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 20px;
          display: inline-block;
          padding: 8px 20px;
          background: rgba(115, 191, 68, 0.1);
          border-radius: 30px;
          border: 1px solid rgba(115, 191, 68, 0.2);
        }
        .working-process-title {
          color: #fff;
          font-size: 52px;
          font-weight: 800;
          margin-bottom: 20px;
          letter-spacing: -1px;
          background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .working-process-steps {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 80px;
          position: relative;
          gap: 20px;
          flex-wrap: wrap;
        }
        .working-process-steps::before {
          content: '';
          position: absolute;
          top: 50px;
          left: 12%;
          right: 12%;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, rgba(115, 191, 68, 0.3) 50%, transparent 100%);
          z-index: 0;
          display: none;
        }
        @media (min-width: 1200px) {
          .working-process-steps::before {
            display: block;
          }
        }
        .working-process-step {
          flex: 1;
          min-width: 200px;
          text-align: center;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          z-index: 1;
          padding: 20px;
          border-radius: 20px;
        }
        @media (max-width: 991px) {
          .working-process-step {
            flex: 0 0 calc(50% - 10px);
            min-width: 140px;
            max-width: calc(50% - 10px);
          }
        }
        @media (max-width: 575px) {
          .working-process-step {
            flex: 0 0 calc(50% - 8px);
            min-width: 120px;
            max-width: calc(50% - 8px);
            padding: 15px 10px;
          }
        }
        .working-process-step:hover {
          transform: translateY(-8px);
        }
        .working-process-step:hover .working-process-step-icon {
          transform: scale(1.1);
        }
        .working-process-step-number {
          font-size: 140px;
          font-weight: 900;
          background: linear-gradient(135deg, rgba(115, 191, 68, 0.15) 0%, rgba(115, 191, 68, 0.05) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: 20px;
          position: absolute;
          top: -50px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 0;
          transition: all 0.4s ease;
        }
        .working-process-step:hover .working-process-step-number {
          opacity: 0.8;
        }
        .working-process-step-icon-wrapper {
          position: relative;
          margin: 0 auto 25px;
          z-index: 2;
        }
        .working-process-step-icon {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        }
        .working-process-step-icon::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          padding: 3px;
          background: linear-gradient(135deg, #73bf44, rgba(115, 191, 68, 0.3));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .working-process-step-icon.active {
          background: linear-gradient(135deg, #fff 0%, #f5f5f5 100%);
          color: #1a1a1a;
          box-shadow: 0 15px 50px rgba(115, 191, 68, 0.4), 0 0 30px rgba(115, 191, 68, 0.2);
          transform: scale(1.05);
        }
        .working-process-step-icon.active::before {
          opacity: 1;
        }
        .working-process-step-icon.inactive {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
          color: rgba(255, 255, 255, 0.6);
          border: 2px solid rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
        }
        .working-process-step-icon.inactive:hover {
          background: linear-gradient(135deg, rgba(115, 191, 68, 0.1) 0%, rgba(115, 191, 68, 0.05) 100%);
          border-color: rgba(115, 191, 68, 0.4);
          color: rgba(255, 255, 255, 0.9);
        }
        .working-process-step-title {
          color: #fff;
          font-size: 20px;
          font-weight: 700;
          margin-top: 15px;
          position: relative;
          z-index: 1;
          transition: all 0.3s ease;
          letter-spacing: -0.5px;
        }
        .working-process-step-title.active {
          color: #73bf44;
        }
        .working-process-step-title.active::after {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 4px;
          background: linear-gradient(90deg, transparent 0%, #73bf44 50%, transparent 100%);
          border-radius: 2px;
          animation: underlineExpand 0.4s ease;
        }
        @keyframes underlineExpand {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 50px;
            opacity: 1;
          }
        }
        .working-process-content {
          max-width: 1000px;
          margin: 0 auto;
          padding: 50px 60px;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
        }
        .working-process-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, #73bf44 50%, transparent 100%);
        }
        .working-process-content:hover {
          border-color: rgba(115, 191, 68, 0.3);
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.4), 0 0 40px rgba(115, 191, 68, 0.1);
        }
        .working-process-content-text {
          color: rgba(255, 255, 255, 0.9);
          font-size: 17px;
          line-height: 1.9;
          white-space: pre-line;
          letter-spacing: 0.2px;
          animation: fadeInUp 0.5s ease;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 1199px) {
          .working-process-steps {
            gap: 15px;
          }
          .working-process-step {
            min-width: 180px;
          }
        }
        @media (max-width: 991px) {
          .tc-working-process {
            padding: 70px 0;
          }
          .working-process-header {
            margin-bottom: 60px;
          }
          .working-process-subtitle {
            font-size: 13px;
            padding: 7px 18px;
            letter-spacing: 2.5px;
          }
          .working-process-title {
            font-size: 38px;
            padding: 0 20px;
          }
          .working-process-steps {
            gap: 15px;
            margin-bottom: 50px;
            justify-content: center;
          }
          .working-process-step {
            padding: 15px;
          }
          .working-process-step-number {
            font-size: 90px;
            top: -30px;
          }
          .working-process-step-icon {
            width: 85px;
            height: 85px;
          }
          .working-process-step-icon svg {
            width: 36px;
            height: 36px;
          }
          .working-process-step-title {
            font-size: 17px;
            margin-top: 12px;
          }
          .working-process-content {
            padding: 35px 30px;
            margin: 0 15px;
          }
          .working-process-content-text {
            font-size: 15px;
            line-height: 1.85;
          }
        }
        @media (max-width: 767px) {
          .tc-working-process {
            padding: 50px 0;
          }
          .working-process-header {
            margin-bottom: 50px;
          }
          .working-process-subtitle {
            font-size: 11px;
            padding: 6px 14px;
            letter-spacing: 2px;
            margin-bottom: 15px;
          }
          .working-process-title {
            font-size: 32px;
            padding: 0 20px;
            margin-bottom: 15px;
          }
          .working-process-steps {
            gap: 12px;
            margin-bottom: 40px;
            justify-content: center;
          }
          .working-process-step {
            padding: 12px;
          }
          .working-process-step:hover {
            transform: translateY(-3px);
          }
          .working-process-step-number {
            font-size: 100px;
            top: -35px;
          }
          .working-process-step-icon-wrapper {
            margin-bottom: 20px;
          }
          .working-process-step-icon {
            width: 95px;
            height: 95px;
          }
          .working-process-step-icon svg {
            width: 40px;
            height: 40px;
          }
          .working-process-step-title {
            font-size: 18px;
            margin-top: 10px;
          }
          .working-process-content {
            padding: 30px 25px;
            border-radius: 18px;
            margin: 0 15px;
          }
          .working-process-content-text {
            font-size: 14px;
            line-height: 1.8;
          }
        }
        @media (max-width: 575px) {
          .tc-working-process {
            padding: 40px 0;
          }
          .working-process-container {
            padding-left: 10px;
            padding-right: 10px;
          }
          .working-process-header {
            margin-bottom: 40px;
          }
          .working-process-subtitle {
            font-size: 10px;
            padding: 5px 12px;
            letter-spacing: 1.5px;
            margin-bottom: 12px;
          }
          .working-process-title {
            font-size: 26px;
            padding: 0 15px;
            line-height: 1.2;
          }
          .working-process-steps {
            gap: 10px;
            margin-bottom: 35px;
            justify-content: center;
          }
          .working-process-step {
            padding: 10px;
          }
          .working-process-step-number {
            font-size: 85px;
            top: -30px;
          }
          .working-process-step-icon-wrapper {
            margin-bottom: 18px;
          }
          .working-process-step-icon {
            width: 85px;
            height: 85px;
          }
          .working-process-step-icon svg {
            width: 36px;
            height: 36px;
          }
          .working-process-step-title {
            font-size: 16px;
            margin-top: 8px;
          }
          .working-process-step-title.active::after {
            width: 40px;
            height: 3px;
            bottom: -10px;
          }
          .working-process-content {
            padding: 25px 20px;
            border-radius: 16px;
            margin: 0 10px;
          }
          .working-process-content-text {
            font-size: 13px;
            line-height: 1.75;
            letter-spacing: 0.1px;
          }
        }
        @media (max-width: 400px) {
          .working-process-title {
            font-size: 24px;
          }
          .working-process-step-number {
            font-size: 75px;
            top: -25px;
          }
          .working-process-step-icon {
            width: 75px;
            height: 75px;
          }
          .working-process-step-icon svg {
            width: 32px;
            height: 32px;
          }
          .working-process-step-title {
            font-size: 15px;
          }
          .working-process-content {
            padding: 20px 15px;
          }
          .working-process-content-text {
            font-size: 12px;
            line-height: 1.7;
          }
        }
      `}} />
      <section className="tc-working-process">
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
        
        <div className="container working-process-container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="working-process-header">
            <div className="working-process-subtitle">[ WORKING STEPS ]</div>
            <h2 className="working-process-title">Our Working Process</h2>
          </div>

          <div className="working-process-steps">
            {steps.map((step) => (
              <div
                key={step.id}
                className="working-process-step"
                onClick={() => setActiveStep(step.id)}
              >
                <div className="working-process-step-number">{step.number}</div>
                <div className="working-process-step-icon-wrapper">
                  <div
                    className={`working-process-step-icon ${
                      activeStep === step.id ? 'active' : 'inactive'
                    }`}
                  >
                    {step.icon}
                  </div>
                </div>
                <div
                  className={`working-process-step-title ${
                    activeStep === step.id ? 'active' : ''
                  }`}
                >
                  {step.title}
                </div>
              </div>
            ))}
          </div>

          <div className="working-process-content">
            <div className="working-process-content-text">
              {steps.find((step) => step.id === activeStep)?.content}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WorkingProcess;

