import { Link } from "react-router-dom";
import classes from "./MissedPair.module.css";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

const MissedPair = () => {
  return (
    <>
      <div className={classes.missedPair}>
        <VolunteerActivismIcon style={{ fontSize: "40px", color: "#fff" }} />
        <div className={classes.textWrapper}>
          <h3>Ups! Para przeszła ci koło nosa!</h3>
          <h4>Zobacz pare, której nie wybrałeś, a do której pasujesz</h4>
        </div>
      </div>
      <div className={classes.overlay}></div>
      <Link to="/saveMail" style={{ textDecoration: "none" }}>
        <button className={classes.submitAnswear}>Kontynuuj</button>
      </Link>
    </>
  );
};

export default MissedPair;
