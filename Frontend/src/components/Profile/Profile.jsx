import React, { useState, useEffect } from "react";
import classes from "./profile.module.css";
import ProgressBar from "./ProgressBar";
import Information from "./Information";
import Sticker from "./Sticker";
import Match from "./Match"; 

const Profile = ({ profileIndex, profileData, matchProfile, isHidden }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [activeLikeSticker, setActiveLikeSticker] = useState(false);
  const [activeNopeSticker, setActiveNopeSticker] = useState(false);

  useEffect(() => {
    setCurrentPhotoIndex(0);
  }, [profileIndex]);

  const leftListenerHandler = () => {
    console.log("xd");
    if (currentPhotoIndex >= 1) {
      setCurrentPhotoIndex((prev) => prev - 1);
    }
  };

  const rightListenerHandler = () => {
    console.log("xd");
    if (currentPhotoIndex < profileData[profileIndex].pictures.length - 1) {
      setCurrentPhotoIndex((prev) => prev + 1);
    }
  };

  

  return (
    <div className={`${isHidden ? classes.hiddenContainer : classes.container }`} >
      <div
      className={`${isHidden ? classes.leftListene : classes.leftListener }`} 
      // className={classes.leftListener} 
      onClick={isHidden ? null : leftListenerHandler } />
      <div
        //className={classes.rightListener}
        className={`${isHidden ? classes.right : classes.rightListener }`} 
        onClick={isHidden ? null : rightListenerHandler}
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
          isHidden={isHidden}
        />
        <img
          className={classes.image}
          src={profileData[profileIndex].pictures[currentPhotoIndex]}
        />
        <div className={`${isHidden ? classes.hiddenGradient : classes.gradient }`} />
        <div className={classes.imgCover}></div>
        {matchProfile && <Match/>}
      </div>
    </div>
  );
};

export default Profile;
