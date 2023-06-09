import { useState } from "react";
import { useQuestions } from "../../store/questions-context";
import { useRef } from "react";
import { motion, useDragControls } from "framer-motion";
import TopBar from "../../components/TopBar";
import Profile from "../../components/Profile/Profile";
import classes from "./ProfilesPage.module.css";
import IconsLayer from "../../components/Profile/IconsLayer";
import MatchScreen from "../../components/Profile/MatchScreen";
import MissedPairScreen from "../../components/PairNotMatchedScreen/MissedPairScreen";

import { PROFILES_DATA as profileData } from "../../data/profileData";

const ProfilesPage = () => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [matchProfile, setMatchProfile] = useState(false);
  const [showMissedPair, setShowMissedPair] = useState(false);
  const { matchedGroup } = useQuestions();
  const constraintsRef = useRef(null);
  const controls = useDragControls();

  const matchProfileIndex = profileData.findIndex(
    (item) => item.name == matchedGroup[0]
  );

  if (matchProfileIndex !== profileData.length - 1) {
    let temp = profileData[matchProfileIndex];
    profileData[matchProfileIndex] = profileData[profileData.length - 1];
    profileData[profileData.length - 1] = temp;
  }

  console.log(profileData);

  const clickedIconHandler = (reaction) => {
    if (reaction === "LIKE" && currentProfileIndex == matchProfileIndex) {
      setMatchProfile(true);
      return;
    }

    console.log(profileData[currentProfileIndex]);

    if (
      currentProfileIndex === profileData.length - 1 &&
      matchProfile === false
    ) {
      console.log(matchProfileIndex);
      setShowMissedPair(true);
    }

    if (currentProfileIndex < profileData.length - 1)
      setCurrentProfileIndex((prev) => prev + 1);
  };

  return (
    <motion.div
      className={classes.profilePagecontainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <TopBar />
      <motion.div className="swipeArea"
      ref={constraintsRef}
      drag 
      dragConstraints={constraintsRef}
      dragControls={controls}
      dragListener={true}
      >
        <Profile profileIndex={currentProfileIndex} profileData={profileData} />
        {matchProfile && (
          <MatchScreen
            profileIndex={currentProfileIndex}
            profileData={profileData}
          />
        )}
        {showMissedPair && (
          <MissedPairScreen
            profileIndex={matchProfileIndex}
            profileData={profileData}
          />
        )}
      </motion.div>
      <IconsLayer
        clickedIcon={(reaction) => clickedIconHandler(reaction)} />
    </motion.div>
  );
};

export default ProfilesPage;
