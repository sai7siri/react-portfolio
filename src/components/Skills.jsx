import React from "react";
import ".././componentCss/skill.css";
import log1 from "../assets/ui&ux.png";
import log2 from "../assets/website.png";
import log3 from "../assets/appdesign.png";

const Skills = () => {
  return (
    <section className="about">
      <span>
        <h2>What I do</h2>
      </span>
      <span id="p1">
        iam skilled and passsionate web designer with experience in creating
        visually appealing and user-friendlywebsites. I have a strong
        understanding of design and a keep eye for detail iam proficient in
        HTML,CSS and JavaScript,as well a design software such as adobe
        photoshop and illustrator
      </span>
      <div className="skill-bar">
          <div className="ui">
            <img src={log1} alt="" />
            <div id="name">
              <h3>UI/UX design</h3>
              <p id="text">
                UI/UX design is a comprehensive approach to creating digital
                products that are both visually appealing and user-friendly. It
                involves two closely related but distinct disciplines
              </p>
            </div>
          </div>

          <div className="website">
            <img src={log2} alt="" />
            <div id="name">
              <h3>Website design</h3>
              <p id="text">
                Website design encompasses a variety of skills and disciplines
                aimed at creating and maintaining websites.
              </p>
            </div>
          </div>

          <div className="app">
            <img src={log3} alt="" />
            <div id="name">
              <h3>App design</h3>
              <p id="text">
                App design involves creating mobile applications that are both
                functional and visually appealing, ensuring a seamless user
                experience.
              </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
