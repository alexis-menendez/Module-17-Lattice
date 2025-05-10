// Module-17-Lattice/server/src/middleware/auth.ts

import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload as DefaultJwtPayload } from 'jsonwebtoken';
import User from '../models/User.js'; // Required in ESM

interface CustomJwtPayload extends DefaultJwtPayload {
  _id: string;
  username: string;
}

declare module 'express-serve-static-core' {
  interface Request {
    user?: any; // You can replace `any` with a more specific UserDocument type if you define it
  }
}

export const authenticateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ message: 'Missing authorization header' });
    return;
  }

  const token = authHeader.split(' ')[1];
  const secretKey = process.env.JWT_SECRET_KEY;

  if (!secretKey) {
    res.status(500).json({ message: 'Server misconfiguration: missing JWT secret' });
    return;
  }

  try {
    const decoded = jwt.verify(token, secretKey) as CustomJwtPayload;

    const user = await User.findById(decoded._id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    req.user = user;
    next();
  } catch (err) {
    console.error('[authMiddleware] Token error:', err);
    res.status(403).json({ message: 'Invalid or expired token' });
  }
};

export const authMiddleware = authenticateToken;
