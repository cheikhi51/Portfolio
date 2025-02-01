import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject !== null) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [selectedProject]);

  const projects = [
    {
      title: "KPI Performance",
      description: "A System that performs an implementation of performance indicators for an industrial group.",
      imgSrc: "src/statistics-svgrepo-com.svg",
      details : "I used Reactjs to develope the frontend,Spring Boot for the backend and MySql database to organize and manage the database operations",
    },
    {
      title: "Freights Transport Management",
      description: "A system that organizes and manages the freights transport process across the country.",
      imgSrc: "src/transport-truck-svgrepo-com.svg",
      details : "In this project i worked with the JEE(Java Entreprise Edition) technologie to develop the backend and MySql database to manipulate Our database.For the frontend i used Simple Html , Css and javascript. ",
    },
    {
      title: "Donation Management Platform",
      description: "Donation management platform that allows people to donate money to organizations.",
      imgSrc: "src/make-a-donation-svgrepo-com.svg",
      details : "For the Donation management Platform i worked with php MVC in the backend and html , css and javascript for the frontend.Also Mysql for the database manipulation.",
    },
    {
      title: "Anti-theft System",
      description: "An anti-theft system that pretends that there is someone in the home.",
      imgSrc: "src/security-svgrepo-com.svg",
      details : "In this project i build an IOT system using Arduino , RIP Sensor , Micro-Motor, and a SIM card that allows me to send or call the owner of the house.",
    },
  ];

  const handleOpenModal = (index) => {
    setSelectedProject(index);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="project-container py-16 px-8 text-white" id="projects">
      <h1 className="text-5xl flex justify-center text-white mb-12 projects-section-title fade-in-element">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card bg-gradient-to-r from-purple-800 to-indigo-900 rounded-2xl shadow-xl p-8 text-center relative overflow-hidden fade-in-element"
            whileHover={{ scale: 1.05 }}
          >
            <div className="icon-container flex justify-center mb-6">
              <img src={project.imgSrc} alt={project.title} className="w-20 h-20 object-contain" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
            <p className="text-gray-300 mb-6">{project.description}</p>
            <button
              onClick={() => handleOpenModal(index)}
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full font-medium transition-transform transform hover:scale-105 cursor-pointer"
            >
              Learn More »
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal with Animation */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
            initial={{ opacity: 0 }} // Start with opacity 0
            animate={{ opacity: 1 }} // Animate to full opacity
            exit={{ opacity: 0 }} // Fade out on exit
            transition={{ duration: 0.3 }} // Animation duration
          >
            <motion.div
              className="bg-white p-6 rounded-lg max-w-lg text-black relative modal-wrapper"
              initial={{ scale: 0.8, opacity: 0 }} // Start small and invisible
              animate={{ scale: 1, opacity: 1 }} // Grow and fade in
              exit={{ scale: 0.8, opacity: 0 }} // Shrink and fade out
              transition={{ duration: 0.3 }} // Animation duration
            >
              <h2 className="text-2xl font-semibold">{projects[selectedProject].title}</h2>
              <hr className="my-2 border-dashed" />
              <p>{projects[selectedProject].description}</p>
              <h3 className="text-black text-2xl my-2">Technologies used:</h3>
              <p>{projects[selectedProject].details}</p>
              <button
                onClick={handleCloseModal}
                className="mt-4 hover:bg-red-500 transition-colors text-white px-4 py-2 absolute top-0 right-2 rounded-4xl cursor-pointer"
              >
                ❌
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Projects;
