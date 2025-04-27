// Module-17-Lattice/client/src/pages/UserProfile.jsx

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ThoughtCard from '../components/ThoughtCard';
import LoadingSpinner from '../components/LoadingSpinner';
import layoutStyles from '../assets/css/Layout.module.css';

const UserProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [thoughts, setThoughts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setIsLoading(true);
        // Simulate API fetch for user profile
        setTimeout(() => {
          // Replace with real API call
          setUser({
            _id: userId,
            username: 'MycoAdventurer',
            email: 'myco@adventure.com',
            friendCount: 8,
          });

          setThoughts([
            {
              _id: 'thought1',
              thoughtText: 'Mushroom spores can travel thousands of miles!',
              createdAt: new Date().toISOString(),
              username: 'MycoAdventurer',
              reactionCount: 4,
              reactions: [],
            },
            {
              _id: 'thought2',
              thoughtText: 'Anyone else spotting morels this season? 🍄',
              createdAt: new Date().toISOString(),
              username: 'MycoAdventurer',
              reactionCount: 2,
              reactions: [],
            },
          ]);

          setIsLoading(false);
        }, 1000);
      } catch (err) {
        console.error(err);
        setError('Failed to load user profile.');
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, [userId]);

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
      <div className="mb-12 text-center">
        <h1 className="mb-2 text-4xl font-bold">{user.username}</h1>
        <p className="mb-2 text-sm text-gray-500">{user.email}</p>
        <p className="text-sm text-gray-600">
          {user.friendCount} {user.friendCount === 1 ? 'Friend' : 'Friends'}
        </p>
      </div>

      <h2 className="mb-6 text-2xl font-bold text-center">Thoughts Shared</h2>

      {thoughts.length === 0 ? (
        <div className={`${layoutStyles.centeredContent}`}>
          <p className="mb-4 text-gray-500">This user hasn't shared any thoughts yet.</p>
        </div>
      ) : (
        <div className={layoutStyles.responsiveGrid}>
          {thoughts.map((thought) => (
            <ThoughtCard key={thought._id} thought={thought} showReactions={false} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
