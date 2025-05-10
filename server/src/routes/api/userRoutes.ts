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
  getFriendsList,
  getMyProfile,
  updateMyProfile,
  uploadProfilePhoto,
  followUser,
  unfollowUser,
  getFollowingList,
  getFollowersList
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
router.route('/friends')
  .get(authenticateToken, getFriendsList)

router.route('/friends/:friendID')
  .post(authenticateToken, addFriend);

router.route('/friends/:friendID')
  .delete(authenticateToken, removeFriend);

router.get('/friends', authMiddleware, getFriendsList); 
router.post('/friends/:friendID', authMiddleware, addFriend);
router.delete('/friends/:friendID', authMiddleware, removeFriend);

// Follow/unfollow another user
router.post('/follow/:userId', authenticateToken, followUser);
router.delete('/unfollow/:userId', authenticateToken, unfollowUser);

// Get following and followers for logged-in user
router.get('/following', authenticateToken, getFollowingList);
router.get('/followers', authenticateToken, getFollowersList);

export default router;