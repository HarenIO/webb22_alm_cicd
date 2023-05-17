const assert = require('assert');
const { Calculator } = require('../../calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should initialize result to 0', () => {
    assert.equal(calculator.getResult(), 1);
  });
});
