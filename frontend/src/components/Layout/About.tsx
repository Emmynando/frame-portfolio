import { motion } from "framer-motion";
import Card from "../UI/Card";

function AboutMe() {
  const styles = {
    container: {
      fontFamily: "Courier Prime",
      textAlign: "center",
      marginTop: "2rem",
      marginBottom: "3rem",
    } as React.CSSProperties,
  };

  const classes = {
    container: {
      borderRadius: "10px",
      cursor: "pointer",
      padding: "0.3rem",
    } as React.CSSProperties,
  };

  return (
    <Card>
      <motion.main
        animate={{ x: 0 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 2,
          x: { duration: 1 },
        }}
      >
        <p style={styles.container}>
          Chukwemeka is a frontend developer with years of experience in Web
          development. He has an insurmountable experience programming with
          Reactjs.
          <br />
          <span>
            <motion.button
              style={classes.container}
              whileHover={{ scale: 1.2 }}
              onClick={() => window.location.replace("#footer")}
            >
              Hit Button
            </motion.button>
          </span>{" "}
          lets's schedule a meeting.
        </p>
      </motion.main>
    </Card>
  );
}

export default AboutMe;
