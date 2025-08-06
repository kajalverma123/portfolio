
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const SocialMedia = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kajalverma01/',
      icon: Linkedin,
      color: '#0077B5',
      hoverBg: 'hover:bg-blue-500/20',
      description: 'Connect with me professionally'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/kajalverma123',
      icon: Github,
      color: '#ffffff',
      hoverBg: 'hover:bg-gray-500/20',
      description: 'View my code repositories'
    },
    {
      name: 'Email',
      href: 'mailto:vermakajal4305@gmail.com',
      icon: Mail,
      color: '#ea4335',
      hoverBg: 'hover:bg-red-500/20',
      description: 'Send me an email'
    }
  ];

  return (
    <motion.footer 
      className="bg-black text-white py-6 sm:py-8 md:py-10 px-4 sm:px-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Name/Brand */}
        <motion.div 
          className="flex items-center justify-center mb-4 sm:mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-sm sm:text-base text-white/80 font-[Montserrat,Arial,sans-serif] tracking-wide">
            &bull; Kajal Verma
          </span>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div 
          className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {socialLinks.map((social, idx) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.href}
                target={social.name !== 'Email' ? '_blank' : undefined}
                rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className={`group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 ${social.hoverBg} hover:border-white/20 transition-all duration-300 backdrop-blur-sm`}
                title={social.description}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent 
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 group-hover:scale-110 transition-transform duration-200" 
                  style={{ color: social.color }} 
                />
                
                {/* Tooltip for mobile */}
                <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  {social.name}
                </span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default SocialMedia;
