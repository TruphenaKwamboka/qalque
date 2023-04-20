import axios from "axios";
import { useState } from "react";

const Calculator = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const additionUrl = "http://127.0.0.1:5000/arithmetic/addition/";
  const subtractionUrl = "http://127.0.0.1:5000/arithmetic/subtraction/";
  const multiplicationUrl = "http://127.0.0.1:5000/arithmetic/multiplication/";
  const divisionUrl = "http://127.0.0.1:5000/arithmetic/division/";

  const Makerequest = (data, url) => {
    axios
      .post(url, {
        data: data,
      })
      .then((response) => {
        console.log(response.data.result);
        setResult(response.data.result.toString());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const ops = ["/", "*", "+", "-"];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      performOperation(calc + value);
      // setResult(eval(calc + value).toString());
    }
  };

  const performOperation = (value) => {
    if (value.includes(ops[2])) {
      const num = value.split(ops[2]);
      const newNum = num.map((number) => {
        return parseFloat(number);
      });

      console.log(newNum);

      Makerequest(newNum, additionUrl);
    } else if (value.includes(ops[3])) {
      const num = value.split(ops[3]);
      const newNum = num.map((number) => {
        return parseFloat(number);
      });

      console.log(newNum);

      Makerequest(newNum, subtractionUrl);
    } else if (value.includes(ops[1])) {
      const num = value.split(ops[1]);
      const newNum = num.map((number) => {
        return parseFloat(number);
      });

      console.log(newNum);

      Makerequest(newNum, multiplicationUrl);
    } else if (value.includes(ops[0])) {
      const num = value.split(ops[0]);
      const newNum = num.map((number) => {
        return parseFloat(number);
      });

      console.log(newNum);

      Makerequest(newNum, divisionUrl);
    }
  };

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };

  const calculate = () => {
    setCalc(result);
  };

  const deleteLast = () => {
    if (calc === "") {
      return;
    }

    const value = calc.slice(0, -1);

    setCalc(value);
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ""} {calc || "0"}
        </div>
        <div className="operators">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>x</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={deleteLast}>DEL</button>
        </div>
        <div className="operators">
          <button onClick={() => updateCalc("//")}>//</button>
          <button onClick={() => updateCalc("^")}>^</button>
          <button onClick={() => updateCalc("%")}>%</button>
          <button onClick={() => updateCalc("√")}>√</button>
          <button>CLS</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
