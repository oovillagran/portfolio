import React, { useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import '@tailwindcss/forms';
import { useDarkMode } from './DarkModeContext';

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      {/* ... (Head and other content) */}
      <header className="bg-white px-10 md:px-20 lg:px-25 dark:bg-gray-900">
        <nav className="py-10 mb-10 flex justify-between">
          <h1 className="text-xl font-burtons dark:text-gray-200 transition-transform transform hover:scale-110">
            <a href="/">alfa&omega</a>
          </h1>
          <div className='flex'>
            <BsFillMoonStarsFill
              onClick={() => toggleDarkMode(!darkMode)}
              className="cursor-pointer text-2xl dark:text-gray-200 hover:text-teal-600 transition-transform transform hover:scale-110"
            />
            <div className="md:hidden">
              {/* Hamburger menu button */}
              <button
                onClick={toggleMobileMenu}
                className="text-gray-800 px-5 text-lg dark:text-gray-200"
              >
                ☰
              </button>
            </div>
            <ul
              className={`${
                mobileMenuOpen ? 'block' : 'hidden'
              } md:flex md:items-center`}
            >
              <li className="transition-transform transform hover:scale-105">
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 hover:text-gray-800"
                  href="#"
                >
                  Portfolio
                </a>
              </li>
              <li className="transition-transform transform hover:scale-105">
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 hover:text-gray-800"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className="transition-transform transform hover:scale-105">
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 hover:text-gray-800"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
