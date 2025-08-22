import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import themeData from "../dataJsons/themes.json";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { themes } = useTheme();
  const { lightDarkTheme, paletteTheme } = themes;
  const { themeClasses } = themeData;

  return (
    <div className={lightDarkTheme ? "bg-slate-900 text-white" : themeClasses[paletteTheme]}>
      <Header />
      <main className="max-w-6xl mx-auto px-4 md:px-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
