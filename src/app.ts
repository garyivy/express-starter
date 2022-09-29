import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { RegisterRoutes } from './generated/routes';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './generated/swagger.json';
import * as OpenApiValidator from 'express-openapi-validator';
import { installMiddleware } from './middleware/installMiddleware';
import { logger } from './services/loggingService';

const app = express();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const defaultErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  logger.error(`Unable to process request ${req.method} ${req.route}, ${err}`);
  res.status(err.status || 500).json({
    message: 'Unable to process the request at this time',
  });
};

app.use(defaultErrorHandler);
app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// TODO: Wby doesOpenApiValidator apiSpec need src/dist as part of path?
const apiSpec = process.env.NODE === 'production' ? './dist/generated/swagger.json' : './src/generated/swagger.json';
app.use(
  OpenApiValidator.middleware({
    apiSpec,
    validateRequests: true,
    validateResponses: false,
  }),
);

installMiddleware(app);
RegisterRoutes(app);

export default app;
