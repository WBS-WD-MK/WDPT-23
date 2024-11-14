import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';

import User from '../models/User.js';
export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find().populate('readingList.bookRefId');
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
  const user = await User.findById(id).populate('readingList.bookRefId');
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
export const addBookToReadingList = asyncHandler(async (req, res) => {
  const { bookRefId, status } = req.body;
  let updatedUser;
  updatedUser = await User.findOneAndUpdate(
    { _id: req.params.id, 'readingList.bookRefId': { $ne: bookRefId } }, // $ne ensures no duplicate bookRefId
    { $push: { readingList: { bookRefId, status } } }, // Adds new book if it doesn't exist
    { new: true },
  );
  //optional
  if (!updatedUser) {
    // If the book already exists in the reading list, we update it
    updatedUser = await User.findOneAndUpdate(
      { _id: req.params.id, 'readingList.bookRefId': bookRefId },
      { $set: { 'readingList.$.status': status } }, // Update status of existing book
      { new: true },
    );
  }

  res.status(201).json(updatedUser);
});

export const updateBookStatusInReadingList = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) throw new ErrorResponse('User not found', 404);
  const bookEntry = user.readingList.id(req.params.bookId);
  if (!bookEntry) throw new ErrorResponse('Book entry not found', 404);
  bookEntry.status = req.body.status;
  await user.save();
  res.json(user);
});

export const removeBookFromReadingList = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { $pull: { readingList: { _id: req.params.bookId } } },
    { new: true },
  );
  if (!user) return res.status(404).json({ message: 'User not found' });
  await user.save();
  res.json({ message: 'Book removed from reading list' });
});
