// server/src/controllers/authController.ts

import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User';
import { signToken } from '../utils/auth';

// Signup Controller
export const signup = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Please provide username, email, and password.' });
    }

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(409).json({ message: 'Username or email already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = signToken({ id: newUser._id, username: newUser.username });

    return res.status(201).json({
      message: 'User created successfully.',
      token,
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error('Signup error:', error);
    return res.status(500).json({ message: 'Server error during signup.' });
  }
};

// Login Controller
export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Please provide username and password.' });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'Invalid username or password.' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid username or password.' });
    }

    const token = signToken({ id: user._id, username: user.username });

    return res.status(200).json({
      message: 'Login successful.',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Server error during login.' });
  }
};
