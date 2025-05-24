import React from "react";
import styles from "./About.module.css";
import jasmeenImg from "../../assets/jasmeen.jpg"; // your image here

const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        <img
          src={jasmeenImg}
          alt="Jasmeen"
          className={styles.image}
        />

        <div className={styles.text}>
          <h2 className={styles.heading}>
            ABOUT <span>ME</span>
          </h2>
          <h3 className={styles.subheading}>
            SOFTWARE <span>STUDENT</span>
          </h3>
          <p className={styles.paragraph}>
            I am a Software Development student at Bow Valley College with expertise in HTML, CSS, JavaScript, and React. 
            I specialize in building robust solutions and have expanded my skills to include Node.js for dynamic web development. 
            With strong communication, leadership, and organizational skills, I am committed to delivering high-quality results and 
            continuous learning in the ever-evolving tech landscape.
          </p>

          <a
            href="https://www.linkedin.com/in/jasmeen-b20384298/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

