import classes from "./Navbar.module.css";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <>
      <motion.nav className={classes.nav}>
        <div>
          <h1>Chukwuemeka</h1>
        </div>
        <div>
          <ul>
            <motion.li whileTap={{ scale: 0.8 }}>
              <a href="https://github.com/emmynando" target="_blank">
                Github
              </a>
            </motion.li>
            <motion.li
              whileTap={{ scale: 0.8 }}
              onClick={() => window.location.replace("#footer")}
            >
              {" "}
              Contact-Me
            </motion.li>
          </ul>
        </div>
      </motion.nav>
    </>
  );
}

export default Navbar;
