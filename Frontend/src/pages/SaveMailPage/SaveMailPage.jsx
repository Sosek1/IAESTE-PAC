import classes from "./SaveMailPage.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SaveMailPage = () => {
  const [buttonActive, setButtonActive] = useState(false);
  const [email, setEmail] = useState("");

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const sumbitFormHandler = (event) => {
    event.preventDefault();

    //gdzies to wyslemy
    setEmail("");
  };

  return (
    <motion.main
      className={classes.SaveMailPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <section>
        <h1 className={classes.header}>Podaj swój adres email</h1>
        <p className={classes.paragraph}>
          Jeśli podasz nam adres email, skontaktujemy się z tobą gdy zacznie się
          rekrutacja
        </p>

        <form onSubmit={sumbitFormHandler}>
          <input
            onChange={emailHandler}
            value={email}
            type="text"
            placeholder="Podaj email"
          />
          <Link to="/endingPage" style={{ textDecoration: "none" }}>
            <button type="submit" className={classes.sendBottomColor}>
              Wyślij
            </button>
          </Link>
        </form>
      </section>
    </motion.main>
  );
};

export default SaveMailPage;
