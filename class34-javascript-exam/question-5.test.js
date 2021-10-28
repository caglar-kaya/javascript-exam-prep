/**
 * This question is all about writing tests so the roles are reversed! We have provided a function and it is up to you to write the tests.
 * The function comment gives you an idea of what the function expects and what it should return.
 */

/**
 * This function returns a new array that is a deduplicated version of the combination of the two arrays.
 *
 * DO NOT EDIT THE FUNCTION, YOU ONLY WRITE THE TESTS
 */
const combineAndDeduplicate = (firstArr, secondArr) => {
  if (!Array.isArray(firstArr)) {
    if (Array.isArray(secondArr)) {
      return secondArr;
    } else {
      return [];
    }
  } else if (!Array.isArray(secondArr)) {
    if (Array.isArray(firstArr)) {
      return firstArr;
    } else {
      return [];
    }
  }

  const newArray = [...firstArr, ...secondArr];

  // This syntax will be new to you, it is a quick way to remove any duplicates from the newArray
  return [...new Set(newArray)];
};

/**
 * TEST CODE: ONLY EDIT THIS
 * We've provided some syntax for you but feel free to change it to your liking! It should follow jest syntax though!
 *
 * To run the test make sure you have done an `npm install` command in your terminal and then run `npm t` or `npm run test`
 */
describe("combineAndDeduplicate", () => {
  // Test 1
  it("function should has two parameters", () => {
    expect(combineAndDeduplicate).toHaveLength(2);
  });
  // Test 2
  it("if two parameters are not an array then return []", () => {
    expect(combineAndDeduplicate('Hello', 'World')).toEqual([]);
  });
  // Test 3
  it("if first parameter is not an array and second one is an array then return second array", () => {
    expect(combineAndDeduplicate('Hello', [1, 3, 5])).toEqual([1, 3, 5]);
  });
  // Test 4
  it("if second parameter is not an array and first one is an array then return first array", () => {
    expect(combineAndDeduplicate([2, 4, 6], 'World')).toEqual([2, 4, 6]);
  });
  // Test 5
  it("if both parameters are an array then return combination of arrays", () => {
    expect(combineAndDeduplicate([2, 4, 6], [1, 3, 5])).toEqual([2, 4, 6, 1, 3, 5]);
  });
  // Test 6
  it("function returns an array", () => {
    expect(typeof combineAndDeduplicate([2, 4, 6], [1, 3, 5])).toBe('object');
  });
});
