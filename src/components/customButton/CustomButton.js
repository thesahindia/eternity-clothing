import React from "react";
import "./button.scss";
const CustomButton = ({ children, btn, onClick, color, height, width}) => {
  return <button className={`button ${btn}`} style={{backgroundColor:color, height, width}} onClick={onClick}>{children}</button>;
};

export default CustomButton;
