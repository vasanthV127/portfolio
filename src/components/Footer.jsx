import React from 'react';
import { ArrowUp } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-bold text-indigo-400">Vasanthakumar's Portfolio</a>
            <p className="mt-2 text-gray-400">
              Building innovative Java-based solutions.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <a 
              href="#home" 
              className="p-2 bg-indigo-600 hover:bg-indigo-700 rounded-full mb-4 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </a>
            <p className="text-gray-400 text-sm">
              © {currentYear} Vasanthakumar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;