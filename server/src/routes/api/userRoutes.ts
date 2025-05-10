// Module-17-Lattice/server/src/routes/api/userRoutes.ts

import { Router } from 'express';
const router = Router();

import { 
  getUsers,
  getSingleUser,   
  createUser, 
  updateUser,
  deleteUser,  
  addFriend,   
  removeFriend,   
  getFriends,
  getMyProfile,
  updateMyProfile,
  uploadProfilePhoto
} from '../../controllers/userController.js';
import { authMiddleware } from '../../middleware/auth.js';
import { authenticateToken } from '../../middleware/auth.js'; 

// Get / Create / Delete User
router.route('/')
  .get(getUsers)
  .post(createUser);

router.post('/', createUser);
router.put('/:userId', updateUser);
router.delete('/:userId', deleteUser);

// Routes for the logged-in user's own profile
router.route('/me')
  .get(authenticateToken, getMyProfile)
  .put(authenticateToken, updateMyProfile);
router.route('/me/photo')
  .post(authenticateToken, uploadProfilePhoto);

router.get('/me', authMiddleware, getMyProfile); 
router.put('/me', authMiddleware, updateMyProfile);
router.put('/me/photo', authMiddleware, uploadProfilePhoto);

// Routes for single user access — all combined
router.route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

// Routes for user's friends
router.route('/:userId/friends')
  .get(getFriends);

router.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

router.get('/:userId/friends', getFriends);
router.post('/:userId/friends/:friendId', addFriend);
router.delete('/:userId/friends/:friendId', removeFriend);

export default router;