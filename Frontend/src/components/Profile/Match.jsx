import { Link } from "react-router-dom";
import classes from "./Match.module.css";
import match from "../../assets/inne/match.webp";

const Match = () => {
  return (
    <>
      <div className={classes.overlay}></div>
      <img src={match} className={classes.match} />
      <Link to="/saveMail" style={{ textDecoration: "none" }}>
        <button className={classes.submitAnswear}>Kontynuuj</button>
      </Link>
    </>
  );
};

export default Match;