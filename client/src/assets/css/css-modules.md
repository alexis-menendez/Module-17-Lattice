	Use .module.css (like Navbar.module.css)

    Importing	import styles from './Navbar.module.css'

    Applying classes	className={styles.className}

## Example:

### client/src/assets/NavBar.module.css

.navbar {
  background-color: var(--primary-color);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.link {
  color: white;
  margin: 0 1rem;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

### client/src/components/NavBar.jsx

import React from 'react';
import styles from './assets/Navbar.module.css'; // Import like an object

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.link}>Home</a>
      <a href="/dashboard" className={styles.link}>Dashboard</a>
      <a href="/login" className={styles.link}>Login</a>
    </nav>
  );
}

export default Navbar;