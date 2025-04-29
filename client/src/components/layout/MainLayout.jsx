// Module-17-Lattice/client/src/components/layout/MainLayout.jsx

import React from 'react';
import Navbar from './NavBar';
import { Outlet } from 'react-router-dom';

import styles from '../assets/css/MainLayout.module.css';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Outer Background */}
      <div className={styles.outerBackground}>
        
        {/* Inner Background */}
        <div className={styles.innerBackground}>
          <Outlet />
        </div>
        
      </div>
    </div>
  );
};

export default MainLayout;
