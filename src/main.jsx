import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PokeContextProvider } from "./context/PokeContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/PiplupPedia">
      <PokeContextProvider>
        <App />
      </PokeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
