// Module-17-Lattice/client/src/pages/Login.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/form/FormInput';
import FormButton from '../components/form/FormButton';
import ErrorMessage from '../components/common/ErrorMessage';
import layoutStyles from '../assets/css/layout/Layout.module.css';
import { login } from '../api/authAPI';
import Auth from '../utils/auth';
import styles from '../assets/css/common/Form.module.css';



const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const data = await login(formData);
      Auth.login(data.token); 
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      setError(err);
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
