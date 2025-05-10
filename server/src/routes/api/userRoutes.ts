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

console.log('[router] mounting userRoutes');

try {
  console.log('mounting: /');
  router.route('/')
    .get(getUsers)
    .post(createUser);
} catch (err) {
  console.error('FAILED to mount /', err);
}

try {
  console.log('mounting: /:userId');
  router.route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);
} catch (err) {
  console.error('FAILED to mount /:userId', err);
}

try {
  console.log('mounting: /me (auth)');
  router.route('/me')
    .get(authMiddleware, getMyProfile)
    .put(authMiddleware, updateMyProfile);
} catch (err) {
  console.error('FAILED to mount /me', err);
}

try {
  console.log('mounting: /me/photo (auth)');
  router.route('/me/photo')
    .post(authMiddleware, uploadProfilePhoto);
} catch (err) {
  console.error('FAILED to mount /me/photo', err);
}

try {
  console.log('mounting: /:userId/friends');
  router.route('/:userId/friends')
    .get(getFriends);
} catch (err) {
  console.error('FAILED to mount /:userId/friends', err);
}

try {
  console.log('mounting: /:userId/friends/:friendId');
  router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);
} catch (err) {
  console.error('FAILED to mount /:userId/friends/:friendId', err);
}

export default router;
