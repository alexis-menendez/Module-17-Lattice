// Module-17-Lattice/server/src/server.ts

import path from "node:path";
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import db from './config/connection.js';
import routes from './routes/index.js'; // Central route file

// Resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static frontend
app.use(express.static(path.resolve(__dirname, "../../client/dist")));

// Mount all app routes
app.use(routes); // handles /api and /auth via routes/index.ts

// Fallback route for React SPA
app.get("*", (_req, res) => {
  res.sendFile(path.resolve(__dirname, "../../client/dist", "index.html"));
});

// Start the server after DB connection
db.once('open', () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
