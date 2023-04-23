import React, { useState } from "react";
import underweight from "../images/skinny.jpg";
import healthy from "../images/healthy.jpg";
import overweight from "../images/overweight.png";
import obese from "../images/obese.jpg";

export default function BMI() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  const [imgSrc, setImgSrc] = useState(null);

  let calculateBmi = (event) => {
    event.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Invalid input");
    } else {
      let answer = weight / (height / 100) ** 2;
      setBmi(answer.toFixed(2));
    }
    
    if (bmi < 18.5) {
      setMessage("You are underweight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setMessage("You are Normal");
    } else if (bmi >= 25 && bmi <= 29.9) {
      setMessage("You are overweight");
    } else {
      setMessage("You are obese");
    }

    if (bmi < 1) {
      setImgSrc(null);
    } else if (bmi < 18.5) {
      setImgSrc(underweight);
    } else if (bmi >= 18.5 && bmi <= 24.5) {
      setImgSrc(healthy);
    } else if (bmi >= 25 && bmi <= 29.9) {
      setImgSrc(overweight);
    } else {
      setImgSrc(obese);
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
