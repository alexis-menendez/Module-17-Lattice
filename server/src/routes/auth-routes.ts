// Module-17-Lattice/server/src/routes/auth-routes.ts

import { Router, Request, Response } from 'express';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = Router();

// ====== LOGIN CONTROLLER ======
export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'Authentication failed: user not found' });
    }

    const passwordIsValid = await bcrypt.compare(password, user.password);

    if (!passwordIsValid) {
      return res.status(401).json({ message: 'Authentication failed: wrong password' });
    }

    const secretKey = process.env.JWT_SECRET_KEY;
    if (!secretKey) {
      return res.status(500).json({ message: 'Server misconfiguration: missing JWT secret' });
    }

    const token = jwt.sign(
      { _id: String(user._id), username: user.username },
      secretKey,
      { expiresIn: '1h' }
    );

    return res.json({ token });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// ====== SIGNUP CONTROLLER ======
export const signup = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    // Basic validation
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ message: 'Username already taken.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    const secretKey = process.env.JWT_SECRET_KEY;
    if (!secretKey) {
      return res.status(500).json({ message: 'Server misconfiguration: missing JWT secret' });
    }

    const token = jwt.sign(
      { _id: String(newUser._id), username: newUser.username },
      secretKey,
      { expiresIn: '1h' }
    );

    return res.status(201).json({ token });
  } catch (err) {
    console.error('Signup error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// ====== ROUTES ======
router.post('/login', login);
router.post('/signup', signup);

export default router;
