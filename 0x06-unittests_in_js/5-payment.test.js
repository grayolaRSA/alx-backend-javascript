const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('test suite', () => {
  beforeEach(() => {
    console.log('------------Before each test case');
    sinon.restore();
  });

  afterEach(() => {
    console.log('-----------After each test case');
  });

  it('call sendPaymentRequesttoApi method with 1 set of inputs', () => {
    const consoleSpy = sinon.spy(console, 'log');
    const a = 100;
    const b = 20;

    sendPaymentRequestToApi(a, b);

    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
  });

  it('call sendPaymentRequesttoApi method with another set of inputs', () => {
    const consoleSpy = sinon.spy(console, 'log');
    const a = 10;
    const b = 10;

    sendPaymentRequestToApi(a, b);

    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
  });
});
