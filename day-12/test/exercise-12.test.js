import chai, { expect } from "chai";
import sinon from "sinon";
import chaiAsPromised from "chai-as-promised";

chai.use(chaiAsPromised);

import { validateForm } from "../exercise-12";

describe("🌐 Day-12 - Validate the form", () => {
  const formData = {
    name: "Juan",
    lastname: "Perez",
    email: "juan@example.com",
    password: "123456",
  };

  const registeredUsers = [
    { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
    { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
  ];

  it("should add a new user to the array", () => {
    const rta = validateForm(formData, registeredUsers);
    
    expect(typeof rta).to.be.a("string");

    expect(registeredUsers).to.eql([
      { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
      { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
      { name: "Juan", lastname: "Perez", email: "juan@example.com" },
    ]);
  });

  it("should return a string when add a new user", () => {
    const formData = {
      name: "Juan",
      lastname: "Perez",
      email: "juan123@example.com",
      password: "123456",
    };

    const rta = validateForm(formData, registeredUsers);
    expect(typeof rta).to.be.a("string");
  });

  it("should throw an error if the user exists", () => {
    expect(() => validateForm(formData, registeredUsers)).to.throw();
  });

  it("should throw an error if fields are needed", () => {
    delete formData.email;
    expect(() => validateForm(formData, registeredUsers)).to.throw();
  });
});
