import React from "react";
import "../css/messagebox.css";

const MessageBox = ({ 
  isOpen, 
  onClose, 
  title, 
  message, 
  type = "success", // success, error, warning, info
  showCancel = false,
  onConfirm,
  confirmText = "OK",
  cancelText = "Cancel"
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    } else {
      onClose();
    }
  };

  const getIcon = () => {
    switch (type) {
      case "success":
        return "✓";
      case "error":
        return "✕";
      case "warning":
        return "⚠";
      case "info":
        return "ℹ";
      default:
        return "✓";
    }
  };

  return (
    <div className="message-box-backdrop" onClick={handleBackdropClick}>
      <div className={`message-box modal-${type}`}>
        <div className="message-box-header">
          <div className="message-box-icon">
            {getIcon()}
          </div>
          <h3 className="message-box-title">{title}</h3>
          <button 
            className="message-box-close" 
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>
        
        <div className="message-box-content">
          <p className="message-box-message">{message}</p>
        </div>
        
        <div className="message-box-actions">
          {showCancel && (
            <button 
              className="message-box-button message-box-button-cancel"
              onClick={onClose}
            >
              {cancelText}
            </button>
          )}
          <button 
            className={`message-box-button message-box-button-${type}`}
            onClick={handleConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
