// @ts-ignore
import classes from "./SaveMailPage.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    <main className={classes.SaveMailPage}>
      <section>
<<<<<<< HEAD
        <h1 className={classes.header}>Podaj swój adres email</h1>
=======
        <h1 className={classes.header}>Zostaw nam kontakt!</h1>
>>>>>>> cfaddb9c1598ff949be930eb8490e9af19790dfe
        <p className={classes.paragraph}>
          Jeśli podasz nam adres email, skontaktujemy się z tobą gdy zacznie się
          rekrutacja
        </p>

        <form onSubmit={sumbitFormHandler}>
          <input
            onChange={emailHandler}
            value={email}
            type="text"
<<<<<<< HEAD
            placeholder="Podaj email"
=======
            placeholder="Wpisz email"
>>>>>>> cfaddb9c1598ff949be930eb8490e9af19790dfe
          />
          <Link to="/theend" style={{ textDecoration: "none" }}>
            <button type="submit" className={classes.sendBottomColor}>
              Wyślij
            </button>
          </Link>
        </form>
      </section>
    </main>
  );
};

export default SaveMailPage;
