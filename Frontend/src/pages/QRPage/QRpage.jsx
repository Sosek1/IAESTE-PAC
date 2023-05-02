import classes from "./QRPage.module.css";
import logo from "../../assets/tinder-logo-red.png";
import QR from "../../assets/QR1.png";

const QRpage = () => {
  return (
    <main className={classes.QRPage}>
      <header>
        <img src={logo} />
        <h1>Sprawdź IAESTinder</h1>
      </header>

      <p>
        Dzięki zeskanowaniu kodu QR będziesz mógł skorzystać z naszej aplikacji
        w swoim telefonie!
      </p>
      <p className={classes.QRPage2}>
        <img src={QR} />
      </p>
    </main>
  );
};

export default QRpage;
