import { createHashRouter, RouterProvider } from "react-router-dom";
import StartingPage from "./pages/StartingPage/StartingPage";
import QRpage from "./pages/QRPage/QRpage";
import InstructionPage from "./pages/InstructionPage/InstructionPage";
import ProfilesPage from "./pages/ProfilesPage/ProfilesPage";
import SaveMailPage from "./pages/SaveMailPage/SaveMailPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import EndingPage from "./pages/EndingPage/EndingPage";
import Questions from "./pages/Questions/Questions";

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
      ,
      {
        path: "questions",
        element: <Questions />,
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
