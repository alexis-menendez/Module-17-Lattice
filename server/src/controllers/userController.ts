// Module-17-Lattice/server/src/controllers/userController.ts

import { User } from '../models/index.js';
import { Request, Response } from 'express';

  export const getUsers = async (_req: Request, res: Response) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  export const getSingleUser = async (req: Request, res: Response) => {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
      return;
    } catch (err) {
      res.status(500).json(err);
      return;
    }
  }

  export const createUser = async (req: Request, res: Response) => {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  export const updateUser = async (req: Request, res: Response) => {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId });
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { new: true }
      );
      res.json(updatedUser);
      return;
    } catch (err) {
      res.status(500).json(err);
      return;
    }
  }

  export const deleteUser = async (req: Request, res: Response) => {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      await User.deleteMany({ _id: { $in: user } });
      res.json({ message: 'User and associated apps deleted!' })
      return;
    } catch (err) {
      res.status(500).json(err);
      return;
    }
  }


export const addFriend = async (req: Request, res: Response) => {
  const { userId, friendId } = req.params;

  try {
    const user = await User.findOneAndUpdate(
      { _id: userId },
      { $addToSet: { friends: friendId } },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'No user with that ID' });
    }
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Error adding friend' });
  }
};



export const removeFriend = async (req: Request, res: Response) => {
  const { userId, friendId } = req.params;

  try { 
    const user = await User.findOneAndUpdate(
      { _id: userId },
      { $pull: { friends: friendId } },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'No user with that ID' });
    }
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Error removing friend' });
  }};

export const getFriends = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId).populate('friends');

    if (!user) {
      return res.status(404).json({ message: 'No user with that ID' });
    }

    return res.json(user.friends);
  } catch (error) {
    return res.status(500).json({ message: 'Error retrieving friends' });
  }
}