import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import "./index.css";
import App from "./App";

// Initialize Sentry before rendering the app
Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN, // Add this in Vercel Environment Variables
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <App />,
  document.getElementById("root")
);