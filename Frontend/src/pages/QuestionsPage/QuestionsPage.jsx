import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useQuestions } from "../../store/questions-context";
import classes from "./QuestionsPage.module.css";
import { motion } from "framer-motion";
import ProgressBar from "../../components/SingleQuestion/ProgressBar";
import PreviousQuestionBar from "../../components/SingleQuestion/PreviousQuestionBar";
import MultipleQuestion from "../../components/MultipleQuestion/MultipleQuestion";
import SingleQuestion from "../../components/SingleQuestion/SingleQuestion";
import LoaderPage from "../LoaderPage/LoaderPage";
import { QUESTIONS_DATA } from "../../data/questionsData";

const QuestionsPage = () => {
  const [groups, setGroups] = useState([]);
  const [questionsIndex, setQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [groupCounters, setGroupCounters] = useState({
    IT: 0,
    HR: 0,
    PR: 0,
    Grafika: 0,
    JFR: 0,
    IO: 0,
  });

  const { onMatchGroup } = useQuestions();

  const navigate = useNavigate();

  const nextQuestionHandler = (markedAnswer) => {
    // console.log(markedAnswer);
    setGroups([...groups, markedAnswer]);

    if (questionsIndex < 5) {
      setQuestionIndex((prev) => prev + 1);
    }
    // using promise to save some time for groups state to update, without it didn't mange to update for last question
    if (questionsIndex === 5) {
      return new Promise((resolve) => {
        setLoading(true);
        setTimeout(resolve, 700);
        findBiggestCounter();
      }).then(() => {
        navigate("/profiles");
      });
    }
  };

  const lastQuestionHandler = () => {
    setQuestionIndex((prev) => prev - 1);
  };

  useEffect(() => {
    countGroupPoints();
  }, [groups]);

  const separatedGroups = [];
  const countGroupPoints = () => {
    const groupArrays = groups
      .filter((group) => group !== "brak")
      .map((group) => group.split(" "));

    for (let group of groupArrays) {
      separatedGroups.push(...group);
    }

    if (questionsIndex === 5) {
      for (let group of separatedGroups) {
        addPoints(group);
      }
    }
  };

  const addPoints = (group) => {
    setGroupCounters((prevCounters) => ({
      ...prevCounters,
      [group]: prevCounters[group] + 1,
    }));
  };

  // console.log(groupCounters);

  const findBiggestCounter = () => {
    console.log(groups);
    const sortedCounters = [];
    for (const group in groupCounters) {
      sortedCounters.push([group, groupCounters[group]]);
    }
    sortedCounters.sort(function (a, b) {
      return a[1] - b[1];
    });
    // console.log(sortedCounters[5]);
    // console.log(sortedCounters);
    onMatchGroup(sortedCounters[5]);
  };

  return (
    <motion.main
      className={classes.questionsContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ProgressBar questionsIndex={questionsIndex} />
      <PreviousQuestionBar
        questionsIndex={questionsIndex}
        lastQuestion={lastQuestionHandler}
      />
      {loading && <LoaderPage />}
      {QUESTIONS_DATA[questionsIndex].type === "single" ? (
        <SingleQuestion
          questionsData={QUESTIONS_DATA}
          questionsIndex={questionsIndex}
          nextQuestion={(markedAnswer, indexx) =>
            nextQuestionHandler(markedAnswer)
          }
        />
      ) : (
        <MultipleQuestion
          questionsData={QUESTIONS_DATA}
          questionsIndex={questionsIndex}
          nextQuestion={(markedAnswer, index) =>
            nextQuestionHandler(markedAnswer)
          }
        />
      )}
    </motion.main>
  );
};

export default QuestionsPage;
