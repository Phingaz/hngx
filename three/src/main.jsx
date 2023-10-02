import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import { MainCtxProvider } from "./Contex.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainCtxProvider>
      <App />
    </MainCtxProvider>
  </React.StrictMode>
);