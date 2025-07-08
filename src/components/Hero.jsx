import React from 'react';
import { ArrowDown } from 'lucide-react';
import PImage from "../assets/Profile.jpg"
function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Vasanthakumar</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-700 dark:text-gray-300">
            Java Full Stack Developer & Project Supervisor
          </h2>
          <p className="text-lg mb-8 text-gray-600 dark:text-gray-400 max-w-lg">
            With 6 months as a Java Full Stack Developer and 4 months leading projects as a Supervisor, I build scalable web applications using Java, Spring Boot, and React, delivering innovative solutions.
          </p>
          <div className="flex space-x-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border-2 border-indigo-600 hover:bg-indigo-50 dark:hover:bg-gray-800 text-indigo-600 dark:text-indigo-400 font-medium rounded-lg transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 relative">
            <div className="absolute inset-0 bg-indigo-600 rounded-full opacity-20 animate-pulse"></div>
            <img 
              src={PImage}
              alt="Vasanthakumar's profile" 
              className="rounded-full w-full h-full object-cover border-4 border-white dark:border-gray-800 shadow-xl"
            />
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-16">
        <a 
          href="#about"
          className="animate-bounce p-2 bg-white dark:bg-gray-800 rounded-full shadow-md"
          aria-label="Scroll Down"
        >
          <ArrowDown size={24} className="text-indigo-600 dark:text-indigo-400" />
        </a>
      </div>
    </section>
  );
}

export default Hero;