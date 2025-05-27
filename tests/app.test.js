import request from 'supertest';
import app from '../index.js';

describe('GET /name', () => {
  it('Deve Retornar seu nome na request', async () => {
    const response = await request(app).get('/name');
    expect(response.statusCode).toBe(200);
    expect(typeof response.text).toBe('string');
    expect(response.text.trim().length).toBeGreaterThan(0);
  });
});
