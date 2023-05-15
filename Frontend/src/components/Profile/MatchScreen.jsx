import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./MatchScreen.module.css";
import match from "../../assets/match.png";

import ProgressBar from "./ProgressBar";

const MatchScreen = ({ profileIndex, profileData }) => {
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
      <img
        className={classes.image}
        src={profileData[profileIndex].pictures[currentPhotoIndex]}
      />
      <img src={match} className={classes.match} />
      <Link to="/saveMail" style={{ textDecoration: "none" }}>
        <button className={classes.submitAnswear}>Kontynuuj</button>
      </Link>
    </div>
  );
};

export default MatchScreen;
