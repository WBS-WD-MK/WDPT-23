// Import express and the db file just for side effects (to connect to the database)
import express from 'express';
import { createUser, deleteUser, getUserById, getUsers, updateUser } from './controllers/users.js';
import { createNote, deleteNote, getNoteById, getNotes, updateNote } from './controllers/notes.js';
import './db/associations.js';
// Create an express app
const app = express();
// Set a port from the environment variable or default to 8080
const port = process.env.PORT || 8080;
// This line lets us use the JSON body of a request in our routes as req.body
app.use(express.json());
// app.route() helps us define handlers for different HTTP methods on the same route
app.route('/api/v1/users').get(getUsers).post(createUser);
app.route('/api/v1/users/:id').get(getUserById).put(updateUser).delete(deleteUser);
app.route('/api/v1/notes').get(getNotes).post(createNote);
app.route('/api/v1/notes/:id').get(getNoteById).put(updateNote).delete(deleteNote);
// Start the server
app.listen(port, () => console.log(`Server is running on port ${port}`));
