// client/src/components/form/FormTextarea.tsx

import React, { ChangeEvent } from 'react';
import formStyles from '../../assets/css/common/Form.module.css';
import ErrorMessage from '../common/ErrorMessage';

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  rows?: number;
}

const FormTextarea: React.FC<FormTextareaProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder = '',
  error = '',
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
