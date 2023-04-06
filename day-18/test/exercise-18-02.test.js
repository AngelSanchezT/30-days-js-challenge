import { expect } from 'chai';

import { User } from "../exercise-18-02";

describe("🌐 Day 18-02 - Encapsulates user data", () => {
  it("should add friends", () => {
    const user1 = new User("Juan", 20);
    const user2 = new User("Maria", 25);
    user1.addFriend(user2);
    expect(user1._friends).to.eql([
      { _name: "Maria", _age: 25, _friends: [], _messages: [] },
    ]);
  });

  it("should send messages", () => {
    const user1 = new User("Juan", 20);
    const user2 = new User("Maria", 25);
    user1.addFriend(user2);
    user1.sendMessage("Hola, Maria!", user2);
    expect(user1.showMessages()).to.eql(["Hola, Maria!"]);
    expect(user2.showMessages()).to.eql(["Hola, Maria!"]);
  });

  it("should return the name", () => {
    const user1 = new User("Juan", 20);
    expect(user1.name).to.eql("Juan");
  });

  it("should change the name", () => {
    const user1 = new User("Juan", 20);
    user1.name = "Pepito";
    expect(user1.name).to.eql("Pepito");
  });

  it("should return the age", () => {
    const user1 = new User("Juan", 20);
    expect(user1.age).to.eql(20);
  });

  it("should change the age", () => {
    const user1 = new User("Juan", 20);
    user1.age = 25;
    expect(user1.age).to.eql(25);
  });
});