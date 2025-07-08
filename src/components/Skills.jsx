import React from 'react';

function Skills() {
  const skills = [
    { name: 'Java', level: 90 },
    { name: 'Spring Boot', level: 85 },
    { name: 'React', level: 80 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'Spring Security', level: 70 },
    { name: 'Vscript', level: 65 },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          My <span className="text-indigo-600 dark:text-indigo-400">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                <span className="text-indigo-600 dark:text-indigo-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-indigo-600 dark:bg-indigo-500 h-2.5 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {['Java', 'Spring Boot', 'Spring Security', 'React', 'PostgreSQL', 'Vscript', 'Git', 'Docker', 'Postman', 'Swagger'].map((tech, index) => (
              <div 
                key={index}
                className="px-6 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-md text-gray-700 dark:text-gray-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;