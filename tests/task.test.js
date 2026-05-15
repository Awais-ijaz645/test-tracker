const {
  validateTask,
  deleteTask,
  toggleComplete,
  filterTasks
} = require("../public/script");

describe("Task Functions", () => {

  test("validateTask should return true for valid input", () => {
    expect(validateTask("Study")).toBe(true);
  });

  test("validateTask should return false for empty input", () => {
    expect(validateTask("")).toBe(false);
  });

  test("validateTask should return false for spaces only", () => {
    expect(validateTask("   ")).toBe(false);
  });

  test("deleteTask should be a function", () => {
    expect(typeof deleteTask).toBe("function");
  });

  test("toggleComplete should be a function", () => {
    expect(typeof toggleComplete).toBe("function");
  });

  test("filterTasks should be a function", () => {
    expect(typeof filterTasks).toBe("function");
  });

});