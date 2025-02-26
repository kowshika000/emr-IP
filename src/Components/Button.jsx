import React from "react";

const Button = ({ btnName, direction, onClick }) => {
  const bgColor =
    btnName === "Close" || btnName === "Delete" ? "#fc4c4c" : "#2b9aca";
  return (
    <div style={{ display: "flex", justifyContent: direction, gap: "10px" }}>
      <button
        style={{
          backgroundColor: bgColor,
          color: "white",
          border: "none",
          borderRadius: "8px",
          padding: "6px",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        {btnName}
      </button>
    </div>
  );
};

export default Button;
