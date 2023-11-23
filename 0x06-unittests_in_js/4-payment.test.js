const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('test suite', () => {
  let stub;

  beforeEach(() => {
    stub = sinon.stub(Utils, 'calculateNumber');
    stub.returns(10);
  });

  afterEach(() => {
    stub.restore();
  });

  it('stub the calculateNumber method and log correct msg', () => {
    const consoleSpy = sinon.spy(console, 'log');
    const a = 100;
    const b = 20;

    sendPaymentRequestToApi(a, b);

    expect(stub.calledWith('SUM', a, b)).to.be.true;

    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;

    consoleSpy.restore();
  });
});
