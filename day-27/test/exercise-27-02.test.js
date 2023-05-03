import { PatientList } from "../exercise-27-02";
import chai, { expect } from "chai";

describe("🌐 Day 27-02 - Implementation of a singly linked list", () => {
  let list;

  beforeEach(() => {
    list = new PatientList(3);
    list.addPatient("Paciente 1", 20);
    list.addPatient("Paciente 2", 30);
  });

  it("should add patient to list", () => {
    list.addPatient("Paciente 3", 25);
    expect(list.getPatientList().length).to.eql(3);
  });

  it("should decrement beds available", () => {
    list.addPatient("Paciente 3", 25);
    expect(list.getAvailableBeds()).to.eql(0);
  });

  it("should throw error if no beds available", () => {
    list.addPatient("Paciente 3", 25);
    expect(() => list.addPatient("Paciente 4", 50)).to.throw;
  });

  it("should remove patient from list", () => {
    list.removePatient("Paciente 2");
    expect(list.getPatientList().length).to.eql(1);
  });

  it("should increment beds available", () => {
    list.removePatient("Paciente 2");
    expect(list.getAvailableBeds()).to.eql(2);
  });

  it("should throw error if patient not found", () => {
    expect(() => list.removePatient("Paciente 3")).to.throw;
  });

  it("should return patient object", () => {
    expect(list.getPatient("Paciente 1")).to.eql({
      name: "Paciente 1",
      age: 20,
      bedNumber: 1,
    });
  });

  it("should throw error if patient not found", () => {
    expect(() => list.getPatient("Paciente 3")).to.throw;
  });

  it("should return array of patient objects", () => {
    expect(list.getPatientList()).to.eql([
      { name: "Paciente 1", age: 20, bedNumber: 1 },
      { name: "Paciente 2", age: 30, bedNumber: 2 },
    ]);
  });

  it("should assign a bed with the correct number after delete other patient", () => {
    list.addPatient("Paciente 3", 21);
    list.removePatient("Paciente 1");
    list.addPatient("Test 3", 33);
    expect(list.getPatientList()).to.eql([
      { name: "Paciente 2", age: 30, bedNumber: 2 },
      { name: "Paciente 3", age: 21, bedNumber: 3 },
      { name: "Test 3", age: 33, bedNumber: 1 },
    ]);
  });
});
