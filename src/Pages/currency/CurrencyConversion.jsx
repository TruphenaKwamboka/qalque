import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function CurrencyConversion() {
  const [fromUnit, setFromUnit] = useState("Ksh.");
  const [toUnit, setToUnit] = useState("us dollars");

  const onSelectChange = (event) => {
    console.log("event", event.target.value);
    const value = event.target.value;
    

    if (event.target.value === "1") {
      setFromUnit("Ksh");
      setToUnit("us dollars");
    } else if (value === "2") {
      setFromUnit("Ksh");
      setToUnit("ugSh");
    } else if (value === "3") {
      setFromUnit("Ksh");
      setToUnit("TzSh");
    } else if (value === "4") {
      setFromUnit("Ksh");
      setToUnit("pound");
    } else if (value === "5") {
      setFromUnit("Ksh");
      setToUnit("indianRupee");
    } else if (value === "6") {
      setFromUnit("Ksh");
      setToUnit("Euro");
    }
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="header">Select Your Conversion</Form.Label>
        <Form.Select aria-label="Default select example" onChange={onSelectChange}>
          <option>Open this select menu</option>
          <option value="1">Ksh-us dollars</option>
          <option value="2">Ksh-ugSh</option>
          <option value="3">Ksh-TzSh</option>
          <option value="4">Ksh-pound</option>
          <option value="5">Ksh-indianRupee</option>
          <option value="6">Ksh-Euro</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{fromUnit}</Form.Label>
        <Form.Control type="text" placeholder="Enter value"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{toUnit}</Form.Label>
        <Form.Control type="text" placeholder="Result" />
      </Form.Group>
    </Form>
  );
}
