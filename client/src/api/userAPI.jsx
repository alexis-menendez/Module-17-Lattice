// Module-17-Lattice/client/src/api/userAPI.jsx

import Auth from '../utils/auth';

const API_BASE_URL = '/api/users';

// Retrieve all users
const retrieveUsers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`
      }
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch users');
    }

    return data;
  } catch (err) {
    console.error('Error retrieving users:', err);
    return Promise.reject(err.message || 'Could not fetch users');
  }
};

// 🆕 Retrieve the logged-in user's own profile
const fetchMyProfile = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`
      }
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch your profile');
    }

    return data;
  } catch (err) {
    console.error('Error fetching your profile:', err);
    return Promise.reject(err.message || 'Could not fetch your profile');
  }
};

export { retrieveUsers, fetchMyProfile };
