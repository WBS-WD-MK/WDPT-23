import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';

import User from '../models/User.js';
export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

export const createUser = asyncHandler(async (req, res) => {
  const {
    body: { firstName, lastName, email },
  } = req;
  if (!firstName || !lastName || !email)
    throw new ErrorResponse('First name, last name, and email are required', 400);
  const found = await User.findOne({ email });
  if (found) throw new ErrorResponse('Email already exists', 400);
  const user = await User.create({ firstName, lastName, email });
  res.status(201).json(user);
});

export const getUserById = asyncHandler(async (req, res) => {
  const {
    params: { id },
  } = req;
  const user = await User.findById(id);
  if (!user) throw new ErrorResponse('User not found', 404);
  res.status(200).json(user);
});

export const updateUser = asyncHandler(async (req, res) => {
  const {
    body: { firstName, lastName, email },
    params: { id },
  } = req;
  if (!firstName || !lastName || !email)
    throw new ErrorResponse('First name, last name, and email are required', 400);
  const user = await User.findByIdAndUpdate(id, { firstName, lastName, email }, { new: true });
  if (!user) throw new ErrorResponse('User not found', 404);
  res.status(200).json(user);
});

export const deleteUser = asyncHandler(async (req, res) => {
  const {
    params: { id },
  } = req;
  const user = await User.findByIdAndDelete(id);
  if (!user) throw new ErrorResponse('User not found', 404);
  res.status(200).json({ message: 'User deleted' });
});
