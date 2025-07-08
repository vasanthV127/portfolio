import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import roompal from "../assets/roompal.png"
import EduConnect from "../assets/educonnect.png"
import ecs from "../assets/ecs.png"

function Projects() {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'RoomPal',
      category: 'web',
      image: roompal,
      description: 'A full-stack web application for roommates to manage shared expenses. Features include bill creation, receipt scanning with OCR, expense splitting (equal, individual, or percentage-based), payment tracking, and room analytics. Built with a React frontend for a dynamic user experience and a Spring Boot backend for robust data management, integrated with PostgreSQL for persistent storage and Docker for deployment.',
      technologies: ['React', 'Spring Boot', 'PostgreSQL', 'Docker', 'JWT', 'OCR'],
      githubLink: 'https://github.com/vasanthV127/Room_Pal',
      liveLink: '#'
    },
    {
      id: 2,
      title: 'EduConnect Platform',
      category: 'web',
      image: EduConnect,
      description: 'A full-stack educational platform using Spring Boot, React, Tailwind CSS, Spring Security, JWT tokens, and Aliven PostgreSQL cloud, enabling seamless interaction for students and teachers across 500+ registered users. Features include teacher-driven student registration, automated email delivery of credentials, module creation, resource uploads, semester-wise notifications via dashboard or email, and quiz conduction, improving student engagement by 25%.',
      technologies: ['Spring Boot', 'React', 'Tailwind CSS', 'Spring Security', 'JWT', 'PostgreSQL'],
      githubLink: 'https://github.com/vasanthV127/EDU_Connect_Backend',
      liveLink: 'https://edu-connect-frontend-eight.vercel.app'
    },
    {
      id: 3,
      title: 'IoT-based Paralyzed Patient Healthcare System',
      category: 'iot',
      image: ecs,
      description: 'An IoT-based monitoring system for paralyzed patients utilizing finger movement detection and integrated full sensors. Improved patient safety by reducing fall incidents by 40% in clinical trials. Engineered real-time accessibility enhancements using C++ and Arduino, enabling voice command functionality for a digital interface that reduced task failure rates by 15% for users with motor impairments.',
      technologies: ['C++', 'Arduino', 'GSM Module', 'IoT'],
      githubLink: '#',
      liveLink: '#'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-16 md:py-24 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          My <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Explore my recent projects, showcasing my expertise in Java, Spring Boot, and full-stack development.
        </p>
        
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 p-1 bg-white dark:bg-gray-900 rounded-lg shadow-md">
            {['all', 'web', 'iot'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filter === category
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <a 
                    href={project.githubLink}
                    className="flex items-center text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                  <a 
                    href={project.liveLink}
                    className="flex items-center text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;