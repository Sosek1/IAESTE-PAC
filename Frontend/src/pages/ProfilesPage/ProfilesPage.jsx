import { useState } from "react";
import { useQuestions } from "../../store/questions-context";
import { motion } from "framer-motion";
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
import grafika1 from "../../assets/grupy/grafika/grafika1.webp";
import grafika2 from "../../assets/grupy/grafika/grafika2.webp";
import grafika3 from "../../assets/grupy/grafika/grafika3.webp";
import grafika4 from "../../assets/grupy/grafika/grafika4.webp";
import pr1 from "../../assets/grupy/pr/pr1.webp";
import pr2 from "../../assets/grupy/pr/pr2.webp";
import pr3 from "../../assets/grupy/pr/pr3.webp";
import pr4 from "../../assets/grupy/pr/pr4.webp";

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
  {
    name: "Grafika",
    description:
      "Nie jesteśmy tacy jak inne grupy robocze. Zajmujemy się tworzeniem wszelkich grafik, których potrzebuje organizacja. Plakaty, kubki i Insta story nie są nam straszne. Czrodzieje tabletów, demony CMYKa.",
    distance: "W okolicy",
    pictures: [grafika1, grafika2, grafika3, grafika4],
    interests: [
      "kreatywni",
      "koleżeńscy",
      "konkretni",
      "kolorowi",
      "kompetentni",
    ],
    active: true,
    reaction: "",
  },
  {
    name: "PR",
    description:
      "PR, grupa promocyjna, to grupa komunikatywnych, otwartych i gotowych do działania osób. Mamy dodatkowe punkty za posiadanie Puzzla mamy dodatkowe punkty. Jeśli potrzebujesz jakiegoś pościka, to wiesz, gdzie podbijać.",
    distance: "W okolicy",
    pictures: [pr1, pr2, pr3, pr4],
    interests: [
      "agresywny PR",
      "opela astra",
      "na wylotówce",
      "z rzeszowa",
      "o 5 rano",
      "puzzel zgon",
    ],
    active: true,
    reaction: "",
  },
];

const ProfilesPage = () => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [matchProfile, setMatchProfile] = useState(false);
  const { matchedGroup } = useQuestions();
  const [showMissedPair, setShowMissedPair] = useState(false);
  console.log(matchedGroup);
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

    if (currentProfileIndex < 4) setCurrentProfileIndex((prev) => prev + 1);
  };

  return (
    <motion.div
      className={classes.profilePagecontainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
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
    </motion.div>
  );
};

export default ProfilesPage;
