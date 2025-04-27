// Module-17-Lattice/server/src/routes/api/index.ts

import { Router } from 'express';
const router = Router();

import thoughtRoutes from './thoughtRoutes.js';
import userRoutes from './userRoutes.js';
import authRoutes from '../auth-routes.js'; 

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);
router.use('/auth', authRoutes); 

export default router;
