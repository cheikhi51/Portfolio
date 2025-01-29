import React, { useState } from "react";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "KPI Performance",
      description: "A System that Performe an implementation of performance indicators for an industrial group.",
      imgSrc: "src/statistics-svgrepo-com.svg",
    },
    {
      title: "freights transport management",
      description: "A system that organize and manage the freights transport process across the country.",
      imgSrc: "src/transport-truck-svgrepo-com.svg",
    },
    {
      title: "Donation management platform",
      description: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
      imgSrc: "src/make-a-donation-svgrepo-com.svg",
    },
    {
      title: "Anti-theft system",
      description: "an anti-theft system that pretends that there is someone in the home.",
      imgSrc: "src/security-svgrepo-com.svg",
    },
  ];

  return (
    <div className="project-container  py-16 px-8 text-white" id="projects">
      <h1 className="text-5xl flex justify-center text-white mb-12 projects-section-title">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card bg-gradient-to-r from-purple-800 to-indigo-900 rounded-2xl shadow-xl p-8 text-center relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <div className="icon-container flex justify-center mb-6">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-20 h-20 object-contain"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
            <p className="text-gray-300 mb-6">{project.description}</p>
            <a
              href="#"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full font-medium transition-transform transform hover:scale-105"
            >
              Learn More
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
