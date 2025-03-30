import React from 'react'

function Experience() {
  return (
    <div className='experience-container text-white' id='experience'>
      <h1 className="text-5xl flex justify-center my-20 experience-section-title fade-in-element">Experience</h1>
      <div className='timeline fade-in-element'>
      <div className='exp-container right-container '>
        <img src='src/isicod.jpg' className='company-image absolute w-14 h-14 -left-7 top-10 rounded-4xl p-2 fade-in-element'></img>
        <div className='text-box fade-in-element shadow-2xl'>
        <h2 className='company-name'>ISICOD</h2>
        <small>2023-2024</small>
        <p>Summer internship </p>
        <span className='left-arrow '><i class="fa-solid fa-caret-left"></i></span>
        </div>
      </div>
      <div className='exp-container left-container'>
      <img src='src/isicod.jpg' className='company-image absolute w-14 h-14 -right-7 top-10 rounded-4xl p-2 fade-in-element'></img>
        <div className='text-box fade-in-element shadow-2xl'>
        <h2 className='company-name'>Company name</h2>
        <small>2020-2022</small>
        <p>this is the paragraph for the company name </p>
        <span className='right-arrow '><i class="fa-solid fa-caret-right"></i></span>
        </div>
      </div>
      <div className='exp-container right-container '>
      <img src='src/isicod.jpg' className='company-image absolute w-14 h-14 -left-7 top-10 rounded-4xl p-2 fade-in-element'></img>
        <div className='text-box fade-in-element shadow-2xl'>
        <h2 className='company-name'>Company name</h2>
        <small>2020-2022</small>
        <p>this is the paragraph for the company name </p>
        <span className='left-arrow '><i class="fa-solid fa-caret-left"></i></span>
        </div>
      </div>
      <div className='exp-container left-container '>
      <img src='src/isicod.jpg' className='company-image absolute w-14 h-14 -right-7 top-10 rounded-4xl p-2 fade-in-element'></img>
        <div className='text-box  fade-in-element shadow-2xl'>
        <h2 className='company-name'>Company name</h2>
        <small>2020-2022</small>
        <p>this is the paragraph for the company name </p>
        <span className='right-arrow '><i class="fa-solid fa-caret-right"></i></span>
        </div>
      </div>
      <div className='exp-container right-container '>
      <img src='src/isicod.jpg' className='company-image absolute w-14 h-14 -left-7 top-10 rounded-4xl p-2 fade-in-element'></img>
        <div className='text-box fade-in-element shadow-2xl'>
        <h2 className='company-name'>Company name</h2>
        <small>2020-2022</small>
        <p>this is the paragraph for the company name </p>
        <span className='left-arrow '><i class="fa-solid fa-caret-left"></i></span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Experience
