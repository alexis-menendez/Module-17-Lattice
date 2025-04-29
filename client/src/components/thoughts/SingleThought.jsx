// Module-17-Lattice/client/src/components/thoughts/SingleThought.jsx

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { retrieveThought } from '../../api/thoughtAPI'; // API to fetch single thought
import LoadingSpinner from '../common/LoadingSpinner';
import layoutStyles from '../../assets/css/Layout.module.css';

const SingleThought = () => {
  const { thoughtId } = useParams();
  const [thought, setThought] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadThought = async () => {
      try {
        setIsLoading(true);

        const data = await retrieveThought(thoughtId);

        setThought({
          id: data._id,
          thoughtText: data.thoughtText,
          username: data.username,
          createdAt: data.createdAt,
          visibility: data.visibility || 'public',
          reactions: data.reactions || []
        });
      } catch (err) {
        console.error('Error loading thought:', err);
        setError('Failed to load this thought.');
      } finally {
        setIsLoading(false);
      }
    };

    loadThought();
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
          to="/dashboard"
          className="inline-block px-6 py-2 mt-6 font-semibold text-white transition bg-indigo-600 rounded hover:bg-indigo-700"
        >
          Back to Dashboard
        </Link>
      </div>
    );
  }

  if (!thought) {
    return null;
  }

  return (
    <div className={layoutStyles.container}>
      <div className="max-w-2xl p-8 mx-auto bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-3xl font-bold">{thought.thoughtText}</h1>
        
        <div className="mb-4 text-sm text-gray-500">
          Posted by <span className="font-semibold">{thought.username}</span> on{' '}
          {new Date(thought.createdAt).toLocaleDateString()} • {thought.visibility === 'private' ? 'Private' : 'Public'}
        </div>

        {thought.reactions.length > 0 && (
          <div className="mt-8">
            <h2 className="mb-4 text-xl font-semibold">Reactions</h2>
            <ul className="space-y-2">
              {thought.reactions.map((reaction) => (
                <li key={reaction._id} className="px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded">
                  {reaction.reactionBody} — <span className="italic text-gray-500">{reaction.username}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-8 text-center">
          <Link 
            to="/dashboard"
            className="inline-block px-6 py-2 font-semibold text-white transition bg-indigo-600 rounded hover:bg-indigo-700"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleThought;
