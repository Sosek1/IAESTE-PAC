import { useState } from "react";
import { useQuestions } from "../../store/questions-context";

import TopBar from "../../components/TopBar";
import Profile from "../../components/Profile/Profile";
import classes from "./ProfilesPage.module.css";
import IconsLayer from "../../components/Profile/IconsLayer";
import MatchScreen from "../../components/Profile/MatchScreen";
import MissedPairScreen from "../../components/PairNotMatchedScreen/MissedPairScreen";

import hr1 from "../../assets/grupy/hr/hr1.webp";
import hr2 from "../../assets/grupy/hr/hr2.webp";
import hr3 from "../../assets/grupy/hr/hr3.webp";
import hr4 from "../../assets/grupy/hr/hr4.webp";
import hr5 from "../../assets/grupy/hr/hr5.webp";
import io1 from "../../assets/grupy/io/io1.webp";
import io2 from "../../assets/grupy/io/io2.webp";
import io3 from "../../assets/grupy/io/io3.webp";
import io4 from "../../assets/grupy/io/io4.webp";
import io5 from "../../assets/grupy/io/io5.webp";
import it1 from "../../assets/grupy/it/it1.webp";
import it2 from "../../assets/grupy/it/it2.webp";
import it3 from "../../assets/grupy/it/it3.webp";
import it4 from "../../assets/grupy/it/it4.webp";

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
