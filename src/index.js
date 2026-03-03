import React from "react";
import { createRoot } from "react-dom/client"; // ✅ must import createRoot from react-dom/client
import * as Sentry from "@sentry/react";
import "./index.css";
import App from "./App";

// Initialize Sentry
Sentry.init({
  dsn: "https://674578bb53f63cc263e1b420aa5efaaf@o4510979721396224.ingest.us.sentry.io/4510980882563072",
  sendDefaultPii: true
});

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <Sentry.ErrorBoundary fallback={<div>An error has occurred</div>}>
    <App />
  </Sentry.ErrorBoundary>
);