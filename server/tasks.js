let tasks = [];

function getTasks() {
  return tasks;
}

function addTask(task) {
  tasks.push(task);
  return tasks;
}

function deleteTask(id) {

  if (!id) {
    throw new Error("Task ID is required");
  }

  const updatedTasks = tasks.filter(
    task => task.id !== id
  );

  tasks = updatedTasks;
  return tasks;
}
module.exports = {
  getTasks,
  addTask,
  deleteTask
};