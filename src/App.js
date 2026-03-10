import "./App.css";
import Home from "./pages/Home";
import * as Sentry from "@sentry/react";

function App() {

  const sendTestError = () => {
    Sentry.captureMessage("Test message from App.js");
    alert("Sentry test message sent!");
  };

  return (
    <div>
      <Home />

      <button
        onClick={sendTestError}
        style={{
          marginTop: "20px",
          padding: "10px 15px",
          backgroundColor: "#f44336",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Send Test Message to Sentry
      </button>
    </div>
  );
}

export default App;