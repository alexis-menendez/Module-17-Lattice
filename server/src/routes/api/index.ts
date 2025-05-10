// Module-17-Lattice/server/src/routes/api/index.ts

import { Router } from 'express';
const router = Router();

import authRoutes from '../auth-routes.js'; 
import thoughtRoutes from './thoughtRoutes.js';
import userRoutes from './userRoutes.js';

router.use('/auth', authRoutes); 
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

export default router;