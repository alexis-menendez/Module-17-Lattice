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

import { authenticateToken } from '../../middleware/auth.js'; 

// Routes for all users
router.route('/')
  .get(getUsers)
  .post(createUser);

// Routes for the logged-in user's own profile
router.route('/me')
  .get(authenticateToken, getMyProfile)
  .put(authenticateToken, updateMyProfile);

// Upload profile photo
router.route('/me/photo')
  .post(authenticateToken, uploadProfilePhoto);

// ✅ Routes for single user access — all combined
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

export default router;
