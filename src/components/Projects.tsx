
"use client"

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: "Web Based Job Portal",
    summary: "A full-stack web application for job seekers and employers, featuring dynamic CRUD, mobile-responsive UI, and robust backend with Spring Boot.",
    image: "", // Placeholder - replace with your screenshot
    color: "from-pink-600 via-fuchsia-600 to-purple-600",
    description: [
      "Developed a full-stack web application for a job portal that allows employers to post and manage over 50+ job openings and allows job seekers to efficiently browse and apply.",
      "Implemented dynamic CRUD functionalities for job roles, including job title, description, experience level, and technology stack.",
      "Designed and integrated a mobile-responsive UI using JSP and Bootstrap, 100% compatible with all devices.",
      "Engineered a resilient backend system with Spring Boot (MVC), deployed via embedded Tomcat, reducing server response time by 15%.",
      "Used Maven for efficient build and dependency management, reducing setup errors and easing upgrades.",
      "Hosted on GitHub and integrated Git for version control, improving project visibility and collaboration."
    ],
    tech: [
      { name: "Java", iconUrl: "https://img.icons8.com/?size=100&id=13679&format=png", alt: "Java" },
      { name: "Spring Boot", iconUrl: "https://cdn.simpleicons.org/springboot", alt: "Spring Boot" },
      { name: "JSP", iconUrl: "https://cdn.simpleicons.org/apachetomcat", alt: "JSP" },
      { name: "Bootstrap", iconUrl: "https://cdn.simpleicons.org/bootstrap", alt: "Bootstrap" },
      { name: "Maven", iconUrl: "https://cdn.simpleicons.org/apachemaven", alt: "Maven" },
      { name: "Git", iconUrl: "https://cdn.simpleicons.org/git", alt: "Git" },
    ],
    github: "https://github.com/kajalverma123/job-portal",
    live: "#"
  },
  {
    title: "Portfolio",
    summary: "A sleek, modern portfolio website built to showcase my skills, projects, and certifications with a focus on UX, accessibility, and performance.",
    image: "", // Placeholder - replace with your screenshot
    color: "from-orange-400 via-pink-500 to-red-500",
    description: [
      "Designed and developed a personal portfolio to highlight my technical expertise, real-world projects, and professional journey.",
      "Responsive and accessible design, optimized for all devices and screen readers.",
      "Dynamic Projects section with live previews and direct GitHub integration.",
      "Contact form with validation and anti-spam measures, boosting engagement.",
      "SEO-optimized, fast-loading, and built with modular, maintainable code.",
      "Continuously updated to reflect new skills, certifications, and achievements."
    ],
    tech: [
      { name: "Next.js", iconUrl: "https://cdn.brandfetch.io/id2alue-rx/theme/dark/idqNI71Hra.svg?c=1dxbfHSJFAPEGdCLU4o5B", alt: "Next.js" },
      { name: "React", iconUrl: "https://cdn.simpleicons.org/react", alt: "React" },
      { name: "TypeScript", iconUrl: "https://cdn.simpleicons.org/typescript", alt: "TypeScript" },
      { name: "Tailwind CSS", iconUrl: "https://cdn.simpleicons.org/tailwindcss", alt: "Tailwind CSS" }
    ],
    github: "https://github.com/kajalverma123/portfolio",
    live: "#"
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <motion.div 
          className="mb-8 sm:mb-12 md:mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-2 text-xs tracking-widest font-semibold text-white/70">A GLIMPSE INTO</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
            <span className="font-pacifico">My</span> <span className="work-pacifico-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 bg-clip-text text-transparent">works</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-12 sm:gap-16 md:gap-20">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.title} 
              className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center justify-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {/* Project Media & Summary */}
              <div className="relative w-full lg:w-[500px] xl:w-[600px] max-w-full">
                <div className="rounded-2xl sm:rounded-3xl bg-black p-1 shadow-xl border border-zinc-600 overflow-hidden">
                  {(project.title === "Web Based Job Portal") && (
                    <div className="relative">
                      <video
                        src="https://res.cloudinary.com/dkslgaexh/video/upload/v1754423489/hi0g96nxtkm2lgpmsgtq.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 rounded-xl sm:rounded-2xl object-cover bg-[#181028]"
                        title={project.title + " Demo"}
                      />
                      {/* Mobile play overlay for better UX */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl flex items-center justify-center lg:hidden">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 sm:p-4">
                          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                  {(project.title === "Portfolio") && (
                    <div className="relative">
                      <video
                        src="https://res.cloudinary.com/dkslgaexh/video/upload/v1754461039/gxjni45xoxtmy7nfidfu.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 rounded-xl sm:rounded-2xl object-cover bg-[#181028]"
                        title={project.title + " Demo"}
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl flex items-center justify-center lg:hidden">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 sm:p-4">
                          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Project Details */}
              <div className="flex-1 w-full max-w-2xl">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-br from-pink-500 via-orange-400 to-yellow-400 animate-pulse" />
                  <span className="uppercase text-xs tracking-widest text-pink-300 font-semibold">{project.title}</span>
                </div>
                
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-white leading-tight">
                  {project.title}
                </h3>

                {/* Mobile-optimized description */}
                <div className="mb-4 sm:mb-6">
                  <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
                    {project.summary}
                  </p>
                  
                  {/* Expandable details for mobile */}
                  <details className="group lg:hidden">
                    <summary className="cursor-pointer text-pink-300 text-sm font-medium hover:text-pink-200 transition-colors">
                      Show more details
                      <span className="ml-2 group-open:rotate-180 transition-transform duration-200 inline-block">▼</span>
                    </summary>
                    <ul className="list-disc pl-5 space-y-1 sm:space-y-2 mt-3 text-white/80 text-sm">
                      {project.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </details>
                  
                  {/* Full description for desktop */}
                  <ul className="hidden lg:list-disc lg:pl-5 lg:space-y-2 lg:text-white/90">
                    {project.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack with improved mobile layout */}
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech.name} className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full bg-white/10 border border-white/10 text-white text-xs sm:text-sm font-medium">
                      <img src={tech.iconUrl} alt={tech.alt} className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="hidden xs:inline sm:inline">{tech.name}</span>
                    </span>
                  ))}
                </div>

                {/* Enhanced mobile-friendly buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {project.title === "Portfolio" && (
                    <a 
                      href="https://github.com/kajalverma123/portfolio" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 hover:border-white/20 transition-all duration-200 text-white text-sm sm:text-base font-medium group"
                    >
                      <img src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000" alt="GitHub" className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>View on GitHub</span>
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {project.title === "Web Based Job Portal" && (
                    <a 
                      href="https://github.com/kajalverma123/JobApp-Project.git" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 hover:border-white/20 transition-all duration-200 text-white text-sm sm:text-base font-medium group"
                    >
                      <img src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000" alt="GitHub" className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>View on GitHub</span>
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
