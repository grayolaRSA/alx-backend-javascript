const request = require('request');
const { expect } = require('chai');
const app = require('./api');

const baseUrl = 'http://localhost:7865';

describe('basic integration test for express server', () => {
  beforeEach(() => {
    console.log('------------Before each test case');
  });

  afterEach(() => {
    console.log('-----------After each test case');
  });

  it('should return correct status code for index page', () => new Promise((done) => {
    request.get(`${baseUrl}/`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  }));

  it('should return correct result for index page', () => new Promise((done) => {
    request.get(`${baseUrl}/`, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  }));
});
