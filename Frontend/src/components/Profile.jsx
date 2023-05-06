import { useState, useEffect } from "react";
import classes from "./profile.module.css";

import ProgressBar from "./ProgressBar";
import Information from "./Information";
import Sticker from "./Sticker";

const Profile = ({ profileIndex, profileData }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [activeLikeSticker, setActiveLikeSticker] = useState(false);
  const [activeNopeSticker, setActiveNopeSticker] = useState(false);

  useEffect(() => {
    setCurrentPhotoIndex(0);
  }, [profileIndex]);

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
      <div className={classes.imagesContainer}>
        <Sticker stickerText={"LIKE"} activeSticker={activeLikeSticker} />
        <Sticker stickerText={"NOPE"} activeSticker={activeNopeSticker} />
        <ProgressBar
          profileData={profileData}
          currentPhotoIndex={currentPhotoIndex}
          currentProfileIndex={profileIndex}
        />
        <Information
          profileData={profileData}
          currentPhotoIndex={currentPhotoIndex}
          currentProfileIndex={profileIndex}
        />
        <img
          className={classes.image}
          src={profileData[profileIndex].pictures[currentPhotoIndex]}
        />
      </div>
    </div>
  );
};

export default Profile;
