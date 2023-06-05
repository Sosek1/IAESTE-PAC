import classes from "./SingleQuestion.module.css";
import { useState } from "react";

const SingleQuestion = (props) => {
  const [clickedAnswer, setClickedAnswer] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [anyAnswerClicked, setAnyAnswerClicked] = useState(false);
  const [markedAnswer, setMarkedAnswer] = useState("");

  const changeAnswerHandler = (index) => {
    let checkArray = [false, false, false, false];
    for (let j = 0; j < clickedAnswer.length; j++) {
      if (j === index) {
        checkArray[j] = !clickedAnswer[j];
        if (checkArray[j]) {
          setAnyAnswerClicked(true);
          setMarkedAnswer(
            props.questionsData[props.questionsIndex].answers[index]
          );
        } else {
          setAnyAnswerClicked(false);
        }
        break;
      }
    }
    setClickedAnswer(checkArray);
  };

  const changeQuestionHandler = () => {
    props.nextQuestion(markedAnswer);
    setClickedAnswer([false, false, false, false]);
    setAnyAnswerClicked(false);
  };

  return (
    <>
      <section className={classes.singleQuestionContainer}>
        <header>
          <h1>{props.questionsData[props.questionsIndex].question}</h1>
        </header>
        <ul>
          {props.questionsData[props.questionsIndex].answers.map(
            (answer, index) => (
              <li
                onClick={() => changeAnswerHandler(index)}
                className={
                  clickedAnswer[index]
                    ? classes.activeAnswer
                    : classes.deactiveAnswer
                }
                key={index}
              >
                {answer[0]}
              </li>
            )
          )}
        </ul>

        <button
          onClick={changeQuestionHandler}
          className={
            !anyAnswerClicked
              ? classes.submitAnswerDisabled
              : classes.submitAnswerEnabled
          }
          disabled={!anyAnswerClicked}
        >
          Kontynuuj
        </button>
      </section>
    </>
  );
};

export default SingleQuestion;
