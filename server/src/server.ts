// Module-17-Lattice/server/src/server.ts

import path from "node:path"; 
import { fileURLToPath } from 'url'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import dotenv from 'dotenv'; 
dotenv.config({ path: path.resolve(__dirname, '../.env') });
 
import express from 'express';
import cors from 'cors'; 
//import mongoose from 'mongoose';
import db from './config/connection.js';

// Explicit imports of route groups
import routes from './routes/index.js'; 
import authRoutes from './routes/auth-routes.js';       
import apiRoutes from './routes/index.js';       
import userRoutes from './routes/api/userRoutes.js';
import thoughtRoutes from './routes/api/thoughtRoutes.js';

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static frontend
app.use(express.static(path.resolve(__dirname, "../../client/dist")));

// API routes
app.use(routes);
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);



// Fallback route for React
app.get("*", (_req, res) => {
    res.sendFile(path.resolve(__dirname, "../../client/dist", "index.html"));
});

// Connect to MongoDB
db.once('open', () => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });