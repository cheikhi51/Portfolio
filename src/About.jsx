import React, { useEffect } from 'react';

function About() {
  useEffect(() => {
    const elements = document.querySelectorAll('.slide-in-right-element');
    const interestElements = document.querySelectorAll('.interest-item');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in-right');
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% visible

    elements.forEach(element => observer.observe(element));
    
    // Observer for interest items with staggered delay
    interestElements.forEach((element, index) => {
      observer.observe(element);
      element.style.animationDelay = `${index * 0.1}s`;
    });

    return () => {
      elements.forEach(element => observer.unobserve(element));
      interestElements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <div className='about-container p-8' id="about">
      <h1 className='text-5xl flex justify-center text-white about-section-title fade-in-element'>
        About me
      </h1>
      <div className="content-wrapper flex flex-col lg:flex-row justify-around items-center gap-10 m-10 lg:m-20">
        <p className="desc-text text-white italic text-xl lg:text-2xl text-center lg:text-left leading-relaxed max-w-lg slide-in-right-element">
          “ Hi there! I'm Mohamed, a passionate and disciplined Software Engineering student at ENSIAS.
          With a relentless curiosity and a drive to explore, I'm always eager to learn, grow, and embrace new challenges.
          Whether it's diving into innovative technologies or solving complex problems, I thrive on turning ideas into impactful solutions.
          Let's connect and create something amazing together! ”
        </p>
        <img
          src="src/348438397_263322922745401_6807140670139767489_n.jpg"
          alt="Profile of Mohamed"
          className="my-image w-60 h-60 lg:w-80 lg:h-80 rounded-full shadow-lg object-cover slide-in-right-element"
        />
      </div>
    </div>
  );
}

export default About;