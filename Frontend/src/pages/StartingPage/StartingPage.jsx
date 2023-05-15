import { Link } from "react-router-dom";
import classes from "./StartingPage.module.css";
import logo from "../../assets/tinder-logo-white.png";

const StartingPage = () => {
  return (
    <Link to="QR" style={{ textDecoration: "none" }}>
      <main className={classes.startingPage}>
        <header>
          <img src={logo} />
          <h1>IAESTE PAC</h1>
        </header>
      </main>
    </Link>
  );
};

export default StartingPage;
