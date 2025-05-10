import { Router } from 'express';

import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';

const router = Router();

console.log('[router] initializing main route index');

try {
  console.log('[router] mounting /api with authenticateToken');
  router.use('/api', apiRoutes);
} catch (err) {
  console.error('[router] FAILED to mount /api:', err);
  throw err;
}

try {
  console.log('[router] mounting /auth');
  router.use('/auth', authRoutes);
} catch (err) {
  console.error('[router] FAILED to mount /auth:', err);
  throw err;
}

try {
  console.log('[router] mounting fallback 404 handler');
  router.all('*', (_req, res) => {
    res.status(404).json({ message: '404 Not Found: The requested resource does not exist.' });
  });
} catch (err) {
  console.error('[router] FAILED to mount 404 handler:', err);
  throw err;
}

export default router;
