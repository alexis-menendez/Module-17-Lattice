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

// General Thought Routes
router.route('/')
      .get(getThoughts)
      .post(createThought);

router.route('/:thoughtId')
      .get(getSingleThought)
      .put(updateThought)
      .delete(deleteThought);

router.route('/:thoughtId/reactions')
      .post(addReaction);

router.route('/:thoughtId/reactions/:reactionId')
      .delete(removeReaction);

// User Thoughts Feed Routes
router.route('/mine')
      .get(authenticateToken, getMyThoughts);

// User Friends Thoughts Feed Routes
router.route('/friends')
      .get(authenticateToken, getFriendsThoughts);

// User Following Public Thoughts Feed Routes
router.route('/following')
      .get(authenticateToken, getFollowingThoughts);

// All Public Thoughts Feed Routes
router.route('/public')
      .get(getPublicThoughts);

export default router;