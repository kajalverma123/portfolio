"use client"

import React from 'react';
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'

// ...existing imports...

const Footer = () => {
  const [showCopied, setShowCopied] = React.useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('vermakajal4305@gmail.com');
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  return (
    <>
      {/* Toast popup for clipboard notification */}
      {showCopied && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-6 py-3 rounded-xl shadow-lg z-50 flex items-center gap-2 animate-fade-in-up">
          <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          <span className="font-semibold">Email copied!</span>
        </div>
      )}
      <footer className="bg-black text-white w-full pt-20 pb-12 px-4 font-sans relative overflow-hidden font-inter">
        <div className="w-screen flex flex-col items-center justify-end relative left-1/2 right-1/2 -translate-x-1/2">
          <div className="w-screen max-w-none bg-black rounded-3xl md:rounded-b-[3rem] shadow-2xl px-4 md:px-16 pt-24 pb-72 min-h-[30vh] flex flex-col items-center justify-end border border-neutral-800 relative overflow-hidden">
            <div className="relative z-10 w-full flex flex-col justify-between items-center h-full">
              {/* Headline with TypeAnimation and Varela Round font */}
              <div className="text-center text-3xl md:text-6xl varela-round font-light leading-tight mb-4 tracking-tight">
                <TypeAnimation
                  sequence={["READY TO LEARN, ", 1000, "READY TO LEARN, BUILD, AND GROW", 2000]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  className="inline"
                  style={{ fontFamily: 'Varela Round, Arial, sans-serif' }}
                />
                {/* Bold emphasis for BUILD and GROW (static, since TypeAnimation can't style substrings) */}
                {/* If you want BUILD and GROW bolded during animation, need a custom solution */}
              </div>
              {/* Redesigned CTA and email row */}
              <div className="flex flex-col md:flex-row items-center gap-4 mt-8 mb-6">
                {/* Glassmorphic CTA Button */}
                <button
                  type="button"
                  className="inline-flex items-center group px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 shadow-lg transition-all duration-300 font-montserrat cta-large"
                >
                  <span className="pl-4 pr-2 text-base font-bold text-white tracking-wide">
                    Let's Connect
                  </span>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white transition-all duration-300 ml-1">
                    <svg
                      className="w-4 h-4 text-black transform group-hover:translate-x-1 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" />
                      <path d="M8 12h8m0 0l-3-3m3 3l-3 3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
                {/* Email with copy icon */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
                    onClick={handleCopy}
                    title="Copy email"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <rect x="8" y="8" width="12" height="12" rx="2" />
                      <rect x="4" y="4" width="12" height="12" rx="2" />
                    </svg>
                  </button>
                  <span className="text-base font-montserrat text-white/80 select-all">vermakajal4305@gmail.com</span>
                </div>
              </div>
              {/* Availability and description */}
              <div className="text-center mt-2">
                <span className="block text-white text-xl font-bold mb-4 font-montserrat">I'm open to internships and full-time opportunities.</span>
                <span className="block text-gray-300 text-base font-normal font-inter">I thrive on crafting dynamic web applications, and delivering seamless user experiences.</span>
              </div>
            </div>
            {/* Kajal flush with bottom edge, extra large, perfectly centered */}
            <div className="absolute -bottom-0 left-0 right-0 text-center">
              <span className="font-inter text-9xl md:text-[10rem] font-extrabold text-zinc-600 tracking-tight">Kajal</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer;
