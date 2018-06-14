const request = require('supertest');
const app = require('./server').app;
const expect = require('chai').expect;

it('should return hello world as a response', (done) => {
  request(app)
    .get('/')
    .expect(404)
    .expect((res) => {
      expect(res.body).to.include({
        error: 'Page not found.'
      });
    })
    .end(done);
});

it('should return an array with my name in it', (done) => {
  request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
      expect(res.body).to.be.a('array')
      expect(res.body).to.deep.include({
        name: 'Hemesh',
        age: 29
      })
    })
  .end(done);
});
