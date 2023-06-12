import classes from "./Warning.module.css";

const Warning = () => {
  return (
    <div className={classes.warningContainer}>
      <h1>Uwaga!</h1>
      <h2>
        Aplikacja jest nie jest dostosowana do komputerów oraz tabletów, ze
        względu na jej usecase
      </h2>
    </div>
  );
};

export default Warning;
