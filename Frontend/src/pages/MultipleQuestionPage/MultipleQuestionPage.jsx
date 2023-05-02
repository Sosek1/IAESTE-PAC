import classes from "./MultipleQuestionPage.module.css";
import logo from "../../assets/logo-white3.png";
import WhatshotIcon from '@mui/icons-material/Whatshot';

let selected = 0;
var selected_tags = [];

function add(event){
  if(event.target.className.includes('_selected_')){
    event.target.className = classes.list_item;
    selected--;
  }
  else if (selected < 5){
    event.target.className = classes.selected;
    selected++;
  }
  document.getElementById('but').textContent = `Continue ${selected}/5`
}

function clicked(){
  selected_tags = [];
  for(let el of document.getElementsByTagName('li')){
    if(el.className.includes('_selected_')){
      selected_tags.push(el.textContent);
    }
  }
  console.log(selected_tags[1]);
}

const MultipleQuestionPage = () => {
  return <div className={classes.container}>
  <div className={classes.progress_bar_container}>
      <div className={classes.progress_bar_fill}></div>
  </div>
  <div>
      <WhatshotIcon className={classes.icon}></WhatshotIcon>
  </div>
  <header>
      <h1 className={classes.title}>Passions</h1>
      <p className={classes.text}>Let everyone know what you're passionate about,<br></br> by adding it to your profile.</p>
  </header>
  <ul className={classes.list}>
      <li className={classes.list_item} onClick={add}>jazda na rowerze</li>
      <li className={classes.list_item} onClick={add}>cos 123123421</li>
      <li className={classes.list_item} onClick={add}>dlugie </li>
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
  </ul>
  <button className={classes.large_button} id='but' onClick={clicked}>Continue 0/5</button>
</div>;
};

export default MultipleQuestionPage;
