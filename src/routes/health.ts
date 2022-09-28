import { Router } from 'express';
import { readiness, liveness } from '../controllers/health';

export const healthRouter = Router();

healthRouter.get('/readiness', readiness);
healthRouter.get('/liveness', liveness);
