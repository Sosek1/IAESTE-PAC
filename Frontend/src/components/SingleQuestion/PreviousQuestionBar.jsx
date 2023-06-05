import React from "react";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const PreviousQuestionBar = (props) => {
  return (
    <>
      {props.questionsIndex === 0 ? (
        <Link to={`/instruction`}>
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
          onClick={props.lastQuestion}
          style={{
            marginTop: "23px",
            marginBottom: "15px",
            fontSize: "50px",
            color: "#b0b0b0",
          }}
        ></ChevronLeftIcon>
      )}
    </>
  );
};

export default PreviousQuestionBar;
