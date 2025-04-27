import React from 'react';
import formStyles from '../assets/css/Form.module.css';
import ErrorMessage from './ErrorMessage'; 

const FormTextarea = ({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  error = "",
  required = false,
  rows = 5,
  ...props
}) => {
  return (
    <div className={formStyles.formGroup}>
      {label && (
        <label htmlFor={name} className={formStyles.label}>
          {label} {required && <span style={{ color: 'red' }}>*</span>}
        </label>
      )}

      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={formStyles.textarea}
        required={required}
        rows={rows}
        {...props}
      />

      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default FormTextarea;
