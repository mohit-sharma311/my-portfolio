import React from 'react';
import { Server, Monitor, Database, PenTool as Tool } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend',
      icon: <Server size={24} />,
      color: 'blue',
      skills: [
        { name: '.NET Core', level: 90 },
        { name: 'ASP.NET MVC', level: 85 },
        { name: 'C#', level: 88 },
        { name: 'Web APIs', level: 82 },
      ]
    },
    {
      title: 'Frontend',
      icon: <Monitor size={24} />,
      color: 'green',
      skills: [
        { name: 'React', level: 85 },
        { name: 'Redux', level: 80 },
        { name: 'JavaScript', level: 88 },
        { name: 'HTML/CSS', level: 90 },
      ]
    },
    {
      title: 'Databases',
      icon: <Database size={24} />,
      color: 'purple',
      skills: [
        { name: 'SQL Server', level: 85 },
        { name: 'PL/SQL', level: 78 },
        { name: 'Oracle', level: 75 },
        { name: 'MySQL', level: 80 },
      ]
    },
    {
      title: 'Tools',
      icon: <Tool size={24} />,
      color: 'orange',
      skills: [
        { name: 'Visual Studio', level: 88 },
        { name: 'Git', level: 85 },
        { name: 'Toad', level: 75 },
        { name: 'Postman', level: 80 },
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-50',
          icon: 'bg-blue-600',
          progress: 'bg-blue-600'
        };
      case 'green':
        return {
          bg: 'bg-green-50',
          icon: 'bg-green-600',
          progress: 'bg-green-600'
        };
      case 'purple':
        return {
          bg: 'bg-purple-50',
          icon: 'bg-purple-600',
          progress: 'bg-purple-600'
        };
      case 'orange':
        return {
          bg: 'bg-orange-50',
          icon: 'bg-orange-600',
          progress: 'bg-orange-600'
        };
      default:
        return {
          bg: 'bg-gray-50',
          icon: 'bg-gray-600',
          progress: 'bg-gray-600'
        };
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to create robust, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => {
            const colors = getColorClasses(category.color);
            return (
              <div
                key={category.title}
                className={`${colors.bg} p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300`}
              >
                <div className="flex items-center mb-6">
                  <div className={`${colors.icon} p-3 text-white rounded-lg mr-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`${colors.progress} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;