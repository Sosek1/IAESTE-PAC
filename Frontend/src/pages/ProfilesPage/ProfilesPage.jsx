import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import TopBar from "../../components/TopBar";
import Profile from "../../components/Profile";
import classes from "./ProfilesPage.module.css";
import IconsLayer from "../../components/IconsLayer";

import malysz1 from "../../assets/malysz1.png";
import malysz2 from "../../assets/malysz2.png";
import malysz3 from "../../assets/malysz3.png";
import malysz4 from "../../assets/malysz4.png";
import pudzian1 from "../../assets/pudzian1.png";
import pudzian2 from "../../assets/pudzian2.png";
import pudzian3 from "../../assets/pudzian3.png";
import pudzian4 from "../../assets/pudzian4.png";
import andrzej1 from "../../assets/andrzej1.png";
import andrzej2 from "../../assets/andrzej2.png";
import andrzej3 from "../../assets/andrzej3.png";
import andrzej4 from "../../assets/andrzej4.png";
import andrzej5 from "../../assets/andrzej5.png";
import korwin1 from "../../assets/korwin1.png";
import korwin2 from "../../assets/korwin2.png";
import korwin3 from "../../assets/korwin3.png";
import korwin4 from "../../assets/korwin4.png";
import MatchScreen from "../../components/MatchScreen";

const profileData = [
  {
    name: "Adam",
    description: "102 metry STO DWA METRY",
    age: "45",
    distance: "50 kilometrów stąd",
    pictures: [malysz1, malysz2, malysz3, malysz4],
    interests: ["narty", "skoki narciarskie", "zima", "piwo", "taniec"],
    active: true,
    reaction: "",
  },
  {
    name: "Mariusz",
    description: "Tanio skóry nie sprzedam",
    age: "46",
    distance: "200 kilometrów stąd",
    pictures: [pudzian1, pudzian2, pudzian3, pudzian4],
    interests: ["On", "byl", "lepszy", "w", "kulach"],
    active: true,
    reaction: "",
  },
  {
    name: "Andrzej",
    description: "Nie pytają cię o imię, walcząc z ostrym cieniem mgły",
    age: "50",
    distance: "300 kilometrów stąd",
    pictures: [andrzej1, andrzej2, andrzej3, andrzej4, andrzej5],
    interests: ["Podatki", "Kaczyński", "Polska rodzina", "500+"],
    active: true,
    reaction: "",
  },
  {
    name: "Janusz",
    description:
      "Oczywiście, że lałem dzieci. Dzieci czasami trzeba karać. To jest normalne i wszyscy to robią",
    age: "80",
    distance: "400 kilometrów stąd",
    pictures: [korwin1, korwin2, korwin3, korwin4],
    interests: ["Wole", "już", "nie", "sprawdzać", "co", "on", "pierdolił"],
    active: true,
    reaction: "",
  },
];

const ProfilesPage = () => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [matchProfile, setMatchProfile] = useState(false);
  const matchProfileIndex = 2;

  const navigate = useNavigate();

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
      console.log(currentProfileIndex, matchProfile);
      navigate("/saveMail");
    }

    if (currentProfileIndex < 3) setCurrentProfileIndex((prev) => prev + 1);
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
      <IconsLayer clickedIcon={(reaction) => clickedIconHandler(reaction)} />
    </div>
  );
};

export default ProfilesPage;
