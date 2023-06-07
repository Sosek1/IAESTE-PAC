import classes from "./EndingPage.module.css";
import { motion } from "framer-motion";

const EndingPage = () => {
  return (
    <motion.main
      className={classes.EndingPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <header>
        <h1>Do zobaczenia na rekrutacji!</h1>
      </header>
    </motion.main>
  );
};

export default EndingPage;
