import React from "react";
import "./snackbar.scss";
import { ReactComponent as ExclamationIcon } from "../../assets/images/exclamation.svg";
import { ReactComponent as CheckIcon } from "../../assets/images/check.svg";

export default function Snackbar({ hidden, positive, type, msg }) {
  return (
    <div className={`snackbar-container ${!hidden && "show-bar"}`}>
      <div
        className={`snackbar ${type==="positive"? "positive": "negative"}`}
      >
        <div className="msg">
         {type==="positive"? <CheckIcon />: <ExclamationIcon />}
          {msg}
        </div>
        <div className="progress-bar">
          <div className="progress-value"></div>
        </div>
      </div>
    </div>
  );
}
