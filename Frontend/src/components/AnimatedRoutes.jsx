import { Route, Routes, useLocation } from "react-router-dom";
import StartingPage from "../pages/StartingPage/StartingPage";
import QRpage from "../pages/QRPage/QRpage";
import InstructionPage from "../pages/InstructionPage/InstructionPage";
import ProfilesPage from "../pages/ProfilesPage/ProfilesPage";
import SaveMailPage from "../pages/SaveMailPage/SaveMailPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import EndingPage from "../pages/EndingPage/EndingPage";
import QuestionsPage from "../pages/QuestionsPage/QuestionsPage";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<StartingPage />} />
        <Route path="QR" element={<QRpage />} />
        <Route path="instruction" element={<InstructionPage />}></Route>
        <Route
          path="questions"
          element={<QuestionsPage />}
          errorElement={<ErrorPage />}
        ></Route>
        <Route path="profiles" element={<ProfilesPage />}></Route>
        <Route path="saveMail" element={<SaveMailPage />}></Route>
        <Route path="endingPage" element={<EndingPage />}></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
