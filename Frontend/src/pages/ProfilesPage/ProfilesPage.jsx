import { useState } from "react";
import { useQuestions } from "../../store/questions-context";

import TopBar from "../../components/TopBar";
import Profile from "../../components/Profile/Profile";
import classes from "./ProfilesPage.module.css";
import IconsLayer from "../../components/Profile/IconsLayer";
import MatchScreen from "../../components/Profile/MatchScreen";
import MissedPairScreen from "../../components/PairNotMatchedScreen/MissedPairScreen";

import hr1 from "../../assets/hr1.jpg";
import hr2 from "../../assets/hr2.jpg";
import hr3 from "../../assets/hr3.jpg";
import hr4 from "../../assets/hr4.jpg";
import hr5 from "../../assets/hr5.jpg";
import io1 from "../../assets/io1.jpg";
import io2 from "../../assets/io2.jpg";
import io3 from "../../assets/io3.jpg";
import io4 from "../../assets/io4.jpg";
import io5 from "../../assets/io5.jpg";
import it1 from "../../assets/it1.jpg";
import it2 from "../../assets/it2.jpg";
import it3 from "../../assets/it3.jpg";
import it4 from "../../assets/it4.jpg";

const profileData = [
  {
    name: "HR",
    description:
      "Nasza grupa spaja cały komitet w jedność, żadne piwo i integracja nie są nam straszne, a ludzie z innych grup, którzy odwiedzają nas na spotkaniach mówią, że jesteśmy jak rodzina (takie patofamily XD)",
    distance: "W okolicy",
    pictures: [hr1, hr2, hr3, hr4, hr5],
    interests: ["integracja", "wyjazdy", "motywacja", "HR działa", "piwo"],
    active: true,
    reaction: "",
  },
  {
    name: "IO",
    description:
      "Sprawdzamy dokumenty aplikacyjne i opiekujemy się przyjeżdżającymi praktykantami. Po godzinach lubimy picie tequili z bitą śmietaną, dobre karaoke i papieża.",
    distance: "W okolicy",
    pictures: [io1, io2, io3, io4, io5],
    interests: [
      "incoming",
      "outcoming",
      "dokumenty",
      "integracja",
      "praktykanci",
    ],
    active: true,
    reaction: "",
  },
  {
    name: "IT",
    description:
      "Jesteśmy grupą błyskotliwych poskramiaczy pythona aka programistów, tworzymy różne ciekawe projekty, które przzeplatamy z integracją",
    distance: "W okolicy",
    pictures: [it1, it2, it3, it4],
    interests: ["strony", "aplikacje", "gry", "projekty", "szkolenia"],
    active: true,
    reaction: "",
  },
];

const ProfilesPage = () => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [matchProfile, setMatchProfile] = useState(false);
  const { matchedGroup } = useQuestions();
  const [showMissedPair, setShowMissedPair] = useState(false);

  const matchProfileIndex = profileData.findIndex(
    (item) => item.name == matchedGroup
  );

  const clickedIconHandler = (reaction) => {
    profileData[currentProfileIndex].reaction = reaction;
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

    if (currentProfileIndex < 2) setCurrentProfileIndex((prev) => prev + 1);
  };

  return (
    <div className={classes.profilePagecontainer}>
      <TopBar />
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
      <IconsLayer clickedIcon={(reaction) => clickedIconHandler(reaction)} />
    </div>
  );
};

export default ProfilesPage;
