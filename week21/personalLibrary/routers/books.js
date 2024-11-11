import { Router } from 'express';
import { getBooks, createBook, getBookById, updateBook, deleteBook } from '../controllers/books.js';

const router = Router();

/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Get all books
 *     tags: [Books]
 *     description: Retrieve a list of all books
 *     responses:
 *       200:
 *         description: A list of books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The book ID
 *                   title:
 *                     type: string
 *                     description: The title of the book
 *                   pages:
 *                     type: number
 *                     description: The number of pages in the book
 *                   isbn:
 *                     type: string
 *                     description: The ISBN of the book
 *                   author:
 *                     type: string
 *                     description: The author's ID (reference to User)
 *                   published_date:
 *                     type: string
 *                     format: date-time
 *                     description: The publication date of the book
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     description: Add a new book to the collection
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the book
 *               pages:
 *                 type: number
 *                 description: The number of pages in the book
 *               isbn:
 *                 type: string
 *                 description: The ISBN of the book
 *               author:
 *                 type: string
 *                 description: The author's ID (reference to User)
 *               published_date:
 *                 type: string
 *                 format: date-time
 *                 description: The publication date of the book
 *             example:
 *               title: "The Great Gatsby"
 *               pages: 180
 *               isbn: "9780743273565"
 *               author: "60e2f9f965d1a62d64b45c3a"
 *               published_date: "2023-10-01T00:00:00Z"
 *     responses:
 *       201:
 *         description: Book created successfully
 */
router.route('/').get(getBooks).post(createBook);

/**
 * @swagger
 * /api/books/{id}:
 *   get:
 *     summary: Get a book by ID
 *     tags: [Books]
 *     description: Retrieve a single book by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book ID
 *     responses:
 *       200:
 *         description: A single book
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The book ID
 *                 title:
 *                   type: string
 *                   description: The title of the book
 *                 pages:
 *                   type: number
 *                   description: The number of pages in the book
 *                 isbn:
 *                   type: string
 *                   description: The ISBN of the book
 *                 author:
 *                   type: string
 *                   description: The author's ID (reference to User)
 *                 published_date:
 *                   type: string
 *                   format: date-time
 *                   description: The publication date of the book
 *   put:
 *     summary: Update a book by ID
 *     tags: [Books]
 *     description: Update the details of a specific book by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               pages:
 *                 type: number
 *               isbn:
 *                 type: string
 *               author:
 *                 type: string
 *               published_date:
 *                 type: string
 *                 format: date-time
 *             example:
 *               title: "The Great Gatsby - Updated"
 *               pages: 200
 *               isbn: "9780743273565"
 *               author: "60e2f9f965d1a62d64b45c3a"
 *               published_date: "2023-10-01T00:00:00Z"
 *     responses:
 *       200:
 *         description: Book updated successfully
 *   delete:
 *     summary: Delete a book by ID
 *     tags: [Books]
 *     description: Remove a book from the collection by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book ID
 *     responses:
 *       204:
 *         description: Book deleted successfully
 */
router.route('/:id').get(getBookById).put(updateBook).delete(deleteBook);

export default router;
