/**
 * This question is all about writing tests so the roles are reversed! We have provided a function and it is up to you to write the tests.
 * The function comment gives you an idea of what the function expects and what it should return.
 */

/**
 * This function takes an array of primitive values (strings, numbers, etc) and counts the number of times the second element is in the array.
 *
 * P.S. yes, this is pretty much the some function, but it is for testing purposes!
 *
 * DO NOT EDIT THE FUNCTION, YOU ONLY WRITE THE TESTS
 */
const countElements = (arr = [], element) => {
  let counter = 0;

  arr.forEach((item) => {
    if (item === element) {
      counter = counter + 1;
    }
  });

  return counter;
};

/**
 * TEST CODE: ONLY EDIT THIS
 * We've provided some syntax for you but feel free to change it to your liking! It should follow jest syntax though!
 *
 * To run the test make sure you have done an `npm install` command in your terminal and then run `npm t` or `npm run test`
 */
describe("countElements", () => {
  test('should return 1', () => {
    expect(countElements([1, 2, 3, 4, 5], 5)).toBe(1);
  });
  test('should return 3', () => {
    expect(countElements([1, 5, 5, 4, 5], 5)).toBe(3);
  });
  test('should return 2', () => {
    expect(countElements(['A', 'B', 'C', 'a', 'b', 'A'], 'A')).toBe(2);
  });
});
