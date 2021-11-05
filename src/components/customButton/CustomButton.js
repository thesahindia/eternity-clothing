import React from "react";
import "./button.scss";
const CustomButton = ({ children, btn, onClick, color, height, width, fontSize, shadow}) => {
  return <button className={`button ${btn}`} style={{backgroundColor:color, height, width, fontSize, boxShadow: shadow?"0 6px 11px #8080804a":'' }} onClick={onClick}>{children}</button>;
};

export default CustomButton;
