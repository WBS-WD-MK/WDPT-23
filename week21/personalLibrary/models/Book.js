import { Schema, model } from 'mongoose';

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - pages
 *         - isbn
 *       properties:
 *         _id:
 *           type: string
 *           description: The book's unique identifier
 *         title:
 *           type: string
 *           description: The title of the book
 *           example: "The Great Gatsby"
 *         pages:
 *           type: integer
 *           description: The number of pages in the book
 *           example: 180
 *         isbn:
 *           type: string
 *           description: The ISBN number of the book
 *           example: "978-3-16-148410-0"
 *         author:
 *           type: string
 *           description: The ID of the author (reference to User)
 *           example: "60d0fe4f5311236168a109ca"
 *         published_date:
 *           type: string
 *           format: date-time
 *           description: The date when the book was published
 *           example: "2023-10-01T00:00:00.000Z"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date when the book record was created
 *           example: "2023-10-01T00:00:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date when the book record was last updated
 *           example: "2023-10-01T00:00:00.000Z"
 */
const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      unique: true,
    },
    pages: {
      type: Number,
      required: [true, 'Pages is required'],
    },
    isbn: {
      type: String,
      required: [true, 'ISBN is required'],
    },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    published_date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);
export default model('Book', bookSchema);
