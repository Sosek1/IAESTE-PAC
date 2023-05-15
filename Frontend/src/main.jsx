import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { QuestionContextProvider } from "./store/questions-context.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuestionContextProvider>
      <App />
    </QuestionContextProvider>
  </React.StrictMode>
);
