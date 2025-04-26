import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AllThoughts from './pages/AllThoughts';
import SingleThought from './pages/SingleThought';
import CreateThought from './pages/CreateThought';
import UserProfile from './pages/UserProfile';
import NotFound from './pages/NotFound';

// Components
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Pages */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/thoughts" 
          element={
            <ProtectedRoute>
              <AllThoughts />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/thoughts/:thoughtId" 
          element={
            <ProtectedRoute>
              <SingleThought />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/create-thought" 
          element={
            <ProtectedRoute>
              <CreateThought />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/profile/:userId" 
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          } 
        />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
