import React from 'react';
import spinnerStyles from '../assets/css/LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <div className={spinnerStyles.spinnerContainer}>
      <div className={spinnerStyles.spinner}></div>
    </div>
  );
};

export default LoadingSpinner;