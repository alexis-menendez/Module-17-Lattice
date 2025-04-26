import Auth from '../utils/auth'; // Assuming you have an Auth utility that gets the token

const retrieveThoughts = async () => {
  try {
    const response = await fetch('/api/thoughts/', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`
      }
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error('Invalid API response, check network tab!');
    }

    return data;
  } catch (err) {
    console.error('Error retrieving thoughts:', err);
    return [];
  }
};

const retrieveThought = async (id) => {
  try {
    const response = await fetch(`/api/thoughts/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`
      }
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error('Invalid API response, check network tab!');
    }

    return data;
  } catch (err) {
    console.error('Error retrieving thought:', err);
    return Promise.reject('Could not fetch thought');
  }
};

const createThought = async (body) => {
  try {
    const response = await fetch('/api/thoughts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error('Invalid API response, check network tab!');
    }

    return data;
  } catch (err) {
    console.error('Error creating thought:', err);
    return Promise.reject('Could not create thought');
  }
};

const updateThought = async (thoughtId, body) => {
  try {
    const response = await fetch(`/api/thoughts/${thoughtId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error('Invalid API response, check network tab!');
    }

    return data;
  } catch (err) {
    console.error('Error updating thought:', err);
    return Promise.reject('Could not update thought');
  }
};

const deleteThought = async (thoughtId) => {
  try {
    const response = await fetch(`/api/thoughts/${thoughtId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`
      }
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error('Invalid API response, check network tab!');
    }

    return data;
  } catch (err) {
    console.error('Error deleting thought:', err);
    return Promise.reject('Could not delete thought');
  }
};

export { createThought, deleteThought, retrieveThoughts, retrieveThought, updateThought };
