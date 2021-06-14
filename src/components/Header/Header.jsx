import React from 'react'
import "./header.css"
import logo from '../../images/logovl40px.svg';
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <Link to ="/"><img src={logo} alt="logo"/></Link>
          </div>
          {/* /* toggle bar */ }
          <div className="toggle-bar">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="navigation-bar">
            <ul>
              <li><Link to="/about">about</Link></li>
              <li><Link to="/services">services</Link></li>
              <li><Link to="/my-work">my work</Link></li>
              <li><Link to="/certifications">certifications</Link></li>
              <li className="contact-btn"><Link to="/contact">Contact me</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    </div>
  )
}
