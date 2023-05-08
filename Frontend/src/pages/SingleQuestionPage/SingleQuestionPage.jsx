import classes from "./SingleQuestionPage.module.css";
import logo from "../../assets/tinder-logo-red.png";
import { useState, useEffect } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Link, useHref } from "react-router-dom";



const SingleQuestionPage = () => {


  const [isClicked, setClicked] = useState([false, false, false, false]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [counter, setCounter] = useState(0);
  const [isContinueDisabled, setIsContinueDisabled] = useState(true);

  const questionData=[
    {
      question:"Jestem:",
      answers:["Mężczyzną","Kobieta","Helikopterem bojowym"]
    },
    {
      question:"Pytanie dwa:",
      answers:["odp1","odp2","odp3","odp4"]
    },
    {
      question:"Pytanie trzy:",
      answers:["odp1","odp2"]
    }
      
  ];

//Redux (store) może pomoże przekazywaniem zmiennych 
  const ShowQuestion=(questionData, questionIndex)=>{
    return (
      <>
        <header>
                <h1 className={classes.Question}>{questionData[questionIndex].question}</h1>
        </header>
        <section className={classes.Answers}>
        <ul>
          {questionData[questionIndex].answers.map((item, index)=>(
              <li
              className={isClicked[index] ? classes.Active : classes.Deactive}
              onClick={() => changeAnswerHandler(index)}
            >
              {item}
            </li>
          ))}
        </ul>
        </section>
      </>
    )
  }
  
  const newQuestion=()=>{
    if(questionIndex<3){
    setQuestionIndex(questionIndex+1);
    }
    setClicked([false,false,false,false])
    setCounter(0);
  }

  useEffect(() => {
    console.log(counter);
    if (counter === 0) setIsContinueDisabled(true);
    if (counter === 1) setIsContinueDisabled(false);
    console.log(isContinueDisabled);
  });

  const changeAnswerHandler = (i) => {
    let checkArray = [false, false, false, false];
    for (let j = 0; j < isClicked.length; j++) {
      if (j == i) {
        checkArray[j] = !isClicked[j];
        if (checkArray[j]) {
          setCounter(1);
        } else {
          setCounter(0);
        }
        break;
      }
    }
    setClicked(checkArray);
  };

  return (
    <>
      <main className={classes.SingleQuestionPage}>
        <div className={classes.proggresBar}>
          <div className={classes.proggresBarFill}></div>
        </div>
        <header>
          <Link to="/multipleQuestion" className={classes.linkBack}>
            <button type="button" className={classes.backButton}>
              <ChevronLeftIcon style={{ fontSize: "60px", color: "gray" }} />
            </button>
          </Link>
        </header>
          {ShowQuestion(questionData,questionIndex)}
        {/*wymyślić jak przejść do następnej strony, i zablokować wyjście poza tablice*/}
         {/* <Link to="/profiles" className={classes.Link}> */}
          <button onClick={newQuestion}
            className={
              counter === 1
                ? classes.SubmitAnswer
                : classes.SubmitAnswerDisabled
            }
            disabled={isContinueDisabled}
          >
            Kontynuuj
          </button>
        {/* </Link>  */}
      </main>
    </>
  );
};

export default SingleQuestionPage;
