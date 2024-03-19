import { Link } from "react-router-dom"
import "./AboutContentstyle.css"

import React from 'react'
import MyPhoto from "../assets/myphoto.jpg"
import FullStack from "../assets/full-stack.jpg"
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1> Who am I?</h1>
            <p> I am a full Stack Developer.</p>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
        </div>
      <div className="right">
        <div className="img-container">
           <div className="img-stack top">
            <img src={MyPhoto} className="img" alt="true"/>
            </div>
            <div className="img-stack bottom">
            <img src={FullStack} className="img" alt="true"/>
              
           </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
