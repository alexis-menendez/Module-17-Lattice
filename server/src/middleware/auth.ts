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
    user?: any; // Replace `any` with a Mongoose User type???
  }
}

export const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Missing authorization header' });
  }

  const token = authHeader.split(' ')[1];
  const secretKey = process.env.JWT_SECRET_KEY;

  if (!secretKey) {
    return res.status(500).json({ message: 'Server misconfiguration: missing JWT secret' });
  }

  try {
    const decoded = jwt.verify(token, secretKey) as CustomJwtPayload;
    
    const user = await User.findById(decoded._id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    req.user = user; 
    return next();
  } catch (err) {
    console.error('[authMiddleware] Token error:', err);
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

export const authMiddleware = authenticateToken;