import React, { useEffect, useRef } from "react";
import { logos } from "./partner";

export default function OurPartners() {
  const duplicatedLogos = [...logos, ...logos];
  const scrollRef = useRef(null);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    let animationId;
    let position = 0;
    const speed = 2; 
    const totalWidth = scrollContainer.scrollWidth / 2;
    
    const scroll = () => {
      position += speed;
      
      if (position >= totalWidth) {
        position = 0;
      }
      
      if (scrollContainer) {
        scrollContainer.style.transform = `translateX(-${position}px)`;
      }
      
      animationId = requestAnimationFrame(scroll);
    };
    
    scroll(); 
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <section>
      <div className="bg-background py-8 md:py-12 overflow-hidden relative">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-dark mb-4 md:mb-6 px-4">
          Our Partners
        </h2>
        
        <div className="relative overflow-hidden w-full">
          <div 
            ref={scrollRef}
            className="flex w-fit"
            style={{ willChange: 'transform' }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`logo-${index}`}
                className="flex-shrink-0 mx-12 md:mx-20 w-[100px] md:w-[140px] flex items-center justify-center"
              >
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="h-16 md:h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

