// Module-17-Lattice/server/src/routes/auth-routes.ts

import { Router } from 'express';
import { login, signup } from '../controllers/authController.js'; // Import properly

const router = Router();

// Routes using controller functions
router.post('/login', login);
router.post('/signup', signup);

export default router;
