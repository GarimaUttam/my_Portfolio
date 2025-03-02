import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Services from './Services/Services'
import Project from './Project/Project'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <Services />
      <Project />
      </div>
  )
}

export default Home