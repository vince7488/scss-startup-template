import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {TestThemeProvider} from './ThemeProvider.tsx';
import "./main.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TestThemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TestThemeProvider>
);
