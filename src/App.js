import "./App.css";
import Home from "./pages/Home";

function App() {
  // Test error
  throw new Error("Sentry test error from App.js!");

  return <Home />;
}

export default App;