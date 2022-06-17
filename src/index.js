import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
<<<<<<< HEAD:src/index.js
import { Provider } from "react-redux";
import store from "./redux/store";
=======
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/customTheme";
>>>>>>> upstream/main:shop/src/index.js

const root = ReactDOM.createRoot(document.querySelector("#root"));
const persistor = persistStore(store);

root.render(
  <React.StrictMode>
<<<<<<< HEAD:src/index.js
    <Provider store={store}>
      <App />
    </Provider>
=======
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
>>>>>>> upstream/main:shop/src/index.js
  </React.StrictMode>
);
