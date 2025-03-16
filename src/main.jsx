import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/styles/index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router";
import { Provider } from "react-redux";
import { store } from "./stores";
import "./i18n";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </StrictMode>
);
