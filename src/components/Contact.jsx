import React from "react";
import { useRef } from "react";
import "../componentCss/contact.css";
import img1 from "../assets/adobe.png";
import img2 from "../assets/fb.png";
import img3 from "../assets/walmart.png";
import img4 from "../assets/microsoft.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (event)=>{
    event.preventDefault();

    emailjs.sendForm("service_anjs0t2", "template_j8w0tra", form.current, {
      publicKey: "pxOYuXBBx_0mtuQjc",
    })
    .then(()=>{
      console.log("sent success")
      event.target.reset();
      alert("email sent");
    })
    .catch(()=>{
      console.log("failed")
    })
  }
  return (
    <section id="contact">
      <div className="clients">
        <h1 id="haed-client">My Clients</h1>
        <p id="client-disc">
          I have had the oppurtunity to work with a diverse group of companies
          some of the notable companies I have worked with include
        </p>
        <div className="com-image">
          <img src={img1} alt="" className="com-img" />
          <img src={img2} alt="" className="com-img" />
          <img src={img3} alt="" className="com-img" />
          <img src={img4} alt="" className="com-img" />
        </div>
      </div>

      <div id="contact-form">
        <h1>Contact Me</h1>
        <span id="cont-info"> Please fill out the form below to discuss any work oppornuities</span>
        <form ref={form} onSubmit={sendEmail}> 
          <input type="text" placeholder="Your Name" id="input1" name="user_name"/>
          <input type="email" placeholder="Your Email" id="input2" name="user_email"/>
          <textarea className="msg" placeholder="Your Message" rows="5" name="message"></textarea> <br />

          <button id="submit" type="submit" value="send">submit</button>

          <div className="slinks">

            <img src={icon1} alt="" id="icons" />
            <img src={icon2} alt="" id="icons" />
            <img src={icon3} alt="" id="icons" />
            <img src={icon4} alt="" id="icons" />
          </div>
        </form>

      </div>
    </section>
  );
};

export default Contact;
