import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
//import mongoose from 'mongoose';
import db from './config/connection';
import path from "node:path";
import { fileURLToPath } from "url";
import routes from './routes/index';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static frontend
app.use(express.static(path.resolve(__dirname, "../../client/dist")));

// API routes
// app.use('/api', routes);
app.use(routes);


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

