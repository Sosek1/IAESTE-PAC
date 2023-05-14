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
        <h1 className={classes.header}>Zostaw nam kontakt!</h1>
        <p className={classes.paragraph}>
          Don't lose access to your account, verify your email.
        </p>

        <form onSubmit={sumbitFormHandler}>
          <input
            onChange={emailHandler}
            value={email}
            type="text"
            placeholder="Wpisz email"
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
