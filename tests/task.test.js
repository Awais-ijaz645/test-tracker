const {
  getTasks,
  addTask,
  deleteTask
} = require("../server/tasks");
describe("Task Functions Tests", () => {
  test("addTask should add a new task", () => {

    const task = {
      id: 1,
      text: "Complete assignment"
    };
    const result = addTask(task);

    expect(result.length).toBe(1);
  });

  test("getTasks should return all tasks", () => {

    const tasks = getTasks();

    expect(Array.isArray(tasks)).toBe(true);
  });
  test("deleteTask should remove a task", () => {

    deleteTask(1);
    const tasks = getTasks();

    expect(tasks.length).toBe(0);
  });
  test("addTask should handle empty task object", () => {
    const result = addTask({});
    expect(result.length).toBeGreaterThanOrEqual(1);
  });
  test("deleteTask should handle invalid ID", () => {

    const result = deleteTask(999);
    expect(Array.isArray(result)).toBe(true);
  });

});