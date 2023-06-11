import { useState } from "react";
import { useQuestions } from "../../store/questions-context";
import { useRef } from "react";
import {
  motion,
  transform,
  useDragControls,
  useMotionValue,
  useTransform,
} from "framer-motion";
import TopBar from "../../components/TopBar";
import Profile from "../../components/Profile/Profile";
import classes from "./ProfilesPage.module.css";
import IconsLayer from "../../components/Profile/IconsLayer";
import MissedPairScreen from "../../components/PairNotMatchedScreen/MissedPairScreen";

import { PROFILES_DATA as profileData } from "../../data/profileData";

const ProfilesPage = () => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [matchProfile, setMatchProfile] = useState(false);
  const [showMissedPair, setShowMissedPair] = useState(false);
  const [liked, setLiked] = useState(0);
  const { matchedGroup } = useQuestions();
  const constraintsRef = useRef(null);
  const controls = useDragControls();
  const x = useMotionValue();

  const matchProfileIndex = profileData.findIndex(
    (item) => item.name == matchedGroup[0]
  );

  //funkcja sprawdza czy nasz match jest ostatni w kolejności, jak nie to zamienia
  if (matchProfileIndex !== profileData.length - 1) {
    let temp = profileData[matchProfileIndex];
    profileData[matchProfileIndex] = profileData[profileData.length - 1];
    profileData[profileData.length - 1] = temp;
  }

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
      setShowMissedPair(true);
    }

    if (currentProfileIndex < profileData.length - 1)
      setCurrentProfileIndex((prev) => prev + 1);
  };

  //funkcja sprawdzająca położenie swipowanej grupy - setLiked = 1 -> polubione, 0 -> neutral, -1 -> dislike
  const setSwipeState = () => {
    if (x.get() > 130) {
      setLiked(1);
    } else if (x.get() < -130) {
      setLiked(-1);
    } else {
      setLiked(0);
    }
    //console.log(x.get());
    //console.log(liked);
  };

  //funkcja odpala się w momencie gdy user przestaje dotykać ekran, lajkujemy bądź nie
  const checkSwipePosibillity = () => {
    if (liked === 1) {
      clickedIconHandler("LIKE");
    } else if (liked === -1) {
      clickedIconHandler("DISLIKE");
    }
  };

  return (
    <motion.div
      className={classes.profilePagecontainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <TopBar />
      {currentProfileIndex !== profileData.length - 1 && (
        <Profile
          className={classes.hiddenProfile}
          profileIndex={currentProfileIndex + 1} //tuataj będzie profil na spodzie, pod tym kóry jest aktualnie wybierany
          profileData={profileData}
          isHidden={true}
          type="hidden"
        />
      )}
      <motion.div
        className={classes.swipeArea}
        ref={constraintsRef}
        style={{ x }}
        drag //to nam blokuje swipe na ten po osi x-ów, jakby było damo "drag" to można latać po całym ekranie, jak drag='y', top tylko po y
        dragConstraints={constraintsRef}
        dragControls={controls}
        dragListener={true} //chuj to wie co robi reszta, skopiowane z tych dwóch stron: https://codesandbox.io/s/drag-forked-gkkhv5?file=/src/Example.tsx:265-320, https://codesandbox.io/s/framer-motion-path-drawing-drag-and-usetransform-forked-42wjk4?file=/src/Example.tsx
        onDrag={setSwipeState}
        onDragEnd={checkSwipePosibillity}
      >
        <Profile
          className={classes.visibleProfile}
          profileIndex={currentProfileIndex}
          profileData={profileData}
          isHidden={false}
          matchProfile={matchProfile}
        />
        {showMissedPair && (
          <MissedPairScreen
            profileIndex={matchProfileIndex}
            profileData={profileData}
          />
        )}
      </motion.div>
      {!matchProfile && (
        <IconsLayer clickedIcon={(reaction) => clickedIconHandler(reaction)} />
      )}
    </motion.div>
  );
};

export default ProfilesPage;
