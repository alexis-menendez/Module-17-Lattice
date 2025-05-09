// client/src/components/user/UserCard.tsx

import React from 'react';
import cardStyles from '../../assets/css/common/Card.module.css';
import { Link } from 'react-router-dom';

interface User {
  _id: string;
  username: string;
  email?: string;
  friendCount?: number;
}

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  if (!user) return null;

  return (
    <div className={cardStyles.card}>
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">
          <div className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-indigo-600 bg-indigo-100 rounded-full">
            {user.username.charAt(0).toUpperCase()}
          </div>
        </div>

        <h2 className="mb-1 text-xl font-bold">{user.username}</h2>

        {user.email && (
          <p className="mb-2 text-sm text-gray-500">{user.email}</p>
        )}

        {typeof user.friendCount !== 'undefined' && (
          <p className="mb-4 text-sm text-gray-600">
            {user.friendCount} {user.friendCount === 1 ? 'Friend' : 'Friends'}
          </p>
        )}

        <Link
          to={`/profile/${user._id}`}
          className="text-sm font-semibold text-indigo-600 hover:underline"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
