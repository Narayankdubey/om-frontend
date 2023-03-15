import { BrowserRouter } from "react-router-dom";

import "./App.css";
import { AnimatedRoutes } from "./components";

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
