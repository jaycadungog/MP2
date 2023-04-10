import React from 'react'

import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero2/Hero'
import Footer from '../components/Footer/Footer'

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero heading="ABOUT" text="I'm a friendly Full Stack Developer"/>
      <Footer />
    </div>
  )
}

export default About