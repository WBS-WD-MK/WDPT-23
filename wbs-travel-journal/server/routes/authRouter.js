import { Router } from 'express';
import validateJOI from '../middlewares/validateJOI.js';
import verifyToken from '../middlewares/verifyToken.js';
import { signin, signout, signup, me } from '../controllers/auth.js';
import { userSchema, signinSchema } from '../joi/schemas.js';

const authRouter = Router();

authRouter.get('/me', verifyToken, me);
authRouter.post('/signin/', validateJOI(signinSchema), signin);
authRouter.post('/signup/', validateJOI(userSchema), signup);
authRouter.delete('/signout', signout);
export default authRouter;
