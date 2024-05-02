import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {BsFolderSymlink} from "react-icons/bs";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__conatiner">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experince</h5>
              <small>01+ Year</small>
            </article>
          
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>0+ worldwide</small>
            </article>

            <article className="about__card">
              <BsFolderSymlink className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>

          </div>
          <p>
           I am self-motivated professional passionate about quality control.I bring to this position a hands-on approach in the testing of software system. 
           As a Software Quality Assurance Engineer, I have spent the past year honing my skills in ensuring the quality and reliability of software products. Through meticulous testing and analysis, I have contributed to the development of robust and user-friendly applications, driving customer satisfaction and business success.
          </p>

          <a href="#contact" className="btn btn-primary" >Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
