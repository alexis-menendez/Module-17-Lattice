// Module-17-Lattice/server/src/routes/index.ts

import { Router } from 'express';

import authRoutes from './auth-routes.js';
import { authenticateToken } from '../middleware/auth.js';

import apiRoutes from './api/index.js';
// import userRoutes from './api/userRoutes.js';
// import thoughtRoutes from './api/thoughtRoutes.js';

const router = Router();

router.use('/api', authenticateToken, apiRoutes);
router.use('/auth', authRoutes);

// router.use('/users', userRoutes);       
// router.use('/thoughts', thoughtRoutes);


router.use((_req, res) => {
  return res.send('404 Not Found: The requested resource does not exist.');
});

export default router;