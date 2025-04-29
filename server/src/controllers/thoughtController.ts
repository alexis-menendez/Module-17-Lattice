// Module-17-Lattice/server/src/controllers/thoughtController.ts

import { Thought, User } from '../models/index.js';
import { Request, Response } from 'express';

// Get all thoughts
export const getThoughts = async (_req: Request, res: Response) => {
  try {
    const thoughts = await Thought.find();
    return res.json(thoughts);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// Get a single thought
export const getSingleThought = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);

    if (!thought) {
      return res.status(404).json({ message: 'No thought with that ID' });
    }

    return res.json(thought);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// Create a new thought
export const createThought = async (req: Request, res: Response) => {
  try {
    const { thoughtText, userId, visibility } = req.body;

    const thought = await Thought.create({
      thoughtText,
      username: req.body.username,  // frontend must send username
      visibility: visibility || 'public',
    });

    const user = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { thoughts: thought._id } },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'Thought created, but no user with that ID.' });
    }

    return res.json({ message: 'Created the thought 🎉', thought });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

// Update a thought (now with ownership check)
export const updateThought = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);

    if (!thought) {
      return res.status(404).json({ message: 'No thought with this ID!' });
    }

    // Ownership check
    if (thought.username !== req.user!.username) {
      return res.status(403).json({ message: 'You are not authorized to edit this thought.' });
    }

    const updatedThought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $set: req.body },
      { runValidators: true, new: true }
    );

    return res.json(updatedThought);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// Delete a thought (now with ownership check)
export const deleteThought = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);

    if (!thought) {
      return res.status(404).json({ message: 'No thought with this ID!' });
    }

    // Ownership check
    if (thought.username !== req.user!.username) {
      return res.status(403).json({ message: 'You are not authorized to delete this thought.' });
    }

    await Thought.findByIdAndDelete(req.params.thoughtId);

    await User.updateMany(
      { thoughts: req.params.thoughtId },
      { $pull: { thoughts: req.params.thoughtId } }
    );

    return res.json({ message: 'Thought successfully deleted!' });
  } catch (err) {
    return res.status(500).json(err);
  }
};

// Add a reaction to a thought
export const addReaction = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    );

    if (!thought) {
      return res.status(404).json({ message: 'No thought with this ID!' });
    }

    return res.json(thought);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// Remove a reaction from a thought
export const removeReaction = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $pull: { reactions: { _id: req.params.reactionId } } },
      { runValidators: true, new: true }
    );

    if (!thought) {
      return res.status(404).json({ message: 'No thought or reaction with this ID!' });
    }

    return res.json(thought);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// Controller Functions for User API 

// Get thoughts posted by the logged-in user
export const getMyThoughts = async (req: Request, res: Response) => {
  try {
    const thoughts = await Thought.find({ username: req.user!.username });
    return res.json(thoughts);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// Get thoughts posted by the logged-in user's friends
export const getFriendsThoughts = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user!.id).populate('friends');

    if (!user) {
      return res.status(404).json({ message: 'No user found.' });
    }

    const friendsUsernames = (user.friends as { username: string }[]).map(friend => friend.username);

    const thoughts = await Thought.find({ 
      username: { $in: friendsUsernames }
    });

    return res.json(thoughts);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// Get public thoughts from users the current user follows
export const getFollowingThoughts = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user!.id).populate('following');

    if (!user) {
      return res.status(404).json({ message: 'No user found.' });
    }

    const followingUsernames = (user.following as { username: string }[]).map(follow => follow.username);

    const thoughts = await Thought.find({ 
      username: { $in: followingUsernames },
      visibility: 'public'
    });

    return res.json(thoughts);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// Get all public thoughts
export const getPublicThoughts = async (_req: Request, res: Response) => {
  try {
    const thoughts = await Thought.find({ visibility: 'public' });
    return res.json(thoughts);
  } catch (err) {
    return res.status(500).json(err);
  }
};
