/**
 * Booking.com wants to add a new message to show the user how many vacancies are left for a holiday home.
 * The messages are defined in the MESSAGE object below, as well as when to return which one.
 */

const MESSAGE = {
  // If there are 0 vacancies left, return this message
  UNAVAILABLE: "Sorry, all the vacancies have been filled. Try again later",
  // If there is only 1 vacancy left, return this message
  ONLY1LEFT: "Act now! There is only one vacancy left",
  // If there are 2 or 3 vacancies left, return this message (give the amount left (so 2 or 3) to the function)
  ONLYXLEFT: (numberLeft) =>
    `Act quickly! There are only ${numberLeft} vacancies left`,
  // If there is more than 3 left, then return this message
  AVAILABLE: "Book now!",
};

/**
 * Fill in the following function. The function has two parameters:
 *
 * `vacancy` has the following structure:
 * {
 *  id: <string>,
 *  totalNumberAvailable: <number>,
 * }
 *
 * `bookings` is an array of objects with the following structure:
 * {
 *  id: <string>,
 *  vacancyId: <string>,
 * }
 *
 * Every booking in the array indicates that 1 of that vacancy has been booked
 */
const getVacancyMessage = (vacancy, bookings = []) => {
  // Get the amount of bookings that are reserved for the vacancy (vacancyId in `booking` object is the same as the id in `vacancy` object)

  // Calculate the amount available for this vacancy

  // Return the right message using the MESSAGE object

};

/**
 * TEST CODE. DO NOT EDIT
 */
const testVacancies = [
  {
    id: "v---1",
    totalNumberAvailable: 6,
  },
  {
    id: "v---2",
    totalNumberAvailable: 3,
  },
  {
    id: "v---3",
    totalNumberAvailable: 1,
  },
  {
    id: "v---4",
    totalNumberAvailable: 1,
  },
];
const testBookings = [
  {
    id: "b---1",
    vacancyId: testVacancies[0].id,
  },
  {
    id: "b---2",
    vacancyId: testVacancies[0].id,
  },
  {
    id: "b---3",
    vacancyId: testVacancies[1].id,
  },
  {
    id: "b---4",
    vacancyId: testVacancies[2].id,
  },
];

console.assert(
  getVacancyMessage(testVacancies[0], testBookings) === MESSAGE.AVAILABLE,
  "MESSAGE.AVAILABLE message not returned"
);
console.assert(
  getVacancyMessage(testVacancies[1], testBookings) === MESSAGE.ONLYXLEFT(2),
  "MESSAGE.ONLYXLEFT message not returned"
);
console.assert(
  getVacancyMessage(testVacancies[2], testBookings) === MESSAGE.UNAVAILABLE,
  "MESSAGE.UNAVAILABLE message not returned"
);
console.assert(
  getVacancyMessage(testVacancies[3], testBookings) === MESSAGE.ONLY1LEFT,
  "MESSAGE.ONLY1LEFT message not returned"
);
