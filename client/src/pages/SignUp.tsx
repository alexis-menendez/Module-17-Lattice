// client/src/pages/SignUp.tsx

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/form/FormInput';
import FormButton from '../components/form/FormButton';
import ErrorMessage from '../components/common/ErrorMessage';
import layoutStyles from '../assets/css/layout/Layout.module.css';
import { signup } from '../api/authAPI';
import Auth from '../utils/auth';

interface SignUpFormData {
  dateOfBirth: string;
  username: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<SignUpFormData>({
    dateOfBirth: '',
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculateAge = (dob: string): number => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleSubmit = async (e: FormEvent) => {
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
      const signupData = { username, email, password };
      const data = await signup(signupData);
      Auth.login(data.token);
      navigate('/dashboard');
    } catch (err: any) {
      console.error(err);
      setError(err?.message || 'Signup failed');
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
          max={new Date().toISOString().split('T')[0]}
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
