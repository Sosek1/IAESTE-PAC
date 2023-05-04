import classes from "./SingleQuestionPage.module.css";
import logo from "../../assets/tinder-logo-red.png";
import { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const answersArray = ["Man", "Woman", "Answer3", "Answer4"];
const SingleQuestionPage = () => {
  const [isClicked0, setClicked0] = useState(false);
  const [isClicked1, setClicked1] = useState(false);
  const [isClicked2, setClicked2] = useState(false);
  const [isClicked3, setClicked3] = useState(false);

  const [isClicked, setClicked] = useState([false, false, false, false]);

  const changeAnswerHandler = (i) => {
    let checkArray = [false, false, false, false];
    for (let j = 0; j < isClicked.length; j++) {
      if (j == i) checkArray[j] = !isClicked[j];
    }
    setClicked(checkArray);
  };

  return (
    <>
      <main className={classes.SingleQuestionPage}>
        <div className={classes.proggresBar}>
          <div className={classes.proggresBarFill}></div>
        </div>
        <header>
          <button type="button" className={classes.backButton}>
            <ChevronLeftIcon style={{ fontSize: "60px", color: "gray" }} />
          </button>
          <h1 className={classes.Question}>I am a</h1>
        </header>
        <section className={classes.Answers}>
          <ul>
            <li
              className={isClicked[0] ? classes.Active : classes.Deactive}
              onClick={() => changeAnswerHandler(0)}
            >
              {answersArray[0]}
            </li>
            <li
              className={isClicked[1] ? classes.Active : classes.Deactive}
              onClick={() => changeAnswerHandler(1)}
            >
              {answersArray[1]}
            </li>
          </ul>
        </section>
        <button className={classes.SubmitAnswer}>Continue</button>
      </main>
    </>
  );
};

export default SingleQuestionPage;
