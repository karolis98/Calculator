import React, { useState } from "react";
import Button from "./Button";
import Display from "./Display";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "C",
  ];
  return (
    <div
      style={{
        width: "300px",
        margin: "50px auto",
        textAlign: "center",
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <Display value={input} />

      <div>
        {buttons.map((btn) => (
          <Button
            key={btn}
            label={btn}
            onClick={() => handleButtonClick(btn)}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
