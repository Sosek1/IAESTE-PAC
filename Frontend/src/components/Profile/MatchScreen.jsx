import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./MatchScreen.module.css";
import match from "../../assets/inne/match.webp";
import { motion } from "framer-motion";
import mark from "../../assets/inne/verifiedMark.webp";
import ProgressBar from "./ProgressBar";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

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
    <motion.div
      className={classes.container}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
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

      <div className={classes.groupNameWrapper}>
        <h2>{profileData[profileIndex].name}</h2>
        <img src={mark} />
      </div>
      <div className={classes.onlineDistance}>
        <div className={classes.onlineDistanceWrapper}>
          <div className={classes.dot}></div>
          <p>Teraz online</p>
        </div>
        <div className={classes.onlineDistanceWrapper}>
          <FmdGoodOutlinedIcon
            style={{
              fontSize: "20px",
              color: "#656e7b",
              marginRight: "5px",
            }}
          />
          <p>{profileData[profileIndex].distance}</p>
        </div>
      </div>
      <img
        className={classes.image}
        src={profileData[profileIndex].pictures[currentPhotoIndex]}
      />
      <img src={match} className={classes.match} />
      <Link to="/saveMail" style={{ textDecoration: "none" }}>
        <button className={classes.submitAnswear}>Kontynuuj</button>
      </Link>
    </motion.div>
  );
};

export default MatchScreen;
