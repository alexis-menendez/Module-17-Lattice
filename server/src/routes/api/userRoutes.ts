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
  getFriends 
} from '../../controllers/userController.js';

router.route('/')
      .get(getUsers)
      .post(createUser);

router.route('/:userId').get(getSingleUser);
router.route('/:userId').delete(deleteUser);
router.route('/:userId').put(updateUser);

router.route('/:userId/friends').get(getFriends);

router.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

export default router;