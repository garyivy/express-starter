import express from 'express';
import { requestLogger } from './middleware/requestLogger';
import { healthRouter } from './routes/health';

export const app = express();

app.use(requestLogger);

app.get('/', (req, res) => {
  res.json({ message: 'hello world' });
});

app.use('/health', healthRouter);
