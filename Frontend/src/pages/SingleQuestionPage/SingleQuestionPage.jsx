import classes from "./SingleQuestionPage.module.css";
import logo from "../../assets/tinder-logo-red.png";
import { useState } from "react";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


const answersArray=["Answer1","Answer2","Answer3","Answer4"];
const SingleQuestionPage = () => {
  const [isClicked0, setClicked0] = useState(false);
  const [isClicked1, setClicked1] = useState(false);
  const [isClicked2, setClicked2] = useState(false);
  const [isClicked3, setClicked3] = useState(false);
  // const [isClicked,setClicked]= useState([false,false,false,false])

  const changeAnswerHandler=(i)=>{
    switch (i){ //PRZEPRASZAM ZA TEGO BRUTE FORCE'A
      case 0:
        setClicked0(!isClicked0);
        setClicked1(false);
        setClicked2(false);
        setClicked3(false);
        break;
      case 1:
        setClicked1(!isClicked1);
        setClicked0(false);
        setClicked2(false);
        setClicked3(false);
        break;  
      case 2:
        setClicked2(!isClicked2);
        setClicked1(false);
        setClicked0(false);
        setClicked3(false);
        break;
      case 3:
        setClicked3(!isClicked3);
        setClicked1(false);
        setClicked2(false);
        setClicked0(false);
        break;        
    }
  }


  return(<>
    <div className={classes.proggresBar}></div>
    <main className={classes.SingleQuestionPage}>
      <header>
        <button type="button" className={classes.backButton}>
            <ChevronLeftIcon style={{fontSize:"60px", color:"gray"}} />
          </button>
        <h1 className={classes.Question}>I am a</h1>
      </header>
      <section className={classes.Answers}> 
        <ul>
          <li className={isClicked0 ? classes.Active : classes.Deactive} onClick={()=>changeAnswerHandler(0)}>{answersArray[0]}</li>
          <li className={isClicked1 ? classes.Active : classes.Deactive} onClick={()=>changeAnswerHandler(1)}>{answersArray[1]}</li>
          <li className={isClicked2 ? classes.Active : classes.Deactive} onClick={()=>changeAnswerHandler(2)}>{answersArray[2]}</li>
          <li className={isClicked3 ? classes.Active : classes.Deactive} onClick={()=>changeAnswerHandler(3)}>{answersArray[3]}</li>
        </ul>
        
      </section>
      <button className={classes.SubmitAnswer}>Continue</button>
    </main>
  </>);
};

export default SingleQuestionPage;
