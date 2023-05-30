import styles from "./Experience.module.css";
import { motion } from "framer-motion";

function ExperienceTab() {
  return (
    <div style={{ backgroundColor: "#333396", padding: "1rem" }}>
      <h3 style={{ color: "#fff", marginLeft: "1rem", fontFamily: "Fraunces" }}>
        Recent Work
      </h3>
      <motion.div
        className={styles["experience-tab"]}
        whileHover={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
      >
        <h4>An Ecommerce Wigstore</h4>
        <img src="wigstore.png" />
        <div className={styles["links-tab"]}>
          <a href="https://emmywigstore.netlify.app" target="_blank">
            Link
          </a>
          <a href="https://github.com/Emmynando/wigstore" target="_blank">
            <img src="github.png" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default ExperienceTab;
