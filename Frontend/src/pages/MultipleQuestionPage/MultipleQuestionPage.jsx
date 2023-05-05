import { Link } from "react-router-dom";
import classes from "./MultipleQuestionPage.module.css";
import { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const MultipleQuestionPage = () => {
    const [randomWords, setRandomWords] = useState([
        { text: "Giraffe", marked: false, lastMarked: false },
        { text: "Penguin", marked: false, lastMarked: false },
        { text: "Cinnamon", marked: false, lastMarked: false },
        { text: "Banana", marked: false, lastMarked: false },
        { text: "Thunder", marked: false, lastMarked: false },
        { text: "Lighthouse", marked: false, lastMarked: false },
        { text: "Lavender", marked: false, lastMarked: false },
        { text: "Honeycomb", marked: false, lastMarked: false },
        { text: "Frosting", marked: false, lastMarked: false },
        { text: "Sapphire", marked: false, lastMarked: false },
        { text: "Butterfly", marked: false, lastMarked: false },
        { text: "Pluto", marked: false, lastMarked: false },
        { text: "Galaxy", marked: false, lastMarked: false },
        { text: "Mushroom", marked: false, lastMarked: false },
      ]);
    
      const [counter, setCounter] = useState(0);
    
      const wordClickHanlder = (obj) => {
        const copiedList = [...randomWords];
        const clickedWord = copiedList.find((item) => item.text == obj.text);
        console.log(clickedWord.marked);
        
        if(counter < 5){
          if(!clickedWord.marked){
            clickedWord.marked = !clickedWord.marked;
            setCounter((prev) => prev + 1);
          }
          else{
            clickedWord.marked = !clickedWord.marked;
            setCounter((prev) => prev - 1);
          }
        }
        else if(counter > 0 && clickedWord.marked){
            clickedWord.marked = !clickedWord.marked;
            setCounter((prev) => prev - 1);
        }
        setRandomWords(copiedList);
        /*if (counter === 5) {
          if (clickedWord.marked) {
            clickedWord.marked == false;
            setCounter((prev) => prev - 1);
          } else {
            clickedWord.marked == true;
          }}

          if (clickedWord.marked) {
            setCounter((prev) => prev + 1);
          }
          if (!clickedWord.marked) {
            setCounter((prev) => prev - 1);
          }setRandomWords(copiedList);*/
        };
      
        return (
          <main className={classes.container}>
            <div className={classes.progress_bar_container}>
              <div className={classes.progress_bar_fill}></div>
            </div>
            <ChevronLeftIcon
              style={{
                marginTop: "20px",
                marginBottom: "15px",
                fontSize: "50px",
                color: "#b0b0b0",
              }}
            ></ChevronLeftIcon>
            <header className={classes.head}>
              <h1 className={classes.title}>Passions</h1>
              <p className={classes.text}>
                Let everyone know what you're passionate about,<br></br> by adding it
                to your profile.
              </p>
            </header>
            <ul className={classes.list}>
              {randomWords.map((word, index) => (
                <li
                  className={`${classes.list_item} ${
                    word.marked ? classes.list_item_active : ""
                  } `}
                  key={index}
                  onClick={() => wordClickHanlder(word)}
                >
                  {word.text}
                </li>
              ))}
            </ul>
            <button
              className={classes.large_button}
            >{`Kontynuuj ${counter}/5`}</button>
          </main>
        );};

        export default MultipleQuestionPage;