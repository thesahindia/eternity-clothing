import React from "react";
import "./button.scss";
const CustomButton = ({ children, btn, onClick, color, height, width, fontSize}) => {
  return <button className={`button ${btn}`} style={{backgroundColor:color, height, width, fontSize}} onClick={onClick}>{children}</button>;
};

export default CustomButton;
