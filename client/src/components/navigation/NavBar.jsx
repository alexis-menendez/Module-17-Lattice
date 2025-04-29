// Module-17-Lattice/client/src/components/navigation/components/NavBar.jsx

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Auth from '../../../utils/auth';
import styles from '../../../assets/css/navigation/NavBar.module.css';


const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Auth.logout();
    navigate('/login');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.brand}>
          Lattice
        </Link>
        <div className={styles.linkGroup}>
          {Auth.loggedIn() ? (
            <>
              <Link to="/dashboard" className={styles.navLink}>Dashboard</Link>
              <Link to="/thoughts" className={styles.navLink}>All Thoughts</Link>
              <Link to="/friends" className={styles.navLink}>Friends</Link>
              <button onClick={handleLogout} className={styles.logoutButton}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className={styles.navLink}>Login</Link>
              <Link to="/signup" className={styles.navLink}>Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
