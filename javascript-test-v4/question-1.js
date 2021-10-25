/**
 * Demo data is needed to be able to show an application you have been working on to your investors.
 * The application is a webshop where some users are admins that can edit shop items
 *
 * The requirements:
 * - The array of users should be called `users`
 * - There should be 2 different users in there, one being an admin, one not. An admin is identified using a boolean that should be called `isAdmin`
 * - Every user should have a `name` property that is a string
 */

// Put your code here

/**
 * TEST CODE. DO NOT EDIT
 */
console.assert(users.length === 2);
console.assert(users.some((user) => user.isAdmin === true));
console.assert(users.some((user) => user.isAdmin === false));

users.forEach((user) => {
  console.assert(typeof user.name === "string");
});
