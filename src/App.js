import { Routes, Route } from "react-router-dom";
import Arithmetic from "./Pages/arithmetic/Arithmetic";
import BMI from "./Pages/bmi/BMI";

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
