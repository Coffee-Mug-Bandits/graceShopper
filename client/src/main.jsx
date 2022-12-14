import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import store from "./store";
import { StoreProvider } from "easy-peasy";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider store={store}>
        <App />
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);
