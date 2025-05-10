// Module-17-Lattice/server/src/routes/index.ts

import { Router, type RequestHandler } from 'express';

import authRoutes from './auth-routes.js';
import { authenticateToken } from '../middleware/auth.js';

import apiRoutes from './api/index.js';
// import userRoutes from './api/userRoutes.js';
// import thoughtRoutes from './api/thoughtRoutes.js';

const router = Router();

router.use('/api', authenticateToken, apiRoutes);
router.use('/auth', authRoutes);

// Type-safe 404 handler
const notFoundHandler: RequestHandler = (_req, res): void => {
  res.status(404).send('404 Not Found: The requested resource does not exist.');
};
// router.use('*', notFoundHandler);
router.all('*', notFoundHandler);

export default router;
