import { userSchema } from '../schemas/users.js';
import { postSchema } from '../schemas/posts.js';
import ErrorResponse from '../utils/errorResponse.js';

const middlewareFactory = (model) => (req, res, next) => {
  const { method } = req;
  let schema;
  if (model === 'users') {
    schema = userSchema[method];
  } else if (model === 'posts') {
    schema = postSchema[method];
  } else {
    return next(new ErrorResponse('Invalid model specified', 404));
  }
  const { error } = schema?.validate(req.body);
  if (error) return next(new ErrorResponse(error, 400));
  next();
};
export default middlewareFactory;
