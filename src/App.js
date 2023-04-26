import { Routes, Route, Link } from "react-router-dom";
import Arithmetic from "./Pages/arithmetic/Arithmetic";
import BMI from "./Pages/bmi/BMI";
import UnitConversion from "./Pages/unit/UnitConversion";
import "./index.css";
// import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


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
      </nav>
      {/* navbar */}

      {/* body */}
      <Routes>
        <Route path="/" element={<Arithmetic />} />
        <Route path="/bmi" element={<BMI />} />
        <Route path="/unit" element={<UnitConversion />} />
      </Routes>
      {/* body */}
    </>
  );
}

export default App;
