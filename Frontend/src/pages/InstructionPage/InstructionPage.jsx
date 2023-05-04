import { Link } from "react-router-dom";
import classes from "./InstructionPage.module.css";
import logo from "../../assets/tinder-logo-red.png";
import DoneIcon from "@mui/icons-material/Done";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { colors } from "@mui/material";

const InstructionPage = () => {
  return (
    <main className={classes.InstructionPage}>
      <section>
        <header>
          <img src={logo} />
          <h2>Welcome to IAESTinder</h2>
          <h4></h4>
        </header>
        <ul>
          <li>
            <div>
              <KeyboardDoubleArrowRightIcon
                style={{ fontSize: "26px", color: "red", marginRight: "5px", marginTop: "1px" }}
              />
              <h3>O co chodzi?</h3>
            </div>
            <span>
            IAESTE jest podzielone na 6 grup roboczych. Każdy przyszły członek musi stanąć przed wyborem jednej z nich</span>
          </li>
          <li>
            <div>
              <KeyboardDoubleArrowRightIcon
                style={{ fontSize: "26px", color: "red", marginRight: "5px", marginTop: "1px" }}
              />
              <h3>Jakie są grupy robocze?</h3>
            </div>
            <span>
            JFR, PR, HR, I&O, IT i Grafika</span>
          </li>
          <li>
            <div>
              <KeyboardDoubleArrowRightIcon
                style={{ fontSize: "26px", color: "red", marginRight: "5px", marginTop: "1px" }}
              />
              <h3>Jak to działa?</h3>
            </div>
            <span>
            Na podstawie twoich wyborów IAESTinder wksaże Ci grupę do której najbardziej pasujesz</span>
          </li>
          <li>
            <div>
              <KeyboardDoubleArrowRightIcon
                style={{ fontSize: "26px", color: "red", marginRight: "5px", marginTop: "1px" }}
              />
              <h3>Co dalej?</h3>
            </div>
            <span>Kliknij kontynuuj i do roboty. Udanych matchów!</span>
          </li>
        </ul>
      </section>
      <Link to="/multipleQuestion">
        <button>Continue</button>
      </Link>
    </main>
  );
  <p>Instruction</p>;
};

export default InstructionPage;
