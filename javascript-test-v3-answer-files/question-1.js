/**
 * You have been tasked to create an array of books to be provided as demo data.
 * The requirements:
 * - The array should be called bookList
 * - There should be 3 books in it
 * - Every book needs a title property that is of type string
 */

const bookList = [
  {
    title: "JavaScript for beginners",
  },
  {
    title: "Browsers for beginners",
  },
  {
    title: "API's for beginners",
  },
];

/**
 * TEST CODE. DO NOT EDIT
 */
console.assert(bookList.length === 3);

bookList.forEach((item) => {
  console.assert(typeof item.title === "string");
});
