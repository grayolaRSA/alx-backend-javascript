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

  it('GET /cart/:id returns correct response index page', (done) => {
    if (typeof id === 'number') {
      request.get(`${baseUrl}/cart/${id}`, (_err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
      });
    } else {
      request.get(`${baseUrl}/cart/${id}`, (_err, res, body) => {
        expect(res.statusCode).to.be.equal(404);
      });
    }
    done();
  });
});
