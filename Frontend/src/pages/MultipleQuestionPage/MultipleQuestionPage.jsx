import classes from "./MultipleQuestionPage.module.css";
// import logo from "../../assets/logo-white3.png";
import { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";


const MultipleQuestionPage = () => {
    //const [active, setActive] = useState(false);
    //const changeState = (value) => {
    //    setActive(value);
    //};
    let selected = 0;
    let selected_tags = [];

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
        }
        else{
            console.log("not yo");
            but.className = classes.disabled_large_button;
        }
    }

    const clicked = () => {
        if(active){
            selected_tags = [];
            for(let el of document.getElementsByTagName('li')){
                if(el.className.includes('_selected_')){
                    selected_tags.push(el.textContent);
        }
    }
    console.log(selected_tags[1]);
    }
    }

    return <main className={classes.container}>
    <div className={classes.progress_bar_container}>
        <div className={classes.progress_bar_fill}></div>
    </div>
    <button>
        <ChevronLeftIcon className={classes.icon}></ChevronLeftIcon>
    </button>
    <header className={classes.head}>
        <h1 className={classes.title}>Passions</h1>
        <p className={classes.text}>Let everyone know what you're passionate about,<br></br> by adding it to your profile.</p>
    </header>
    <ul className={classes.list}>
        <li className={classes.list_item} onClick={add}>jazda na rowerze</li>
        <li className={classes.list_item} onClick={add}>cos 123123421</li>
        <li className={classes.list_item} onClick={add}>dlugie</li>
        <li className={classes.list_item} onClick={add}>4</li>
        <li className={classes.list_item} onClick={add}>5</li>
        <li className={classes.list_item} onClick={add}>6</li>
        <li className={classes.list_item} onClick={add}>1</li>
        <li className={classes.list_item} onClick={add}>2</li>
        <li className={classes.list_item} onClick={add}>4</li>
        <li className={classes.list_item} onClick={add}>5</li>
        <li className={classes.list_item} onClick={add}>6</li>
        <li className={classes.list_item} onClick={add}>1</li>
        <li className={classes.list_item} onClick={add}>2</li>
        <li className={classes.list_item} onClick={add}>3</li>
        <li className={classes.list_item} onClick={add}>1</li>
        <li className={classes.list_item} onClick={add}>4</li>
        <li className={classes.list_item} onClick={add}>5</li>
        <li className={classes.list_item} onClick={add}>6</li>
        <li className={classes.list_item} onClick={add}>1</li>
        <li className={classes.list_item} onClick={add}>2</li>
        <li className={classes.list_item} onClick={add}>3</li>
        <li className={classes.list_item} onClick={add}>1</li>
    </ul>
    <button className={classes.disabled_large_button} id='but' onClick={clicked}>Continue 0/5</button>
</main>;
};

export default MultipleQuestionPage;
