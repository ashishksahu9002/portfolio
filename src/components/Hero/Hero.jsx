import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row justify-center items-center min-h-screen gap-8"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center"
      >
        <div className="w-48 h-48 mt-20 md:mt-0 md:w-64 md:h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 text-center md:text-left"
      >
        <h2 className="text-3xl md:text-4xl font-bold">Hi, I'm Ashish</h2>
        <p className="mt-4 text-base md:text-lg">
          🚀 Frontend Engineer | React
          <br />
          Building immersive, modern web experiences with clean UI + animations.
        </p>
        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          <button
            className="px-4 py-2 bg-purple-600 text-white rounded-xl"
            onClick={() =>
              window.open(`${import.meta.env.BASE_URL}resume.pdf`, "_blank")
            }
          >
            Download Resume
          </button>
          <button
            className="px-4 py-2 bg-pink-500 text-white rounded-xl"
            onClick={handleScrollToContact}
          >
            Let’s Connect
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
