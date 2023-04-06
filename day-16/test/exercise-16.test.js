import chai, { expect } from "chai";
import sinon from "sinon";
import chaiAsPromised from "chai-as-promised";

chai.use(chaiAsPromised);

import { protectDog } from "../exercise-16";

const dog = {
  name: "Romeo",
  age: 3,
  owner: { name: "Victor", phoneNumber: "555-555-5555" },
  favoriteFood: ["pollito", "croquetas"],
  activities: ["jugar", "caminar"],
};

describe("tests", () => {
  it("should freeze all nested objects related to the dog", () => {
    const protectedDog = protectDog(dog);
    expect(Object.isFrozen(protectedDog.owner)).to.be.true;
    expect(Object.isFrozen(protectedDog.favoriteFood)).to.be.true;
    expect(Object.isFrozen(protectedDog.activities)).to.be.true;
  });

  it("should not allow changes to the protected dog properties", () => {
    const protectedDog = protectDog(dog);
    expect(() => (protectedDog.name = "Toro")).to.throw(TypeError);
    expect(() => (protectedDog.owner.name = "Pedro")).to.throw(TypeError);
    expect(() => protectedDog.favoriteFood.push("vegetales")).to.throw(
      TypeError
    );
    expect(() => protectedDog.activities.push("ver tiktoks")).to.throw(
      TypeError
    );
  });

  it("should not allow changes to the nested properties of the dog", () => {
    const protectedDog = protectDog(dog);
    expect(() => (protectedDog.owner.phoneNumber = "123-45-1232")).to.throw(
      TypeError
    );
  });

  it("should return an object that is a copy of the original dog", () => {
    const protectedDog = protectDog(dog);
    expect(protectedDog).to.not.equal(dog);
    expect(protectedDog).to.eql(dog);
  });

  it("should allow changes in the original object", () => {
    dog.name = "firulais";
    expect(dog.name).to.eql("firulais");
  });
});