import axios from "axios";
import { useState } from "react";

import "./arithmetic.css"

const Arithmetic = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const [useExpression, setUseExpression] = useState(true);

  const additionUrl = "http://127.0.0.1:5000/arithmetic/addition/";
  const subtractionUrl = "http://127.0.0.1:5000/arithmetic/subtraction/";
  const multiplicationUrl = "http://127.0.0.1:5000/arithmetic/multiplication/";
  const divisionUrl = "http://127.0.0.1:5000/arithmetic/division/";
  const exponentUrl = "http://127.0.0.1:5000/arithmetic/exponent/";
  const modulusUrl = "http://127.0.0.1:5000/arithmetic/modulo/";

  const expressionUrl = "http://127.0.0.1:5000/arithmetic/expression_eval/";

  const Makerequest = (data, url) => {
    axios
      .post(url, {
        data: data,
      })
      .then((response) => {
        setResult(response.data.result.toString());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const ops = ["/", "*", "+", "-", "^", "%"];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      useExpression
        ? evaluateExpression(calc + value)
        : performOperation(calc + value);
    }
  };

  const performOperation = (value) => {
    if (value.includes(ops[2])) {
      const num = value.split(ops[2]);
      const newNum = num.map((number) => {
        return parseFloat(number);
      });

      Makerequest(newNum, additionUrl);
    } else if (value.includes(ops[3])) {
      const num = value.split(ops[3]);
      const newNum = num.map((number) => {
        return parseFloat(number);
      });

      Makerequest(newNum, subtractionUrl);
    } else if (value.includes(ops[1])) {
      const num = value.split(ops[1]);
      const newNum = num.map((number) => {
        return parseFloat(number);
      });

      Makerequest(newNum, multiplicationUrl);
    } else if (value.includes(ops[0])) {
      const num = value.split(ops[0]);
      const newNum = num.map((number) => {
        return parseFloat(number);
      });

      Makerequest(newNum, divisionUrl);
    } else if (value.includes(ops[4])) {
      const num = value.split(ops[4]);
      const newNum = num.map((number) => {
        return parseFloat(number);
      });

      Makerequest(newNum, exponentUrl);
    } else if (value.includes(ops[5])) {
      const num = value.split(ops[5]);
      const newNum = num.map((number) => {
        return parseFloat(number);
      });

      Makerequest(newNum, modulusUrl);
    }
  };

  const evaluateExpression = (value) => {
    Makerequest(value, expressionUrl);
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
      <label>
        <input
          type="checkbox"
          value={useExpression}
          onClick={() => setUseExpression(!useExpression)}
        />
        One type operator
      </label>
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ""} {calc || "0"}
        </div>
        <div className="operators">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>x</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
        </div>
        <div className="operators">
          <button onClick={() => updateCalc("^")}>^</button>
          <button onClick={() => updateCalc("%")}>%</button>
          <button onClick={deleteLast}>DEL</button>
          <button
            onClick={() => {
              setCalc("");
              setResult("");
            }}
            style={{
              width: "100%",
              textAlign: "center",
            }}
          >
            CLS
          </button>
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
export default Arithmetic;
