// Module-17-Lattice/server/src/seeds/index.ts

import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

import User from '../models/User.js';
import Thought from '../models/Thought.js';
// import { users } from './user-seeds.js';
// import { thoughts } from './thought-seeds.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/latticeDB';

const seedAll = async () => {
  try {
    // Connect to MongoDB
    console.log('✓ Connecting to MongoDB:', mongoURI);
    await mongoose.connect(mongoURI);
    console.log('✓ MongoDB connected.');

    // Clear existing data
    await User.deleteMany({});
    console.log('✓ User data cleared.');
    await Thought.deleteMany({});
    console.log('✓ Thought data cleared.');
    await mongoose.connection.db!.dropDatabase();
    console.log('✓ All Data cleared.');    

    // Defer dynamic import until connection is active
    const { users } = await import('./user-seeds.js');
    const { thoughts } = await import('./thought-seeds.js');

    await User.insertMany(users);
    console.log('✓ Users seeded.');

    await Thought.insertMany(thoughts);
    console.log('✓ Thoughts seeded.');

    await mongoose.disconnect();
    console.log('✓ Seeding complete!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedAll();
