const request = require('request');
const { expect } = require('chai');
const e = require('express');


describe('basic integration test for express server', () => {
  
const baseUrl = 'http://localhost:7865';
const id = '';
  
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

  it('GET /cart/:id returns correct response for valid ID', (done) => {
      request.get(`${baseUrl}/cart/25`, (_err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Payment methods for cart 25');
        done();
      });
  });

  it('GET /cart/:id returns 404 response for invalid id: -ve number', (done) => {
    request.get(`${baseUrl}/cart/-32`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /cart/:id returns 404 response for invalid id: text', (done) => {
    request.get(`${baseUrl}/cart/toto`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});
