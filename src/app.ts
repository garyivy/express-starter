import express from 'express';
import { RegisterRoutes } from './generated/routes';
import swaggerUi from 'swagger-ui-express';
const swaggerFile = require('./generated/swagger.json');
import * as OpenApiValidator from 'express-openapi-validator';
import { installMiddleware } from './middleware/installMiddleware';

const app = express();

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(
  OpenApiValidator.middleware({
    apiSpec: './src/generated/swagger.json', // TODO: Why do I have to add src to the path and how will this work on the dist path?
    validateRequests: true,
    validateResponses: false,
  }),
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err, req, res, next) => {
  // Global Error Handler
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors,
  });
});

installMiddleware(app);
RegisterRoutes(app);

export default app;
