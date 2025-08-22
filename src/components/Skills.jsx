import React from "react";
import { motion } from "framer-motion";
import skillData from "../dataJsons/skills.json";

const Skills = () => {
  return (
    <section id="skills" className="py-16 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-5xl mx-auto">
        {skillData.skills.map((skill) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            key={skill}
            className="p-4 md:p-6 bg-white/20 rounded-xl shadow-lg text-sm md:text-base"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
