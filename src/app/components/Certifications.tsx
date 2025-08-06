
"use client";

import { FiExternalLink } from "react-icons/fi";

const certifications = [
  {
    name: "Certified in Java Programming",
    details: "Java Nano Degree, PrepInsta",
    link: "https://drive.google.com/file/d/1-TpLEmrtBdPtjOqeo-xAAxk9WISYz4gH/view"
  },
  {
    name: "Certified JavaScript Developer",
    details: "Programming with JavaScript, Udemy",
    link: "https://drive.google.com/file/d/1vSsN-xQPbl1JrdqjhpqApSASgdaj-bXn/view"
  },
  {
    name: "Fundamentals of C programming Certificate",
    details: "C Programming, Faceprep",
    link: "https://drive.google.com/file/d/1aNpOkv9JHaL-6aS_QTvONRULMR5fv2Jt/view"
  },
  {
    name: "React Developer Certification",
    details: "React.Js Nano Degree, PrepInsta",
    link: "https://drive.google.com/file/d/1uppFyw3bBjDBSqo2P0hH7GF5wPwwtyp7/view"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 sm:py-20 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-2xl">
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="uppercase tracking-widest text-sm sm:text-base lg:text-lg text-white/60 mb-2 font-sans">Certifications</div>
        </div>
        
        <ul className="flex flex-col gap-6 sm:gap-8">
          {certifications.map((cert, idx) => (
            <li key={cert.name} className="flex items-start gap-3 sm:gap-4">
              <div className="flex-1">
                <div className="text-base sm:text-lg md:text-xl font-bold font-sans text-white mb-1 leading-tight">{cert.name}</div>
                <div className="text-sm sm:text-base font-mono text-white/70 mb-0.5">{cert.details}</div>
              </div>
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-300 transition p-1 flex-shrink-0" title="View Certificate">
                  <FiExternalLink size={18} className="sm:w-5 sm:h-5" />
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
