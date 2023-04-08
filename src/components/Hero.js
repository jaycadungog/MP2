import React from 'react'
import './Hero.css'
import Crypto from '../assets/hero-img.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='container'>
          
          {/*left Side */}
          <div className='left'>
               <p>SECURELY BUY, SELL, STORE, SEND and TRACK</p>
               <h1>BUY CRYPTO AT TRUE COST</h1>
               <p>Trade with confidence on the world's fastest and most secure crypto exchange</p>
               <div className='input-container'>
                   <input type='email' placeholder='Enter your email'/>
                   <button className='btn'>Learn More</button>
               </div>
          </div>


          {/*right Side */}
          <div className='right'>
              <div className='img-container'>
                  <img src={Crypto} alt=''/>
              </div>

          </div>
        </div>
    </div>
  )
}

export default Hero