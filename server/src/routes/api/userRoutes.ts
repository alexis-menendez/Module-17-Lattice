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

import { authenticate } from '../../middleware/authenticate.js';

// Routes for all users
router.route('/')
      .get(getUsers)
      .post(createUser);


// Routes for the logged-in user's own profile
router.route('/me')
      .get(authenticate, getMyProfile)
      .put(authenticate, updateMyProfile);

      // Routes for single user access
router.route('/:userId')
      router.route('/:userId').get(getSingleUser);
      router.route('/:userId').put(updateUser);
      router.route('/:userId').delete(deleteUser);

      // Routes for user's friends
router.route('/:userId/friends')
      .get(getFriends);

router.route('/:userId/friends/:friendId')
      .post(addFriend)
      .delete(removeFriend);

export default router;