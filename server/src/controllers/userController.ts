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
export const getFriends = async (req: Request, res: Response) => {
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

// Get logged-in user's profile
export const getMyProfile = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user!.id).lean();

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
      req.user!.id,
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
      req.user!.id,
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
