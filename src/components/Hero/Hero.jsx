import "./Hero.css"

import React from 'react'

import HeroImg from "../../assets/hero.jpg"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="hero-img" src={HeroImg} alt="HeroImg" />
        </div>
        <div className="content">
            <h1>Unlimited movies, TV shows, and more</h1>
            <p>Watch anywhere</p>
            <div>
                <Link to="/signUp" className="btn">sign up</Link>
                <Link to="/login" className="btn btn-light">login</Link>
            </div>
        </div>
    </div>
  )
}

export default Hero