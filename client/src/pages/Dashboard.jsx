// Module-17-Lattice/client/src/pages/Dashboard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import layoutStyles from '../assets/css/Layout.module.css';
import buttonStyles from '../assets/css/Button.module.css'; 

const Dashboard = () => {
  return (
    <div className={layoutStyles.container}>
      <h1 className="mb-10 text-4xl font-bold text-center">Dashboard</h1>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap justify-center gap-6">
        <Link to="/profile/me" className={buttonStyles.primaryButton}>
          View Profile
        </Link>

        <Link to="/dashboard/posts" className={buttonStyles.primaryButton}>
          My Posts
        </Link>

        <Link to="/friends-feed" className={buttonStyles.primaryButton}>
          Friends Feed
        </Link>

        <Link to="/following-feed" className={buttonStyles.primaryButton}>
          Following Feed
        </Link>

        <Link to="/thoughts" className={buttonStyles.primaryButton}>
          Public Feed
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
