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
  
  export { login };
  