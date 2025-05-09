// client/src/components/common/ErrorMessage.tsx

import React from 'react';
import styles from '../../assets/css/common/Form.module.css';

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;

  return (
    <p className={styles.errorMessage}>
      {message}
    </p>
  );
};

export default ErrorMessage;
