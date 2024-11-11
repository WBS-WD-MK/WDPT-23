import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Personal Library API',
      version: '1.0.0',
      description: 'A simple API to manage users and books',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
    tags: [
      {
        name: 'Users',
        description: 'Operations related to users',
      },
      {
        name: 'Books',
        description: 'Operations related to books',
      },
    ],
  },
  apis: ['./routers/*.js', './models/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };
