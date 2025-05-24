import React from "react";

import jasmeenImg from "../../assets/jasmeen.jpg";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section
      id="Hero" 
      className={styles.container}
      style={{ scrollMarginTop: "100px", marginTop: "100px" }} // ✅ To prevent navbar overlap
    >
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.highlight}>Jasmeen</span>
        </h1>
        <h2>
          And I am a{" "}
          <span style={{ color: "#56b4fc", fontWeight: "bold" }}>
            <Typewriter
              words={["Freelancer", "Web Designer", "UI/UX Designer", "Full-Stack Developer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p className={styles.description}>
          Transforming ideas into seamless digital experiences, shaping solutions that code the future. 🚀 💡
        </p>
        <div className={styles.badges}>
          <span>💻 React</span>
          <span>🎨 UI/UX</span>
          <span>🌐 Web Dev</span>
        </div>
      </div>

      <img src={jasmeenImg} alt="Jasmeen" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
<h2 className={styles.subtitle}>
  And I am a <span style={{ color: "#56b4fc", fontWeight: "bold" }}>Full-Stack Developer</span>
</h2>


export default Hero;
