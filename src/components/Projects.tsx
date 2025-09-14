import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with .NET Core and React. Features include user authentication, product management, shopping cart, and payment integration.',
      techStack: ['.NET Core', 'React', 'Redux', 'SQL Server', 'Bootstrap'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'Task Management System',
      description: 'A collaborative project management tool with real-time updates, team collaboration features, and comprehensive reporting dashboards.',
      techStack: ['ASP.NET MVC', 'JavaScript', 'SQL Server', 'SignalR'],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'Customer Analytics Dashboard',
      description: 'A business intelligence dashboard providing real-time analytics and insights for customer behavior analysis and business decision making.',
      techStack: ['React', 'Chart.js', '.NET Web API', 'Oracle DB'],
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'Inventory Management System',
      description: 'A comprehensive inventory management solution with barcode scanning, automated reordering, and detailed reporting capabilities.',
      techStack: ['.NET Core', 'React', 'SQL Server', 'Azure'],
      image: 'https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my expertise in full-stack development
          </p>
        </div>
                <div className="flex justify-center items-center py-16">
          <div className="bg-gray-50 border border-dashed border-gray-300 rounded-xl p-10 text-center shadow-sm">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              🚧 Projects Coming Soon
            </h3>
            <p className="text-gray-500">
              I’m adding my portfolio projects here. Stay tuned!
            </p>
          </div>
        </div>

{/* 
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                project.featured ? 'ring-2 ring-blue-100' : ''
              }`}
            >
              {project.featured && (
                <div className="bg-blue-600 text-white px-4 py-2 text-sm font-medium">
                  ⭐ Featured Project
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Github size={20} />
                    <span className="font-medium">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                    <span className="font-medium">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        <div className="text-center mt-12">
          <a
            href="https://github.com/mohit-sharma311"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;