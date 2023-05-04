<<<<<<< Updated upstream
=======
import { Link } from "react-router-dom";
import classes from "./MultipleQuestionPage.module.css";
// import logo from "../../assets/logo-white3.png";
>>>>>>> Stashed changes
import { useState } from "react";
import classes from "./MultipleQuestionPage.module.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const MultipleQuestionPage = () => {
<<<<<<< Updated upstream
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
    clickedWord.marked = !clickedWord.marked;

    if (counter === 5) {
      if (clickedWord.marked) {
        clickedWord.marked == false;
        setCounter((prev) => prev - 1);
      } else {
        clickedWord.marked == true;
      }
=======
    //const [active, setActive] = useState(false);
    //const changeState = (value) => {
    //    setActive(value);
    //};
    let selected = 0;
    let selected_tags = [];
    const [isContinueDisabled, setIsContinueDisabled] = useState(true);

    function add(event){
        if(event.target.className.includes('_selected_')){
            event.target.className = classes.list_item;
            selected--;
        }
        else if (selected < 5){
            event.target.className = classes.selected;
            selected++;
        }
        const but = document.getElementById('but');
        but.textContent = `Continue ${selected}/5`;
        if(selected > 0){
            // problemy z changeState(psuje sie odliczanie) ;//
            // dlatego prymityne ale dzialajace rozwiazanie
            // gdy uzywam useState wtedy tak wyglada button className={active? classes.large_button : classes.disabled_large_button}
            console.log("yo");
            but.className = classes.large_button;
            setIsContinueDisabled(false);
        }
        else{
            console.log("not yo");
            but.className = classes.disabled_large_button;
            setIsContinueDisabled(true);
        }
>>>>>>> Stashed changes
    }

    if (clickedWord.marked) {
      setCounter((prev) => prev + 1);
    }
    if (!clickedWord.marked) {
      setCounter((prev) => prev - 1);
    }

<<<<<<< Updated upstream
    setRandomWords(copiedList);
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
  );
=======

    return <main className={classes.container}>
    <div className={classes.top}>
        <div className={classes.progress_bar_container}>
        <div className={classes.progress_bar_fill}></div>
        </div>
        <ChevronLeftIcon className={classes.icon}></ChevronLeftIcon>
    </div>
    <section className={classes.group}>
        <body className={classes.body}>
            <h1 className={classes.title}>Passions</h1>
            <p className={classes.text}>Let everyone know what you're passionate about,<br></br> by adding it to your profile.</p>
            <ul className={classes.list}>
                <li className={classes.list_item} onClick={add}>Jazda na rowerze</li>
                <li className={classes.list_item} onClick={add}>Gotowanie</li>
                <li className={classes.list_item} onClick={add}>Netflix</li>
                <li className={classes.list_item} onClick={add}>Fotografia</li>
                <li className={classes.list_item} onClick={add}>Sporty</li>
                <li className={classes.list_item} onClick={add}>Gorące źródła</li>
                <li className={classes.list_item} onClick={add}>Jedzenie uliczne</li>
                <li className={classes.list_item} onClick={add}>Koszykówka</li>
                <li className={classes.list_item} onClick={add}>Tandem językowy</li>
                <li className={classes.list_item} onClick={add}>Media społecznościowe</li>
                <li className={classes.list_item} onClick={add}>Slam poetycki</li>
                <li className={classes.list_item} onClick={add}>Hokej</li>
                <li className={classes.list_item} onClick={add}>Siłownia</li>
                <li className={classes.list_item} onClick={add}>Filmy</li>
                <li className={classes.list_item} onClick={add}>Pielęgnacja skóry</li>
                <li className={classes.list_item} onClick={add}>Jazda na deskorolce</li>
                <li className={classes.list_item} onClick={add}>Freediving</li>
                <li className={classes.list_item} onClick={add}>Karaoke</li>
                <li className={classes.list_item} onClick={add}>Feminizm</li>
                <li className={classes.list_item} onClick={add}>Zmiana klimatu</li>
                <li className={classes.list_item} onClick={add}>Wycieczki samochodowe</li>
                <li className={classes.list_item} onClick={add}>Jazda na nartach</li>
                <li className={classes.list_item} onClick={add}>Jazda na rowerze</li>
                <li className={classes.list_item} onClick={add}>Gotowanie</li>
                <li className={classes.list_item} onClick={add}>Netflix</li>
                <li className={classes.list_item} onClick={add}>Fotografia</li>
                <li className={classes.list_item} onClick={add}>Sporty</li>
                <li className={classes.list_item} onClick={add}>Gorące źródła</li>
                <li className={classes.list_item} onClick={add}>Jedzenie uliczne</li>
                <li className={classes.list_item} onClick={add}>Koszykówka</li>
                <li className={classes.list_item} onClick={add}>Tandem językowy</li>
                <li className={classes.list_item} onClick={add}>Media społecznościowe</li>
                <li className={classes.list_item} onClick={add}>Slam poetycki</li>
                <li className={classes.list_item} onClick={add}>Hokej</li>
                <li className={classes.list_item} onClick={add}>Siłownia</li>
                <li className={classes.list_item} onClick={add}>Filmy</li>
                <li className={classes.list_item} onClick={add}>Pielęgnacja skóry</li>
                <li className={classes.list_item} onClick={add}>Jazda na deskorolce</li>
                <li className={classes.list_item} onClick={add}>Freediving</li>
                <li className={classes.list_item} onClick={add}>Karaoke</li>
                <li className={classes.list_item} onClick={add}>Feminizm</li>
                <li className={classes.list_item} onClick={add}>Zmiana klimatu</li>
                <li className={classes.list_item} onClick={add}>Wycieczki samochodowe</li>
                <li className={classes.list_item} onClick={add}>Jazda na nartach</li>
            </ul>
        </body>
        <Link to="/singleQuestion" className={classes.Link}>
                <button className={isContinueDisabled ? classes.disabled_large_button : classes.large_button} 
                id='but' 
                onClick={clicked}
                disabled={isContinueDisabled}
                >
                Continue</button>
            </Link>
    </section>
</main>;
>>>>>>> Stashed changes
};

export default MultipleQuestionPage;
