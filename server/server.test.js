const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

it('should return hello world response', (done) => {
  request(app)
    .get('/')
    .expect(200)
    .expect((res) => {
      expect(res.body).toInclude({
        name: 'todo app'
      })
    })
    .end(done)
});

it('should return an array of users', (done) => {
  request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
      expect(res.body).toInclude({
        name: 'me',
        age: 22
      })
    })
    .end(done)
})
