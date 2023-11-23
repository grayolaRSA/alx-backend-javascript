const sinon = require('sinon');
const { expect } = require("chai");
const getPaymentTokenFromAPI = require("./6-payment_token");

describe("Test the getpaymentfromAPI status", () => {
    it("Promise test case to determine api status correct", (done) => {
        const success = 'true';
        const payObj = { data: 'Successful response from the API' };
        
        sinon.stub(Promise, 'resolve').returns(Promise.resolve(payObj));

        getPaymentTokenFromAPI(success).then((result) => {
            expect(result).to.deep.equal(payObj);
            done();
        });
    });
});