import Auth from '../utils/auth';

const retrieveUsers = async () => {
  try {
    const response = await fetch('/api/users', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`
      }
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Invalid user API response, check network tab!');
    }

    return data;

  } catch (err) {
    console.error('Error retrieving users:', err);
    return Promise.reject(err.message || 'Could not fetch users');
  }
};

export { retrieveUsers };
