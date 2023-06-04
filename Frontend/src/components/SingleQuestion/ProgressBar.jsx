import classes from "./ProgressBar.module.css";
const ProgressBar = ({ questionsIndex }) => {
  return (
    <div className={classes.progressBarContainer}>
      <div
        className={classes.progressBarFill}
        style={{ width: `${16.66 * questionsIndex + 1}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
