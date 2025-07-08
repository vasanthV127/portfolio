import React from 'react';

function Skills() {
  const skills = [
    { name: 'Java', level: 65 },
    { name: 'Spring Boot', level: 60 },
    { name: 'React', level: 60 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'Spring Security', level: 64 },
  
  ];

  const technologies = [
    { name: 'Java', icon: '☕' },
    { name: 'Spring Boot', icon: '🌱' },
    { name: 'Spring Security', icon: '🔒' },
    { name: 'React', icon: '⚛️' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Vscript', icon: '📜' },
    { name: 'Git', icon: '🌿' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Postman', icon: '📬' },
    { name: 'Swagger', icon: '📚' },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-800 dark:from-indigo-400 dark:to-blue-500">
          My Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{skill.name}</h3>
                <span className="text-indigo-600 dark:text-indigo-400 font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-indigo-600 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-semibold mb-10 text-gray-900 dark:text-white">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-800 rounded-full shadow-md text-gray-700 dark:text-gray-300 font-medium hover:bg-indigo-50 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-200"
              >
                <span className="text-lg">{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;