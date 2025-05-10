// client/src/components/user/FriendsList.tsx

import React, { useEffect, useState } from 'react';
import { fetchFriends } from '../../api/userAPI';
import { FriendProfile, defaultFriendProfile } from '../../interfaces/UserData';
import UserCard from './UserCard';
import LoadingSpinner from '../common/LoadingSpinner';
import layoutStyles from '../../assets/css/layout/Layout.module.css';

const FriendsList: React.FC = () => {
  const [friends, setFriends] = useState<FriendProfile[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const loadFriends = async () => {
      try {
        setIsLoading(true);
        const data = await fetchFriends();
        setFriends(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load friends.');
      } finally {
        setIsLoading(false);
      }
    };

    loadFriends();
  }, []);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className={layoutStyles.container}>
      <h1 className="mb-8 text-3xl font-bold text-center">Your Friends 🍄</h1>

      {error && (
        <div className={layoutStyles.centeredContent}>
          <p className="text-red-600">{error}</p>
        </div>
      )}

      {friends.length === 0 ? (
        <div className={layoutStyles.centeredContent}>
          <p className="mb-4 text-gray-500">You haven't added any friends yet.</p>
          <p className="text-sm text-gray-400">
            Explore posts and add new friends to grow your network!
          </p>
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
