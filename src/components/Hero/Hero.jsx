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
    Hi, I’m <span className={styles.highlight}>Jasmeen</span> 👋
  </h1>

  <h2 style={{ color: "#56b4fc", fontWeight: "600", marginBottom: "10px" }}>
    I build beautiful things with code ✨
  </h2>

  <p className={styles.description}>
    A creative-minded <strong>Full-Stack Developer</strong> who loves turning ideas into pixel-perfect, user-friendly apps.
    I blend <em>clean code</em> with delightful design, and I’m always curious about the next big thing in tech 💡
  </p>

  <div className={styles.badges}>
    <span>💻 React & Node.js</span>
    <span>🎨 UI/UX</span>
    <span>🚀 Responsive Design</span>
    <span>⚡ Creative Logic</span>
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
