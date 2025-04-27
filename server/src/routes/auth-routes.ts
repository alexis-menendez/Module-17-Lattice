import { Router, Request, Response } from 'express';
import User from '../models/User';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

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

const router = Router();

router.post('/login', login);

export default router;
