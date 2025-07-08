import React from 'react';
import { ArrowDown } from 'lucide-react';
import PImage from "../assets/Profile.jpg";

// About Component
function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img 
              src={PImage} 
              alt="Vasanthakumar working on projects" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              My Journey
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm Vasanthakumar, a Java Full Stack Developer with 6 months of hands-on experience building robust web applications using Java, Spring Boot, and React at Intraintech. For the past 4 months (and ongoing), I've been a Supervisor, leading project teams to deliver high-quality, innovative solutions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              My expertise spans backend development with Spring Boot, frontend with React, and database management with PostgreSQL. I've contributed to projects like EduConnect and RoomPal, showcasing my ability to create scalable and user-friendly applications.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Outside of work, I stay updated with the latest technologies, mentor aspiring developers, and enjoy tackling complex problems through coding.
            </p>
            
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
                <h4 className="font-bold text-xl text-indigo-600 dark:text-indigo-400">0.5+</h4>
                <p className="text-gray-700 dark:text-gray-300">Years Experience</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
                <h4 className="font-bold text-xl text-indigo-600 dark:text-indigo-400">5+</h4>
                <p className="text-gray-700 dark:text-gray-300">Projects Led</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Hero Component


export default  About;