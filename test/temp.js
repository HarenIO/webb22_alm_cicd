const assert = require('assert');

const addNumbers = (a, b) => a + b;

describe('dummy test', () => {
  it('adds two numbers together', () => {
    assert.strictEqual(addNumbers(1, 2), 3);
    assert.strictEqual(addNumbers(5, 5), 10);
    assert.strictEqual(addNumbers(1, 0), 1);
  });
});
