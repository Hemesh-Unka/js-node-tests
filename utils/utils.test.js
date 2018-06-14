const utils = require('./utils');
const expect = require('chai').expect;

it('should add two numbers', () => {
  let res = utils.add(33, 11);

  expect(res).to.equal(44).to.be.a('number');
});

it('should async add two numbers', (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum).to.equal(7).to.be.a('number');
    done();
  });
});

it ('should square number', () => {
  let res = utils.square(3);

  expect(res).to.equal(9).to.be.a('number');
});

it ('should async square a number', (done) => {
  utils.asyncSquare(3, (sum) => {
    expect(sum).to.equal(9);
    done();
  });
});

it ('should set first name and last name', () => {
  let user = {
    location: 'London',
    age: 29
  };

  let res = utils.setName(user, 'Hemesh Unka');

  expect(res).to.include({
    firstName: 'Hemesh',
    lastName: 'Unka'
  });
});

// it('should expect some values', () => {
//   // expect([2,3,4]).to.not.include(5);
//   expect({
//     name: 'Hemesh',
//     age: 29,
//     location: 'London'
//   }).to.include({
//     age: 29
//   })
// });

