import { User } from '../models/User.js';
import users from './users.json' assert { type: 'json' };

export const seedUsers = async () => {
  await User.insertMany(users);
};
