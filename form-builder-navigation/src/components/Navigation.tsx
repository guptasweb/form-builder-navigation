'use client';

import React, { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          {/* <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gray-800">
                Galactic Alignment
              </h1>
            </div>
          </div> */}

                     {/* Desktop Navigation */}
           <div className="hidden md:flex items-center space-x-4">
             <a
               href="#"
               className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2 border border-gray-200 hover:border-blue-400 hover:shadow-md"
             >
               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                 <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
               </svg>
               Pages
             </a>
             <img src="/dashed-line.svg" alt="separator" className="mx-2" />
             <a
               href="#"
               className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2 border border-gray-200 hover:border-blue-400 hover:shadow-md"
             >
               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                 <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
               </svg>
               Account
             </a>
             <img src="/dashed-line.svg" alt="separator" className="mx-2" />
             <a
               href="#"
               className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2 border border-gray-200 hover:border-blue-400 hover:shadow-md"
             >
               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                 <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
               </svg>
               Blocks
             </a>
             <img src="/dashed-line.svg" alt="separator" className="mx-2" />
             <a
               href="#"
               className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2 border border-gray-200 hover:border-blue-400 hover:shadow-md"
             >
               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                 <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
               </svg>
               Docs
             </a>
           </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Log
            </button>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg">
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Pages
              </a>
              <div className="flex justify-center py-1">
                <img src="/dashed-line.svg" alt="separator" />
              </div>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Account
              </a>
              <div className="flex justify-center py-1">
                <img src="/dashed-line.svg" alt="separator" />
              </div>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Blocks
              </a>
              <div className="flex justify-center py-1">
                <img src="/dashed-line.svg" alt="separator" />
              </div>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Docs
              </a>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="space-y-2">
                  <button className="w-full text-left text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                    Log In
                  </button>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-3 py-2 rounded-md text-base font-medium">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}