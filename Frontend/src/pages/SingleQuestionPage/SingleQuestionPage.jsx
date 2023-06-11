import classes from "./SingleQuestionPage.module.css";
import logo from "../../assets/inne/tinder-logo-red.webp";
import { useState, useEffect } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Link, useHref } from "react-router-dom";

const SingleQuestionPage = () => {
  const [isClicked, setClicked] = useState([false, false, false, false]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [counter, setCounter] = useState(0);
  const [isContinueDisabled, setIsContinueDisabled] = useState(true);

  const questionData = [
    {
      question: "Co jest w życiu najważniejsze?",
      answers: ["Doświadczenie", "Pieniądze", "Rodzina", "Sława"],
    },
    {
      question: "Pytanie dwa:",
      answers: ["odp1", "odp2", "odp3", "odp4"],
    },
    {
      question: "Pytanie trzy:",
      answers: ["odp1", "odp2"],
    },
  ];
  
  const ShowQuestion = (questionData, questionIndex) => {
    return (
      <>
        <h1 className={classes.Question}>
          {questionData[questionIndex].question}
        </h1>
      </>
    );
  };
  //Redux (store) może pomoże przekazywaniem zmiennych
  const ShowAnswers = (questionData, questionIndex) => {
    return (
      <>
        {questionData[questionIndex].answers.map((item, index) => (
          <li
            className={isClicked[index] ? classes.Active : classes.Deactive}
            onClick={() => changeAnswerHandler(index)}
          >
            {item}
          </li>
        ))}
      </>
    );
  };

  const newQuestion = () => {
    if (questionIndex < 3) {
      setQuestionIndex(questionIndex + 1);
    }
    setClicked([false, false, false, false]);
    setCounter(0);
  };

  useEffect(() => {
    console.log(counter);
    if (counter === 0) setIsContinueDisabled(true);
    if (counter === 1) setIsContinueDisabled(false);
    console.log(isContinueDisabled);
  });

  const changeAnswerHandler = (i) => {
    let checkArray = [false, false, false, false];
    for (let j = 0; j < isClicked.length; j++) {
      if (j == i) {
        checkArray[j] = !isClicked[j];
        if (checkArray[j]) {
          setCounter(1);
        } else {
          setCounter(0);
        }
        break;
      }
    }
    setClicked(checkArray);
  };

  return (
    <>
    <div className={classes.proggresBar}>
          <div className={classes.proggresBarFill}></div>
    </div>
      <main className={classes.SingleQuestionPage}>
        <header>
          <Link to="/multipleQuestion" className={classes.linkBack}>
            <button type="button" className={classes.backButton}>
              <ChevronLeftIcon style={{
                marginTop: "20px",
                marginBottom: "15px",
                fontSize: "50px",
                color: "#b0b0b0",
              }} />
            </button>
          </Link>
          {ShowQuestion(questionData, questionIndex)}
        </header>
        <section className={classes.Answers}>
          <ul>{ShowAnswers(questionData, questionIndex)}</ul>
        </section>
              
        <button
          onClick={() => {
            if (questionIndex === questionData.length - 1) {
              console.log("Navigate to profiles");
            } else {
              newQuestion();
            }
          }}
          className={
            counter === 1 ? classes.SubmitAnswer : classes.SubmitAnswerDisabled
          }
          disabled={isContinueDisabled}
        >
          {questionIndex === questionData.length - 1 && counter === 1 ? (
            <Link to="/profiles" className={classes.Link}>
              Kontynuuj
            </Link>
          ) : (
            "Kontynuuj"
          )}
        </button>
      </main>
    </>
  );
};

export default SingleQuestionPage;
