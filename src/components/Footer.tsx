
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-200 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center">
            <img 
              src="/lovable-uploads/32b8a728-dce6-4646-9f13-5f0e59cda0ae.png" 
              alt="TextMatchScore Logo" 
              className="h-10 mr-2 shadow-sm rounded-md"
            />
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} TextMatchScore. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
