// client/src/components/common/Modal.tsx

import React, { ReactNode, MouseEvent } from 'react';
import modalStyles from '../../assets/css/common/Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
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
