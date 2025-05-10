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
export const getUsers = async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find().lean();
    res.json(users.map(sanitizeUser));
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get a single user by ID
export const getSingleUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findById(req.params.userId).lean();
    if (!user) {
      res.status(404).json({ message: 'No user with that ID' });
      return;
    }
    res.json(sanitizeUser(user));
  } catch (err) {
    res.status(500).json(err);
  }
};

// Create a user (admin use)
export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.create(req.body);
    res.json(sanitizeUser(user.toObject()));
  } catch (err) {
    res.status(500).json(err);
  }
};

// Update a user by ID
export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      { $set: req.body },
      { runValidators: true, new: true }
    ).lean();

    if (!updatedUser) {
      res.status(404).json({ message: 'No user with that ID' });
      return;
    }

    res.json(sanitizeUser(updatedUser));
  } catch (err) {
    res.status(500).json(err);
  }
};

// Delete a user
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findByIdAndDelete(req.params.userId).lean();
    if (!user) {
      res.status(404).json({ message: 'No user with that ID' });
      return;
    }
    res.json({ message: 'User successfully deleted!' });
  } catch (err) {
    res.status(500).json(err);
  }
};

// Add a friend
export const addFriend = async (req: Request, res: Response): Promise<void> => {
  const { userId, friendId } = req.params;
  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { friends: friendId } },
      { new: true }
    ).lean();

    if (!user) {
      res.status(404).json({ message: 'No user with that ID' });
      return;
    }

    res.json(sanitizeUser(user));
  } catch (error) {
    res.status(500).json({ message: 'Error adding friend' });
  }
};

// Remove a friend
export const removeFriend = async (req: Request, res: Response): Promise<void> => {
  const { userId, friendId } = req.params;
  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { $pull: { friends: friendId } },
      { new: true }
    ).lean();

    if (!user) {
      res.status(404).json({ message: 'No user with that ID' });
      return;
    }

    res.json(sanitizeUser(user));
  } catch (error) {
    res.status(500).json({ message: 'Error removing friend' });
  }
};

// Get a user's friends
export const getFriends = async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId)
      .populate('friends', 'username profilePhoto bio')
      .lean();

    if (!user) {
      res.status(404).json({ message: 'No user with that ID' });
      return;
    }

    const friends = (user.friends || []).map((friend: any) => ({
      ...friend,
      _id: friend._id.toString()
    }));

    res.json(friends);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving friends' });
  }
};

// Get the logged-in user's profile
export const getMyProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findById(req.user!._id).lean();

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.json(sanitizeUser(user));
  } catch (err) {
    res.status(500).json(err);
  }
};

// Update logged-in user's profile
export const updateMyProfile = async (req: Request, res: Response): Promise<void> => {
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
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.json(sanitizeUser(updatedUser));
  } catch (err) {
    res.status(500).json(err);
  }
};

// Upload profile photo
export const uploadProfilePhoto = async (req: Request, res: Response): Promise<void> => {
  try {
    const { profilePhoto } = req.body;

    if (!profilePhoto) {
      res.status(400).json({ message: 'Profile photo URL required.' });
      return;
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user!._id,
      { profilePhoto },
      { runValidators: true, new: true }
    ).lean();

    if (!updatedUser) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.json(sanitizeUser(updatedUser));
  } catch (err) {
    res.status(500).json(err);
  }
};
