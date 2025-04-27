import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/latticeDB');

export default mongoose.connection;
