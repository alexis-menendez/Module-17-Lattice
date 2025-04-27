import React from 'react';
import buttonStyles from '../assets/css/Button.module.css'; 

const FormButton = ({ children, type = "submit", isLoading = false, variant = "primary", ...props }) => {
  const getButtonClass = () => {
    if (variant === "primary") return buttonStyles.primaryButton;
    if (variant === "secondary") return buttonStyles.secondaryButton;
    if (variant === "danger") return buttonStyles.dangerButton;
    return buttonStyles.primaryButton;
  };

  return (
    <button
      type={type}
      className={getButtonClass()}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default FormButton;
