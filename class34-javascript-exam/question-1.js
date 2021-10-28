/**
 * You are working on the UI of your app, but the backend that will provide your data is not ready yet, so you decide to write some dummy data.
 * You can then use this data in your frontend code, and later, when the backend is ready you can replace it with a request to get that data.
 *
 * You are building a todo list and want to have an array of todos that adheres to the following:
 * - The array should be called `todoItems`
 * - Each item should have a property called `description` which describes the task
 * - The array needs to have at least 1 item that has the `isCompleted` property set to `true` (to indicate the TODO is completed)
 * - The array needs to have at least 1 item that has the `isCompleted` property set to `false`
 */

const todoItems = [
  {
    description: 'task1',
    isCompleted: true
  },
  {
    description: 'task2',
    isCompleted: false
  }
];


/**
 * TEST CODE. DO NOT EDIT
 */
console.assert(todoItems.length === 2);
console.assert(todoItems.some((todoItem) => todoItem.isCompleted === true));
console.assert(todoItems.some((todoItem) => todoItem.isCompleted === false));

todoItems.forEach((todoItem) => {
  console.assert(typeof todoItem.description === "string");
});
