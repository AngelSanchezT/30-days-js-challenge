import { Chat } from "../exercise-21";
import { User } from "../user";

import { expect } from 'chai';

describe("🌐 Day 21 - Implement singleton in a chat", () => {
  it("Should create a new instance of the Chat class", () => {
    const chat = new Chat();
    expect(chat instanceof Chat).to.be.ok;
  });

  it("Should exist only one instance", () => {
    const chat1 = new Chat();
    const chat2 = new Chat();
    expect(chat1 === chat2).to.eql(true);
  });

  it("Should initialize the users array", () => {
    const chat = new Chat();
    expect(chat.users).to.eql([]);
  });

  it("Should verify if is an instance of User", () => {
    const chat = new Chat();
    chat.addUser({ name: "LeoFake", messages: [] });
    expect(chat.users).to.eql([]);
  });

  it("Should add an user", () => {
    const chat = new Chat();
    const user = new User("Pepito");
    chat.addUser(user);
    expect(chat.users).to.eql([user]);
  });

  it("Should remove an user", () => {
    const chat = new Chat();
    chat.removeUser("Pepito");
    expect(chat.users).to.eql([]);
  });

  it("Should call the receiveMessage method for each user", () => {
    const chat = new Chat();
    const user1 = new User("Pepito");
    const user2 = new User("Juanito");
    chat.addUser(user1);
    chat.addUser(user2);
    chat.sendMessage("Nunca pares de aprender!");
    expect(user1.messages).to.eql(["Nunca pares de aprender!"]);

    expect(user2.messages).to.eql(["Nunca pares de aprender!"]);
  });
});