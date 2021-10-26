/**
 * For the list of reviews in our shop application we need to sort them.
 * Some users are verified users and their reviews should always be on top.
 * The rest of the reviews should just be in the same order that they were given.
 * This function handles that, the first parameter is the array of reviews that needs to be reordered.
 *
 * A review has the structure:
 * {
 *  id: <string>,
 *  reviewerId: <string>, // can be used to find
 *  review: <string>
 * }
 *
 * The second parameter is the array of users to check if a user is verified
 * A user has the structure:
 * {
 *  id: <string>
 *  verified: <boolean>
 *  name: <string>
 * }
 *
 * We have provided some comments that gives the steps for one way of solving this problem, but feel free to solve it in your own way
 */
const reorderReviews = (reviews = [], users = []) => {
  // Create a new empty array for verified reviews
  const verifiedReviews = [];
  // Create a new empty array for unverified reviews
  const unverifiedReviews = [];
  // Create a new empty array to list verified user ids
  const verifiedUserIds = [];
  // Go through the users array
  // PER USER:
  // If the user is verified, add the `id` of the user to the verified user ids array
  for (const user of users) {
    if (user.verified) {
      verifiedUserIds.push(user.id);
    }
  }
  // Go through the reviews
  // PER REVIEW:
  // If the reviewerId property is in the verified users array, add to the verified reviews
  // Otherwise add the review to the non-verified reviews
  for (const review of reviews) {
    if (verifiedUserIds.includes(review.reviewerId)) {
      verifiedReviews.push(review);
    } else {
      unverifiedReviews.push(review);
    }
  }
  // return a new array with first the verified reviews and then the non-verified reviews
  const resultArray = [...verifiedReviews, ...unverifiedReviews];
  console.log(resultArray);
  return resultArray;
};

/**
 * TEST CODE. DO NOT EDIT
 */
const testUsers = [
  {
    id: "u---1",
    verified: true,
    name: "Verified user",
  },
  {
    id: "u---2",
    verified: false,
    name: "Unverified user",
  },
];
const testReviews = [
  {
    id: "r---1",
    reviewerId: testUsers[1].id,
    review: "Really good product",
  },
  {
    id: "r---2",
    reviewerId: testUsers[0].id,
    review: "Quite good, but could use some improvements",
  },
  {
    id: "r---3",
    reviewerId: testUsers[1].id,
    review: "Not great, broke 1 month in",
  },
  {
    id: "r---4",
    reviewerId: testUsers[0].id,
    review: "Really useful product",
  },
];
const testResult = reorderReviews(testReviews, testUsers);
console.assert(testResult[0].id === "r---2");
console.assert(testResult[1].id === "r---4");
console.assert(testResult[2].id === "r---1");
console.assert(testResult[3].id === "r---3");
