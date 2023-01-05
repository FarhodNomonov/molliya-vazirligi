import React from "react";
import "./modal.css";

function Modal({ text = "Try again" }) {
  return (
    <div className="modal">
      <div className="modal_intrn"></div>
      <div className="modal_container">
        <h1>{text}</h1>
      </div>
    </div>
  );
}

export default Modal;
