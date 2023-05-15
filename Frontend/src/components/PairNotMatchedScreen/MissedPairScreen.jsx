import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./MissedPairScreen.module.css";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

import ProgressBar from "../Profile/ProgressBar";
import Information from "../Profile/Information";

const MissedPairScreen = ({ profileIndex, profileData }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const leftListenerHandler = () => {
    if (currentPhotoIndex >= 1) {
      setCurrentPhotoIndex((prev) => prev - 1);
    }
  };

  const rightListenerHandler = () => {
    if (currentPhotoIndex < profileData[profileIndex].pictures.length - 1) {
      setCurrentPhotoIndex((prev) => prev + 1);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.leftListener} onClick={leftListenerHandler}></div>
      <div
        className={classes.rightListener}
        onClick={rightListenerHandler}
      ></div>
      <div className={classes.overlay}></div>
      <ProgressBar
        profileData={profileData}
        currentPhotoIndex={currentPhotoIndex}
        currentProfileIndex={profileIndex}
      />
      <div className={classes.missedPair}>
        <VolunteerActivismIcon style={{ fontSize: "40px", color: "#fff" }} />
        <div className={classes.textWrapper}>
          <h3>Ups! Para przeszła ci koło nosa!</h3>
          <h4>Zobacz pare, której nie wybrałeś, a do której pasujesz</h4>
        </div>
      </div>
      <Information
        profileData={profileData}
        currentPhotoIndex={currentPhotoIndex}
        currentProfileIndex={profileIndex}
      />
      <img
        className={classes.image}
        src={profileData[profileIndex].pictures[currentPhotoIndex]}
      />
      <Link to="/saveMail" style={{ textDecoration: "none" }}>
        <button className={classes.submitAnswear}>Kontynuuj</button>
      </Link>
    </div>
  );
};

export default MissedPairScreen;
