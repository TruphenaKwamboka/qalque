import { Routes, Route, Link } from "react-router-dom";
import Arithmetic from "./Pages/arithmetic/Arithmetic";
import BMI from "./Pages/bmi/BMI";
import UnitConversion from "./Pages/unit/UnitConversion";
import CurrencyConversion from "./Pages/currency/CurrencyConversion";




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
        <Link to="/unit">UNIT CONVERSION</Link>
        <Link to="/currency">Currency Conversion</Link>
      </nav>
      {/* navbar */}

      {/* body */}
      <Routes>
        <Route path="/" element={<Arithmetic />} />
        <Route path="/bmi" element={<BMI />} />
        <Route path="/unit" element={<UnitConversion />} />
        <Route path="/currency" element={<CurrencyConversion />} />
      </Routes>
      {/* body */}
    </>
  );
}

export default App;
