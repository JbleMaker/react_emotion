import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import Designer from "../Components/Designer/Designer";
import Flower from "../Components/Flower/Flower";
import Header from "../Components/Header/Header";

function MainRouter(props) {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/react_emotion" element={<Home />} />
        <Route path="/react_emotion/designer" element={<Designer />} />
        <Route path="/react_emotion/flower" element={<Flower />} />
      </Routes>
    </>
  );
}

export default MainRouter;
