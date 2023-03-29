export function createTaskPlanner() {
  const tasks = [];

  const findById = function (value) {
    return tasks.findIndex((task) => task.id === value);
  };

  const findByName = function (value) {
    return tasks.findIndex((task) => task.name === value);
  };

  const findTask = function (value) {
    if (typeof value === "number") {
      return findById(value);
    } else {
      return findByName(value);
    }
  };

  const addTask = function (task) {
    task.completed = false;
    tasks.push(task);
  };

  const getTasks = function () {
    return tasks;
  };

  const removeTask = function (value) {
    const taskIndexRemove = findTask(value);

    tasks.splice(taskIndexRemove, 1);
  };

  const markTaskAsCompleted = function (value) {
    const taskIndexCompleted = findTask(value);
    let taskAsCompleted = tasks[taskIndexCompleted];
    taskAsCompleted.completed = true;
    tasks.splice(taskIndexCompleted, 1, taskAsCompleted);
  };

  const filterTasksByTag = function (value) {
    const taskFilter = tasks.filter((task) => {
      const tagsFind = task.tags.filter((tag) => tag === value);
      return tagsFind !== undefined && tagsFind.length > 0;
    });

    return taskFilter;
  };

  const getSortedTasksByPriority = function () {
    const sortedTasks = [...tasks];
    sortedTasks.sort( (taskA, taskB) => taskA.priority - taskB.priority);
    return sortedTasks;
  }

  const getCompletedTasks = function () {
    return tasks.filter(task => task.completed);
  }

  const updateTask = function (taskId, updates) {
    const updateTaskIndex = findById(taskId);
    let updateTask = tasks[updateTaskIndex];
    
    for (const key in updates) {
      updateTask[key] = updates[key];
    }

    tasks.splice(updateTaskIndex, 1, updateTask);
  }

  return {
    addTask,
    getTasks,
    removeTask,
    markTaskAsCompleted,
    filterTasksByTag,
    getSortedTasksByPriority,
    getCompletedTasks,
    updateTask
  };
}
