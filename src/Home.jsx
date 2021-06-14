import React from 'react';
import avatar from "./images/avatar.png";
import arrow from "./images/arrow-right.svg";
import "./home.css";
import {Link} from "react-router-dom";

function Home() {
  return (
    <div className="main-content-wrapper">
      <div className="col-left">
        <span>Hi ! I am Virginie Lenoir</span>
        <h1>Web Developer | UI/UX Designer</h1>
        <p>Currently based in Geneva, I am a french web developer with a preference for Frontend development and UI/UX Design.            </p>
        <Link to="my-work" className="btn-main">
          See my work
          <span> <img src={arrow} alt="arrow"/></span>
        </Link>
        </div>
        <div className="col-right">
        <img src={avatar} alt="avatar" id="avatar"/>
      </div>
    </div>
  );
}
export default Home;