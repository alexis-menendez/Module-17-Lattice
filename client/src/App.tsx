// client/src/App.tsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout (components)
import MainLayout from './components/layout/MainLayout';
import ProtectedRoute from './components/layout/ProtectedRoute';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

// Thoughts (components)
import CreateThought from './components/thoughts/CreateThought';
import EditThought from './components/thoughts/EditThought';
import SingleThought from './components/thoughts/SingleThought';
import AllThoughts from './components/thoughts/AllThoughts';
import FriendFeed from './components/thoughts/FriendFeed';
import PublicFeed from './components/thoughts/PublicFeed';
import FollowFeed from './components/thoughts/FollowFeed';

// User (components)
import FriendsList from './components/user/FriendsList';
import MyPosts from './components/user/MyPosts';
import UserProfile from './components/user/UserProfile';

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/posts"
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
              <FriendFeed />
            </ProtectedRoute>
          }
        />
        <Route path="/public" element={<PublicFeed />} />
        <Route
          path="/following"
          element={
            <ProtectedRoute>
              <FollowFeed />
            </ProtectedRoute>
          }
        />
        <Route
          path="/friends-list"
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
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
