import React from "react";
import "./experience.css";
import { BsCheckCircleFill } from "react-icons/bs";

function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsCheckCircleFill className="experience__details-icon" />
              <div>
                <h4>Software Testing</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsCheckCircleFill className="experience__details-icon" />
              <div>
                <h4>Web Testing</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsCheckCircleFill className="experience__details-icon" />
              <div>
                <h4>Mobile App Testing</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsCheckCircleFill className="experience__details-icon" />
              <div>
                <h4>API Testing</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsCheckCircleFill className="experience__details-icon" />
              <div>
                <h4>Performance Testing</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience__details">
              <BsCheckCircleFill className="experience__details-icon" />
              <div>
                <h4>Web Automation Testing</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>        

          </div>
        </div>

        <div className="experince__backend">
          <h3>Tools & Languages</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsCheckCircleFill className="experience__details-icon" />
              <div>
                <h4>Jira</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsCheckCircleFill className="experience__details-icon" />
              <div>
                <h4>Postman</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsCheckCircleFill className="experience__details-icon" />
              <div>
                <h4>JMeter</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsCheckCircleFill className="experience__details-icon" />
              <div>
                <h4>Selenium Java</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience__details">
              <BsCheckCircleFill className="experience__details-icon" />
              <div>
                <h4>Cypress JS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience__details">
              <BsCheckCircleFill className="experience__details-icon" />
              <div>
                <h4>Git & GitHub</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
