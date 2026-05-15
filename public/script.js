let tasks = [];

function validateTask(task) {
  return task.trim() !== "";
}

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value;

  if (!validateTask(taskText)) {
    alert("Task cannot be empty");
    return;
  }

  const task = {
    id: Date.now(),
    text: taskText,
    completed: false
  };

  tasks.push(task);
  input.value = "";
  displayTasks(tasks);
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  displayTasks(tasks);
}

function toggleComplete(id) {
  tasks = tasks.map(task => {
    if (task.id === id) {
      task.completed = !task.completed;
    }
    return task;
  });

  displayTasks(tasks);
}

function filterTasks(type) {
  if (type === "completed") {
    displayTasks(tasks.filter(task => task.completed));
  } else if (type === "pending") {
    displayTasks(tasks.filter(task => !task.completed));
  } else {
    displayTasks(tasks);
  }
}

function displayTasks(taskArray) {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  taskArray.forEach(task => {
    const li = document.createElement("li");

    if (task.completed) {
      li.classList.add("completed");
    }

    li.innerHTML = `
      ${task.text}
      <div class="actions">
        <button onclick="toggleComplete(${task.id})">✔</button>
        <button onclick="deleteTask(${task.id})">❌</button>
      </div>
    `;

    taskList.appendChild(li);
  });
}

module.exports = {
  validateTask,
  deleteTask,
  toggleComplete,
  filterTasks
};