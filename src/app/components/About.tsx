"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion'

const About = () => {
  const [rotated, setRotated] = React.useState(true);
  return (
    <section id="home" className="py-20 sm:py-24 md:py-32 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-6 md:px-8">
        {/* Large circular profile image left */}
        <motion.div 
          className="flex-shrink-0 mb-4 sm:mb-6 lg:mb-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden bg-gray-200 dark:bg-neutral-900 flex items-center justify-center shadow-lg">
            <img
              src="https://res.cloudinary.com/dkslgaexh/image/upload/v1754383718/fffthkuglkpyjfwgtn2q.png"
              alt="Kajal Verma"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        
        {/* Text content */}
        <motion.div 
          className="flex-1 flex flex-col justify-center gap-3 sm:gap-4 md:gap-5 text-center lg:text-left font-sans antialiased"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
            <span className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">Hey, I'm</span>
            <motion.span
              className="inline-block w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden border-2 border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-neutral-900 transition-transform duration-300 cursor-pointer shadow-sm"
              style={{ transform: rotated ? 'rotate(-12deg)' : 'rotate(0deg)' }}
              onClick={() => setRotated(r => !r)}
              title="Click to toggle rotation"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src="https://res.cloudinary.com/dkslgaexh/image/upload/v1754419139/tdhmshiuu3df01g8uejv.png"
                alt="Kajal Verma"
                className="w-full h-full object-cover"
              />
            </motion.span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-1 leading-tight tracking-tight font-sans">
            Kajal Verma
          </h1>
          
          {/* Enhanced description with better mobile formatting */}
          <div className="border-l-4 border-gray-200 dark:border-gray-700 pl-4 sm:pl-6 mt-3 sm:mt-4">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-2xl font-medium font-sans tracking-normal leading-relaxed">
              Passionate about full stack development and eager to learn new technologies to solve real-world challenges. 
              <span className="block mt-2 sm:inline sm:mt-0 text-gray-500 dark:text-gray-400 font-normal">
                <span className="hidden sm:inline"> </span>
                Motivated to contribute effectively to dynamic teams and projects, while continuously developing my technical skills.
              </span>
            </p>
          </div>


        </motion.div>
      </div>
    </section>
  )
}

export default About


