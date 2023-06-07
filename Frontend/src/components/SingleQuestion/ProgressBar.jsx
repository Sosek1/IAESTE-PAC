import classes from "./ProgressBar.module.css";
const ProgressBar = ({ questionsIndex }) => {
  console.log(questionsIndex);
  return (
    <div className={classes.progressBarContainer}>
      <div
        className={classes.progressBarFill}
        style={{
          width: `${questionsIndex === 0 ? 0 : 20 * questionsIndex}%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
