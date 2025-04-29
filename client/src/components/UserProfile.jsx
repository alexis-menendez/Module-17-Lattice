// Module-17-Lattice/client/src/pages/UserProfile.jsx

import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import layoutStyles from '../assets/css/Layout.module.css';
import Auth from '../utils/auth';
import { fetchUserProfileById, fetchMyProfile } from '../api/userAPI';

const UserProfile = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadProfile = async () => {
      try {
        setIsLoading(true);

        let profileData;

        if (userId === 'me') {
          if (!Auth.loggedIn()) {
            navigate('/login');
            return;
          }
          profileData = await fetchMyProfile(); // Logged-in user's own data
        } else {
          profileData = await fetchUserProfileById(userId); // Another user's public profile
        }

        setUser({
          id: profileData._id,
          username: profileData.username,
          email: profileData.email || null, // Only available if you fetch your own profile
          bio: profileData.bio || '',
          profilePhoto: profileData.profilePhoto || '',
          friendCount: profileData.friends?.length || 0
        });
      } catch (err) {
        console.error(err);
        setError('Failed to load user profile.');
      } finally {
        setIsLoading(false);
      }
    };

    loadProfile();
  }, [userId, navigate]);

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

  if (!user) {
    return null;
  }

  return (
    <div className={layoutStyles.container}>
      <div className="mb-12 text-center">
        {user.profilePhoto && (
          <img 
            src={user.profilePhoto}
            alt="Profile"
            className="w-32 h-32 mx-auto mb-4 rounded-full shadow-md"
          />
        )}
        <h1 className="mb-2 text-4xl font-bold">{user.username}</h1>

        {/* Only show email if user is viewing their own profile */}
        {userId === 'me' && user.email && (
          <p className="mb-2 text-sm text-gray-400">{user.email}</p>
        )}

        {user.bio && (
          <p className="text-sm text-gray-500">{user.bio}</p>
        )}

        <p className="mt-4 text-sm text-gray-600">
          {user.friendCount} {user.friendCount === 1 ? 'Friend' : 'Friends'}
        </p>
      </div>

      <div className="text-center">
        <Link 
          to="/dashboard"
          className="inline-block px-6 py-2 mt-6 font-semibold text-white transition bg-indigo-600 rounded hover:bg-indigo-700"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default UserProfile;
