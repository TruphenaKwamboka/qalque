import "./unit.css"
import Form from "react-bootstrap/Form";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function UnitConversion() {
  const [fromUnit, setFromUnit] = useState("Kg");
  const [toUnit, setToUnit] = useState("lbs");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [currentConversion, setCurrentConversion] = useState("1");

  const onSelectChange = (event) => {
    console.log("event", event.target.value);
    const value = event.target.value;
    setCurrentConversion(event.target.value);

    if (event.target.value === "1") {
      setFromUnit("Kg");
      setToUnit("lbs");
    } else if (value === "2") {
      setFromUnit("m");
      setToUnit("cms");
    } else if (value === "3") {
      setFromUnit("l");
      setToUnit("ml");
    } else if (value === "4") {
      setFromUnit("Kg");
      setToUnit("g");
    } else if (value === "5") {
      setFromUnit("Km");
      setToUnit("m");
    } else if (value === "6") {
      setFromUnit("Inch");
      setToUnit("cm");
    }
  };

  const onValueChange = (event) => {
    setValue(event.target.value);
    if (currentConversion === "1") {
      setResult(parseFloat(event.target.value) * 2.20462);
    } else if (currentConversion === "2") {
      setResult(parseFloat(event.target.value) * 100);
    } else if (currentConversion === "3") {
      setResult(parseFloat(event.target.value) * 1000);
    } else if (currentConversion === "4") {
      setResult(parseFloat(event.target.value) * 1000);
    } else if (currentConversion === "5") {
      setResult(parseFloat(event.target.value) * 1000);
    } else if (currentConversion === "6") {
      setResult(parseFloat(event.target.value) * 2.54);
    }
  };

  const onResultChange = (event) => {
    setResult(event.target.value);
    if (currentConversion === "1") {
      setValue(parseFloat(event.target.value) / 2.20462);
    } else if (currentConversion === "2") {
      setValue(parseFloat(event.target.value) / 100);
    } else if (currentConversion === "3") {
      setValue(parseFloat(event.target.value) / 1000);
    } else if (currentConversion === "4") {
      setValue(parseFloat(event.target.value) / 1000);
    } else if (currentConversion === "5") {
      setValue(parseFloat(event.target.value) / 1000);
    } else if (currentConversion === "6") {
      setValue(parseFloat(event.target.value) / 2.54);
    }
  };
  return (
    <Form
      style={{
        width: "50%",
        margin: "auto",
        borderRadius: "0.5rem",
        border: "1px solid gray",
        backgroundColor: "whitesmoke",
      }}
    >
      <Form.Group className="mb-3" controlId="conversion">
        <Form.Label className="header">Select Your Conversion</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={onSelectChange}
        >
          <option>Open this select menu</option>
          <option value="1">Kg-lbs</option>
          <option value="2">m-cms</option>
          <option value="3">l-ml</option>
          <option value="4">Kg-g</option>
          <option value="5">Km-m</option>
          <option value="6">Inch-cm</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{fromUnit}</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter value"
          value={value}
          onChange={onValueChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{toUnit}</Form.Label>
        <Form.Control
          type="text"
          placeholder="Result"
          value={result}
          onChange={onResultChange}
        />
      </Form.Group>
    </Form>
  );
}
