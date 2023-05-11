import { Link } from "react-router-dom";
import classes from "./InstructionPage.module.css";
import logo from "../../assets/tinder-logo-red.png";
import DoneIcon from "@mui/icons-material/Done";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { colors } from "@mui/material";

const InstructionPage = () => {
  const styledIcon = (
    <KeyboardDoubleArrowRightIcon
      style={{
        fontSize: "26px",
        color: "#e7407d",
        marginRight: "5px",
        marginTop: "1px",
      }}
    />
  );

  const instructionData = [
    {
      title: "Struktura IAESTE",
      description:
        "IAESTE jest podzielone na 6 grup roboczych. Każdy kandydat musi wybrać przy rekrutacji, do której grupy chce dołączyć",
      icon: styledIcon,
    },
    {
      title: "Grupy robocze",
      description: "IT, Grafika, HR, Pr, I&O, JFR",
      icon: styledIcon,
    },
    {
      title: "Nasza aplikacja",
      description:
        "IAESTinder to aplikacja, dzięki której dowiesz się, do której grupy roboczej pasujesz",
      icon: styledIcon,
    },
    {
      title: "Twoja aktywność",
      description:
        "Po kliknięciu kontynuuj, odpowiesz na kilka pytań a następie poznasz grupy robocze przeglądając ich profile i wybierzesz te, które ci się spodobają",
      icon: styledIcon,
    },
  ];

  return (
    <main className={classes.instructionPage}>
      <section>
        <header>
          <img src={logo} />
          <h1>Witamy w IAESTinder</h1>
        </header>
        <ul>
          {instructionData.map((item) => (
            <li>
              <div>
                {item.icon}
                <h3>{item.title}</h3>
              </div>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </section>
      <Link to="/multipleQuestion">
        <button>Kontynuuj</button>
      </Link>
    </main>
  );
};

export default InstructionPage;
