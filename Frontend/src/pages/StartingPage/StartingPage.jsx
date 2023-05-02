import classes from "./StartingPage.module.css";
import logo from "../../assets/logo-white3.png";

const StartingPage = () => {
  return (
    <main className={classes.StartingPage}>
      <header>
        <img src = {logo}/>
        <h1>IAESTinder</h1>
      </header>
     </main>  
  );
};

export default StartingPage;
