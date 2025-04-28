# This is a backup since I am making a big change and idk if that change is going to work


// Module-17-Lattice/server/src/utils/auth.ts

import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'defaultsecret';
const expiration = '2h';

export const signToken = (payload: object): string => {
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, secret);
  } catch {
    throw new Error('Invalid token');
  }
};
