import React, { useEffect, useState } from 'react';
import ThoughtCard from '../components/ThoughtCard';
import LoadingSpinner from '../components/LoadingSpinner';
import layoutStyles from '../assets/css/Layout.module.css';

const AllThoughts = () => {
  const [thoughts, setThoughts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call for now
    const fetchThoughts = async () => {
      try {
        setIsLoading(true);
        // Replace with real API fetch when ready
        setTimeout(() => {
          setThoughts([
            {
              _id: '1',
              thoughtText: 'Did you know mushrooms are more closely related to humans than plants?',
              createdAt: new Date().toISOString(),
              username: 'FungiFan',
              reactionCount: 3,
              reactions: []
            },
            {
              _id: '2',
              thoughtText: 'Lattice community is amazing!',
              createdAt: new Date().toISOString(),
              username: 'MycoLover',
              reactionCount: 1,
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

    fetchThoughts();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (thoughts.length === 0) {
    return (
      <div className={`${layoutStyles.centeredContent}`}>
        <h2 className="mb-4 text-2xl font-bold">No Thoughts Yet</h2>
        <p className="text-gray-500">Be the first to share your mushroom musings! 🍄</p>
      </div>
    );
  }

  return (
    <div className={layoutStyles.container}>
      <h1 className="mb-8 text-3xl font-bold text-center">All Thoughts</h1>

      <div className={layoutStyles.responsiveGrid}>
        {thoughts.map((thought) => (
          <ThoughtCard key={thought._id} thought={thought} showReactions={false} />
        ))}
      </div>
    </div>
  );
};

export default AllThoughts;
