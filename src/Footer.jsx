import React from 'react'

function Footer() {
  return (
    <div className='footer-container text-white border-t text-sm border-gray-600 flex justify-around items-center p-4 py-6 space-y-4 flex-wrap overflow-hidden'>
        <img src='src/Logo_name_prev_ui.png' className='w-30 h-20'/>
        <p>© 2025. All Rights Reserved</p>
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
