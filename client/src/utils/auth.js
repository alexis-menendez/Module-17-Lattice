// Module-17-Lattice/client/src/utils/auth.js

import { jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    const token = this.getToken();
    if (token) {
      return jwtDecode(token);
    } else {
      return null;
    }
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000);
      if (!decoded.exp) {
        return true;
      }
      return decoded.exp < currentTime;
    } catch (error) {
      return true;
    }
  }

  getToken() {
    return localStorage.getItem('id_token') || '';
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/login');
  }
}

export default new AuthService();
