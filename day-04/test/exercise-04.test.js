import assert, { deepEqual } from "assert";
import { findFamousCats } from "../exercise-04-01";
import { getStudentAverage } from "../exercise-04-02";

describe("✔ Day 04-01 : Find the most famous michi", () => {
  it('should return ["Luna"]', () => {
    const cats = [
      {
        name: "Luna",
        followers: [500, 200, 300],
      },
      {
        name: "Michi",
        followers: [100, 300],
      },
    ];

    const rta = findFamousCats(cats);

    assert.deepEqual(rta, ["Luna"]);
  });

  it('Should return ["Milo", "Gizmo"]', () => {
    const cats = [
      {
        name: "Mimi",
        followers: [320, 120, 70],
      },
      {
        name: "Milo",
        followers: [400, 300, 100, 200],
      },
      {
        name: "Gizmo",
        followers: [250, 750],
      },
    ];

    const rta = findFamousCats(cats);
    assert.deepEqual(rta, ["Milo", "Gizmo"]);
  });

  it('Should return ["Luna", "Michi", "Simba"]', () => {
    const cats = [
      {
        name: "Luna",
        followers: [0],
      },
      {
        name: "Michi",
        followers: [0],
      },
      {
        name: "Simba",
        followers: [0],
      },
    ];
    const rta = findFamousCats(cats);

    assert.deepEqual(rta, ["Luna", "Michi", "Simba"]);
  });

  it('Should return ["Mimi"]', () => {
    const cats = [
      {
        name: "Mimi",
        followers: [1000000],
      },
      { name: "Michi", followers: [250, 2500, 30000] },
      { name: "Simba", followers: [50, 20, 213] },
    ];
    const rta = findFamousCats(cats);
    assert.deepEqual(rta, ["Mimi"]);
  });
});

describe("Day 04-02 : Get the average of the students", () => {
  let studentsA, studentsB;

  beforeEach(() => {
    studentsA = [
      {
        name: "Pedro",
        grades: [90, 87, 88, 90],
      },
      {
        name: "Jose",
        grades: [99, 71, 88, 96],
      },
      {
        name: "Maria",
        grades: [92, 81, 80, 96],
      },
    ];

    studentsB = [
      {
        name: "Pepe",
        grades: [90, 87, 78],
      },
      {
        name: "Jose",
        grades: [78, 65, 92],
      },
      {
        name: "Tanya",
        grades: [71, 95, 75],
      },
      {
        name: "Saul",
        grades: [90, 93, 80],
      },
      {
        name: "Diego",
        grades: [96, 60, 89],
      },
    ];
  });

  it("should return 88.17 as class average", () => {
    const rta = getStudentAverage(studentsA);
    assert.equal(rta.classAverage, 88.17);
  });

  it("should return the class average as number", () => {
    const rta = getStudentAverage(studentsA);
    assert.equal(typeof rta.classAverage, "number");
  });

  it("should return a list of 3 students", () => {
    const rta = getStudentAverage(studentsA);
    assert.equal(rta.students.length, 3);
  });

  it("should return a correct average for each student", () => {
    const rta = getStudentAverage(studentsA);
    const expect = [
      {
        name: "Pedro",
        average: 88.75,
      },
      {
        name: "Jose",
        average: 88.5,
      },
      {
        name: "Maria",
        average: 87.25,
      },
    ];

    assert.deepEqual(rta.students, expect);
  });

  it("should return a correct class average with more students", () => {
    const rta = getStudentAverage(studentsB);
    assert.equal(rta.classAverage, 82.6);
  });

  it("should return a correct student average with less grades", () => {
    const rta = getStudentAverage(studentsB);
    const expect = [
      {
        name: "Pepe",
        average: 85,
      },
      {
        name: "Jose",
        average: 78.33,
      },
      {
        name: "Tanya",
        average: 80.33,
      },
      {
        name: "Saul",
        average: 87.67,
      },
      {
        name: "Diego",
        average: 81.67,
      },
    ];

    assert.deepEqual(rta.students, expect);
  });
});
