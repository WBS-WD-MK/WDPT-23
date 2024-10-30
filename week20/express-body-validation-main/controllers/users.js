import Post from '../models/Post.js';
import User from '../models/User.js';
import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/errorResponse.js';
export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

export const createUser = asyncHandler(async (req, res) => {
  const {
    body: { email },
  } = req;
  const found = await User.findOne({ where: { email } });
  if (found) throw new ErrorResponse('User with that email already exists');
  const user = await User.create(req.body);
  res.json(user);
});

export const getUserById = asyncHandler(async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const user = await User.findByPk(id, { include: Post });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export const updateUser = asyncHandler(async (req, res) => {
  const {
    params: { id },
  } = req;
  const user = await User.findByPk(id);
  if (!user) throw new ErrorResponse('User not found');
  console.log(req.body);
  await user.update(req.body);
  res.json(user);
});

export const deleteUser = asyncHandler(async (req, res) => {
  const {
    params: { id },
  } = req;
  const user = await User.findByPk(id);
  if (!user) throw new ErrorResponse('User not found');
  await user.destroy();
  res.json({ message: 'User deleted' });
});
