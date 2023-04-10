import "./Hero.css"

import React, { Component } from 'react'

class Hero extends Component {
    render() {
        return (
            <div className="heroP-img">
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default Hero