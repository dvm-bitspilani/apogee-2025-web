import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./portfolio-fonts.css";
import "@fontsource/artifika/latin-400.css";
import "@fontsource/inter/latin-400.css";
import "@fontsource/josefin-sans/latin-400.css";
import "./global.scss";
import { Provider } from "react-redux";
import store from "../store/index.js";
import { BrowserRouter } from "react-router";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
    </HelmetProvider>
  </StrictMode>
);
