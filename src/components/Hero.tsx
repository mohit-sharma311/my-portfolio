import React from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Mohit_Sharma_Full_Stack_Dev.pdf';
    link.download = 'Mohit_Sharma_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              <img src='./mordernStyleDev.png' style={{width:"150px",height:"130px" ,borderRadius:"50%",objectFit:"cover"}}/>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Mohit Sharma</span> 👋
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-600 mb-6 font-medium">
            Full Stack .NET & React Developer | Aspiring Software Architect
          </h2>

          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            I build scalable web applications with .NET Core, MVC, and React-Redux. 
            Currently exploring AI tools and freelancing opportunities to expand my expertise 
            and contribute to innovative projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={handleDownloadResume}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Download size={20} />
              Download Resume
            </button>

            <div className="flex gap-4">
              <a
                href="https://github.com/mohit-sharma311"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohit-sharma-b2422b1b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:mohit@example.com"
                className="p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="animate-bounce mt-12">
            <div className="w-6 h-10 border-2 border-blue-600 rounded-full p-1">
              <div className="w-1 h-3 bg-blue-600 rounded-full mx-auto animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;