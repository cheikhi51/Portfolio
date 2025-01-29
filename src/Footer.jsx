import React from 'react'

function Footer() {
  return (
    <div className='footer-container text-white border-t text-sm border-gray-600 flex justify-around items-center p-4 py-6 space-y-4 flex-wrap overflow-hidden'>
        <p className='text-xl'>© 2025. All Rights Reserved</p>
        <div className='quik-links flex justify-between items-center'>
        <a href="#home" className="block md:inline hover:text-gray-300 transition text-lg nav-item mr-5">
          Home
        </a>
        <a href="#about" className="block md:inline hover:text-gray-300 transition text-lg nav-item mr-5">
          About
        </a>
        <a href="#education" className="block md:inline hover:text-gray-300 transition text-lg nav-item mr-5">
          Education
        </a>
        <a href="#projects" className="block md:inline hover:text-gray-300 transition text-lg nav-item mr-5">
          Projects
        </a>
        <a href="#skills" className="block md:inline hover:text-gray-300 transition text-lg nav-item mr-5">
          Skills
        </a>
        <a href="#contact" className="block md:inline hover:text-gray-300 transition text-lg nav-item mr-5">
          Contact
        </a>
        </div>
        <div className='fonts mb-5'>
        <a className='font' href='https://web.facebook.com/mohamed.cheikhi.167'><i className="fa-brands fa-facebook fa-xl pr-3 i-font"></i></a>
        <a className='font' href='https://www.instagram.com/mohamed_cheikhi/'><i className="fa-brands fa-instagram fa-xl pr-3 i-font"></i></a>
        <a className='font' href='https://github.com/cheikhi51'><i className="fa-brands fa-github fa-xl pr-3 i-font"></i></a>
        <a className='font' href='https://www.linkedin.com/in/mohammed-cheikhi-a48255281/'><i className="fa-brands fa-linkedin fa-xl pr-3 i-font"></i></a>
        </div>
    </div>
  )
}

export default Footer
