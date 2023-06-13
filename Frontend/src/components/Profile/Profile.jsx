import React, { useState, useEffect } from "react";
import classes from "./profile.module.css";
import ProgressBar from "./ProgressBar";
import Information from "./Information";
import Sticker from "./Sticker";
import Match from "./Match";
import MissedPair from "./MissedPair";

const Profile = ({
  profileIndex,
  profileData,
  matchProfile,
  missedPair,
  isHidden,
  liked,
}) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [activeLikeSticker, setActiveLikeSticker] = useState(false);
  const [activeNopeSticker, setActiveNopeSticker] = useState(false);

  const displayStickerHandler = () => {
    if (liked > 80) {
      setActiveLikeSticker(true);
    } else if (liked < 80) {
      setActiveNopeSticker(true);
    } else {
      setActiveLikeSticker(false);
    }
  };

  useEffect(() => {
    setCurrentPhotoIndex(0);
    setActiveLikeSticker(false);
    setActiveNopeSticker(false);
  }, [profileIndex]);

  useEffect(() => {
    if (liked === 1) {
      setActiveLikeSticker(true);
    } else if (liked === -1) {
      setActiveNopeSticker(true);
    } else if (liked === 0) {
      setActiveLikeSticker(false);
      setActiveNopeSticker(false);
    }
  }, [liked]);

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
    <div
      className={`${isHidden ? classes.hiddenContainer : classes.container}`}
    >
      <div
        className={`${isHidden ? classes.leftListene : classes.leftListener}`}
        // className={classes.leftListener}
        onClick={isHidden ? null : leftListenerHandler}
      />
      <div
        //className={classes.rightListener}
        className={`${isHidden ? classes.right : classes.rightListener}`}
        onClick={isHidden ? null : rightListenerHandler}
      ></div>
      <div className={classes.imagesContainer}>
        {activeLikeSticker && !matchProfile && <Sticker stickerText={"LIKE"} />}
        {activeNopeSticker && !missedPair && <Sticker stickerText={"NOPE"} />}
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
        <div
          className={`${isHidden ? classes.hiddenGradient : classes.gradient}`}
        />
        <div className={classes.imgCover}></div>
        {matchProfile && <Match />}
        {missedPair && <MissedPair />}
      </div>
    </div>
  );
};

export default Profile;
