import React from "react";
import './MessagePopup.css'

function MessagePopup({ isOpen, message, onClose, isError}) {

  return (
    <div className={`popup ${isOpen && " popup_opened"}`}>
      <div className="popup__container">
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
          aria-label="Закрыть"
        ></button>
        <h2 className={`popup__title ${isError && "popup__title_type_error"}`}>{message}</h2>
      </div>
    </div>
  )
}

export default MessagePopup;