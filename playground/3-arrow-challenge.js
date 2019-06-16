//code added for testing functions in the application.

const tasks = {
  tasks: [
    {
      text: "Grocery shopping",
      completed: true
    },
    {
      text: "Clean yard",
      completed: false
    },
    {
      text: "Film course",
      completed: false
    }
  ],
  getTasksToDo() {
    return this.tasks.filter(tasks => tasks.completed === false);
  }
};

console.log(tasks.getTasksToDo());
