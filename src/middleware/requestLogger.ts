import { Request, Response, NextFunction } from 'express';
import { logger } from '../services/loggingService';

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const { method, url } = req;

  res.on('close', () => {
    const { statusCode } = res;

    logger.info(`${method} ${statusCode} ${url}`);
    logger.http('test');
  });

  next();
};
