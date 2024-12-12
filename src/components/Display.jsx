import React from "react";

const Display = ({ value }) => {
  return (
    <div
      style={{
        height: "60px",
        marginBottom: "10px",
        fontSize: "24px",
        border: "1px solid #ccc",
        textAlign: "right",
        padding: "10px",
      }}
    >
      {value}
    </div>
  );
};

export default Display;
