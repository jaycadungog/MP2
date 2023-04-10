import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import MoviesApi from '../components/MoviesApi/MoviesApi'
import Footer from '../components/Footer/Footer'

const Api = () => {
  return (
    <div>
        <Navbar />
        <MoviesApi />
        <Footer />
    </div> 
  )
}

export default Api