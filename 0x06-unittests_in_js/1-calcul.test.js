const { assert, expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return sum result', () => {
    const result = calculateNumber('SUM', 1.4, 4.5);
    assert.strictEqual(result, 6, 'result should be 6');
  });

  it('should return subtraction result', () => {
    const result = calculateNumber('SUBTRACT', 1.4, 4.5);
    assert.strictEqual(result, -4, 'result should be -4');
  });

  it('should return division result', () => {
    const result = calculateNumber('DIVIDE', 1.4, 4.5);
    assert.strictEqual(result, 0.2, 'result should be 0.2');
  });

  it('should throw error for zero division result', () => {
    try {
      calculateNumber('DIVIDE', 1.4, 0);
      // If no error is thrown, fail the test
      assert.fail('Expected function to throw an error');
    } catch (error) {
      // Assert that the caught error is the expected error
      const errorFunction = () => calculateNumber('DIVIDE', 1.4, 0);
      assert.throws(errorFunction, Error);
    }
  });

//   it('should have at least four assertions', () => {
//     expect.assertions();
//   });
});
