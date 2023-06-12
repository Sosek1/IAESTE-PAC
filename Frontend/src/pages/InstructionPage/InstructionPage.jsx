import { Link } from "react-router-dom";
import classes from "./InstructionPage.module.css";
import logo from "../../assets/inne/tinder-logo-red.webp";
import { motion } from "framer-motion";
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
        "IAESTE dzieli się na 6 grup roboczych, a kandydaci muszą wybrać, do której z nich chcą dołączyć podczas rekrutacji",
      icon: styledIcon,
    },
    {
      title: "Grupy robocze",
      description:
        "Grupami roboczymi w naszej organizacji są: IT, Grafika, HR, PF, I&O oraz JFR",
      icon: styledIcon,
    },
    {
      title: "Czym jest IAESTE PAC?",
      description:
        "IAESTE PAC to narzędzie, dzięki któremu dowiesz się, do której grupy roboczej pasujesz najbardziej",
      icon: styledIcon,
    },
    {
      title: "Twoja aktywność",
      description:
        "Po kliknięciu kontynuuj, odpowiesz na kilka pytań, a następie poznasz odpowiednie grupy robocze oraz wybierzesz te, które najbardziej do Ciebie pasują",
      icon: styledIcon,
    },
  ];

  return (
    <motion.div
      className={classes.instructionPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <section>
        <header>
          <img src={logo} />
          <h1>Witamy w IAESTE PAC</h1>
        </header>
        <ul>
          {instructionData.map((item, index) => (
            <li key={index}>
              <div>
                {item.icon}
                <h3>{item.title}</h3>
              </div>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </section>
      <Link to="/questions">
        <button>Kontynuuj</button>
      </Link>
    </motion.div>
  );
};

export default InstructionPage;
