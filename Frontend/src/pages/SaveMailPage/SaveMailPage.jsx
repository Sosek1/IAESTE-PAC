// @ts-ignore
import classes from "./SaveMailPage.module.css";

import React from "react";
import { useState } from "react";

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
        <h1 className={classes.header}>What's your email?</h1>
        <p className={classes.paragraph}>
          Don't lose access to your account, verify your email.
        </p>

        <form onSubmit={sumbitFormHandler}>
          <input
            onChange={emailHandler}
            value={email}
            type="text"
            placeholder="Enter email"
          />
          <button type="submit" className={classes.sendBottomColor}>
            Send
          </button>
        </form>
      </section>
    </main>
  );
};

export default SaveMailPage;
