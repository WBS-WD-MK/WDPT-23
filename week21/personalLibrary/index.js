import express from 'express';
import cors from 'cors';
import './db/index.js';
import usersRouter from './routers/users.js';
import booksRouter from './routers/books.js';
import errorHandler from './middleware/errorHandler.js';
import notFoundHandler from './middleware/notFound.js';
import { swaggerUi, swaggerSpec } from './swagger.js';
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/users', usersRouter);
app.use('/api/books', booksRouter);

app.use('*', notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
