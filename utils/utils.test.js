const utils = require('./utils');
const expect = require('chai').expect;

it('should add two numbers', () => {
  let res = utils.add(33, 11);

  expect(res).to.equal(44).to.be.a('number');
});

it ('should square number', () => {
  let res = utils.square(3);

  expect(res).to.equal(9).to.be.a('number');
});