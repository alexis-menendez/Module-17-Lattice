import { Thought } from '../models/Thought.js';
import thoughts from './thoughts.json' assert { type: 'json' };

export const seedThoughts = async () => {
  await Thought.insertMany(thoughts);
};
