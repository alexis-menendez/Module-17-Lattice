// Module-17-Lattice/client/src/pages/SingleThought.jsx

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import ReactionList from '../components/ReactionList';
import layoutStyles from '../assets/css/Layout.module.css';

const SingleThought = () => {
  const { thoughtId } = useParams();
  const [thought, setThought] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchThought = async () => {
      try {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
          // Replace this with real API response
          setThought({
            _id: thoughtId,
            username: 'FungiExplorer',
            thoughtText: 'Did you know some mushrooms glow in the dark? 🍄✨',
            createdAt: new Date().toISOString(),
            reactions: [
              {
                _id: 'r1',
                reactionBody: 'That’s incredible!',
                username: 'MushroomLover',
                createdAt: new Date().toISOString(),
              },
              {
                _id: 'r2',
                reactionBody: 'Nature is amazing. 🌿',
                username: 'SporeSeeker',
                createdAt: new Date().toISOString(),
              },
            ],
          });
          setIsLoading(false);
        }, 1000);
      } catch (err) {
        console.error(err);
        setError('Failed to load the thought.');
        setIsLoading(false);
      }
    };

    fetchThought();
  }, [thoughtId]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className={layoutStyles.centeredContent}>
        <h2 className="mb-4 text-2xl font-bold text-red-600">Error</h2>
        <p className="text-gray-500">{error}</p>
        <Link 
          to="/thoughts" 
          className="inline-block px-6 py-2 mt-6 font-semibold text-white transition bg-indigo-600 rounded hover:bg-indigo-700"
        >
          Back to All Thoughts
        </Link>
      </div>
    );
  }

  return (
    <div className={layoutStyles.container}>
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">{thought.username}</h1>
        <p className="mb-4 text-sm text-gray-500">
          Posted on {new Date(thought.createdAt).toLocaleDateString()}
        </p>
        <p className="mb-8 text-lg text-gray-700">{thought.thoughtText}</p>

        <Link 
          to="/thoughts" 
          className="inline-block px-6 py-2 font-semibold text-white transition bg-indigo-600 rounded hover:bg-indigo-700"
        >
          Back to All Thoughts
        </Link>
      </div>

      <h2 className="mb-4 text-2xl font-bold">Reactions</h2>
      <ReactionList reactions={thought.reactions} />
    </div>
  );
};

export default SingleThought;
