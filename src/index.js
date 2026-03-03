import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import "./index.css";
import App from "./App";

// Initialize Sentry before rendering the app
Sentry.init({
  dsn: "https://674578bb53f63cc263e1b420aa5efaaf@o4510979721396224.ingest.us.sentry.io/4510980882563072",
  sendDefaultPii: true
});

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <Sentry.ErrorBoundary fallback={"An error has occurred"}>
    <App />
  </Sentry.ErrorBoundary>
);