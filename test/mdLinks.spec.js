// Initial test
// const sum = require('../lib/mdLinks');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

const mdLinks = require('../index.js');
// mdLinksF = jest.fn();

describe('Comprobar función mdLinks', () => {
  test('Esta definida', () => {
    expect(mdLinks('README.md', {validate: false,
      stats: false})).toBeDefined();
  });
  test('Es una función', () => {
    expect(typeof(mdLinks)).toEqual('function');
  });
  // test('Es llamada con dos argumentos', () => {
  //   expect(mdLinksF).toHaveBeenCalledWith(2);
  // });
  // test('Recibe un string como parámetro path', () => {
  //   expect
  // });
});
