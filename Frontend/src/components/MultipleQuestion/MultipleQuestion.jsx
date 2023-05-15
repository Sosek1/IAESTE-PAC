import classes from "./MultipleQuestion.module.css";
import { useEffect, useState } from "react";

const MultipleQuestion = (props) => {
  const [answers, setAnswers] = useState([
    { text: "Rower", marked: false, lastMarked: false },
    { text: "Kino", marked: false, lastMarked: false },
    { text: "Gotowanie", marked: false, lastMarked: false },
    { text: "Podróże", marked: false, lastMarked: false },
    { text: "Kodowanie", marked: false, lastMarked: false },
    { text: "Gry", marked: false, lastMarked: false },
    { text: "Wspinaczka", marked: false, lastMarked: false },
    { text: "Planszówki", marked: false, lastMarked: false },
    { text: "Gra na instrumencie", marked: false, lastMarked: false },
    { text: "Śpiewanie", marked: false, lastMarked: false },
    { text: "Konie", marked: false, lastMarked: false },
    { text: "Siłownia", marked: false, lastMarked: false },
    { text: "Sporty drużynowe", marked: false, lastMarked: false },
    { text: "Książki", marked: false, lastMarked: false },
    { text: "Clubbing", marked: false, lastMarked: false },
    { text: "Czwartek na miasteczku", marked: false, lastMarked: false },
    { text: "Chillowanie w plenerze", marked: false, lastMarked: false },
  ]);

  const [counter, setCounter] = useState(0);
  const [isContinueDisabled, setIsContinueDisabled] = useState(true);

  useEffect(() => {
    setIsContinueDisabled(counter === 0);
  }, [counter]);

  const wordClickHanlder = (obj) => {
    const copiedList = [...answers];
    const clickedAnswer = copiedList.find((item) => item.text == obj.text);

    if (counter < 5) {
      if (!clickedAnswer.marked) {
        clickedAnswer.marked = !clickedAnswer.marked;
        const lastAnswer = copiedList.find((item) => item.lastMarked === true);
        if (lastAnswer) {
          lastAnswer.lastMarked = false;
        }
        clickedAnswer.lastMarked = true;
        setCounter((prev) => prev + 1);
      } else {
        clickedAnswer.marked = !clickedAnswer.marked;
        setCounter((prev) => prev - 1);
      }
    } else if (counter === 5 && !clickedAnswer.marked) {
      const lastAnswer = copiedList.find((item) => item.lastMarked === true);
      lastAnswer.lastMarked = false;
      lastAnswer.marked = false;
      clickedAnswer.marked = !clickedAnswer.marked;
      clickedAnswer.lastMarked = true;
    } else if (counter > 0 && clickedAnswer.marked) {
      clickedAnswer.marked = !clickedAnswer.marked;
      setCounter((prev) => prev - 1);
    }
    setAnswers(copiedList);
  };

  const changeQuestionHandler = () => {
    const markedAnswers = answers.filter((answer) => answer.marked);
    props.nextQuestion(markedAnswers);
  };

  return (
    <>
      <section className={classes.multipleQuestionContainer}>
        <header>
          <h1>Najfajniejsze z wymienionych aktywności</h1>
          <p>
            Wybierz najfajniejsze aktywności żeby zobaczyć, z którą grupą w
            IAESTE masz najwięcej wspólnego!
          </p>
        </header>
        <ul>
          {answers.map((word, index) => (
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
        >
          {`Kontynuuj ${counter}/5`}
        </button>
      </section>
    </>
  );
};

export default MultipleQuestion;
