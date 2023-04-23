import React, { useState } from "react";
import Underweight from "../images/skinny.jpg";
import Healthy from "../images/healthy.jpg";
import Overweight from "../images/overweight.png";
import Obese from "../images/obese.jpg";

export default function BMI() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let imgSrc;
  
  let calculateBmi = (event) => {
    event.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Invalid input");
    } else {
      let bmi = weight / (height / 100) ** 2;
      setBmi(bmi.toFixed(2));

      if (bmi < 18.5) {
        setMessage("You are Underweight");
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        setMessage("You are Normal");
      } else if (bmi >= 25 && bmi <= 29.9) {
        setMessage("You are Overweight");
      } else {
        setMessage("You are Obese");
      }
    }
    // let imgSrc;
    if (bmi < 1) {
      imgSrc = null;
    } else if (bmi < 18.5) {
      imgSrc = { Underweight };
    } else if (bmi >= 18.5 && bmi <= 24.5) {
      imgSrc = { Healthy };
    } else if (bmi >= 25 && bmi <= 29.9) {
      imgSrc = { Overweight };
    } else {
      imgSrc = { Obese };
    }
  };

  return (
    <div className="bmi">
      <div className="container">
        <h2 className="center">BMI calculator</h2>
        <form onSubmit={calculateBmi}>
          <div>
            <label>Weight in (Kg)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height in (Cm)</label>
            <input value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <button className="button" type="submit">
            Submit
          </button>
          <button className="reload">Reload</button>
        </form>
        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
        <div className="img-container">
          <img src={imgSrc} alt=""></img>
        </div>
      </div>
    </div>
  );
}
