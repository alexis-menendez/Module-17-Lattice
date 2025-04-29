// Module-17-Lattice/client/src/api/thoughtAPI.jsx

import Auth from '../utils/auth'; 

const API_BASE_URL = '/api/thoughts';

// Retrieve all thoughts (general)
const retrieveThoughts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`
      }
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch thoughts');
    }

    return data;
  } catch (err) {
    console.error('Error retrieving thoughts:', err);
    return [];
  }
};

// Retrieve a single thought by ID
const retrieveThought = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`
      }
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch thought');
    }

    return data;
  } catch (err) {
    console.error('Error retrieving thought:', err);
    return Promise.reject('Could not fetch thought');
  }
};

// Create a new thought
const createThought = async (body) => {
  try {
    const response = await fetch(`${API_BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to create thought');
    }

    return data;
  } catch (err) {
    console.error('Error creating thought:', err);
    return Promise.reject('Could not create thought');
  }
};

// Update an existing thought
const updateThought = async (thoughtId, body) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${thoughtId}`, {
      method: 'PATCH', // Use PATCH for partial updates
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to update thought');
    }

    return data;
  } catch (err) {
    console.error('Error updating thought:', err);
    return Promise.reject('Could not update thought');
  }
};

// Delete a thought
const deleteThought = async (thoughtId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${thoughtId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`
      }
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to delete thought');
    }

    return data;
  } catch (err) {
    console.error('Error deleting thought:', err);
    return Promise.reject('Could not delete thought');
  }
};

// Retrieve logged-in user's own thoughts
const fetchMyThoughts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/mine`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`
      }
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch your thoughts');
    }

    return data;
  } catch (err) {
    console.error('Error fetching your thoughts:', err);
    return Promise.reject('Could not fetch your thoughts');
  }
};

// Retrieve friends' thoughts
const fetchFriendsThoughts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/friends`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`
      }
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch friends\' thoughts');
    }

    return data;
  } catch (err) {
    console.error('Error fetching friends\' thoughts:', err);
    return Promise.reject('Could not fetch friends\' thoughts');
  }
};

// Retrieve following thoughts
const fetchFollowingThoughts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/following`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`
      }
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch following thoughts');
    }

    return data;
  } catch (err) {
    console.error('Error fetching following thoughts:', err);
    return Promise.reject('Could not fetch following thoughts');
  }
};

// Retrieve public thoughts
const fetchPublicThoughts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/public`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch public thoughts');
    }

    return data;
  } catch (err) {
    console.error('Error fetching public thoughts:', err);
    return Promise.reject('Could not fetch public thoughts');
  }
};

export { 
  createThought,
  deleteThought,
  retrieveThoughts,
  retrieveThought,
  updateThought,
  fetchMyThoughts,
  fetchFriendsThoughts,
  fetchFollowingThoughts,
  fetchPublicThoughts
};
