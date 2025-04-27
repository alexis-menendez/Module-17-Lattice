import React, { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';
import LoadingSpinner from '../components/LoadingSpinner';
import layoutStyles from '../assets/css/Layout.module.css';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching user's friends
    const fetchFriends = async () => {
      try {
        setIsLoading(true);
        // Replace with real API fetch later
        setTimeout(() => {
          setFriends([
            {
              _id: 'friend1',
              username: 'MushroomLover',
              email: 'mushlover@example.com',
              friendCount: 10,
            },
            {
              _id: 'friend2',
              username: 'SporeSeeker',
              email: 'sporeseek@example.com',
              friendCount: 5,
            },
            {
              _id: 'friend3',
              username: 'FungiFan',
              email: 'fungifan@example.com',
              friendCount: 7,
            },
          ]);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchFriends();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={layoutStyles.container}>
      <h1 className="mb-8 text-3xl font-bold text-center">Your Friends 🍄</h1>

      {friends.length === 0 ? (
        <div className={`${layoutStyles.centeredContent}`}>
          <p className="mb-4 text-gray-500">You haven't added any friends yet.</p>
          <p className="text-sm text-gray-400">Explore posts and add new friends to grow your network!</p>
        </div>
      ) : (
        <div className={layoutStyles.responsiveGrid}>
          {friends.map((friend) => (
            <UserCard key={friend._id} user={friend} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FriendsList;
