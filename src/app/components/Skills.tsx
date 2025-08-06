"use client";

import { motion } from 'framer-motion';
import {
  SiC,
  SiCplusplus,
  SiTypescript,
  SiSpringboot,
  SiHibernate,
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiGit,
  SiBitbucket,
  SiApachemaven,
  SiJira,
  SiNextdotjs
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';

const skills = [
  { name: 'Java', icon: <img src="https://img.icons8.com/?size=100&id=13679&format=png&color=000000" alt="Java" className="java-icon" /> },
  { name: 'C', icon: <img src="https://img.icons8.com/?size=100&id=40670&format=png&color=000000" alt="C" className="c-icon" /> },
  { name: 'C++', icon: <SiCplusplus size={24} color="#00599C" /> },
  { name: 'TypeScript', icon: <SiTypescript size={24} color="#3178C6" /> },
  { name: 'Spring Boot', icon: <SiSpringboot size={24} color="#6DB33F" /> },
  { name: 'Hibernate', icon: <SiHibernate size={24} color="#59666C" /> },
  { name: 'React.js', icon: <SiReact size={24} color="#61DAFB" /> },
  { name: 'Next.js', icon: <SiNextdotjs size={24} color="#fff" /> },
  { name: 'HTML', icon: <SiHtml5 size={24} color="#E34F26" /> },
  { name: 'CSS', icon: <SiCss3 size={24} color="#1572B6" /> },
  { name: 'JavaScript', icon: <SiJavascript size={24} color="#F7DF1E" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={24} color="#38BDF8" /> },
  { name: 'MySQL', icon: <SiMysql size={24} color="#4479A1" /> },
  { name: 'Git', icon: <SiGit size={24} color="#F05032" /> },
  { name: 'BitBucket', icon: <SiBitbucket size={24} color="#0052CC" /> },
  { name: 'Maven', icon: <SiApachemaven size={24} color="#C71A36" /> },
  { name: 'Jira', icon: <SiJira size={24} color="#0052CC" /> },
];

function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="uppercase tracking-widest text-sm sm:text-base lg:text-lg text-white/60 mb-2 font-body">My Skills</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6 tracking-tight">
            The Secret <span className="text-pink-500 italic font-serif">Sauce</span>
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.03 }}
              whileHover={{ scale: 1.06, y: -4 }}
              className="flex items-center gap-2 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 shadow-lg backdrop-blur-md text-white font-heading text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:shadow-pink-400/20 hover:bg-white/10"
            >
              {skill.icon}
              <span className="align-middle ml-2">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
