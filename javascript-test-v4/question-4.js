/**
 * It is time to write a task list as you are losing track of everything you need to do.
 * To do this we have defined a data object below with a list of todos
 * Now it is time to write 2 functions, one to add a todo to the list and one to remove a todo from the list
 */
const data = {
  todos: [
    {
      id: "t---1",
      task: "Finish JavaScript test",
    },
  ],
};

/**
 * This function will add a todo to the `data.todos` array and return the id of the new todo
 *
 * To generate an id, think of your own way to make sure it is unique
 */
const addTodo = (task = "Relax") => {
  // Generate a new id

  // Add the todo object to `data.todos` list

  // Make sure you return the id that you gave the todos
};

/**
 * This function will remove a todo with a given id
 * The second parameter (`onError`) is a callback function that will be called if the todo is not found
 */
const removeTodo = (
  id,
  onError = () => {
    throw Error("This function should be overridden");
  }
) => {
  // Check if there is a todo with the given id is in the `data.todos` list

  // If there is no todo, call the given onError function

  // Otherwise, remove the todo with the given id from the `data.todos` list

};

/**
 * TEST CODE. DO NOT EDIT
 */
console.assert(data.todos.length === 1, "Should start with 1 todo");
const presentationVideoTaskId = addTodo("Create presentation video");
console.assert(data.todos.length === 2, "Should have 2 todos now");
removeTodo("t---1", () =>
  console.assert(true === false, "This code should never run!")
);
console.assert(data.todos.length === 1, "Should have only 1 todo now");
removeTodo("t---1", () => console.log("Correctly called the onError")); // This should log to the console
removeTodo(presentationVideoTaskId, () =>
  console.assert(true === false, "This code should never run!")
);
console.assert(data.todos.length === 0, "Should have no todos now");
