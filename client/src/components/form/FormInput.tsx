// client/src/components/form/FormInput.tsx

import React, { ChangeEvent } from 'react';
import formStyles from '../../assets/css/common/Form.module.css';
import ErrorMessage from '../common/ErrorMessage';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  error = '',
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
