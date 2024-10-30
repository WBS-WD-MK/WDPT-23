import { Router } from 'express';
import { createUser, deleteUser, getUserById, getUsers, updateUser } from '../controllers/users.js';
import validateRequest from '../middleware/validateRequest.js';
const userRouter = Router();

userRouter.route('/').get(getUsers).post(validateRequest('users'), createUser);
userRouter
  .route('/:id')
  .get(getUserById)
  .put(validateRequest('users'), updateUser)
  .delete(deleteUser);

export default userRouter;
