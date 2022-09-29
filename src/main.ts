import app from './app';
import { config } from './config';
import { logger } from './services/loggingService';

app.listen(config.port, () => {
  logger.info(`Example app listening on port ${config.port}`);
});
