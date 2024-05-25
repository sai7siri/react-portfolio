import React from 'react';
import "../componentCss/work.css";
import work1 from "../assets/work1.png"
import work2 from "../assets/work2.png"
import work3 from "../assets/work3.png"
import work4 from "../assets/work4.png"
import work5 from "../assets/work5.png"
import work6 from "../assets/work6.png"

const Works = () => {
  return (
    <section id='works'>
      <h1>My portfolio</h1>
      <p id='work-text'>i take pride in paying attention to the smallest detail and making sure that my work is pixel perfect. Iam excited to bring my skills and experience to help business achieve their goals and create a strong online presence</p>
      <div className="all-imgage">
         <img src={work1} alt="" className="images" />
         <img src= {work2} alt="" className="images" />
         <img src= {work3} alt="" className="images" />
         <img src= {work4} alt="" className="images" />
         <img src= {work5} alt="" className="images" />
         <img src= {work6} alt="" className="images" />
      </div>

      <button>See More</button>
    </section>
  )
}

export default Works