// Module-17-Lattice/client/src/api/authAPI.jsx

const login = async (userInfo) => {
  console.log('User info being sent to login:', userInfo);

  try {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }

    const data = await response.json();
    return data;
    
  } catch (err) {
    console.error('Error during user login:', err);
    return Promise.reject(err.message || 'Could not fetch user info');
  }
};

const signup = async (userInfo) => {
  console.log('User info being sent to signup:', userInfo);

  try {
    const response = await fetch('/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Signup failed');
    }

    const data = await response.json();
    return data;

  } catch (err) {
    console.error('Error during user signup:', err);
    return Promise.reject(err.message || 'Could not create user');
  }
};

export { login, signup };
