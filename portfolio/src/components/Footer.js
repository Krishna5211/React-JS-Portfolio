import "./footerstyle.css"

import React from 'react'
import {FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk,FaPhone} from "react-icons/fa";

const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
           <div className="left">
            <div className="location">
                <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                <div>
                  <p>2A Townshend Road </p>
                  <p>Kolkata</p>
                </div>
            </div>
          
              <div className="phone">
             <h4> <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/> 
              7209390590</h4>
              </div>
              <div className="email">
             <h4> <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/> 
             krishnaagarwal1907@gmail.com </h4>
              </div>
            </div>
           <div className="right"> 
           <h4>Education</h4>
           <p>Heritage Institute Of Technology</p><br></br><p>7.6CGPA</p><br></br>
           <div className="social">
            <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}}/> 
            <FaGithub size={30} style={{color: "#fff", marginRight: "1rem"}}/> 
            <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}}/> 
            </div>
           </div>
        </div>
           </div>

  )
}

export default footer
