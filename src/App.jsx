import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./component/Header";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
export default App;
