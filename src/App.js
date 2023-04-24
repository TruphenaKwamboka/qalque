import { Routes, Route, Link } from "react-router-dom";
import Arithmetic from "./Pages/arithmetic/Arithmetic";
import BMI from "./Pages/bmi/BMI";

import "./index.css";

function App() {
  return (
    <>
      {/* navbar */}
      <nav
        className="navbar"
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "start",
        }}
      >
        <Link to="/">Arithmetic</Link>
        <Link to="/bmi">BMI</Link>
      </nav>
      {/* navbar */}

      {/* body */}
      <Routes>
        <Route path="/" element={<Arithmetic />} />
        <Route path="/bmi" element={<BMI />} />
      </Routes>
      {/* body */}
    </>
  );
}

export default App;
