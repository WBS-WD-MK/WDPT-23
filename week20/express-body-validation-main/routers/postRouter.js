import { Router } from 'express';
import { createPost, deletePost, getPostById, getPosts, updatePost } from '../controllers/posts.js';
import validateRequest from '../middleware/validateRequest.js';
const postRouter = Router();

postRouter.route('/').get(getPosts).post(validateRequest('posts'), createPost);
postRouter
  .route('/:id')
  .get(getPostById)
  .put(validateRequest('posts'), updatePost)
  .delete(deletePost);

export default postRouter;
