import { isValidObjectId } from 'mongoose';
import Post from '../models/Post.js';
import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';

export const getAllPosts = asyncHandler(async (req, res, next) => {
  const posts = await Post.find().populate('author');
  res.json(posts);
});

export const createPost = asyncHandler(async (req, res, next) => {
  const { body, userId } = req;
  const newPost = await (await Post.create({ ...body, author: userId })).populate('author');
  res.status(201).json(newPost);
});

export const getSinglePost = asyncHandler(async (req, res, next) => {
  const {
    params: { id },
  } = req;
  if (!isValidObjectId(id)) throw new ErrorResponse('Invalid id', 400);
  const post = await Post.findById(id).populate('author');
  if (!post) throw new ErrorResponse(`Post with id of ${id} doesn't exist`, 404);
  res.send(post);
});

export const updatePost = asyncHandler(async (req, res, next) => {
  const {
    body,
    params: { id },
    userId,
  } = req;
  if (!isValidObjectId(id)) throw new ErrorResponse('Invalid id', 400);
  const post = await Post.findById(id).populate('author');
  if (!post) throw new ErrorResponse(`Post with id of ${id} doesn't exist`, 404);
  if (post.author._id.toString() !== userId)
    throw new ErrorResponse('Not Authorized to update this post', 403);
  post.set(body);
  await post.save();
  res.json(post);
});

export const deletePost = asyncHandler(async (req, res, next) => {
  const {
    params: { id },
  } = req;
  if (!isValidObjectId(id)) throw new ErrorResponse('Invalid id', 400);
  const post = await Post.findById(id).populate('author');
  if (!post) throw new ErrorResponse(`Post with id of ${id} doesn't exist`, 404);
  if (post.author._id.toString() !== userId)
    throw new ErrorResponse('Not Authorized to delete this post', 403);
  await Post.findByIdAndDelete(id);
  res.json({ success: `Post with id of ${id} was deleted` });
});
