import React from "react";
import styles from "./Projects.module.css";

export const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.title}>
        Latest <span>Projects</span>
      </h2>

      <div className={styles.projectsGrid}>
        {/* 🌤 Weather App */}
        <div className={styles.card}>
          <img src="/assets/weather.png" alt="Weather App" />
          <h3>Weather Updates</h3>
          <p>Live weather app using OpenWeatherMap API.</p>
          <div className={styles.links}>
            <a href="https://github.com/jasmeen786/WEATHER" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>

        {/* 🥫 Food Pantry */}
        <div className={styles.card}>
          <img src="/assets/food.png" alt="Food Pantry" />
          <h3>BrightLights Food Pantry</h3>
          <p>Donation & inventory system using React and Node.js.</p>
          <div className={styles.links}>
            <a href="https://github.com/jasmeen786/online-food-pantry" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>

        {/* 🌐 Webpage */}
        <div className={styles.card}>
          <img src="/assets/webpage.png" alt="Webpage Project" />
          <h3>Responsive Webpage</h3>
          <p>Modern multipage site made using HTML, CSS, and JavaScript.</p>
          <div className={styles.links}>
            <a href="https://github.com/jasmeen786/jasmeen" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
      
<a
  href="https://github.com/jasmeen786"
  target="_blank"
  rel="noopener noreferrer"
  className={styles.viewMore}
>
  View More →
</a>

    </section>
  );
};
