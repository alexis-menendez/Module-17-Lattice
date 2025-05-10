// server/src/routes/api/index.ts

import { Router } from 'express';
const router = Router();

import thoughtRoutes from './thoughtRoutes.js';
import userRoutes from './userRoutes.js';

try {
  console.log('[api] mounting /users');
  router.use('/users', userRoutes);
} catch (err) {
  console.error('[api] FAILED to mount /users:', err);
  throw err;
}

try {
  console.log('[api] mounting /thoughts');
  router.use('/thoughts', thoughtRoutes);
} catch (err) {
  console.error('[api] FAILED to mount /thoughts:', err);
  throw err;
}

export default router;
