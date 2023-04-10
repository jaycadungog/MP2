import "./Footer.css"

import React from 'react'

import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color: "var(--light)", marginRight: "2rem"  }}/>
                    <div>
                        <p>#25 Lorem, ipsum.</p>
                        <p>Lorem, ipsum dolor.</p>
                        <p>Philippines</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                    <FaPhone size={20} style={{ color: "var(--light)", marginRight: "2rem"  }}/>+63 995 654 9260
                    </h4>
                </div>
                <div className="email">
                    <h4>
                    <FaMailBulk size={20} style={{ color: "var(--light)", marginRight: "2rem"  }}/>normanpaulco@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <div>
                    <h4>About the company</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo exercitationem odio qui temporibus voluptatem eligendi atque fuga a fugiat dignissimos!
                    </p>
                </div>
                <div className="social">
                    <FaFacebook size={30} style={{ color: "var(--light)", marginRight: "2rem"  }}/>
                    <FaLinkedin size={30} style={{ color: "var(--light)", marginRight: "2rem"  }}/>
                    <FaGithub size={30} style={{ color: "var(--light)", marginRight: "2rem"  }}/>
                    <FaTwitter size={30} style={{ color: "var(--light)", marginRight: "2rem"  }}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer