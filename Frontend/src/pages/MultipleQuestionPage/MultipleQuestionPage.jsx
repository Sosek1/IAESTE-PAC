import classes from "./MultipleQuestionPage.module.css";
import logo from "../../assets/logo-white3.png";
import WhatshotIcon from '@mui/icons-material/Whatshot';

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
      <p className={classes.text}>Let everyone know what you're passionate about, by adding it to your profile.</p>
  </header>
  <ul className={classes.list}>
      <li className={classes.list_item}>1</li>
      <li className={classes.list_item}>2</li>
      <li className={classes.list_item}>3</li>
      <li className={classes.list_item}>4</li>
      <li className={classes.list_item}>5</li>
      <li className={classes.list_item}>6</li>
      <li className={classes.list_item}>1</li>
      <li className={classes.list_item}>2</li>
      <li className={classes.list_item}>3</li>
      <li className={classes.list_item}>4</li>
      <li className={classes.list_item}>5</li>
      <li className={classes.list_item}>6</li>
      <li className={classes.list_item}>1</li>
      <li className={classes.list_item}>2</li>
      <li className={classes.list_item}>3</li>
      <li className={classes.list_item}>1</li>
  </ul>
  <button className={classes.large_button}>Continue</button>
</div>;
};

export default MultipleQuestionPage;
