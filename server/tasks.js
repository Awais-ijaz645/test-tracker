let tasks = [];

function getTasks() {
  return tasks;
}

function addTask(task) {
  tasks.push(task);
  return tasks;
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  return tasks;
}

module.exports = {
  getTasks,
  addTask,
  deleteTask
};