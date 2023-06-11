import { useEffect } from "react";
import { useQuestions } from "../../store/questions-context";
import classes from "./MultipleQuestion.module.css";

const MultipleQuestion = (props) => {
  const {
    interests,
    isContinueDisabled,
    counter,
    onUpdateInterests,
    setIsContinueDisabled,
    setCounter,
  } = useQuestions();

  useEffect(() => {
    setIsContinueDisabled(counter === 0);
  }, [counter]);

  const wordClickHanlder = (interestObj) => {
    const copiedList = [...interests];
    const clickedInterest = copiedList.find(
      (item) => item.text == interestObj.text
    );

    if (counter < 5) {
      if (!clickedInterest.marked) {
        clickedInterest.marked = true;
        const last = copiedList.find((item) => item.lastMarked === true);
        if (last) {
          last.lastMarked = false;
        }
        clickedInterest.lastMarked = true;
        setCounter(1);
      } else {
        clickedInterest.marked = false;
        setCounter(-1);
      }
    } else if (counter === 5 && !clickedInterest.marked) {
      const last = copiedList.find((item) => item.lastMarked === true);
      last.lastMarked = false;
      last.marked = false;
      clickedInterest.marked = true;
      clickedInterest.lastMarked = true;
    } else if (counter > 0 && clickedInterest.marked) {
      clickedInterest.marked = false;
      setCounter(-1);
    }
    onUpdateInterests(copiedList);
  };

  const changeQuestionHandler = () => {
    const markedInterests = interests
      .filter((interest) => interest.marked)
      .map((interest) => interest.group)
      .toString()
      .replaceAll(",", " ");

    if (counter === 5) {
      props.nextQuestion(markedInterests);
    }
  };

  return (
    <section className={classes.multipleQuestionContainer}>
      <header>
        <h1>Najfajniejsze z wymienionych aktywności</h1>
        <p>
          Wybierz najfajniejsze aktywności żeby zobaczyć, z którą grupą w IAESTE
          masz najwięcej wspólnego!
        </p>
      </header>
      <ul>
        {interests.map((word, index) => (
          <li
            className={`${word.marked ? classes.activeWord : ""}`}
            key={index}
            onClick={() => wordClickHanlder(word)}
          >
            {word.text}
          </li>
        ))}
      </ul>
      <button
        onClick={changeQuestionHandler}
        className={
          counter === 0 ? classes.disabledButton : classes.activeButton
        }
        disabled={isContinueDisabled}
      >
        {`Kontynuuj ${counter}/5`}
      </button>
    </section>
  );
};

export default MultipleQuestion;
