import logo from "../../assets/inne/tinder-logo-red.webp";
import classes from "./LoaderPage.module.css";
const LoaderPage = () => {
  return (
    <main className={classes.loadingPage}>
      <header>
        <img src={logo} />
        <h1>IAESTE PAC</h1>
      </header>
    </main>
  );
};

export default LoaderPage;
