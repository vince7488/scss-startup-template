import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {TestThemeProvider} from './ThemeProvider';
import "./main.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TestThemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TestThemeProvider>
);
