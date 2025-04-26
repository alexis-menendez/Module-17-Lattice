import { Router } from 'express';
const router = Router();

import apiRoutes from './api/index.js';

router.use('/api', apiRoutes);

router.use((_req, res) => {
  return res.send('404 Not Found: The requested resource does not exist.');
});

export default router;