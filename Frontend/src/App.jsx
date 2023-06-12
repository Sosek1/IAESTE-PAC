import { HashRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Warning from "./components/Warning/Warning";

function App() {
  return (
    <>
      <Router>
        <AnimatedRoutes />
        {/* <Warning /> */}
      </Router>
    </>
  );
}

export default App;
