import classes from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <main className={classes.errorPage}>
      <header>
        <h1>Wystąpił błąd, przepraszamy</h1>
        <h2>
          Prawdopodobnie grupa do któej pasujesz nie wysłała nam jeszcze danych
          i nie ma stowrzonego profilu :D
        </h2>
      </header>
    </main>
  );
};

export default ErrorPage;