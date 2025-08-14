'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import React from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const navItems = [
    { name: '🏛 Home', href: '/', },
    { name: '📌 Skills', href: '/app/pages/skillspage.tsx', },
    { name: '📚 Projects', href: '/projects',},
    { name: '📢 About', href: '/about',  },
    // { name: 'Experience', href: '/experience' },
    { name: '📮 Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent/95 backdrop-blur-sm border-b border-gray-800 z-50 ">
     <nav className="max-w-7xl mx-auto px-6 lg:px-8  ">
        <div className="flex justify-between items-center h-14 ">
          <div className="hidden md:flex space-x-1 ">
            {/* logo of the website */}
            <Image
                src="/assets/cube.png"
                alt="Logo"
                width={52}
                height={52}
              />
          </div>

          <div className="hidden md:flex space-x-1 ">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 rounded-lg font-extrabold whitespace-nowrap cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  pathname === item.href
                    ? 'text-white bg-green-600 shadow-lg shadow-green-600/30'
                    : 'text-gray-300 hover:text-green-400 hover:bg-gray-800'
                } group`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-green-400 transition-all duration-300 transform -translate-x-1/2 ${
                  pathname === item.href ? 'w-0' : 'group-hover:w-3/4'
                }`}></span>
              </Link>

            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center cursor-pointer rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-110"
          >
            <i className={`text-xl text-gray-300 transition-all duration-300 ${
              isMenuOpen ? 'ri-close-line rotate-180' : 'ri-menu-line'
            }`}></i>
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-gray-700 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 rounded-lg font-medium cursor-pointer transition-all duration-300 transform hover:translate-x-2 ${
                  pathname === item.href
                    ? 'text-white bg-green-600 shadow-lg'
                    : 'text-gray-300 hover:text-green-400 hover:bg-gray-800'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
                  {item.name}

                </span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

