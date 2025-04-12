import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';



function Home() {

  useEffect(() => {
    const homeAnimation = document.querySelectorAll('.fade-in-element');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.1 }); // triggers when 10% of the element is visible

    homeAnimation.forEach(element => {
      observer.observe(element);
    });

    return () => {
      homeAnimation.forEach(element => observer.unobserve(element));
    };
  }, []);
  const [upButton, setUpButton] = useState(false);

  useEffect(() => {
    const handleUpButton = () => {
      const homeHeight = document.querySelector('.home-container')?.offsetHeight || 0;

      if (window.scrollY > homeHeight) {
        setUpButton(true);
      } else {
        setUpButton(false);
      }
    };

    handleUpButton(); // Initialize on page load

    window.addEventListener('scroll', handleUpButton);

    return () => {
      window.removeEventListener('scroll', handleUpButton);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    // Replace with the actual path to your CV file
    const cvUrl = '/path/to/your-cv.pdf'; // or your-cv.docx depending on the format
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Mohammed_Cheikhi_CV.pdf'; // The filename you want users to see
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="home-container flex flex-col md:flex-row justify-between items-center p-8 m-10" id="home">
        <div className="text-container fade-in-element">
          <h3 className="text-4xl text-white starting-text mb-4">Hello, I'm</h3>
          <h1 className="static-text text-white text-6xl sm:text-center">Mohammed Cheikhi</h1>
          <div className="dynamic-text text-2xl text-teal-400">
            <Typewriter
              options={{
                strings: [
                  'FullStack Developer',
                  'Data Scientist',
                  'Engineering Student',
                  'Volleyball Player',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </div>
          <div className="flex justify-start items-center gap-5 mt-5 fade-in-element">
            <a href="#contact">
              <button className="getintouchbtn">Get in Touch</button>
            </a>
            <a href="">
              <button className="downloadCvBtn" onClick={handleDownloadCV}>Download CV</button>
            </a>
          </div>
          <div className='justify-between items-center py-8'>
            <a className='text-indigo-800' href='mailto:cheikhimohamed51@gmail.com'>
              <i class="fa-solid fa-envelope fa-2xl pr-3 gmail-font"></i>
            </a>
        
            <a className="text-indigo-800" href="https://github.com/cheikhi51">
              <i className="fa-brands fa-github fa-2xl pr-3 githubfont"></i>
            </a>
            <a className="text-indigo-800" href="https://www.linkedin.com/in/mohammed-cheikhi-a48255281/">
              <i className="fa-brands fa-linkedin fa-2xl linkedinfont"></i>
            </a>
            </div>
        </div>
        <img src="src/side_image_prev_ui.png" className="side-image w-85 pr-0.5 h-90" alt="Side" />
      </div>

      {/* Scroll-To-Top Button */}
      {upButton && (
        <button
          className="up-button fixed bottom-10 right-10 bg-blue-500 text-white p-3 rounded-full shadow-2xl hover:bg-blue-600 transition-all"
          onClick={scrollToTop}
        >
          <i className="fa-solid fa-circle-chevron-up fa-xl"></i>
        </button>
      )}
    </>
  );
}

export default Home;
