const assert = require('chai').assert;
const calculateNumber = require("./0-calcul");

describe('calculateNumber', () => {
    it ('module should return integer result', () => {
        assert.isNumber(calculateNumber(), 'result should be an integer');
    });
});
