import { createHashRouter, RouterProvider } from "react-router-dom";
import StartingPage from "./pages/StartingPage/StartingPage";
import QRpage from "./pages/QRPage/QRpage";
import InstructionPage from "./pages/InstructionPage/InstructionPage";
import MultipleQuestionPage from "./pages/MultipleQuestionPage/MultipleQuestionPage";
import SingleQuestionPage from "./pages/SingleQuestionPage/SingleQuestionPage";
import ProfilesPage from "./pages/ProfilesPage/ProfilesPage";
import SaveMailPage from "./pages/SaveMailPage/SaveMailPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import EndingPage from "./pages/EndingPage/EndingPage";

const router = createHashRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <StartingPage />,
      },
      {
        path: "QR",
        element: <QRpage />,
      },
      {
        path: "instruction",
        element: <InstructionPage />,
      },
      {
        path: "multipleQuestion",
        element: <MultipleQuestionPage />,
      },
      {
        path: "singleQuestion",
        element: <SingleQuestionPage />,
      },
      {
        path: "profiles",
        element: <ProfilesPage />,
      },
      {
        path: "saveMail",
        element: <SaveMailPage />,
      },
      {
        path: "theend",
        element: <EndingPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
