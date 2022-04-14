import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { StoreProvider } from "./store/store-reducer";
import "./assets/scss/style.scss";
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <CookiesProvider>
        <App/>
      </CookiesProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.querySelector("#root")
);
