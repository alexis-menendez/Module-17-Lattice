// Module-17-Lattice/client/src/components/thoughts/EditThought.jsx

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FormTextarea from '../components/FormTextarea';
import FormButton from '../components/FormButton';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import layoutStyles from '../assets/css/Layout.module.css';

const EditThought = () => {
  const { thoughtId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    thoughtText: '',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Simulate fetching the existing thought
    const fetchThought = async () => {
      try {
        setIsLoading(true);
        // Replace this with real API fetch using thoughtId
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      // Simulate API call to update thought
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // On success, navigate to Dashboard or Thought page
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

        {/* In case you want the error below the button globally */}
        {/* <ErrorMessage message={error} /> */}
      </form>
    </div>
  );
};

export default EditThought;
