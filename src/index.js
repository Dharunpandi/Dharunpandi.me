import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import "./index.css";
import App from "./App";

Sentry.init({
  dsn: "https://674578bb53f63cc263e1b420aa5efaaf@o4510979721396224.ingest.us.sentry.io/4510980882563072",
  sendDefaultPii: true
});

ReactDOM.render(
  <Sentry.ErrorBoundary fallback={<div>An error has occurred</div>}>
    <App />
  </Sentry.ErrorBoundary>,
  document.getElementById("root")   // ✅ must match index.html
);