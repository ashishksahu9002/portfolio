import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className='bg-gradient-to-br from-slate-100 to-slate-300 text-slate-800'>
      <Header />
      <main className="max-w-6xl mx-auto px-4 md:px-8" >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}

export default Home