import React from 'react';
import App from "./App";
import avatar from "./images/avatar.png";
import arrow from "./images/arrow-right.svg";
import "./home.css";

function Home() {
  return (
    <div className="main-content-wrapper">
      <div className="col-left">
        <span>Hi ! I am Virginie Lenoir</span>
        <h1>Web Developer | UI/UX Designer</h1>
        <p>Currently based in Geneva, I am a french web developer with a preference for Frontend development and UI/UX Design.            </p>
        <a href="#" className="btn-main">
          See my work
            <span> <img src={arrow} alt="arrow"/></span>
          </a>
        </div>
        <div className="col-right">
        <img src={avatar} alt="avatar image" id="avatar"/>
      </div>
    </div>
  );
}
export default Home;