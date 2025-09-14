import React from "react";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "E-connect Solutions Pvt. Ltd",
      period: "Aug 2024 – Present",
      location: "India",
      type: "Full-time",
      description: [
        "Architected the Smart Tickets platform using React-Redux, Vite, .NET Core, and PostgreSQL—delivering a scalable standard for internal applications",
        "Engineered a Dynamic Form Builder with Ant Design, enabling non-technical users to customize workflows and boosting team efficiency",
        "Led the frontend of the Booking Management System (LDA project) with React and Reactstrap, providing a fast, intuitive experience for end-users",
        "Championed adoption of modern workflows (Vite builds, code review practices, advanced Git usage), accelerating deployments and improving code quality",
      ],
      technologies: [
        ".NET Core",
        "React",
        "Redux",
        "Vite",
        "PostgreSQL",
        "Ant Design",
        "Reactstrap",
        "GitHub Desktop",
      ],
    },
    {
      title: "Executive Developer",
      company: "E-connect Solutions Pvt. Ltd",
      period: "July 2023 – July 2024",
      location: "India",
      type: "Full-time",
      description: [
        "Streamlined RajSIMS stock verification with a modern React solution, reducing verification time and errors significantly",
        "Co-led creation of the “Reality Check” module for Raj Sampark 2.0, implementing complex dynamic forms with React-Flow, Ant Design, and .NET Core",
        "Implemented seamless Single Sign-On (SSO) for LDA, improving user security and accessibility across platforms",
        "Mentored new team members and drove improvements in testing, documentation, and workflow efficiency",
      ],
      technologies: [
        ".NET Core",
        "React",
        "Redux",
        "React-Flow",
        "Ant Design",
        "Oracle 19c",
        "GitHub Desktop",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "E-connect Solutions Pvt. Ltd",
      period: "July 2022 – June 2023",
      location: "India",
      type: "Internship",
      description: [
        "Enhanced RajERP’s material management and HRMS modules using .NET MVC and WebAPI, improving reliability and functionality",
        "Resolved key bugs and assisted in QA testing, ensuring smoother user operations",
        "Collaborated with senior developers on feature development and gained exposure to enterprise workflows",
        "Strengthened fundamentals in agile collaboration, version control, and enterprise software practices",
      ],
      technologies: [
        ".NET MVC",
        ".NET WebAPI",
        "C#",
        "JavaScript",
        "SQL Server",
        "HTML/CSS",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My journey in software development, from internship to executive
            developer role
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative md:ml-16">
                {/* Timeline dot */}
                <div className="absolute -left-20 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>

                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {experience.title}
                      </h3>
                      <div className="flex items-center text-blue-600 font-semibold mb-2">
                        <Briefcase size={18} className="mr-2" />
                        {experience.company}
                      </div>
                    </div>

                    <div className="flex flex-col lg:items-end text-sm text-gray-600">
                      <div className="flex items-center mb-1">
                        <Calendar size={16} className="mr-2" />
                        {experience.period}
                      </div>
                      <div className="flex items-center mb-1">
                        <MapPin size={16} className="mr-2" />
                        {experience.location}
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          experience.type === "Full-time"
                            ? "bg-green-100 text-green-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {experience.type}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Key Responsibilities:
                    </h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      {experience.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-blue-50 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Looking Forward
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I'm excited to take the next step in my career by joining a
              product-based company where I can contribute to innovative
              projects and work towards my goal of becoming a Software
              Architect. I'm open to new opportunities that challenge me to grow
              and make a meaningful impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
