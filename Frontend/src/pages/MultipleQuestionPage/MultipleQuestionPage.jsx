import classes from "./MultipleQuestionPage.module.css";
import logo from "../../assets/logo-white3.png";
import WhatshotIcon from '@mui/icons-material/Whatshot';

const MultipleQuestionPage = () => {
  return <div>
    <div className={classes.progress}></div>
    <WhatshotIcon className={classes.icon}></WhatshotIcon>
    <div className={classes.container}>
      <header className={classes.header}>
        <h1 className={classes.title}>
          Passions
        </h1>
        <h4 className={classes.text}>
          Prosty Tekst
        </h4>
      </header>
      <ul className={classes.list}>
        <li className={classes.item}>sssssssssssś</li>
        <li className={classes.item}>XD</li>
        <li className={classes.item}>XD</li>
        <li className={classes.item}>XD</li>
        <li className={classes.item}>XD</li>
        <li className={classes.item}>XD</li>  
        <li className={classes.item}>sssssssssssś</li>
        <li className={classes.item}>XD</li>
        <li className={classes.item}>XD</li>
        <li className={classes.item}>XD</li>
        <li className={classes.item}>XD</li>
        <li className={classes.item}>XD</li>    
        
      </ul>
      <button className={classes.continue}>Continue</button>
    </div>
  </div>;
};

export default MultipleQuestionPage;
