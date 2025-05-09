// client/src/components/thoughts/SingleThought.tsx

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { retrieveThought } from '../../api/thoughtAPI';
import LoadingSpinner from '../common/LoadingSpinner';
import layoutStyles from '../../assets/css/layout/Layout.module.css';

interface Reaction {
  _id: string;
  reactionBody: string;
  username: string;
  createdAt: string;
}

interface Thought {
  id: string;
  thoughtText: string;
  username: string;
  createdAt: string;
  visibility: string;
  reactions: Reaction[];
}

const SingleThought: React.FC = () => {
  const { thoughtId } = useParams<{ thoughtId: string }>();
  const [thought, setThought] = useState<Thought | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const loadThought = async () => {
      try {
        setIsLoading(true);

        const data = await retrieveThought(thoughtId);

        const formattedThought: Thought = {
          id: data._id,
          thoughtText: data.thoughtText,
          username: data.username,
          createdAt: data.createdAt,
          visibility: data.visibility || 'public',
          reactions: data.reactions || [],
        };

        setThought(formattedThought);
      } catch (err) {
        console.error('Error loading thought:', err);
        setError('Failed to load this thought.');
      } finally {
        setIsLoading(false);
      }
    };

    loadThought();
  }, [thoughtId]);

  if (isLoading) return <LoadingSpinner />;

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

  if (!thought) return null;

  return (
    <div className={layoutStyles.container}>
      <div className="max-w-2xl p-8 mx-auto bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-3xl font-bold">{thought.thoughtText}</h1>

        <div className="mb-4 text-sm text-gray-500">
          Posted by <span className="font-semibold">{thought.username}</span> on{' '}
          {new Date(thought.createdAt).toLocaleDateString()} •{' '}
          {thought.visibility === 'private' ? 'Private' : 'Public'}
        </div>

        {thought.reactions.length > 0 && (
          <div className="mt-8">
            <h2 className="mb-4 text-xl font-semibold">Reactions</h2>
            <ul className="space-y-2">
              {thought.reactions.map((reaction) => (
                <li
                  key={reaction._id}
                  className="px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded"
                >
                  {reaction.reactionBody} —{' '}
                  <span className="italic text-gray-500">{reaction.username}</span>
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
