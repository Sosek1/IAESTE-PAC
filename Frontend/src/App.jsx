import { useEffect, useState } from "react";
import { HashRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Warning from "./components/Warning/Warning";

function App() {
  const [showWarning, setShowWarning] = useState(null);
  const [portraitWidth, setPortraitWidth] = useState(null);

  useEffect(() => {
    if (window.innerWidth < 500) {
      setPortraitWidth(window.innerWidth);
      setShowWarning(false);
    }
  }, []);

  window.screen.orientation.addEventListener("change", (e) => {
    let screenOrientation = e.currentTarget.type;

    if (screenOrientation === "portrait-primary") {
      setShowWarning(false);
    } else if (screenOrientation === "landscape-primary") {
      if (portraitWidth < 500) {
        setShowWarning(true);
      } else {
        setShowWarning(false);
      }
    }
  });
  return (
    <>
      <Router>
        {!showWarning && <AnimatedRoutes />}
        {showWarning && <Warning />}
      </Router>
    </>
  );
}

export default App;
