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

  window.addEventListener("resize", () => {
    let screenOrientation = null;

    if (window.innerWidth > window.innerHeight) {
      screenOrientation = "landscape";
    } else {
      screenOrientation = "portrait";
    }

    if (screenOrientation === "portrait") {
      setShowWarning(false);
    } else if (screenOrientation === "landscape") {
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
