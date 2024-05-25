import React, { useState } from "react";
import logo from "../assets/logos.png";
import "../componentCss/nav.css";
import intro from "../assets/burger-menu.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="image" />
      <div className="middle-link">
        <Link
          id="links"
          href="#about"
          activeClass="active"
          to="intro"
          spy={true}
          duration={500}
          smooth={true}
          offset={-50}
        >
          Home
        </Link>
        <Link
          id="links"
          activeClass="active"
          to="about"
          duration={500}
          span={true}
          smooth={true}
          offset={-100}
        >
          About
        </Link>
        <Link
          id="links"
          activeClass="active"
          to="works"
          duration={500}
          spy={true}
          smooth={true}
          offset={-70}
        >
          portfolio
        </Link>
        <Link
          id="links"
          activeClass="active"
          to="clients"
          duration={500}
          smooth={true}
          offset={-100}
        >
          Clients
        </Link>
      </div>
      <Link>
        <button
          id="but1"
          onClick={() => {
            document
              .getElementById("contact-form")
              .scrollIntoView({ behavior: "smooth", offset: "100" });
          }}
        >
          <i id="icon" className="fa-regular fa-message"></i>Contact me
        </button>
      </Link>


      <img src={intro} id="intro-img" onClick={()=> setMenu(!menu)}/>
      <div className="mobile-view" style={{display : menu? "flex": "none"}}>
        <Link
          id="nav-link"
          href="#about"
          activeClass="active"
          to="intro"
          spy={true}
          duration={500}
          smooth={true}
          offset={-50}
          onClick={ ()=> setMenu(false)}
        >
          Home
        </Link>
        <Link
          id="nav-link"
          activeClass="active"
          to="about"
          duration={500}
          span={true}
          smooth={true}
          offset={-100}
          onClick={ ()=> setMenu(false)}
        >
          About
        </Link>
        <Link
          id="nav-link"
          activeClass="active"
          to="works"
          duration={500}
          spy={true}
          smooth={true}
          offset={-100}
          onClick={ ()=> setMenu(false)}
        >
          portfolio
        </Link>
        <Link
          id="nav-link"
          activeClass="active"
          to="clients"
          duration={500}
          smooth={true}
          offset={-100}
          onClick={ ()=> setMenu(false)}
        >
          Clients
        </Link>
        <Link
          id="nav-link"
          activeClass="active"
          to="contact-form"
          duration={500}
          smooth={true}
          offset={-100}
          onClick={ ()=> setMenu(false)}
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
