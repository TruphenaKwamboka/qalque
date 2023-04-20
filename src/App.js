import { Routes, Route } from "react-router-dom";
import Arithmetic from "./Pages/Arithmetic";
import BMI from "./Pages/BMI";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Arithmetic />} />
        <Route path="/bmi" element={<BMI />} />
      </Routes>
    </>
  );
}

export default App;
