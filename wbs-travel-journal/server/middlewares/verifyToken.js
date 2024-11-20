import jwt from 'jsonwebtoken';
import asyncHandler from '../utils/asyncHandler.js';

const verifyToken = asyncHandler(async (req, res, next) => {
  // req.cookies will be undefined if not using cookie-parser
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  req.userId = decodedToken.id;
  next();
});

export default verifyToken;
