const request = require('request');
const { expect } = require('chai');


describe('basic integration test for express server', () => {
  
const baseUrl = 'http://localhost:7865';
  
  beforeEach(() => {
    console.log('------------Before each test case');
  });

  afterEach(() => {
    console.log('-----------After each test case');
  });

  it('GET / returns correct response index page', (done) => {
    request.get(`${baseUrl}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
