import { Link } from "react-router-dom";
import classes from "./MultipleQuestionPage.module.css";
import { useEffect, useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const MultipleQuestionPage = () => {
    const [randomWords, setRandomWords] = useState([
        { text: "Rower", marked: false, lastMarked: false },
        { text: "Kino", marked: false, lastMarked: false },
        { text: "Gotowanie", marked: false, lastMarked: false },
        { text: "Podróże", marked: false, lastMarked: false },
        { text: "Wspinaczka", marked: false, lastMarked: false },
        { text: "Planszówki", marked: false, lastMarked: false },
        { text: "Gry", marked: false, lastMarked: false },
        { text: "Konie", marked: false, lastMarked: false },
        { text: "Kodowaie", marked: false, lastMarked: false },
        { text: "Książki", marked: false, lastMarked: false },
        { text: "Śpiewanie", marked: false, lastMarked: false },
        { text: "Sporty drużynowe", marked: false, lastMarked: false },
      ]);
    
      const [counter, setCounter] = useState(0);
      const [isContinueDisabled, setIsContinueDisabled] = useState(true);
      
      useEffect(() => {setIsContinueDisabled(counter === 0);}, [counter]);

      const wordClickHanlder = (obj) => {
        const copiedList = [...randomWords];
        const clickedWord = copiedList.find((item) => item.text == obj.text);

        if(counter < 5){
          if(!clickedWord.marked){
            clickedWord.marked = !clickedWord.marked;
            const last = copiedList.find((item) => item.lastMarked === true);
            if(last){
              last.lastMarked = false;
            }
            clickedWord.lastMarked = true;
            setCounter((prev) => prev + 1);
          }
          else{
            clickedWord.marked = !clickedWord.marked;
            setCounter((prev) => prev - 1);
          }
        }
        else if(counter === 5 && !clickedWord.marked){
          const last = copiedList.find((item) => item.lastMarked === true);
          last.lastMarked = false;
          last.marked = false;
          clickedWord.marked = !clickedWord.marked;
          clickedWord.lastMarked = true;
          console.log('Yo');
        }
        else if(counter > 0 && clickedWord.marked){
            clickedWord.marked = !clickedWord.marked;
            setCounter((prev) => prev - 1);
        }
        setRandomWords(copiedList);
        };
      
        return (
        <>          
          <div className={classes.proggresBar}>
            <div className={classes.proggresBarFill}></div>
          </div>
          <main className={classes.MultipleQuestionPage}>
            <header className={classes.head}>
              <Link to="/instruction" className={classes.linkBack}>
                <button type="button" className={classes.backButton}>
                  <ChevronLeftIcon style={{
                    marginTop: "20px",
                    marginBottom: "15px",
                    fontSize: "50px",
                    color: "#b0b0b0",
                  }} />
                </button>
              </Link>
              <h1 className={classes.title}>
                  Pasje
              </h1>
              <h3 className={classes.titleDescription}>
                  Opowiedz nam o nich!
              </h3>
            </header>
            <section className={classes.Answers}>
              <ul>{randomWords.map((word, index) => (
                    <li
                    className={`${classes.Deactive} ${
                        word.marked ? classes.Active : ""
                    } `}
                    key={index}
                    onClick={() => wordClickHanlder(word)}
                    >
                        {word.text}
                    </li>
                ))}</ul>
            </section>
            <Link to="/singleQuestion" className={classes.Link}>  
                <button className={counter === 0 ? classes.SubmitAnswerDisabled : classes.SubmitAnswer} 
                disabled={isContinueDisabled}>
                    {`Kontynuuj ${counter}/5`}
                </button>
            </Link>
          </main>
          </>
        );};

        export default MultipleQuestionPage;

  