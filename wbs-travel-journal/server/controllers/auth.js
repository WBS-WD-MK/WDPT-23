import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';
const isProduction = process.env.NODE_ENV === 'production';
const cookiesOptions = {
  httpOnly: true,
  sameSite: isProduction ? 'None' : 'Lax',
  secure: isProduction,
};

export const me = asyncHandler(async (req, res) => {
  const user = await User.findById(req.userId).select('-password');
  res.json(user);
});
export const signin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select('+password');
  if (!user) throw new ErrorResponse('Invalid credentials', 401);
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new ErrorResponse('Invalid credentials', 401);
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' });
  res.cookie('token', token, cookiesOptions);
  res.json({ message: 'User Logged in Successfully' });
});
export const signup = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const alreadyExist = await User.findOne({ email });
  if (alreadyExist) throw new ErrorResponse('User Already Exists', 400);
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ firstName, lastName, email, password: hashedPassword });
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' });
  res.cookie('token', token, cookiesOptions);
  res.json({ message: 'User Created Successfully' });
});
export const signout = asyncHandler(async (req, res) => {
  res.clearCookie('token', cookiesOptions);
  res.json({ message: 'User logged out successfully' });
});
