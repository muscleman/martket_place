import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { StoreProvider } from "./store/store-reducer";
import "./style/style.css";
import "./style/queries.css";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.querySelector("#root")
);
