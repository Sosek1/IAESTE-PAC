import { motion } from "framer-motion";
import logo from "../../assets/inne/tinder-logo-red.webp";
import classes from "./LoaderPage.module.css";
const LoaderPage = () => {
  return (
    <motion.main
      className={classes.loadingPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <header>
        <img src={logo} />
        <h1>IAESTE PAC</h1>
      </header>
    </motion.main>
  );
};

export default LoaderPage;
