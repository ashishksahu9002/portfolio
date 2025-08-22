import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {[
          {
            name: "DevHub",
            desc: "A developer community platform with chat, blogs, and resources.",
          },
          {
            name: "Portfolio Pro",
            desc: "Modern personal portfolio template.",
          },
          { name: "Taskly", desc: "Task management app with drag & drop." },
          { name: "Foodiez", desc: "Food delivery UI clone." },
        ].map((proj) => (
          <motion.div
            whileHover={{ x: 10 }}
            key={proj.name}
            className="p-6 bg-white/20 rounded-xl shadow-lg"
          >
            <h3 className="text-lg md:text-xl font-bold">{proj.name}</h3>
            <p className="mt-2 text-xs md:text-sm">{proj.desc}</p>
            <div className="flex gap-4 mt-4 text-sm md:text-base">
              <FaGithub className="cursor-pointer" />
              <FaExternalLinkAlt className="cursor-pointer" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
