import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        width: "60px",
        height: "60px",
        margin: "5px",
        fontSize: "18px",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
