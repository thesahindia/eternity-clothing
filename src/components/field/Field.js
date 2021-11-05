import React from "react";
import "./field.scss";
const Field = ({ label, placeholder, ...otherInputProps }) => {
  return (
    <div className="fieldContainer">
      {label ? <label className="label">{label}</label> : null}
      <input className="input" autoComplete="off" {...otherInputProps} placeholder={placeholder} />
    </div>
  );
};

export default Field;
