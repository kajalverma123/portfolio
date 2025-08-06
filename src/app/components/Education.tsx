"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const education = [
  {
    institution: "Gitam University",
    period: "Aug. 2023 – June 2025",
    degree: "Master of Computer Applications",
    cgpa: "8.77"
  },
  {
    institution: "Aryabhatta Knowledge University",
    period: "Aug. 2019 – June 2022",
    degree: "Bachelor of Computer Applications",
    cgpa: "8.32"
  },
  {
    institution: "Bihar School Examination Board",
    period: "June 2017 – May 2019",
    degree: "Intermediate",
    cgpa: "8.13"
  },
  {
    institution: "SDV Public School",
    period: "June 2017 – May 2018",
    degree: "SSC",
    cgpa: "10"
  }
];

function Education() {
  const timelineRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device for optimized scroll handling
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const { scrollYProgress } = useScroll({ 
    target: timelineRef, 
    offset: isMobile ? ["start 0.9", "end 0.1"] : ["start 0.8", "end 0.2"]
  });
  // Animate the line from 0 to 1 scaleY as you scroll the section
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="education" className="py-16 sm:py-20 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="uppercase tracking-widest text-sm sm:text-base lg:text-lg text-white/60 mb-2 font-sans">Education</div>
        </div>
        
        <div className="relative max-w-2xl ml-0 md:ml-8" ref={timelineRef}>
          {/* Background timeline line */}
          <div
            className="absolute left-3 top-0 w-0.5 bg-stone-600/20 h-full"
            aria-hidden="true"
          />
          
          {/* Scroll-linked vertical timeline line - now visible on all devices */}
          <motion.div
            className="absolute left-3 top-0 w-0.5 bg-stone-400/60 origin-top"
            style={{ height: '100%', scaleY: lineScale, zIndex: 1 }}
            aria-hidden="true"
          />
          
          <div className="flex flex-col gap-12 sm:gap-16">
            {education.map((edu, idx) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.14 }}
                className="relative flex items-start gap-4 sm:gap-6 z-10"
                style={{ position: 'relative' }}
              >
                {/* Timeline dot */}
                <div className="flex flex-col items-center min-w-[24px]">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-stone-400 border-2 border-black shadow-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: idx * 0.14 + 0.1 }}
                  />
                </div>
                
                {/* Timeline content */}
                <div className="flex-1 pb-2">
                  <div className="text-base sm:text-lg md:text-xl font-bold font-sans text-stone-300 mb-0.5 leading-tight">{edu.institution}</div>
                  <div className="text-sm sm:text-base md:text-lg font-mono text-white mb-0.5">{edu.degree}</div>
                  <div className="text-xs sm:text-sm font-mono text-white/60 mb-1">{edu.period}</div>
                  <div className="text-sm font-mono text-stone-400 font-semibold">CGPA: <span className="text-white font-bold">{edu.cgpa}</span></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
