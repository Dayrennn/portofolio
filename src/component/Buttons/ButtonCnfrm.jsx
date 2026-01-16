import React from "react";
import Button from "react-bootstrap/Button";

function ButtonConfirm({ children, onClick, variant, type = "button" }) {
  return (
    <button
      className={`btn ${variant === "outline" ? "btn-outline" : ""}`}
      onClick={onClick} // pastikan onClick diteruskan
      type={type}
    >
      {children}
    </button>
  );
}

export default ButtonConfirm;
