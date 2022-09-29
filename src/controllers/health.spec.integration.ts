import request from 'supertest';
import { app } from '../app';

describe('/health', () => {
  describe('/readiness', () => {
    it('returns a 200', async () => {
      const actual = await request(app).get('/health/readiness').expect(200);
      expect(actual.body).toEqual({ message: 'ready for traffic' });
    });
  });

  describe('/liveness', () => {
    it('returns a 200', async () => {
      const actual = await request(app).get('/health/liveness').expect(200);
      expect(actual.body).toEqual({ message: 'still alive' });
    });
  });
});
