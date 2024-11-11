import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';
import Book from '../models/Book.js';
export const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find().populate('author', 'firstName lastName');
  res.status(200).json(books);
});

export const createBook = asyncHandler(async (req, res) => {
  const {
    body: { title, pages, isbn, author, published_date },
  } = req;
  if (!title || !pages || !isbn || !author || !published_date)
    throw new ErrorResponse('Please provide all required fields', 400);
  const book = await Book.create({ title, pages, isbn, author, published_date });
  const bookWithAuthor = await book.populate('author', 'firstName lastName');
  res.status(201).json(bookWithAuthor);
});

export const getBookById = asyncHandler(async (req, res) => {
  const {
    params: { id },
  } = req;
  const book = await Book.findById(id).populate('author', 'firstName lastName');
  if (!book) throw new ErrorResponse('Book not found', 404);
  res.status(200).json(book);
});

export const updateBook = asyncHandler(async (req, res) => {
  const {
    body: { title, pages, isbn, author, published_date },
    params: { id },
  } = req;
  const updatedBook = await Book.findByIdAndUpdate(
    id,
    { title, pages, isbn, author, published_date },
    { new: true },
  );
  if (!updatedBook) throw new ErrorResponse('Book not found', 404);
  const BookWithAuthor = await updatedBook.populate('author', 'firstName lastName');
  res.status(200).json(BookWithAuthor);
});

export const deleteBook = asyncHandler(async (req, res) => {
  const {
    params: { id },
  } = req;
  const book = await Book.findByIdAndDelete(id);
  if (!book) throw new ErrorResponse('Book not found', 404);
  res.status(200).json({ message: 'Book deleted successfully' });
});
