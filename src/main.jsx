import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  //  <StrictMode>
  <ReduxProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxProvider>
  // </StrictMode>
);
