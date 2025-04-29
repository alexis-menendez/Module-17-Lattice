// Module-17-Lattice/client/src/components/common/Modal.jsx

import React from 'react';
import modalStyles from '../assets/css/Modal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={modalStyles.modalOverlay} onClick={handleOverlayClick}>
      <div className={modalStyles.modalContent}>
        <button 
          className={modalStyles.closeButton}
          onClick={onClose}
          aria-label="Close Modal"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
