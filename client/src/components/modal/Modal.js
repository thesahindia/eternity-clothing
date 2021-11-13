import React from "react";
import ReactDOM from "react-dom";
import "./modal.scss"
export default function Modal({ open, children, onClose }) {
  if (!open) return null;
  return ReactDOM.createPortal(
      <>
      <div className="overlay"></div>
    <div className="modal">
      <button className="close-btn" onClick={onClose}>&#10005;</button>
      {children}
    </div>
    </>, document.getElementById("portal")
  )
}
