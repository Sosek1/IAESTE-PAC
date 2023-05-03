// @ts-ignore
import classes from "./SaveMailPage.module.css";
// import logo from "../../assets/logo-white3.png";
import React from "react";
import { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const SaveMailPage = () => {
  const [email, setEmail] = useState(false);
  const changecolor = () => {
    setEmail(true);
  };
  return (
    <>
      <button type="button" className={classes.backButton}>
        <ChevronLeftIcon style={{ fontSize: "60px", color: "gray" }} />
      </button>
      <main className={classes.SaveMailPage}>
        <section>
          <h1 className={classes.header}>What's your email?</h1>
          <p className={classes.paragraph}>
            Don't lose access to your account, verify your email.
          </p>
          <div className={classes.SearchBar}>
            <form action="">
              <input
                onChange={changecolor}
                type="text"
                placeholder="Enter email"
                name="q"
              />
            </form>
          </div>
        </section>
        <button
          type="button"
          className={email ? classes.sendBottomColor : classes.sendBottomGray}
        >
          Send
        </button>
      </main>
    </>
  );
};

export default SaveMailPage;
