import "./HeroImgstyle.css";
import React from 'react';
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
          <p>HI, I am Krishna Agarwal</p>
          <h1>PORTFOLIO</h1>
          <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-lightS">Contact</Link>
          </div>
        </div>
    </div>
  )
}

export default HeroImg
