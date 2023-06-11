import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import classes from "./StartingPage.module.css";
import logo from "../../assets/inne/tinder-logo-white.webp";

const StartingPage = () => {
  return (
    <motion.main
      className={classes.startingPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link to="instruction">
        <main>
          <header>
            <img src={logo} />
            <h1>IAESTE PAC</h1>
          </header>
        </main>
      </Link>
    </motion.main>
  );
};

export default StartingPage;
