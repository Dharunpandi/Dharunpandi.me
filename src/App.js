import "./App.css";
import Home from "./pages/Home";
import * as Sentry from "@sentry/react";

function App() {
  // Function to safely send a test error to Sentry
  const sendTestError = () => {
    Sentry.captureException(new Error("Test error from App.js"));
    alert("Sentry test error sent!");
  };

  return (
    <div>
      {/* Your Home component */}
      <Home />

      {/* Safe button to test Sentry */}
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
        Send Test Error to Sentry
      </button>
    </div>
  );
}

export default App;