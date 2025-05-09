// client/src/components/thoughts/AllThoughts.tsx

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ThoughtCard from './ThoughtCard';
import LoadingSpinner from '../common/LoadingSpinner';
import layoutStyles from '../../assets/css/layout/Layout.module.css';
import { retrieveThoughts } from '../../api/thoughtAPI';
import Auth from '../../utils/auth';

interface Reaction {
  reactionBody: string;
  username: string;
  createdAt: string;
}

interface Thought {
  id: string;
  thoughtText: string;
  username: string;
  createdAt: string;
  reactionCount: number;
  visibility: string;
  reactions: Reaction[];
}

const AllThoughts: React.FC = () => {
  const [thoughts, setThoughts] = useState<Thought[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const loadAllPosts = async () => {
      try {
        setIsLoading(true);

        if (!Auth.loggedIn()) {
          window.location.assign('/login');
          return;
        }

        const profile = Auth.getProfile();
        if (!profile || !profile.data || !profile.data.isDev) {
          console.warn('Access denied: Not a developer.');
          navigate('/unauthorized');
          return;
        }

        const allThoughts = await retrieveThoughts();

        const formattedThoughts: Thought[] = allThoughts.map((thought: any) => ({
          id: thought._id,
          thoughtText: thought.thoughtText,
          username: thought.username,
          createdAt: thought.createdAt,
          reactionCount: thought.reactions?.length || 0,
          visibility: thought.visibility || 'public',
          reactions: thought.reactions || [],
        }));

        formattedThoughts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

        setThoughts(formattedThoughts);
      } catch (err) {
        console.error('Error loading all thoughts:', err);
        setError('Failed to load all posts.');
      } finally {
        setIsLoading(false);
      }
    };

    loadAllPosts();
  }, [navigate]);

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

  return (
    <div className={layoutStyles.container}>
      <h1 className="mb-8 text-4xl font-bold text-center">All Thoughts (Developer Only)</h1>

      {thoughts.length === 0 ? (
        <div className={layoutStyles.centeredContent}>
          <p className="mb-4 text-gray-400">No thoughts found yet.</p>
          <Link
            to="/dashboard"
            className="inline-block px-6 py-2 font-semibold text-white transition bg-green-600 rounded hover:bg-green-700"
          >
            Back to Dashboard
          </Link>
        </div>
      ) : (
        <div className={layoutStyles.responsiveGrid}>
          {thoughts.map((thought) => (
            <ThoughtCard key={thought.id} thought={thought} showReactions={false} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllThoughts;
