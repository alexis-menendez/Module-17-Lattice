// client/src/components/form/FormButton.tsx

import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import buttonStyles from '../../assets/css/common/Button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'danger';

interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading?: boolean;
  variant?: ButtonVariant;
}

const FormButton: React.FC<FormButtonProps> = ({
  children,
  type = 'submit',
  isLoading = false,
  variant = 'primary',
  ...props
}) => {
  const getButtonClass = () => {
    if (variant === 'primary') return buttonStyles.primaryButton;
    if (variant === 'secondary') return buttonStyles.secondaryButton;
    if (variant === 'danger') return buttonStyles.dangerButton;
    return buttonStyles.primaryButton;
  };

  return (
    <button
      type={type}
      className={getButtonClass()}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export default FormButton;
