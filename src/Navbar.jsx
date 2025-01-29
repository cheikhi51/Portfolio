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
            <span role="img" aria-label="close">❌</span>
          ) : (
            <span role="img" aria-label="menu" className="text-white">☰</span>
          )}
        </button>
      </div>

      {/* Nav Links */}
      <div
  className={`nav-links ${
    isMenuOpen ? "block" : "hidden"
  } md:flex justify-end md:space-x-6 text-sm sm:flex sm:justify-end font-medium absolute md:static top-26 right-0 w-full backdrop-blur-md bg-gray-800/70 dark:bg-gray-900/80 md:bg-transparent md:dark:bg-transparent md:p-0 p-4 shadow-md md:shadow-none`}
>
  <a href="#home" className="block md:inline hover:text-gray-300 transition text-lg nav-item  justify-end">
    Home
  </a>
  <a href="#about" className="block md:inline hover:text-gray-300 transition text-lg nav-item">
    About
  </a>
  <a href="#education" className="block md:inline hover:text-gray-300 transition text-lg nav-item">
    Education
  </a>
  <a href="#projects" className="block md:inline hover:text-gray-300 transition text-lg nav-item">
    Projects
  </a>
  <a href="#skills" className="block md:inline hover:text-gray-300 transition text-lg nav-item">
    Skills
  </a>
  <a href="#contact" className="block md:inline hover:text-gray-300 transition text-lg nav-item">
    Contact
  </a>
</div>

    </div>
  );
}

export default Navbar;
