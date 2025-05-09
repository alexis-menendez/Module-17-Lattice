// client/src/components/thoughts/CreateThought.tsx

import React, { useState, ChangeEvent, FormEvent } from 'react';
import FormInput from '../form/FormInput';
import FormTextarea from '../form/FormTextarea';
import FormButton from '../form/FormButton';
import ErrorMessage from '../common/ErrorMessage';
import layoutStyles from '../../assets/css/layout/Layout.module.css';

interface ThoughtFormData {
  thoughtText: string;
}

const CreateThought: React.FC = () => {
  const [formData, setFormData] = useState<ThoughtFormData>({
    thoughtText: '',
  });
  const [error, setError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      // Simulate API call — replace with real POST when ready
      await new Promise((resolve) => setTimeout(resolve, 1000));

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
      </form>
    </div>
  );
};

export default CreateThought;
