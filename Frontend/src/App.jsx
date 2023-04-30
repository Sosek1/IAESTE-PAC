import { createHashRouter, RouterProvider } from "react-router-dom";
import StartingPage from "./pages/StartingPage/StartingPage";
import QRpage from "./pages/QRPage/QRpage";
import InstructionPage from "./pages/InstructionPage/InstructionPage";
import MultipleQuestionPage from "./pages/MultipleQuestionPage/MultipleQuestionPage";
import SingleQuestionPage from "./pages/SingleQuestionPage/SingleQuestionPage";
import SaveMailPage from "./pages/SaveMailPage/SaveMailPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

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
        path: "saveMail",
        element: <SaveMailPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
