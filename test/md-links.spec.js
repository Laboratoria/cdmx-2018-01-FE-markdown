
//  Probar función
// const readingFunction = require('../src/index.js');
const fileType = require('../src/index.js');


describe('debería ser una función', () =>{
  test('debería ser una función', () =>{
    expect(typeof fileType(readingFunction)).toEqual('function');
  });
});
