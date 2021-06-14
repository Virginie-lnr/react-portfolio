import React from 'react';
import avatar from "./images/avatar.png";
import arrow from "./images/arrow-right.svg";
import {Link} from "react-router-dom";

function About() {
  return (
    <div className="main-content-wrapper">
      <div className="col-left">
        <h2>About me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia ipsa quas eos et porro suscipit nemo, voluptatem pariatur eligendi laudantium quia nulla minus maiores ad, explicabo, autem hic dolore? Repudiandae! </p>
        <Link to="my-work"className="btn-main">
          See my work
            <span> <img src={arrow} alt="arrow" /></span>
        </Link>
      </div>
      <div className="col-right">
        <img src={avatar} alt="avatar" id="avatar" />
      </div>
    </div>
  );
}
export default About;