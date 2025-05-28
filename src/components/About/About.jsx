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
            ABOUT ME <span></span>
          </h2>
          <h3 className={styles.subheading}>
            SOFTWARE <span>DEVELOPER</span>
          </h3>
          <p className={styles.paragraph}>
         I am a passionate and results-driven Full-Stack Developer
           with hands-on experience in building responsive, scalable web applications using HTML, CSS, 
           JavaScript, React, and Node.js. I thrive on transforming complex challenges into elegant, 
           user-centric solutions. With strong problem-solving abilities, excellent collaboration skills, 
           and a continuous learning mindset,
          I aim to contribute to innovative teams and deliver impactful digital experiences that drive real-world results.
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

