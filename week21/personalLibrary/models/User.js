import { Schema, model } from 'mongoose';
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - email
 *       properties:
 *         _id:
 *           type: string
 *           description: The user's unique identifier
 *           readOnly: true
 *           example: "64b5f7a8c1e4f5b3c1d9e9e3"
 *         firstName:
 *           type: string
 *           description: The user's first name
 *           example: "John"
 *         lastName:
 *           type: string
 *           description: The user's last name
 *           example: "Doe"
 *         email:
 *           type: string
 *           description: The user's email address
 *           example: "john.doe@example.com"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date when the user record was created
 *           readOnly: true
 *           example: "2023-10-01T00:00:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date when the user record was last updated
 *           readOnly: true
 *           example: "2023-10-01T00:00:00.000Z"
 */
const userSchema = new Schema(
  {
    firstName: { type: String, required: [true, 'First name is required'] },
    lastName: { type: String, required: [true, 'Last name is required'] },
    email: { type: String, required: [true, 'Email is required'], unique: true },
  },
  {
    timestamps: true,
  },
);

export default model('User', userSchema);
