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
    dateOfBirth: '',
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

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    const { dateOfBirth, username, email, password } = formData;
    const age = calculateAge(dateOfBirth);

    if (age < 18) {
      setError('You must be at least 18 years old to register.');
      setIsSubmitting(false);
      return;
    }

    try {
      // ✅ Only send username, email, password
      const signupData = { username, email, password };

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Example of real API call (future)
      // await fetch('/api/signup', {
      //   method: 'POST',
      //   body: JSON.stringify(signupData),
      //   headers: { 'Content-Type': 'application/json' }
      // });

      Auth.login('faketoken123'); // Simulated login for now

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
          label="Date of Birth"
          name="dateOfBirth"
          type="date"
          max={new Date().toISOString().split('T')[0]} // prevent future dates
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
          error={error && formData.dateOfBirth && calculateAge(formData.dateOfBirth) < 18 ? error : ''}
        />

        <FormInput
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Choose a username"
          required
        />

        <FormInput
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email address"
          required
        />

        <FormInput
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Create a password"
          required
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
