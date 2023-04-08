import React from 'react'
import './Signup.css'

import Crypto from '../assets/trade.png'

const Signup = () => {
  return (
    <div className='signup'>
        <div className='container'>
            {/*left*/}
            <div className='left'>
                <img src={Crypto} alt=''/>
            </div>

            {/*right*/}
             <div className='right'>
                <h2>Buy and sell crypto in minutes</h2>
                <p>Sign up today to easily buy 200+ cryptocurrencies. Get started in minutes with as little as $10.</p>
                <div className='input-container'>
                    <button className='btn'>Enter your email</button>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Signup