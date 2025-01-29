import React from 'react'

function About() {
  return (
    <div className='about-container p-8' id="about">
      <h1 className='text-5xl flex justify-center text-white about-section-title'>About me</h1>
      <div className="content-wrapper flex flex-col lg:flex-row justify-around items-center gap-10 m-10 lg:m-20">
        <p className="desc-text text-white italic text-xl lg:text-2xl text-center lg:text-left leading-relaxed max-w-lg">
          “ Hi there! I'm Mohamed, a passionate and disciplined Software Engineering student at ENSIAS.
          With a relentless curiosity and a drive to explore, I'm always eager to learn, grow, and embrace new challenges.
          Whether it's diving into innovative technologies or solving complex problems, I thrive on turning ideas into impactful solutions.
          Let's connect and create something amazing together! ”
        </p>
        <img
          src="src/348438397_263322922745401_6807140670139767489_n.jpg"
          alt="Profile of Mohamed"
          className="my-image w-60 h-60 lg:w-80 lg:h-80 rounded-full shadow-lg object-cover"
        />
      </div>

    </div>
  )
}

export default About
