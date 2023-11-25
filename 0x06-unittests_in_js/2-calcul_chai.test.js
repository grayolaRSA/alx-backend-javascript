const { assert, expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('should return sum result', () => {
    const result = calculateNumber('SUM', 1.4, 4.5);
    expect(result).to.be.equals(6, 'result should be 6');
  });

  it('should return subtraction result', () => {
    const result = calculateNumber('SUBTRACT', 1.4, 4.5);
    expect(result).to.be.equals(-4, 'result should be -4');
  });

  it('should return division result', () => {
    const result = calculateNumber('DIVIDE', 1.4, 4.5);
    expect(result).to.be.equals(0.2, 'result should be 0.2');
  });

  it('should throw error for zero division result', () => {
      const errorFunction = calculateNumber('DIVIDE', 1.4, 0);
      expect(errorFunction).to.be.a('string').and.to.equal('Error');
  });

//   it('should have at least four assertions', () => {
//     expect.assertions();
//   });
});
