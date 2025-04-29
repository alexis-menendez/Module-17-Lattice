// Module-17-Lattice/client/src/components/thoughts/CreateThought.jsx

import React, { useState } from 'react';
import FormInput from '../components/FormInput';
import FormTextarea from '../components/FormTextarea';
import FormButton from '../components/FormButton';
import ErrorMessage from '../components/ErrorMessage';
import layoutStyles from '../assets/css/Layout.module.css';

const CreateThought = () => {
  const [formData, setFormData] = useState({
    thoughtText: '',
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
      // Simulate API call — replace with real POST when ready
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // On success:
      alert('Thought created successfully!');
      setFormData({ thoughtText: '' });
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={layoutStyles.container}>
      <h1 className="mb-8 text-3xl font-bold text-center">Share a New Thought 🌿</h1>

      <form onSubmit={handleSubmit} className="flex flex-col max-w-2xl gap-6 mx-auto">
        <FormTextarea
          label="Your Thought"
          name="thoughtText"
          value={formData.thoughtText}
          onChange={handleChange}
          placeholder="What's on your mind about fungi today?"
          required
          error={error}
        />

        <FormButton isLoading={isSubmitting}>
          Post Thought
        </FormButton>

        {/* In case you want the error globally below the button */}
        {/* <ErrorMessage message={error} /> */}
      </form>
    </div>
  );
};

export default CreateThought;
