import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuestions } from "../../store/questions-context";
import classes from "./MultipleQuestionPage.module.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const MultipleQuestionPage = () => {
  const [counter, setCounter] = useState(0);
  const [isContinueDisabled, setIsContinueDisabled] = useState(true);

  const { interests, onUpdateInterests, onSendGroups } = useQuestions();

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
        setCounter((prev) => prev + 1);
      } else {
        clickedInterest.marked = false;
        setCounter((prev) => prev - 1);
      }
    } else if (counter === 5 && !clickedInterest.marked) {
      const last = copiedList.find((item) => item.lastMarked === true);
      last.lastMarked = false;
      last.marked = false;
      clickedInterest.marked = true;
      clickedInterest.lastMarked = true;
    } else if (counter > 0 && clickedInterest.marked) {
      clickedInterest.marked = false;
      setCounter((prev) => prev - 1);
    }
    onUpdateInterests(copiedList);
  };

  const continueHandler = () => {
    const groups = interests.filter((interest) => interest.marked);
    onSendGroups(groups);
  };

  return (
    <>
      <div className={classes.proggresBar}>
        <div className={classes.proggresBarFill}></div>
      </div>
      <main className={classes.MultipleQuestionPage}>
        <header className={classes.head}>
          <Link to="/singleQuestion" className={classes.linkBack}>
            <button type="button" className={classes.backButton}>
              <ChevronLeftIcon
                style={{
                  marginTop: "20px",
                  marginBottom: "15px",
                  fontSize: "50px",
                  color: "#b0b0b0",
                }}
              />
            </button>
          </Link>
          <h1 className={classes.title}>Pasje</h1>
          <h3 className={classes.titleDescription}>Opowiedz nam o nich!</h3>
        </header>
        <section className={classes.Answers}>
          <ul>
            {interests.map((word, index) => (
              <li
                className={`${classes.Deactive} ${
                  word.marked ? classes.Active : ""
                } `}
                key={index}
                onClick={() => wordClickHanlder(word)}
              >
                {word.text}
              </li>
            ))}
          </ul>
        </section>
        <Link to="/singleQuestion" className={classes.Link}>
          <button
            onClick={continueHandler}
            className={
              counter === 0
                ? classes.SubmitAnswerDisabled
                : classes.SubmitAnswer
            }
            disabled={isContinueDisabled}
          >
            {`Kontynuuj ${counter}/5`}
          </button>
        </Link>
      </main>
    </>
  );
};

export default MultipleQuestionPage;
