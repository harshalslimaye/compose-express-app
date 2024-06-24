import request from 'supertest';
import app from '../src/app';

describe('app', () => {
  test('home route', async () => {
    const res = await request(app).get('/');

    expect(res.body.value).toEqual('hello express!');
    expect(res.status).toEqual(200);
  });
});
