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

  const [multipleQuestionGroups, setMultipleQuestionGrups] = useState([]);

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

  const sendMultipleQuestionGroupsHandler = (groups) => {
    setMultipleQuestionGrups(groups);
  };

  console.log(multipleQuestionGroups);

  return (
    <QuestionsContext.Provider
      value={{
        matchedGroup,
        singleQuestionState,
        interests: multipleQuestionState,
        onMatchGroup: matchGroupHandler,
        onUpdateSingleQuestions: updateSingleQuestionsStateHandler,
        onUpdateInterests: updateMultipleQuestionsStateHandler,
        onSendGroups: sendMultipleQuestionGroupsHandler,
      }}
    >
      {props.children}
    </QuestionsContext.Provider>
  );
};
