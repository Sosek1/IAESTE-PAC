import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useQuestions } from "../../store/questions-context";
import classes from "./Questions.module.css";
import ProgressBar from "../../components/SingleQuestion/ProgressBar";
import PreviousQuestionBar from "../../components/SingleQuestion/PreviousQuestionBar";
import MultipleQuestion from "../../components/MultipleQuestion/MultipleQuestion";
import SingleQuestion from "../../components/SingleQuestion/SingleQuestion";
import { QUESTIONS_DATA } from "../../data/questionsData";

const Questions = () => {
  const [answers, setAnswers] = useState([]);
  const [questionsIndex, setQuestionIndex] = useState(0);
  const [groupCounter, setGroupCounter] = useState({
    IT: 0,
    HR: 0,
    PR: 0,
    Grafika: 0,
    JFR: 0,
    IO: 0,
  });

  let sortedCounters = [];

  const { onMatchGroup } = useQuestions();

  const navigate = useNavigate();

  const nextQuestionHandler = (markedAnswer) => {
    setAnswers([...answers, markedAnswer]);
    if (questionsIndex < 5) {
      setQuestionIndex((prev) => prev + 1);
    }
    setTimeout(() => {
      if (questionsIndex === 5) {
        findBiggestCounter();
        navigate("/profiles");
      }
    }, 100);
  };

  const lastQuestionHandler = () => {
    setQuestionIndex((prev) => prev - 1);
  };

  useEffect(() => {
    for (const answer of answers) {
      let lastAnswer = answers[answers.length - 1];
      if (lastAnswer.length !== 5) {
        if (lastAnswer[1].split(" ").includes("IT")) {
          setGroupCounter((prev) => ({ ...prev, IT: prev.IT + 1 }));
        }
        if (lastAnswer[1].split(" ").includes("HR")) {
          setGroupCounter((prev) => ({ ...prev, HR: prev.HR + 1 }));
        }
        if (lastAnswer[1].split(" ").includes("PR")) {
          setGroupCounter((prev) => ({ ...prev, PR: prev.PR + 1 }));
        }
        if (lastAnswer[1].split(" ").includes("Grafika")) {
          setGroupCounter((prev) => ({ ...prev, Grafika: prev.Grafika + 1 }));
        }
        if (lastAnswer[1].split(" ").includes("JFR")) {
          setGroupCounter((prev) => ({ ...prev, JFR: prev.JFR + 1 }));
        }
        if (lastAnswer[1].split(" ").includes("IO")) {
          setGroupCounter((prev) => ({ ...prev, IO: prev.IO + 1 }));
        }
      }
    }
  }, [answers]);

  const findBiggestCounter = () => {
    for (const group in groupCounter) {
      sortedCounters.push([group, groupCounter[group]]);
    }
    sortedCounters.sort(function (a, b) {
      return a[1] - b[1];
    });
    onMatchGroup(sortedCounters[5][0]);
  };

  return (
    <main className={classes.questionsContainer}>
      <ProgressBar questionsIndex={questionsIndex} />
      <PreviousQuestionBar
        questionsIndex={questionsIndex}
        lastQuestion={lastQuestionHandler}
      />
      {QUESTIONS_DATA[questionsIndex].type === "single" ? (
        <SingleQuestion
          questionsData={QUESTIONS_DATA}
          questionsIndex={questionsIndex}
          nextQuestion={(markedAnswer) => nextQuestionHandler(markedAnswer)}
        />
      ) : (
        <MultipleQuestion
          questionsData={QUESTIONS_DATA}
          questionsIndex={questionsIndex}
          nextQuestion={(markedAnswer) => nextQuestionHandler(markedAnswer)}
        />
      )}
    </main>
  );
};

export default Questions;
