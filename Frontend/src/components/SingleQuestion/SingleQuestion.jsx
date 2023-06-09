import classes from "./SingleQuestion.module.css";
import { useQuestions } from "../../store/questions-context";

const SingleQuestion = (props) => {
  const { singleQuestionState, onUpdateSingleQuestions } = useQuestions();

  const changeAnswerHandler = (index) => {
    let checkArray = [false, false, false, false];
    for (
      let i = 0;
      i < singleQuestionState[props.questionsIndex].clickedAnswer.length;
      i++
    ) {
      if (i === index) {
        checkArray[i] =
          !singleQuestionState[props.questionsIndex].clickedAnswer[i];
        if (checkArray[i]) {
          onUpdateSingleQuestions(true, props.questionsIndex);
          onUpdateSingleQuestions(
            props.questionsData[props.questionsIndex].answers[index],
            props.questionsIndex
          );
        } else {
          onUpdateSingleQuestions(false, props.questionsIndex);
        }
        break;
      }
    }
    onUpdateSingleQuestions(checkArray, props.questionsIndex);
  };

  const changeQuestionHandler = () => {
    props.nextQuestion(singleQuestionState[props.questionsIndex].markedAnswer);
  };

  return (
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
                singleQuestionState[props.questionsIndex].clickedAnswer[index]
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
          !singleQuestionState[props.questionsIndex].anyAnswerClicked
            ? classes.submitAnswerDisabled
            : classes.submitAnswerEnabled
        }
        disabled={!singleQuestionState[props.questionsIndex].anyAnswerClicked}
      >
        Kontynuuj
      </button>
    </section>
  );
};

export default SingleQuestion;
