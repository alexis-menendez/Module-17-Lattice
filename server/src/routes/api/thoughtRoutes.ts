// Module-17-Lattice/server/src/routes/api/thoughtRoutes.ts

import { Router } from 'express';
const router = Router();

import {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
  getMyThoughts,
  getFriendsThoughts,
  getFollowingThoughts,
  getPublicThoughts
} from '../../controllers/thoughtController.js';

import { authenticateToken } from '../../middleware/auth.js';

console.log('[router] mounting thoughtRoutes');

try {
  console.log('mounting: /');
  router.route('/')
    .get(getThoughts)
    .post(createThought);
} catch (err) {
  console.error('FAILED to mount /', err);
}

try {
  console.log('mounting: /:thoughtId');
  router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);
} catch (err) {
  console.error('FAILED to mount /:thoughtId', err);
}

try {
  console.log('mounting: /:thoughtId/reactions');
  router.route('/:thoughtId/reactions')
    .post(addReaction);
} catch (err) {
  console.error('FAILED to mount /:thoughtId/reactions', err);
}

try {
  console.log('mounting: /:thoughtId/reactions/:reactionId');
  router.route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);
} catch (err) {
  console.error('FAILED to mount /:thoughtId/reactions/:reactionId', err);
}

try {
  console.log('mounting: /mine');
  router.route('/mine')
    .get(authenticateToken, getMyThoughts);
} catch (err) {
  console.error('FAILED to mount /mine', err);
}

try {
  console.log('mounting: /friends');
  router.route('/friends')
    .get(authenticateToken, getFriendsThoughts);
} catch (err) {
  console.error('FAILED to mount /friends', err);
}

try {
  console.log('mounting: /following');
  router.route('/following')
    .get(authenticateToken, getFollowingThoughts);
} catch (err) {
  console.error('FAILED to mount /following', err);
}

try {
  console.log('mounting: /public');
  router.route('/public')
    .get(getPublicThoughts);
} catch (err) {
  console.error('FAILED to mount /public', err);
}

export default router;
