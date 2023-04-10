import React from 'react'

import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero2/Hero'
import Work from '../components/Work/Work'
import PricingCard from '../components/PricingCard/PricingCard'
import Footer from '../components/Footer/Footer'

const Project = () => {
  return (
    <div>
      <Navbar />
      <Hero heading="PROJECTS" text="Some of my recent works"/>
      <Work />
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Project