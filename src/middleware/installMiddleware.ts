import { requestLogger } from './requestLogger';

export const installMiddleware = app => {
  app.use(requestLogger);
};
