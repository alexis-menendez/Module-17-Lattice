import { jwtDecode, JwtPayload } from 'jwt-decode';
import type { UserData } from '../interfaces/UserData';

class AuthService {
  getProfile(): UserData | null {
    const token = this.getToken();
    if (token) {
      return jwtDecode<UserData>(token);
    } else {
      return null;
    }
  }

  loggedIn(): boolean {
    const token = this.getToken();
 
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token: string): boolean {
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      const currentTime = Math.floor(Date.now() / 1000);
      if (!decoded.exp) {
        return true; 
      }
      return decoded.exp < currentTime;
    } catch (error) {

      return true;
    }
  }

  getToken(): string {
    return localStorage.getItem('id_token') || '';
  }

  login(idToken: string): void {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/'); 
  }

  logout(): void {
    localStorage.removeItem('id_token');
    window.location.assign('/login'); 
  }
}

export default new AuthService();
