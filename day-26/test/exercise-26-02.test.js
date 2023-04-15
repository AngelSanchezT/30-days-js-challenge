import { taskManager } from "../exercise-26-02";
import { expect } from "chai";
import sinon from "sinon";

describe("🌐 Day-26-02 - Create a task organizer", () => {
  let tm;
  beforeEach(() => {
    tm = taskManager();
  });

  it("should add a Task", () => {
    tm.addTask("task1", ["tag1", "tag2"]);
    expect(tm.printTasks().size).to.eql(1);
  });

  it("should add tags to an existing task", () => {
    tm.addTask("task1", ["tag1", "tag2"]);
    tm.addTask("task1", ["tag3", "tag4"]);
    expect(tm.printTasks().get("task1")).to.eql(
      new Set(["tag1", "tag2", "tag3", "tag4"])
    );
  });

  it("should convert task to lowercase", () => {
    tm.addTask("Task1", ["tag1", "tag2"]);
    expect(tm.printTasks().has("task1")).to.eql(true);
  });

  it("should print Tasks", () => {
    expect(tm.printTasks()).to.be.instanceOf(Map);
  });

  it("should add a new task to the task manager", () => {
    tm.addTask("Finish homework", ["School", "Homework"]);
    tm.addTask("study", ["School", "Homework"]);
    expect(tm.printTasks().size).to.eql(2);
  });

  it("should not repeat tags to an existing task", () => {
    tm.addTask("Finish homework", ["School", "Homework"]);
    tm.addTask("finish homework", ["School"]);
    expect(tm.printTasks().get("finish homework")).to.eql(
      new Set(["School", "Homework"])
    );
  });

  it("should return a Map containing all the tasks", () => {
    tm.addTask("Finish homework", ["School", "Homework"]);
    tm.addTask("Clean the room", ["Home"]);
    expect(tm.printTasks().size).to.eql(2);
    expect(tm.printTasks()).to.be.instanceOf(Map);
  });
});
