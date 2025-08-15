'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative bg-black border-t-2 border-white/20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/3 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-10">
        {/* Main row: brand left, connect right */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 w-full">
          {/* Brand Section - Left */}
          <div className="flex flex-col items-start w-full md:w-auto">
            <h3 className="font-extrabold text-xl text-green-600">
              crafted with ❤ by M0H1T
            </h3>
          </div>

          {/* Connect Section - Right */}
          <div className="flex flex-row items-center w-full md:w-auto justify-center md:justify-end">
            <h4 className="font-bold text-green-600 text-right mr-4 whitespace-nowrap">
              Connect with me
            </h4>
            <div className="flex space-x-4">
              {/* GitHub */}
              <a 
                href="https://github.com" 
                className="social-link group/icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 bg-black backdrop-blur-sm rounded-xl flex items-center justify-center border border-white hover:border-green-600 transition-all duration-500 hover:bg-black hover:shadow-2xl hover:shadow-green-600 transform hover:scale-125 hover:-translate-y-2 hover:rotate-3">
                  <i className="ri-github-fill text-xl text-white group-hover/icon:text-green-400 transition-all duration-500 transform group-hover/icon:scale-125 group-hover/icon:rotate-12"></i>
                </div>
              </a>
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com" 
                className="social-link group/icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 bg-black backdrop-blur-sm rounded-xl flex items-center justify-center border border-white hover:border-green-600 transition-all duration-500 hover:bg-black hover:shadow-2xl hover:shadow-green-600 transform hover:scale-125 hover:-translate-y-2 hover:rotate-3">
                  <i className="ri-linkedin-fill text-xl text-white group-hover/icon:text-green-400 transition-all duration-500 transform group-hover/icon:scale-125 group-hover/icon:-rotate-12"></i>
                </div>
              </a>
              {/* Email */}
              <a 
                href="mailto:alex@example.com" 
                className="social-link group/icon"
              >
                <div className="w-10 h-10 bg-black backdrop-blur-sm rounded-xl flex items-center justify-center border border-white hover:border-green-600 transition-all duration-500 hover:bg-black hover:shadow-2xl hover:shadow-green-600 transform hover:scale-125 hover:-translate-y-2 hover:rotate-3">
                  <i className="ri-mail-fill text-xl text-white group-hover/icon:text-green-400 transition-all duration-500 transform group-hover/icon:scale-125 group-hover/icon:rotate-12"></i>
                </div>
              </a>
              {/* X (Twitter) */}
              <a 
                href="https://x.com/Mohit___18" 
                className="social-link group/icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 bg-black backdrop-blur-sm rounded-xl flex items-center justify-center border border-white hover:border-green-600 transition-all duration-500 hover:bg-black hover:shadow-2xl hover:shadow-green-600 transform hover:scale-125 hover:-translate-y-2 hover:-rotate-3">
                  <i className="ri-twitter-x-fill text-xl text-white group-hover/icon:text-green-400 transition-all duration-500 transform group-hover/icon:scale-125 group-hover/icon:-rotate-12"></i>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section - Bottom, centered */}
        <div className="mt-10  pt-8 border-t border-gray-600">
          <div className="flex items-center justify-center text-center">
            <p className="text-sm text-gray-400 font-extrabold">
              © {currentYear} Mohit, All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Floating particles effect - Fixed positions to prevent hydration error */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-1 h-1 bg-white rounded-full animate-float" style={{ left: '10%', top: '20%', animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-float" style={{ left: '25%', top: '60%', animationDelay: '0.5s', animationDuration: '4s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-float" style={{ left: '45%', top: '30%', animationDelay: '1s', animationDuration: '3.5s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-float" style={{ left: '70%', top: '80%', animationDelay: '1.5s', animationDuration: '4.5s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-float" style={{ left: '85%', top: '40%', animationDelay: '2s', animationDuration: '3.2s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-float" style={{ left: '60%', top: '10%', animationDelay: '2.5s', animationDuration: '4.2s' }}></div>
      </div>
    </footer>
  );
}