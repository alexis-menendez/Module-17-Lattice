// client/src/components/layout/MainLayout.tsx

import React from 'react';
import NavBar from '../navigation/NavBar';
import { Outlet } from 'react-router-dom';
import styles from '../../assets/css/layout/MainLayout.module.css';

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

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
