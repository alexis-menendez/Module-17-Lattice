// Module-17-Lattice/client/src/components/form/FormInput.jsx

import React from 'react';
import formStyles from '../assets/css/Form.module.css';
import ErrorMessage from './ErrorMessage'; // Reuse the ErrorMessage component

const FormInput = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder = "",
  error = "",
  required = false,
  ...props
}) => {
  return (
    <div className={formStyles.formGroup}>
      {label && (
        <label htmlFor={name} className={formStyles.label}>
          {label} {required && <span style={{ color: 'red' }}>*</span>}
        </label>
      )}

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={formStyles.inputField}
        required={required}
        {...props}
      />

      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default FormInput;
