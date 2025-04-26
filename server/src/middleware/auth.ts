import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload as DefaultJwtPayload } from 'jsonwebtoken';

interface CustomJwtPayload extends DefaultJwtPayload {
  _id: string;
  username: string;
}

declare module 'express-serve-static-core' {
  interface Request {
    user?: CustomJwtPayload;
  }
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Missing authorization header' });
  }

  const token = authHeader.split(' ')[1];
  const secretKey = process.env.JWT_SECRET_KEY;

  if (!secretKey) {
    return res.status(500).json({ message: 'Server misconfiguration: missing JWT secret' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err || !decoded) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }

    req.user = decoded as CustomJwtPayload;
    return next();
  });
};
