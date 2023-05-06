import { Link } from "react-router-dom";
import classes from "./QRPage.module.css";
import logo from "../../assets/logo-white3.png";
import QR from "../../assets/QR1.png";

const QRpage = () => {
  return (
    <Link to="/instruction" style={{ textDecoration: "none" }}>
      <main className={classes.QRPage}>
        <header>
          <img src={logo} />
          <h1>Sprawdź IAESTinder</h1>
        </header>

        <p style={{ textAlign: "center" }}>
          Dzięki zeskanowaniu kodu QR będziesz mógł skorzystać <br></br> z
          naszej aplikacji w swoim telefonie!
        </p>
        <br></br>
        <br></br>
        <p className={classes.QRPage2}>
          <img src={QR} />
        </p>
      </main>
    </Link>
  );
};

export default QRpage;
