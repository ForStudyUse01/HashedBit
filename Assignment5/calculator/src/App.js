import { useState } from "react";

function App() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [output, setOutput] = useState("");

  const handleCalculation = (operator) => {
    const a = parseFloat(value1);
    const b = parseFloat(value2);

    let result;

    switch (operator) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      case "/":
        result = b !== 0 ? a / b : "Error";
        break;
      default:
        result = "";
    }

    setOutput(result);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Simple Calculator</h2>

      {/* Inputs */}
      <input
        type="number"
        placeholder="First number"
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Second number"
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
      />
      <br /><br />

      {/* Buttons */}
      <button onClick={() => handleCalculation("+")}>+</button>
      <button onClick={() => handleCalculation("-")}>-</button>
      <button onClick={() => handleCalculation("*")}>*</button>
      <button onClick={() => handleCalculation("/")}>/</button>

      {/* Output */}
      <div style={{ marginTop: "20px" }}>
        <h3>Answer: {output}</h3>
      </div>
    </div>
  );
}

export default App;