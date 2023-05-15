import React, { useState, useContext } from "react";

export const QuestionsContext = React.createContext();

export const useQuestions = () => {
  return useContext(QuestionsContext);
};

export const QuestionContextProvider = (props) => {
  const [matchedGroup, setMatchedGroup] = useState([]);

  const matchGroupHandler = (group) => {
    setMatchedGroup(group);
  };
  console.log(matchedGroup);

  return (
    <QuestionsContext.Provider
      value={{ matchedGroup, onMatchGroup: matchGroupHandler }}
    >
      {props.children}
    </QuestionsContext.Provider>
  );
};
