import React from "react";

const Modal = ({ image, onClose }) => {
  return (
    <div className="modal">
      <span className="modal-close" onClick={onClose}>
        &times;
      </span>
      <img src={image} alt="Selected" className="modal-image" />
    </div>
  );
};

export default Modal;
