import React, { useState } from "react";
import Navbar from "./navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";

function App() {


  return (
    <div className="min-h-screen transition-colors duration-500 bg-[radial-gradient(circle_at_88.336%_74.5986%,_rgb(75,0,130),_rgb(45,58,129),_rgb(28,20,28))]">
      <Navbar />
      <Home/>
      <About/>
      <Education/>
      <Projects/>
      <Experience/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
