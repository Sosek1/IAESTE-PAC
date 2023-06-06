import classes from "./SingleQuestion.module.css";
import { useState } from "react";
import { useQuestions } from "../../store/questions-context";

const SingleQuestion = (props) => {
  const { questionState, onUpdateQuestions } = useQuestions();

  const changeAnswerHandler = (index) => {
    let checkArray = [false, false, false, false];
    for (
      let i = 0;
      i < questionState[props.questionsIndex].clickedAnswer.length;
      i++
    ) {
      if (i === index) {
        checkArray[i] = !questionState[props.questionsIndex].clickedAnswer[i];
        if (checkArray[i]) {
          onUpdateQuestions(true, props.questionsIndex);
          onUpdateQuestions(
            props.questionsData[props.questionsIndex].answers[index],
            props.questionsIndex
          );
        } else {
          onUpdateQuestions(false, props.questionsIndex);
        }
        break;
      }
    }
    onUpdateQuestions(checkArray, props.questionsIndex);
  };

  const changeQuestionHandler = () => {
    props.nextQuestion(questionState[props.questionsIndex].markedAnswer);
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
                  questionState[props.questionsIndex].clickedAnswer[index]
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
            !questionState[props.questionsIndex].anyAnswerClicked
              ? classes.submitAnswerDisabled
              : classes.submitAnswerEnabled
          }
          disabled={!questionState[props.questionsIndex].anyAnswerClicked}
        >
          Kontynuuj
        </button>
      </section>
    </>
  );
};

export default SingleQuestion;
