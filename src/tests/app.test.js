import request from 'supertest';
import app from '../index.js';

describe('GET /users?name=', () => {
  it('Deve Retornar o objeto do user passado no request.query', async () => {
    const response = await request(app).get(`/users?name=julio`);
    expect(response.body).toEqual(expect.objectContaining({ name: 'julio' }));
    expect(response.statusCode).toBe(200);
  });
});

describe('GET /users/:id', () => {
  it('Deve Retornar o nome do user passado no request.params.id', async () => {
    const response = await request(app).get('/users/3');
    expect(response.body).toEqual(
      expect.objectContaining({ name: 'João Pereira' })
    );
    expect(response.statusCode).toBe(200);
  });
});
