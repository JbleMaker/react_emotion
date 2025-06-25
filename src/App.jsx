import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Designer from "./Components/Designer/Designer";
import MainRouter from "./Routers/MainRouter";

function App() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;
