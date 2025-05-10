import { Thought, User } from '../models/index.js';
import { Request, Response } from 'express';

// Get all thoughts
export const getThoughts = async (_req: Request, res: Response): Promise<void> => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get a single thought
export const getSingleThought = async (req: Request, res: Response): Promise<void> => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      res.status(404).json({ message: 'No thought with that ID' });
      return;
    }
    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Create a new thought
export const createThought = async (req: Request, res: Response): Promise<void> => {
  try {
    const { thoughtText, userId, visibility } = req.body;

    const thought = await Thought.create({
      thoughtText,
      username: req.body.username,
      visibility: visibility || 'public',
    });

    const user = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { thoughts: thought._id } },
      { new: true }
    );

    if (!user) {
      res.status(404).json({ message: 'Thought created, but no user with that ID.' });
      return;
    }

    res.json({ message: 'Created the thought 🎉', thought });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

// Update a thought
export const updateThought = async (req: Request, res: Response): Promise<void> => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      res.status(404).json({ message: 'No thought with this ID!' });
      return;
    }

    if (thought.username !== req.user!.username) {
      res.status(403).json({ message: 'You are not authorized to edit this thought.' });
      return;
    }

    const updatedThought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $set: req.body },
      { runValidators: true, new: true }
    );

    res.json(updatedThought);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Delete a thought
export const deleteThought = async (req: Request, res: Response): Promise<void> => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      res.status(404).json({ message: 'No thought with this ID!' });
      return;
    }

    if (thought.username !== req.user!.username) {
      res.status(403).json({ message: 'You are not authorized to delete this thought.' });
      return;
    }

    await Thought.findByIdAndDelete(req.params.thoughtId);
    await User.updateMany({ thoughts: req.params.thoughtId }, { $pull: { thoughts: req.params.thoughtId } });

    res.json({ message: 'Thought successfully deleted!' });
  } catch (err) {
    res.status(500).json(err);
  }
};

// Add a reaction
export const addReaction = async (req: Request, res: Response): Promise<void> => {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    );

    if (!thought) {
      res.status(404).json({ message: 'No thought with this ID!' });
      return;
    }

    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Remove a reaction
export const removeReaction = async (req: Request, res: Response): Promise<void> => {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $pull: { reactions: { _id: req.params.reactionId } } },
      { runValidators: true, new: true }
    );

    if (!thought) {
      res.status(404).json({ message: 'No thought or reaction with this ID!' });
      return;
    }

    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get logged-in user's thoughts
export const getMyThoughts = async (req: Request, res: Response): Promise<void> => {
  try {
    const thoughts = await Thought.find({ username: req.user!.username });
    res.json(thoughts);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get friends' thoughts
export const getFriendsThoughts = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findById(req.user!.id).populate('friends');
    if (!user) {
      res.status(404).json({ message: 'No user found.' });
      return;
    }

    const friendsUsernames = (user.friends as unknown as { username: string }[]).map(f => f.username);
    const thoughts = await Thought.find({ username: { $in: friendsUsernames } });

    res.json(thoughts);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get following public thoughts
export const getFollowingThoughts = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findById(req.user!.id).populate('following');
    if (!user) {
      res.status(404).json({ message: 'No user found.' });
      return;
    }

    const followingUsernames = (user.following as unknown as { username: string }[]).map(f => f.username);
    const thoughts = await Thought.find({ username: { $in: followingUsernames }, visibility: 'public' });

    res.json(thoughts);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get all public thoughts
export const getPublicThoughts = async (_req: Request, res: Response): Promise<void> => {
  try {
    const thoughts = await Thought.find({ visibility: 'public' });
    res.json(thoughts);
  } catch (err) {
    res.status(500).json(err);
  }
};
