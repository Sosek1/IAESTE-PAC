import classes from "./TopBar.module.css";
import logo from "../../assets/inne/tinder-logo-red.webp";

const TopBar = () => {
  return (
    <header className={classes.topBar}>
      <img src={logo} />
      <h1>IAESTE PAC</h1>
    </header>
  );
};

export default TopBar;
