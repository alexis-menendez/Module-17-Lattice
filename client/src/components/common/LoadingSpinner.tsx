// client/src/components/common/LoadingSpinner.tsx

import React from 'react';
import spinnerStyles from '../../assets/css/common/LoadingSpinner.module.css';

const LoadingSpinner: React.FC = () => {
  return (
    <div className={spinnerStyles.spinnerContainer}>
      <div className={spinnerStyles.spinner}></div>
    </div>
  );
};

export default LoadingSpinner;
