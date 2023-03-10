import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./contextApi";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <AppProvider>
      <App />
    </AppProvider>
  </>
);
