import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Loader } from "./ui-components";
import ThemeProvider from "./ui-theme";
import App from "./App";

import "./i18n";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <Suspense fallback={<Loader style={{ height: "100vh" }} />}>
          <App />
        </Suspense>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
