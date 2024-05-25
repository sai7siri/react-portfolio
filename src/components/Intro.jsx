import React from "react";
import introImg from "../assets/intropic.png";
import "../componentCss/intro.css";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section className="intro">
      <div id="intro-content">
        <span id="hello">Hello,</span>
        <span id="p2">
          I'm <span id="sai">Sai</span>
        </span>
        <span id="p3">Website Designer</span>
        <p id="p4">
          I am a skilled and passionate web designer with experience in creating
          visually appealing and user-friendly websites
        </p>

        <Link>
          <button id="but2">
            <i id="briefcase" className="fa-solid fa-briefcase"></i>Hire me
          </button>
        </Link>
        
      </div>
      <img id="img" src={introImg} alt="" />
      
    </section>
  );
};

export default Intro;
