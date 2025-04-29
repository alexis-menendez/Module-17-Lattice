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

import { authenticate } from '../../middleware/authenticate.js'; // <-- you will need to create this if not already made

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
      .get(authenticate, getMyThoughts);

// User Friends Thoughts Feed Routes
router.route('/friends')
      .get(authenticate, getFriendsThoughts);

// User Following Public Thoughts Feed Routes
router.route('/following')
      .get(authenticate, getFollowingThoughts);

// All Public Thoughts Feed Routes
router.route('/public')
      .get(getPublicThoughts);

export default router;
