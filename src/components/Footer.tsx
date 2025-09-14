import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Mohit Sharma</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Full Stack Developer passionate about creating innovative solutions 
              and building the future of web applications.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © {currentYear} Mohit Sharma. All rights reserved.
              </p>
              <p className="text-gray-400 flex items-center">
                Made with <Heart size={16} className="text-red-500 mx-1" /> using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;