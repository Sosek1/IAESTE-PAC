import React, { useState, useContext } from "react";

export const QuestionsContext = React.createContext();

export const useQuestions = () => {
  return useContext(QuestionsContext);
};

const QUESTIONS_STATE = [
  {
    clickedAnswer: [false, false, false, false],
    anyAnswerClicked: false,
    markedAnswer: [],
  },
  {
    clickedAnswer: [false, false, false, false],
    anyAnswerClicked: false,
    markedAnswer: [],
  },
  {
    clickedAnswer: [false, false, false, false],
    anyAnswerClicked: false,
    markedAnswer: [],
  },
  {
    clickedAnswer: [false, false, false, false],
    anyAnswerClicked: false,
    markedAnswer: [],
  },
  {
    clickedAnswer: [false, false, false, false],
    anyAnswerClicked: false,
    markedAnswer: [],
  },
  {
    clickedAnswer: [false, false, false, false],
    anyAnswerClicked: false,
    markedAnswer: [],
  },
  {
    clickedAnswer: [false, false, false, false],
    anyAnswerClicked: false,
    markedAnswer: [],
  },
];

export const QuestionContextProvider = (props) => {
  const [matchedGroup, setMatchedGroup] = useState([]);
  const [questionState, setQuestionsState] = useState(QUESTIONS_STATE);

  const matchGroupHandler = (group) => {
    setMatchedGroup(group);
  };

  const updateQuestionsStateHandler = (updatedProperty, questionIndex) => {
    setQuestionsState((prevQuestionsState) => {
      const updatedArr = [...prevQuestionsState];
      let updatedObject = {};

      if (Array.isArray(updatedProperty) && updatedProperty.length === 4) {
        updatedObject = {
          ...updatedArr[questionIndex],
          clickedAnswer: updatedProperty,
        };
      }
      if (Array.isArray(updatedProperty) && updatedProperty.length !== 4) {
        updatedObject = {
          ...updatedArr[questionIndex],
          markedAnswer: updatedProperty,
        };
      }
      if (typeof updatedProperty === "boolean") {
        updatedObject = {
          ...updatedArr[questionIndex],
          anyAnswerClicked: updatedProperty,
        };
      }
      updatedArr[questionIndex] = updatedObject;
      console.log(updatedArr);
      return updatedArr;
    });
  };

  return (
    <QuestionsContext.Provider
      value={{
        matchedGroup,
        questionState,
        onMatchGroup: matchGroupHandler,
        onUpdateQuestions: updateQuestionsStateHandler,
      }}
    >
      {props.children}
    </QuestionsContext.Provider>
  );
};
