import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { TextProvider } from "./Context/Context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TextProvider>
        <App />
      </TextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
