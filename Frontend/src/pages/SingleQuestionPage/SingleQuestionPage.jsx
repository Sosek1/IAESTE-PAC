import classes from "./SingleQuestionPage.module.css";
import logo from "../../assets/tinder-logo-red.png";
import { useState, useEffect } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Link } from "react-router-dom";

const answersArray = ["Man", "Woman", "Answer3", "Answer4"];
const SingleQuestionPage = () => {
  const [isClicked0, setClicked0] = useState(false);
  const [isClicked1, setClicked1] = useState(false);
  const [isClicked2, setClicked2] = useState(false);
  const [isClicked3, setClicked3] = useState(false);

  const [isClicked, setClicked] = useState([false, false, false, false]);

  const [counter, setCounter] = useState(0);
  const [isContinueDisabled, setIsContinueDisabled] = useState(true);
  
  useEffect(() => {
    console.log(counter);
    if(counter === 0)
      setIsContinueDisabled(true);
    if(counter === 1)
    setIsContinueDisabled(false);
    console.log(isContinueDisabled);
  });

  const changeAnswerHandler = (i) => {
    let checkArray = [false, false, false, false];
    for (let j = 0; j < isClicked.length; j++) {
      if (j == i){
        checkArray[j] = !isClicked[j];
        if(checkArray[j]){
          setCounter(1);
        }else{
          setCounter(0);
        }
        break;
      }
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
          <Link to="/multipleQuestion" className={classes.linkBack}>
            <button type="button" className={classes.backButton}>
              <ChevronLeftIcon style={{ fontSize: "60px", color: "gray" }} />
            </button>
          </Link>
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
            <li
              className={isClicked[2] ? classes.Active : classes.Deactive}
              onClick={() => changeAnswerHandler(2)}
            >
              {answersArray[2]}
            </li>
          </ul>
        </section>
        <Link to="/saveMail" className={classes.Link}>  
          <button className={counter === 1 ? classes.SubmitAnswer : classes.SubmitAnswerDisabled}
          disabled={isContinueDisabled}>
              Kontynuuj
          </button>
        </Link>
      </main>
    </>
  );
};

export default SingleQuestionPage;
