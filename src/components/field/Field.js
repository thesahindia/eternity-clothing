import React from "react";
import "./field.scss";
const Field = ({ label, ...otherInputProps }) => {
  return (
    <div className="fieldContainer">
      <input className="input" {...otherInputProps} placeholder=" " />
      {label ? <label className="label">{label}</label> : null}
    </div>
  );
};

export default Field;
