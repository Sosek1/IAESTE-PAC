import React, { useState, useContext } from "react";
import {
  SINGLE_QUESTIONS_STATE,
  MULTIPLE_QUESTION_STATE,
} from "../data/questionsDefaultState";

export const QuestionsContext = React.createContext();

export const useQuestions = () => {
  return useContext(QuestionsContext);
};

export const QuestionContextProvider = (props) => {
  const [matchedGroup, setMatchedGroup] = useState([]);
  const [singleQuestionState, setSingleQuestionsState] = useState(
    SINGLE_QUESTIONS_STATE
  );
  const [multipleQuestionState, setMultipleQuestionState] = useState(
    MULTIPLE_QUESTION_STATE
  );

  const [multipleQuestionHelpers, setMultipleQuestionHelpers] = useState({
    isContinueDisabled: true,
    counter: 0,
  });

  const matchGroupHandler = (group) => {
    setMatchedGroup(group);
  };

  const updateSingleQuestionsStateHandler = (
    updatedProperty,
    questionIndex
  ) => {
    setSingleQuestionsState((prevQuestionsState) => {
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
      return updatedArr;
    });
  };

  const updateMultipleQuestionsStateHandler = (data) => {
    setMultipleQuestionState(data);
  };

  const continueDisabledHandler = (data) => {
    setMultipleQuestionHelpers({
      ...multipleQuestionHelpers,
      isContinueDisabled: data,
    });
  };

  const counterHanlder = (value) => {
    setMultipleQuestionHelpers((prev) => ({
      ...multipleQuestionHelpers,
      counter: prev.counter + value,
    }));
  };

  return (
    <QuestionsContext.Provider
      value={{
        matchedGroup,
        singleQuestionState,
        interests: multipleQuestionState,
        isContinueDisabled: multipleQuestionHelpers.isContinueDisabled,
        counter: multipleQuestionHelpers.counter,
        onMatchGroup: matchGroupHandler,
        onUpdateSingleQuestions: updateSingleQuestionsStateHandler,
        onUpdateInterests: updateMultipleQuestionsStateHandler,
        setIsContinueDisabled: continueDisabledHandler,
        setCounter: counterHanlder,
      }}
    >
      {props.children}
    </QuestionsContext.Provider>
  );
};
