import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

import User from '../models/User.js';
import Thought from '../models/Thought.js';
import userSeeds from './userSeeds.js';
import thoughtSeeds from './thoughtSeeds.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/latticeDB');

const seedAll = async () => {
  try {
    // Clear existing documents
    await User.deleteMany({});
    await Thought.deleteMany({});
    console.log('Existing data cleared.');

    // Insert seed data
    await User.insertMany(userSeeds);
    console.log('Users seeded.');

    await Thought.insertMany(thoughtSeeds);
    console.log('Thoughts seeded.');

    console.log('Database seeding complete!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedAll();
