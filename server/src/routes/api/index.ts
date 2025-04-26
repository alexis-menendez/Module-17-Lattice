import { Router } from 'express';
const router = Router();

import thoughtRoutes from './thoughtRoutes.js';
import userRoutes from './userRoutes.js';

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

export default router;