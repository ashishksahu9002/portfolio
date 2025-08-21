import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'

const Home = () => {
  return (
    <div className='bg-gradient-to-br from-slate-100 to-slate-300 text-slate-800'>
      <Header />
      <main className="max-w-6xl mx-auto px-4 md:px-8" >
        <Hero />

      </main>
    </div>
  )
}

export default Home