import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import ErrorMessage from '../components/ErrorMessage';
import layoutStyles from '../assets/css/Layout.module.css';
import Auth from '../utils/auth'; // Your auth utility

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    age: '',
    username: '',
    email: '',
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

    const { age, username, email, password } = formData;

    if (parseInt(age, 10) < 18) {
      setError('You must be at least 18 years old to register.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Fake token to simulate signup/login (replace with real backend response later)
      Auth.login('faketoken123');

      // On success, redirect to Dashboard
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      setError('Signup failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={layoutStyles.container}>
      <h1 className="mb-8 text-3xl font-bold text-center">Create Your Lattice Account 🌿</h1>

      <form onSubmit={handleSubmit} className="flex flex-col max-w-md gap-6 mx-auto">
        <FormInput
          label="Age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter your age"
          required
          error={error && formData.age && parseInt(formData.age, 10) < 18 ? error : ''}
        />

        <FormInput
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Choose a username"
          required
          error={error && !formData.username ? error : ''}
        />

        <FormInput
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email address"
          required
          error={error && !formData.email ? error : ''}
        />

        <FormInput
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Create a password"
          required
          error={error && !formData.password ? error : ''}
        />

        <FormButton isLoading={isSubmitting}>
          Sign Up
        </FormButton>

        <ErrorMessage message={error} />
      </form>
    </div>
  );
};

export default SignUp;
