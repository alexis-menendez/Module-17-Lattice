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
import MyPosts from './components/MyPosts'; // ✅ Add this line

// Components
import MainLayout from './components/MainLayout';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Routes>
      {/* Everything wrapped inside MainLayout */}
      <Route element={<MainLayout />}>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

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
          path="/dashboard/posts" // ✅ Add this route
          element={
            <ProtectedRoute>
              <MyPosts />
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
          path="/edit-thought/:thoughtId"
          element={
            <ProtectedRoute>
              <EditThought />
            </ProtectedRoute>
          }
        />
        <Route
          path="/friends"
          element={
            <ProtectedRoute>
              <FriendsList />
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
      </Route>
    </Routes>
  );
}

export default App;
