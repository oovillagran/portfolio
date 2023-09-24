import React, { useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
// import '@tailwindcss/forms';
import { useDarkMode } from '../DarkModeContext';
import Link from 'next/link';

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openMobileMenu = () => {
    setMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  }

  return (
    <div className={`sticky-navbar border-b-0 shadow-md bg-white z-50 w-full px-10 ${darkMode ? 'dark' : ''}`}>
      {/* ... (Head and other content) */}
      <header className="bg-white dark:bg-gray-900 w-full">
        <nav className="py-5 flex-row justify-between">
          <div className='justify-between w-full mx-auto md:items-center md:flex md:px-0'>
            <div className='md:flex items-center w-full'>
              <div className='flex justify-between py-3 md:py-5 md:w-full'>
                <h1 className="text-2xl px-5 font-burtons dark:text-teal-500 transition-transform transform hover:scale-110 mx-4">
                  <a href="/">alfa&omega</a>
                </h1>
                <div className='flex'>
                  <BsFillMoonStarsFill
                    onClick={() => toggleDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl dark:text-teal-500 hover:text-teal-600 transition-transform transform hover:scale-110"
                  />
                  <div className="md:hidden">
                    {/* Hamburger menu button */}
                    <button
                      onClick={mobileMenuOpen ? closeMobileMenu : openMobileMenu}
                      className="px-5 text-lg dark:text-gray-200"
                    >
                      <span className={`block dark:text-gray-200 h-1 w-6 bg-cyan-500 mb-1 ${mobileMenuOpen ? 'transform rotate-45 translate-y-1' : ''}`}></span>
                      <span className={`block dark:text-gray-200 h-1 w-6 bg-teal-500 mb-1 ${mobileMenuOpen ? 'hidden' : ''}`}></span>
                      <span className={`block dark:text-gray-200 h-1 w-6 bg-teal-700 ${mobileMenuOpen ? 'transform -rotate-45 -translate-y-1' : ''}`}></span>
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${mobileMenuOpen ? 'md:p-0 block' : 'hidden'}`}
              >
                <ul className='bg-white h-screen md:h-auto items-center justify-center md:flex'>
                  <li className="pb-6 md:pb-0 text-center transition-transform transform hover:scale-105 md:hover:bg-transparent">
                    <Link
                      className="hover:bg-teal-500 md:bg-gradient-to-r from-cyan-500 to-teal-500 md:text-white text-teal-700 md:font-normal font-bold text-2xl md:text-base px-4 py-2 rounded-md ml-8 hover:text-white md:hover:text-gray-800"
                      href="/#home"
                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="pb-6 md:pb-0 text-center transition-transform transform hover:scale-105 md:hover:bg-transparent">
                    <Link
                      className="hover:bg-teal-500 md:bg-gradient-to-r from-cyan-500 to-teal-500 md:text-white text-teal-700 md:font-normal font-bold text-2xl md:text-base px-4 py-2 rounded-md ml-8 hover:text-white md:hover:text-gray-800"
                      href="/#portfolio"
                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li className="pb-6 md:pb-0 text-center transition-transform transform hover:scale-105 md:hover:bg-transparent">
                    <Link
                      className="hover:bg-teal-500 md:bg-gradient-to-r from-cyan-500 to-teal-500 md:text-white text-teal-700 md:font-normal font-bold text-2xl md:text-base px-4 py-2 rounded-md ml-8 hover:text-white md:hover:text-gray-800"
                      href="/#about"
                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                      About
                    </Link>
                  </li>
                  <li className="md:pr-10 pb-6 md:pb-0 text-center transition-transform transform hover:scale-105 md:hover:bg-transparent">
                    <Link
                      className="hover:bg-teal-500 md:bg-gradient-to-r from-cyan-500 to-teal-500 md:text-white text-teal-700 md:font-normal font-bold text-2xl md:text-base px-4 py-2 rounded-md ml-8 hover:text-white md:hover:text-gray-800"
                      href="/#contact"
                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
