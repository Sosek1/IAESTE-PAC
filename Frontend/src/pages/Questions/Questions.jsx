import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useQuestions } from "../../store/questions-context";
import classes from "./Questions.module.css";
import MultipleQuestion from "../../components/MultipleQuestion/MultipleQuestion";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SingleQuestion from "../../components/SingleQuestion/SingleQuestion";

const Questions = () => {
  const questionsData = [
    {
      question: "Największy Polak to?",
      answers: [
        ["Mariusz Pudzianowski", "HR"],
        ["Adam Małysz", "JFR"],
        ["Jan Paweł II", "Grafika IO PR"],
        ["Kubica", "IT"],
      ],
      type: "single",
    },
    {
      question: "Co jest w życiu najważniejsze?",
      answers: [
        ["Doswiadczenia", "Grafika IT"],
        ["Pieniądze", "IO JFR"],
        ["Sława", " "],
        ["Rodzina", "HR PR"],
      ],
      type: "single",
    },
    {
      type: "multiple",
    },
    {
      question: "Najlepszy sztuciec:",
      answers: [
        ["Łyżka", "HR IO"],
        ["Nóż", " "],
        ["Widelec", "Grafika"],
        ["Pałeczki do suhshi", "IT PR"],
      ],
      type: "single",
    },
    {
      question: "Czym jest pyton?",
      answers: [
        ["Wąż", "HR IO JFR"],
        ["Język", "IT Grafika"],
        ["Znak zodikau", "PR"],
        ["Godło slytherinu", " "],
      ],

      type: "single",
    },
    {
      question: "Wybierz klasę postaci?",
      answers: [
        ["Wojownik", "HR"],
        ["Mag", "Grafika IO MAG PR"],
        ["Palladyn", " "],
        ["Łotrzyk", "IT"],
      ],
      type: "single",
    },
  ];

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
      <div className={classes.progressBarContainer}>
        <div
          className={classes.progressBarFill}
          style={{ width: `${16.66 * questionsIndex + 1}%` }}
        ></div>
      </div>
      {questionsIndex === 0 ? (
        <Link to="/instruction">
          <ChevronLeftIcon
            style={{
              marginTop: "23px",
              marginBottom: "15px",
              fontSize: "50px",
              color: "#b0b0b0",
            }}
          ></ChevronLeftIcon>
        </Link>
      ) : (
        <ChevronLeftIcon
          onClick={lastQuestionHandler}
          style={{
            marginTop: "23px",
            marginBottom: "15px",
            fontSize: "50px",
            color: "#b0b0b0",
          }}
        ></ChevronLeftIcon>
      )}

      {questionsData[questionsIndex].type === "single" ? (
        <SingleQuestion
          questionsData={questionsData}
          questionsIndex={questionsIndex}
          nextQuestion={(markedAnswer) => nextQuestionHandler(markedAnswer)}
        />
      ) : (
        <MultipleQuestion
          questionsData={questionsData}
          questionsIndex={questionsIndex}
          nextQuestion={(markedAnswer) => nextQuestionHandler(markedAnswer)}
        />
      )}
    </main>
  );
};

export default Questions;
