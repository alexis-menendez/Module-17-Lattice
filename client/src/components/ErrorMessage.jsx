import React from 'react';
import styles from '../assets/css/Form.module.css'; // Reusing error styles from Form.module.css

const ErrorMessage = ({ message }) => {
  if (!message) return null; // If no message provided, don't render anything

  return (
    <p className={styles.errorMessage}>
      {message}
    </p>
  );
};

export default ErrorMessage;
