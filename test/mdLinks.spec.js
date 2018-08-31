// Initial test
// const sum = require('../lib/mdLinks');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

const mdLinks = require('../index.js');

describe('Comprobar función mdLinks', () => {
  test('Esta definida', () => {
    expect(mdLinks()).toBeDefined();
  });
  test('Es una función', () => {
    expect(typeof(mdLinks)).toEqual('function');
  });
});
