// Module-17-Lattice/client/src/components/user/MyPosts.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ThoughtCard from '../thoughts/ThoughtCard';
import LoadingSpinner from '../common/LoadingSpinner';
import layoutStyles from '../../assets/css/layout/Layout.module.css';
import Auth from '../../utils/auth';
import { fetchMyThoughts } from '../../api/thoughtAPI';


const MyPosts = () => {
  const [thoughts, setThoughts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadMyPosts = async () => {
      try {
        setIsLoading(true);

        if (!Auth.loggedIn()) {
          window.location.assign('/login');
          return;
        }

        const myThoughts = await fetchMyThoughts();

        // Map _id from server to id for frontend consistency
        const formattedThoughts = myThoughts.map((thought) => ({
          id: thought._id,
          thoughtText: thought.thoughtText,
          username: thought.username,
          createdAt: thought.createdAt,
          reactionCount: thought.reactions?.length || 0,
          visibility: thought.visibility || 'public', // fallback just in case
          reactions: thought.reactions || []
        }));

        setThoughts(formattedThoughts);
      } catch (err) {
        console.error(err);
        setError('Failed to load your posts.');
      } finally {
        setIsLoading(false);
      }
    };

    loadMyPosts();
  }, []);

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
      <h1 className="mb-8 text-4xl font-bold text-center">My Posts</h1>

      {thoughts.length === 0 ? (
        <div className={layoutStyles.centeredContent}>
          <p className="mb-4 text-gray-400">You haven't posted anything yet.</p>
          <Link 
            to="/create-thought" 
            className="inline-block px-6 py-2 font-semibold text-white transition bg-green-600 rounded hover:bg-green-700"
          >
            Create Your First Thought
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

export default MyPosts;
