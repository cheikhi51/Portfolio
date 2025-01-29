import React from 'react'
import { useEffect } from 'react';
function Education() {
  useEffect(() => {
      const educationAnimation = document.querySelectorAll('.popup-in-element');
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('popup-in');
          }
        });
      }, { threshold: 0.1 }); // triggers when 10% of the element is visible
  
      educationAnimation.forEach(element => {
        observer.observe(element);
      });
  
      return () => {
        educationAnimation.forEach(element => observer.unobserve(element));
      };
    }, []);
  return (
    <div className='education-container p-8' id='education'>
  <h1 className="text-5xl flex justify-center text-white mb-16 education-section-title fade-in-element">Education</h1>
  <div className="card-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Card 1 */}
    <div className="card relative flex flex-col items-center text-center p-6 rounded-lg bg-white hover:text-white shadow-md transition-all duration-300 hover:bg-gradient-to-r from-blueviolet to-teal popup-in-element">
    <h5 className='absolute font-medium top-2 right-2 shadow-xl rounded-2xl border-2 border-indigo-600 p-1.5 '>2018-2021</h5>
    <img src='src/surveillance-defense-svgrepo-com.svg' alt="icon" className="w-30 h-20" />
      <h3 className="card-title mt-6 font-bold text-lg text-gray-800 hover:text-white">
        MOULAY ISMAIL HIGH SCHOOL
      </h3>
      <p className="card-description mt-4 text-gray-500 hover:text-white">
        During my high school years, I majored in electrical and science technologies and earned my baccalaureate certificate as an electrical technologies graduate.
      </p>
    </div>
    {/* card 2 */}
    <div className="card relative flex flex-col items-center text-center p-6 rounded-lg hover:text-white bg-white shadow-md transition-all duration-300 hover:bg-gradient-to-r from-blueviolet to-teal popup-in-element">
      <h5 className='absolute font-medium top-2 right-2 shadow-xl rounded-2xl border-2 border-indigo-600 p-1.5'>2021-2023</h5>
      <img src="src\host-record-svgrepo-com.svg" className='w-30 h-20'/>
      <h3 className="card-title mt-6 font-bold text-lg text-gray-800 hover:text-white">
        TECHNICAL HIGH SCHOOL MOHAMMADIA (CPGE)
      </h3>
      <p className="card-description mt-4 text-gray-500 hover:text-white">
        I then enrolled in the Preparatory Classes at Mohammadia High School, where I pursued a major in TSI (Technologie et Sciences de l'Ingénieur) and obtained my diploma after two years. 
      </p>
    </div>
    {/* card 3*/}
    <div className="card relative flex flex-col items-center text-center p-6 rounded-lg hover:text-white bg-white shadow-md transition-all duration-300 hover:bg-gradient-to-r from-blueviolet to-teal popup-in-element">
      <h5 className='absolute font-medium top-2 right-2 shadow-xl rounded-2xl border-2 border-indigo-600 p-1.5'>2023-2026</h5>
      <img src='src/availability-svgrepo-com.svg' className='w-30 h-20'/>
      <h3 className="card-title mt-6 font-bold text-lg text-gray-800 hover:text-white">
        ENSIAS
      </h3>
      <p className="card-description mt-4 text-gray-500 hover:text-white">
        After that, I began studying software engineering at ENSIAS, specializing in Data Science and IoT Engineering.
      </p>
    </div>
  </div>
</div>

  )
}

export default Education
