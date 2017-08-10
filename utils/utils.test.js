const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      const result = utils.add(33, 11);
      expect(result).toBe(44).toBeA('number');
    });
    it('should add two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      });
    });
  })


  it('should square a number', () => {
    const result = utils.square(9);
    expect(result).toBe(81).toBeA('number');
  })

  it('should verify first and last names set in user object', () => {
    const user = {age: 35, slams: 19};
    const result = utils.setName(user, 'Roger Federer');
    expect(result).toBeA('object');
    expect(result).toInclude({
      firstName: 'Roger',
      lastName: 'Federer'
    });
  });



  it('should square two numbers', (done) => {
    utils.asyncSquare(5, (square) => {
      expect(square).toBe(25).toBeA('number');
      done();
    })
  })
});



/*
it('should expect some values', () => {
  expect(12).toNotBe(12)
  expect({name: 'Aaron'}).toBe({name: 'Aaron'});
  expect([2,3,4]).toInclude(3);
  expect([2,3,4]).toExclude(6);
  expect({
    name: 'Roger',
    age: 35,
    location: 'Basel'
  }).toInclude({
    age: 35
  });
  expect({
    name: 'Roger',
    age: 35,
    location: 'Basel'
  }).toExclude({
    age: 32
  })

})
*/
