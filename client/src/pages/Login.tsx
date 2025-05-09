// client/src/pages/Login.tsx

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/form/FormInput';
import FormButton from '../components/form/FormButton';
import ErrorMessage from '../components/common/ErrorMessage';
import layoutStyles from '../assets/css/layout/Layout.module.css';
import { login } from '../api/authAPI';
import Auth from '../utils/auth';
import styles from '../assets/css/common/Form.module.css';

interface LoginFormData {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const data = await login(formData);
      Auth.login(data.token);
      navigate('/dashboard');
    } catch (err: any) {
      console.error(err);
      setError(err?.message || 'Login failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.loginTitle}>Login to Lattice</h1>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <FormInput
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter your username"
          required
        />

        <FormInput
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />

        <FormButton isLoading={isSubmitting}>
          Login
        </FormButton>

        <ErrorMessage message={error} />
      </form>
    </div>
  );
};

export default Login;
