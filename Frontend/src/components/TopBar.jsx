import classes from "./TopBar.module.css";
import logo from "../assets/tinder-logo-red.png";

const TopBar = () => {
  return (
    <header className={classes.topBar}>
      <img src={logo} />
      <h1>IAESTinder</h1>
    </header>
  );
};

export default TopBar;
