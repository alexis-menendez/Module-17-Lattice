// Module-17-Lattice/client/src/components/common/ErrorMessage.jsx

import React from 'react';
import formStyles from '../../assets/css/common/Form.module.css'; 

const ErrorMessage = ({ message }) => {
  if (!message) return null; // If no message provided, don't render anything

  return (
    <p className={styles.errorMessage}>
      {message}
    </p>
  );
};

export default ErrorMessage;
