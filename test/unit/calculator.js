const assert = require('assert');
const { Calculator } = require('../../calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should initialize result to 0', () => {
    assert.equal(calculator.getResult(), 0);
  });

  it('should return correct methods', () => {
    assert.deepEqual(calculator.methods(), ['multiply', 'subtract', 'divide', 'add', 'clearAll', 'getResult']);
  });

  it('should add correctly', () => {
    calculator.add(5);
    assert.equal(calculator.getResult(), 5);
  });

  it('should subtract correctly and return -2', () => {
    calculator.subtract(2);
    assert.equal(calculator.getResult(), -2);
  });

  it('should multiply correctly and return 6', () => {
    calculator.add(2);
    calculator.multiply(3);
    assert.equal(calculator.getResult(), 6);
  });

  it('should divide correctly', () => {
    calculator.add(10);
    calculator.divide(2);
    assert.equal(calculator.getResult(), 5);
  });

  it('should clear result', () => {
    calculator.add(5);
    calculator.clearAll();
    assert.equal(calculator.getResult(), 0);
  });
});
