var sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const { expect } = require('chai');


describe("Test suite", () => {
    it('spy the calculateNumber method', () => {
        var spy = sinon.spy(Utils, 'calculateNumber');
        const type = 'SUM';
        const a = 100;
        const b = 20;

        sendPaymentRequestToApi(100, 20);

        expect(spy.calledWith(type, a, b)).to.be.true;
        // expect(spy.calledOnce).to.be.true;
    });
});