import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import ErrorMessage from '../components/ErrorMessage';
import layoutStyles from '../assets/css/Layout.module.css';
import Auth from '../utils/auth'; // Your auth utility

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
      // Simulate login API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Fake token to simulate login (replace with real backend response later)
      Auth.login('faketoken123');

      // On success, redirect to Dashboard
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      setError('Invalid username or password.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={layoutStyles.container}>
      <h1 className="mb-8 text-3xl font-bold text-center">Login to Lattice 🍄</h1>

      <form onSubmit={handleSubmit} className="flex flex-col max-w-md gap-6 mx-auto">
        <FormInput
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter your username"
          required
          error={error}
        />

        <FormInput
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
          error={error}
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
