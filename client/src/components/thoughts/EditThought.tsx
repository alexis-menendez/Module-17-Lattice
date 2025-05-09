// client/src/components/thoughts/EditThought.tsx

import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FormTextarea from '../form/FormTextarea';
import FormButton from '../form/FormButton';
import LoadingSpinner from '../common/LoadingSpinner';
import ErrorMessage from '../common/ErrorMessage';
import layoutStyles from '../../assets/css/layout/Layout.module.css';

interface ThoughtFormData {
  thoughtText: string;
}

const EditThought: React.FC = () => {
  const { thoughtId } = useParams<{ thoughtId: string }>();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<ThoughtFormData>({
    thoughtText: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchThought = async () => {
      try {
        setIsLoading(true);
        // Simulate fetch (replace with real API call)
        setTimeout(() => {
          setFormData({
            thoughtText: 'Sample thought about fungi to edit...',
          });
          setIsLoading(false);
        }, 1000);
      } catch (err) {
        console.error(err);
        setError('Failed to load thought.');
        setIsLoading(false);
      }
    };

    fetchThought();
  }, [thoughtId]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      // Simulate update API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert('Thought updated successfully!');
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={layoutStyles.container}>
      <h1 className="mb-8 text-3xl font-bold text-center">Edit Your Thought</h1>

      <form onSubmit={handleSubmit} className="flex flex-col max-w-2xl gap-6 mx-auto">
        <FormTextarea
          label="Thought Text"
          name="thoughtText"
          value={formData.thoughtText}
          onChange={handleChange}
          placeholder="Update your mushroom musings..."
          required
          error={error}
        />

        <FormButton isLoading={isSubmitting}>
          Update Thought
        </FormButton>
      </form>
    </div>
  );
};

export default EditThought;
