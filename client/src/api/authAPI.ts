// Module-17-Lattice/client/src/api/authAPI.ts

interface AuthResponse {
  token: string;
  message?: string;
}

interface AuthInput {
  username: string;
  password: string;
  email?: string;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

const login = async (userInfo: AuthInput): Promise<AuthResponse> => {
  console.log('User info being sent to login:', userInfo);

  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
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
    
  } catch (err: any) {
    console.error('Error during user login:', err);
    return Promise.reject(err.message || 'Could not fetch user info');
  }
};

const signup = async (userInfo: AuthInput): Promise<AuthResponse> => {
  console.log('User info being sent to signup:', userInfo);

  try {
    const response = await fetch(`${API_BASE_URL}/auth/signup`, {
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

  } catch (err: any) {
    console.error('Error during user signup:', err);
    return Promise.reject(err.message || 'Could not create user');
  }
};

export { login, signup };
