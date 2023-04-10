import React from 'react'

import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero2/Hero'
import Form from '../components/Form/Form'
import Footer from '../components/Footer/Footer'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero heading="CONTACT" text="Let's have a chat"/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact