// Module-17-Lattice/server/src/controllers/userController.ts

import { User } from '../models/index.js';
import { Request, Response } from 'express';

// Helper to safely return user data with _id as string
const sanitizeUser = (user: any) => {
  if (!user) return null;
  const { password, __v, ...rest } = user;
  return {
    ...rest,
    _id: user._id.toString()
  };
};

// Get all users
export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find().lean();
    return res.json(users.map(sanitizeUser));
  } catch (err) {
    return res.status(500).json(err);
  }
};

// Get a single user by ID (public profile)
export const getSingleUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.userId).lean();
    if (!user) {
      return res.status(404).json({ message: 'No user with that ID' });
    }
    return res.json(sanitizeUser(user));
  } catch (err) {
    return res.status(500).json(err);
  }
};

// Create a new user (rarely used now since you have signup)
export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await User.create(req.body);
    return res.json(sanitizeUser(user.toObject()));
  } catch (err) {
    return res.status(500).json(err);
  }
};

// Update a user by ID (admin use — not "me" updates)
export const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      { $set: req.body },
      { runValidators: true, new: true }
    ).lean();

    if (!updatedUser) {
      return res.status(404).json({ message: 'No user with that ID' });
    }

    return res.json(sanitizeUser(updatedUser));
  } catch (err) {
    return res.status(500).json(err);
  }
};

// Delete a user by ID
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndDelete(req.params.userId).lean();
    if (!user) {
      return res.status(404).json({ message: 'No user with that ID' });
    }
    return res.json({ message: 'User successfully deleted!' });
  } catch (err) {
    return res.status(500).json(err);
  }
};

// Get logged-in user's profile
export const getMyProfile = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user!._id).lean();

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json(sanitizeUser(user));
  } catch (err) {
    return res.status(500).json(err);
  }
};

// Update logged-in user's profile
export const updateMyProfile = async (req: Request, res: Response) => {
  try {
    const { username, bio, profilePhoto } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.user!._id,
      {
        ...(username && { username }),
        ...(bio && { bio }),
        ...(profilePhoto && { profilePhoto })
      },
      { runValidators: true, new: true }
    ).lean();

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json(sanitizeUser(updatedUser));
  } catch (err) {
    return res.status(500).json(err);
  }
};

// Upload profile photo separately
export const uploadProfilePhoto = async (req: Request, res: Response) => {
  try {
    const { profilePhoto } = req.body;

    if (!profilePhoto) {
      return res.status(400).json({ message: 'Profile photo URL required.' });
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user!._id,
      { profilePhoto },
      { runValidators: true, new: true }
    ).lean();

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json(sanitizeUser(updatedUser));
  } catch (err) {
    return res.status(500).json(err);
  }
};

// Add a friend
export const addFriend = async (req: Request, res: Response) => {
  const { userId, friendId } = req.params;

  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { friends: friendId } },
      { new: true }
    ).lean();

    if (!user) {
      return res.status(404).json({ message: 'No user with that ID' });
    }

    return res.json(sanitizeUser(user));
  } catch (error) {
    return res.status(500).json({ message: 'Error adding friend' });
  }
};

// Remove a friend
export const removeFriend = async (req: Request, res: Response) => {
  const { userId, friendId } = req.params;

  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { $pull: { friends: friendId } },
      { new: true }
    ).lean();

    if (!user) {
      return res.status(404).json({ message: 'No user with that ID' });
    }

    return res.json(sanitizeUser(user));
  } catch (error) {
    return res.status(500).json({ message: 'Error removing friend' });
  }
};

// Get list of friends for a user
export const getFriendsList = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId)
      .populate('friends', 'username profilePhoto bio')
      .lean();

    if (!user) {
      return res.status(404).json({ message: 'No user with that ID' });
    }

    const friends = (user.friends || []).map((friend: any) => ({
      ...friend,
      _id: friend._id.toString()
    }));

    return res.json(friends);
  } catch (error) {
    return res.status(500).json({ message: 'Error retrieving friends' });
  }
};

// Follow another user
export const followUser = async (req: Request, res: Response) => {
  try {
    const followerId = req.user!._id;
    const followedId = req.params.userId;

    // Prevent self-following
    if (followerId.toString() === followedId) {
      return res.status(400).json({ message: "You cannot follow yourself." });
    }

    // Add to 'following' of current user
    await User.findByIdAndUpdate(followerId, {
      $addToSet: { following: followedId }
    });

    // Add to 'followers' of target user
    await User.findByIdAndUpdate(followedId, {
      $addToSet: { followers: followerId }
    });

    return res.json({ message: 'Followed user successfully' });
  } catch (error) {
    console.error('Error following user:', error);
    return res.status(500).json({ message: 'Failed to follow user' });
  }
};

// Unfollow a user
export const unfollowUser = async (req: Request, res: Response) => {
  try {
    const followerId = req.user!._id;
    const unfollowedId = req.params.userId;

    await User.findByIdAndUpdate(followerId, {
      $pull: { following: unfollowedId }
    });

    await User.findByIdAndUpdate(unfollowedId, {
      $pull: { followers: followerId }
    });

    return res.json({ message: 'Unfollowed user successfully' });
  } catch (error) {
    console.error('Error unfollowing user:', error);
    return res.status(500).json({ message: 'Failed to unfollow user' });
  }
};

// Get list of followers for logged-in user
export const getFollowersList = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user!._id)
      .populate('followers', 'username profilePhoto bio')
      .lean();

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const followers = (user.followers || []).map((f: any) => ({
      ...f,
      _id: f._id.toString()
    }));

    return res.json(followers);
  } catch (error) {
    console.error('Error retrieving followers:', error);
    return res.status(500).json({ message: 'Failed to retrieve followers list' });
  }
};

// Get list of people the user is following
export const getFollowingList = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user!._id)
      .populate('following', 'username profilePhoto bio')
      .lean();

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const following = (user.following || []).map((f: any) => ({
      ...f,
      _id: f._id.toString()
    }));

    return res.json(following);
  } catch (error) {
    console.error('Error retrieving following:', error);
    return res.status(500).json({ message: 'Failed to retrieve following list' });
  }
};