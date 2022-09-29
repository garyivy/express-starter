import request from 'supertest';
import app from '../app';

describe('/books', () => {
  describe('GET', () => {
    it('requires page_size in quert', async () => {
      const actual = await request(app).get('/books').expect(400);
      expect(actual.body.errors).toEqual([
        {
          errorCode: 'required.openapi.validation',
          message: expect.anything(),
          path: '.query.page_size',
        },
      ]);
    });

    it('returns a list of books', async () => {
      const actual = await request(app).get('/books?page_size=20').expect(200);
      expect(actual.body).toEqual([
        { author: 'Bill Smith', id: 1, status: 'New', title: 'They call me Billy' },
        { author: 'Jim Smith', id: 2, status: 'Used', title: 'They call me Jimmy' },
      ]);
    });
  });
});
