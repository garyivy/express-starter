import express from 'express';
import { healthRouter } from './routes/health';

export const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'hello world' });
});

app.use('/health', healthRouter);
