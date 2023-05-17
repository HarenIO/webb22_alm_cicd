const assert = require('assert');
const { Calculator } = require('../../calculator');

describe('Calculator', function() {

  let calculator;

  beforeEach(function() {
    calculator = new Calculator();
  });

  it('should initialize result to 0', function() {
    assert.equal(calculator.getResult(), 0);
  });

  it('should return correct methods', function() {
    assert.deepEqual(calculator.methods(), ['multiply', 'subtract', 'divide', 'add', 'clearAll', 'getResult']);
  });

  it('should add correctly', function() {
    calculator.add(5);
    assert.equal(calculator.getResult(), 5);
  });

  it('should subtract correctly and return -2', function() {
    calculator.subtract(2);
    assert.equal(calculator.getResult(), -2);
  });

  it('should multiply correctly and return 6', function() {
    calculator.add(2);
    calculator.multiply(3);
    assert.equal(calculator.getResult(), 6);
  });

  it('should divide correctly', function() {
    calculator.add(10);
    calculator.divide(2);
    assert.equal(calculator.getResult(), 5);
  });

  it('should clear result', function() {
    calculator.add(5);
    calculator.clearAll();
    assert.equal(calculator.getResult(), 0);
  });

  it('should handle divide by zero', function() {
    calculator.divide(0);
    assert.equal(isNaN(calculator.getResult()), true);
  });

});
