import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import AllThoughts from './pages/AllThoughts';
import CreateThought from './pages/CreateThought';
import Dashboard from './pages/Dashboard';
import EditThought from './pages/EditThought';
import FriendsList from './pages/FriendsList';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';
import SingleThought from './pages/SingleThought';
import UserProfile from './pages/UserProfile';

// Components
import ErrorMessage from './components/ErrorMessage';
import FormButton from './components/FormButton';
import FormInput from './components/FormInput';
import FormTextarea from './components/FormTextarea';
import LoadingSpinner from './components/LoadingSpinner';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import PageWrapper from './components/PageWrapper';
import ProtectedRoute from './components/ProtectedRoute';
import ReactionList from './components/ReactionList';
import ThoughtCard from './components/ThoughtCard';
import UserCard from './components/UserCard';

// Helper to automatically wrap pages with PageWrapper
const WrappedRoute = ({ children }) => (
  <PageWrapper>
    {children}
  </PageWrapper>
);

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Public Pages */}
        <Route 
          path="/" 
          element={<WrappedRoute><Home /></WrappedRoute>} 
        />
        <Route 
          path="/login" 
          element={<WrappedRoute><Login /></WrappedRoute>} 
        />
        <Route 
          path="/signup" 
          element={<WrappedRoute><SignUp /></WrappedRoute>} 
        />

        {/* Protected Pages */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <WrappedRoute><Dashboard /></WrappedRoute>
            </ProtectedRoute>
          }
        />
        <Route 
          path="/thoughts" 
          element={
            <ProtectedRoute>
              <WrappedRoute><AllThoughts /></WrappedRoute>
            </ProtectedRoute>
          }
        />
        <Route 
          path="/thoughts/:thoughtId" 
          element={
            <ProtectedRoute>
              <WrappedRoute><SingleThought /></WrappedRoute>
            </ProtectedRoute>
          }
        />
        <Route 
          path="/create-thought" 
          element={
            <ProtectedRoute>
              <WrappedRoute><CreateThought /></WrappedRoute>
            </ProtectedRoute>
          }
        />
        <Route 
          path="/edit-thought/:thoughtId" 
          element={
            <ProtectedRoute>
              <WrappedRoute><EditThought /></WrappedRoute>
            </ProtectedRoute>
          }
        />
        <Route 
          path="/friends" 
          element={
            <ProtectedRoute>
              <WrappedRoute><FriendsList /></WrappedRoute>
            </ProtectedRoute>
          }
        />
        <Route 
          path="/profile/:userId" 
          element={
            <ProtectedRoute>
              <WrappedRoute><UserProfile /></WrappedRoute>
            </ProtectedRoute>
          }
        />

        {/* 404 Page */}
        <Route 
          path="*" 
          element={<WrappedRoute><NotFound /></WrappedRoute>} 
        />
      </Routes>
    </>
  );
}

export default App;
