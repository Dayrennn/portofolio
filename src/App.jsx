import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./Error/404"; // Impor dengan nama yang sesuai
import Header from "./component/Header";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
