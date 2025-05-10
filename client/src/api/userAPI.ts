// Module-17-Lattice/client/src/api/userAPI.ts

import Auth from '../utils/auth';

const API_BASE_URL = '/api/users';

export interface UserProfile {
  _id: string;
  username: string;
  email?: string;
  bio?: string;
  profilePhoto?: string;
  thoughts?: string[];
  friends?: string[];
  following?: string[];
  isDev?: boolean;
}

// Retrieve all users
const retrieveUsers = async (): Promise<UserProfile[]> => {
  try {
    const token = Auth.getToken();
    console.log('[retrieveUsers] JWT token:', token);

    const response = await fetch(`${API_BASE_URL}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch users');
    }

    return data;
  } catch (err: any) {
    console.error('Error retrieving users:', err);
    return Promise.reject(err.message || 'Could not fetch users');
  }
};

// Retrieve the logged-in user's own profile
const fetchMyProfile = async (): Promise<UserProfile> => {
  try {
    const token = Auth.getToken();
    console.log('[fetchMyProfile] JWT token:', token);

    const response = await fetch(`${API_BASE_URL}/me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch your profile');
    }

    return data;
  } catch (err: any) {
    console.error('Error fetching your profile:', err);
    return Promise.reject(err.message || 'Could not fetch your profile');
  }
};

// Retrieve the logged-in user's friends
export const fetchFriends = async () => {
  const token = Auth.getToken();

  const response = await fetch('/api/users/friends', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to fetch friends');
  }

  return response.json();
};


export { retrieveUsers, fetchMyProfile };
