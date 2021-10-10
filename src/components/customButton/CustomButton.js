import React from "react";
import "./button.scss";
const CustomButton = ({ children, size, onClick }) => {
  return <button className={`button ${size}`} onClick={onClick}>{children}</button>;
};

export default CustomButton;
