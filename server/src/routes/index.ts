import { Router } from 'express';
const router = Router();

import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
import { authenticateToken } from '../middleware/auth.js';

router.use('/api', authenticateToken, apiRoutes);

router.use('/auth', authRoutes);


router.use((_req, res) => {
  return res.send('404 Not Found: The requested resource does not exist.');
});

export default router;