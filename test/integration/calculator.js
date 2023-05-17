const supertest = require('supertest');
const assert = require('assert');
const app = require('../../app');

describe('GET /add', () => {
  it('adds two numbers', () => {
    supertest(app)
      .get('/calc/add?val=1&val=1')
      .end((err, res) => {
        assert.strictEqual(res.text, '2');
      });
  });

  it('adds multiple numbers', () => {
    supertest(app)
      .get('/calc/add?val=1&val=2&val=3')
      .end((err, res) => {
        assert.strictEqual(res.text, '6');
      });
  });
});
