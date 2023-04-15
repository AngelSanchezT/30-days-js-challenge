export function taskManager() {
  const tasks = new Map();

  const addTask = function (task, tags) {
    task = task.toLowerCase();
    if (tasks.has(task)) {
      const existingTags = tasks.get(task);
      tags.forEach((tag) => existingTags.add(tag));
    } else {
      const newTags = new Set(tags);
      tasks.set(task, newTags);
    }
  };

  const printTasks = function () {
    return tasks;
  };
  return { addTask, printTasks };
}
