import Router from "preact-router";
import { About } from "./routes/About";
import { Home } from "./routes/Home";
import "./app.css";

const App = ({ path }: { path?: string }) => {
  return (
    <Router url={path}>
      <Home path="/" />
      <About path="/about" />
    </Router>
  );
};

export default App;
