import React from 'react'
import "./header.scss"
import logo from '../../images/logovl40px.svg';
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <Link to ="/"><a><img src={logo} /></a></Link>
          </div>
          {/* /* toggle bar */ }
          <div className="toggle-bar">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="navigation-bar">
            <ul>
              <li><a><Link to="/about">about</Link></a></li>
                <li><a><Link to="/services">services</Link></a></li>
                <li><a><Link to="/my-work">my work</Link></a></li>
                <li><a><Link to="/certifications">certifications</Link></a></li>
                <li className="contact-btn"><Link to="/contact">Contact me</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    </div>
  )
}
