import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={'navbar-container text-white flex items-center justify-between px-6 py-4 transition-colors'}>
      {/* Logo */}
      <div className="logo">
        <img src="src/logo_name_prev_ui.png" className="w-50 h-20" alt="Logo" />
      </div>

      {/* Hamburger Menu (visible on small screens) */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-700 dark:text-white p-2 rounded-md focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <span role="img" aria-label="close" className="close-toggle">❌</span>
          ) : (
            <span role="img" aria-label="menu" className="text-white">☰</span>
          )}
        </button>
      </div>

      {/* Nav Links */}
      <div
  className={`nav-links ${
    isMenuOpen ? "block" : "hidden"
  } md:flex justify-end md:space-x-6 text-sm sm:flex sm:justify-end sm:items-center absolute font-medium sm:relative md:static top-26 right-0 w-full sm:backdrop-blur`}
>
  <a href="#home" className="block hover:text-gray-300 transition text-lg nav-item">
    Home
  </a>
  <a href="#about" className="block hover:text-gray-300 transition text-lg nav-item">
    About
  </a>
  <a href="#interest" className="block hover:text-gray-300 transition text-lg nav-item">
    Interests
  </a>
  <a href="#education" className="block hover:text-gray-300 transition text-lg nav-item">
    Education
  </a>
  <a href="#projects" className="block hover:text-gray-300 transition text-lg nav-item">
    Projects
  </a>
  <a href="#experience" className="block hover:text-gray-300 transition text-lg nav-item">
    Experience
  </a>
  <a href="#skills" className="block hover:text-gray-300 transition text-lg nav-item">
    Skills
  </a>
  <a href="#contact" className="block hover:text-gray-300 transition text-lg nav-item">
    Contact
  </a>
</div>

    </div>
  );
}

export default Navbar;
