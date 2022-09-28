import { Request, Response } from 'express';

export const readiness = (_req: Request, res: Response) => {
  res.status(200).send({ message: 'ready for traffic' });
};

export const liveness = (_req: Request, res: Response) => {
  res.status(200).send({ message: 'still alive' });
};
