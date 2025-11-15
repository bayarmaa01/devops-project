// tests/app.test.js
const request = require('supertest');
const app = require('../src/app');

describe('API Endpoints', () => {
  
  describe('GET /health', () => {
    it('should return 200 and health status', async () => {
      const res = await request(app).get('/health');
      
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('status', 'healthy');
      expect(res.body).toHaveProperty('timestamp');
      expect(res.body).toHaveProperty('uptime');
    });

    it('should return valid JSON', async () => {
      const res = await request(app).get('/health');
      
      expect(res.headers['content-type']).toMatch(/json/);
      expect(res.body).toBeDefined();
    });
  });

  describe('GET /api/status', () => {
    it('should return API status', async () => {
      const res = await request(app).get('/api/status');
      
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('status', 'active');
      expect(res.body).toHaveProperty('features');
      expect(Array.isArray(res.body.features)).toBe(true);
    });

    it('should include CI/CD features', async () => {
      const res = await request(app).get('/api/status');
      
      expect(res.body.features).toContain('ci');
      expect(res.body.features).toContain('cd');
      expect(res.body.features).toContain('security');
    });
  });

  describe('GET /api/users', () => {
    it('should return list of users', async () => {
      const res = await request(app).get('/api/users');
      
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('users');
      expect(Array.isArray(res.body.users)).toBe(true);
      expect(res.body.users.length).toBeGreaterThan(0);
    });

    it('should return users with correct structure', async () => {
      const res = await request(app).get('/api/users');
      
      const user = res.body.users[0];
      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('name');
      expect(user).toHaveProperty('role');
    });
  });

  describe('POST /api/users', () => {
    it('should create a new user', async () => {
      const newUser = {
        name: 'Charlie',
        role: 'developer'
      };

      const res = await request(app)
        .post('/api/users')
        .send(newUser);
      
      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty('id');
      expect(res.body).toHaveProperty('name', 'Charlie');
      expect(res.body).toHaveProperty('role', 'developer');
      expect(res.body).toHaveProperty('created');
    });

    it('should return 400 for missing fields', async () => {
      const res = await request(app)
        .post('/api/users')
        .send({ name: 'Charlie' });
      
      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty('error');
    });
  });

  describe('404 Handler', () => {
    it('should return 404 for unknown routes', async () => {
      const res = await request(app).get('/api/unknown');
      
      expect(res.status).toBe(404);
      expect(res.body).toHaveProperty('error');
    });
  });
});