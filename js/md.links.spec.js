//TDD
const { mdLinks } = require('./md.links.spec.js');
//This function should recive two parameters
describe('Must be a function', () => {
  test('function', () => {
    expect(mdLinks()).toBe('function');
  });
  //Test 1: The type of file of the user should be just and only .md file
  describe('not.stringMatching', () => {
    test('matches if the actual string does not match the expected regex', () => {
      expect('.txt').toEqual(expect.not.stringMatching(userTypeFile));
    });
  });
  it('Should be a closed type variable for .md files', () => {
    expect(userTypeFile).toBe('.md');
  });

  //Test 2: Should convert the .md file to html
  describe('to do: ', () => {
    it('Should convert the .md file to html');
  });
  //Test 3: Should search and return an array with all the href= attributes content finded

  //Test 4: Should fetch one by one, for each Array element to catch any error

  //Test 5: Should return to the user the analisis of all the mistakes catched
});
