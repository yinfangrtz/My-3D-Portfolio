import React from "react";

import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-8">
        <h2 className={`${styles.sectionHeadText} text-center pb-10`}>
          Selected Work
        </h2>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="mt-8 mb-8 relative overflow-hidden"
          >
            <div className="md:flex mb-2 md:justify-between">
              <p className="text-center text-black text-[18px] md:text-left">
                {project.name}
              </p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-black text-[18px] md:text-right cursor-pointer hover:text-primary"
              >
                View GitHub Repository
              </a>
            </div>
            <a
              href={project.weblink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <div className="relative">
                <img
                  src={project.projectImage}
                  alt={`project-${index}`}
                  className="w-full object-cover rounded-3xl border border-gray-300 shadow-lg cursor-pointer transition-transform transform-gpu hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 bg-white bg-opacity-30 hover:opacity-100">
                  <button className="bg-black text-white py-12 px-12 rounded-full text-[18px] ">
                    View Case
                  </button>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Project, "work");