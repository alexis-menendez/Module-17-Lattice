import React, { useEffect, useState } from 'react';
import ThoughtCard from '../components/ThoughtCard';
import LoadingSpinner from '../components/LoadingSpinner';
import layoutStyles from '../assets/css/Layout.module.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [thoughts, setThoughts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching the user's own thoughts
    const fetchUserThoughts = async () => {
      try {
        setIsLoading(true);
        // Replace with real API call
        setTimeout(() => {
          setThoughts([
            {
              _id: '1',
              thoughtText: 'Excited to explore mushroom bioluminescence! 🌟',
              createdAt: new Date().toISOString(),
              username: 'MycoMe',
              reactionCount: 5,
              reactions: []
            },
            {
              _id: '2',
              thoughtText: 'Anyone else notice morels after spring rains? 🍄',
              createdAt: new Date().toISOString(),
              username: 'MycoMe',
              reactionCount: 2,
              reactions: []
            }
          ]);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchUserThoughts();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={layoutStyles.container}>
      <h1 className="mb-6 text-3xl font-bold text-center">Your Dashboard</h1>

      <div className="mb-8 text-center">
        <Link 
          to="/create-thought" 
          className="inline-block px-4 py-2 font-semibold text-white transition bg-indigo-600 rounded hover:bg-indigo-700"
        >
          Share a New Thought
        </Link>
      </div>

      {thoughts.length === 0 ? (
        <div className={`${layoutStyles.centeredContent}`}>
          <p className="mb-4 text-gray-500">You haven't shared any thoughts yet.</p>
          <Link 
            to="/create-thought" 
            className="inline-block px-4 py-2 font-semibold text-white transition bg-green-600 rounded hover:bg-green-700"
          >
            Create Your First Thought
          </Link>
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

export default Dashboard;
