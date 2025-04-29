// Module-17-Lattice/client/src/components/layout/ProtectedRoute.jsx

import React from 'react';
import { Navigate } from 'react-router-dom';
import Auth from '../utils/auth'; // Your auth utility

const ProtectedRoute = ({ children }) => {
  if (!Auth.loggedIn()) {
    // If not logged in, redirect to Login page
    return <Navigate to="/login" replace />;
  }

  // If logged in, allow access
  return children;
};

export default ProtectedRoute;
