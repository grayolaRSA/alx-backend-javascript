const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return integer result', () => {
    const result = calculateNumber(1, 3);
    assert.strictEqual(result, 4, 'result should be 4');
  });

  it('should round 1 float and return integer result', () => {
    const result = calculateNumber(1, 3.7);
    assert.strictEqual(result, 5, 'result should be 5');
  });

  it('should round 2 floats and return integer result', () => {
    const result = calculateNumber(1.2, 3.7);
    assert.strictEqual(result, 5, 'result should be 5');
  });

  it('should round 2 floats and return correct result', () => {
    const result = calculateNumber(1.5, 3.7);
    assert.strictEqual(result, 6, 'result should be 6');
  });

//   it('should have at least four assertions', () => {
//     expect.assertions();
//   });
});
