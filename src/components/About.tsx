import React from 'react';
import { Briefcase, Target, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="prose prose-lg">
              <p className="text-gray-600 leading-relaxed mb-6">
                I am a passionate Full Stack Developer currently working as an Software Developer 
                at <strong>E-connect Solutions Pvt. Ltd</strong>, where I've been contributing to 
                innovative projects since July 2022.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                My expertise spans across modern web technologies including .NET Core, MVC, 
                React-Redux, and database technologies like SQL and PL/SQL. I have a strong 
                foundation in both C# and JavaScript, enabling me to build comprehensive 
                full-stack solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My career goal is to transition into product-based companies while building 
                the expertise necessary to become a <strong>Software Architect</strong>. 
                I'm continuously learning and exploring new technologies, including AI tools, 
                to stay at the forefront of software development.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-600 text-white rounded-lg mr-4">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Current Role</h3>
              </div>
              <p className="text-gray-600">
                Software Developer at E-connect Solutions Pvt. Ltd, building scalable 
                web applications and contributing to digital transformation projects.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-600 text-white rounded-lg mr-4">
                  <Code size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Expertise</h3>
              </div>
              <p className="text-gray-600">
                Full Stack Development with .NET Core, React-Redux, SQL, and modern 
                web technologies for enterprise-level applications.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-purple-600 text-white rounded-lg mr-4">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Career Goal</h3>
              </div>
              <p className="text-gray-600">
                Transitioning to product-based companies while building expertise 
                to become a Software Architect and lead innovative projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;