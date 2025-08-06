"use client"

import React, { useState } from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Github, Linkedin, Mail, Phone } from 'lucide-react'
import styles from './Header.module.css'

const Header = () => {
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setActive('Home');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [active, setActive] = useState('Home');
  
  React.useEffect(() => {
    const sectionIds = ['home', 'skills', 'projects', 'certifications'];
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      let mostVisible: string | null = null;
      let maxRatio = 0;
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          mostVisible = (entry.target as HTMLElement).id;
          maxRatio = entry.intersectionRatio;
        }
      });
      if (mostVisible) {
        const nameMap: Record<string, string> = {
          home: 'Home',
          skills: 'Skills',
          projects: 'Work',
          certifications: 'More',
        };
        setActive(nameMap[mostVisible]);
      }
    };
    const observer = new window.IntersectionObserver(handleIntersect, {
      threshold: [0.3, 0.5, 0.7],
    });
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => {
      observer.disconnect();
    };
  }, []);

  // Close mobile menu when clicking outside
  React.useEffect(() => {
    // No longer needed since we removed mobile menu toggle
  }, []);

  const { theme, setTheme } = useTheme()

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Work', href: '#projects' },
    { name: 'More', href: '#certifications' },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    setActive(item.name);
    
    const targetId = item.href.replace('#', '');
    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Universal Navigation - Same design for both desktop and mobile */}
      <header className="fixed top-4 sm:top-6 left-4 sm:left-0 right-4 sm:right-0 w-auto sm:w-full z-50 flex justify-center pointer-events-none">
        <nav
          className={`pointer-events-auto flex items-center gap-1 sm:gap-2 px-1 sm:px-2 py-1 sm:py-2 bg-black/90 dark:bg-black/90 rounded-full shadow-[0_2px_16px_0_rgba(255,255,255,0.08)] border border-white/10 backdrop-blur-lg ${styles['navbar-custom']}`}
        >
          {navItems.map((item, idx) => (
            <a
              key={item.name}
              href={item.href}
              className={
                `relative px-3 sm:px-6 py-2 rounded-full font-medium text-white/90 transition-all duration-200 text-sm sm:text-base ${styles['navlink-custom']} ` +
                (active === item.name
                  ? 'bg-white/10 shadow-[0_0_8px_0_rgba(255,255,255,0.10)] text-white'
                  : 'hover:bg-white/5 hover:text-white')
              }
              onClick={e => {
                e.preventDefault();
                handleNavClick(item);
              }}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </header>
    </>
  )
}

export default Header
