import { MessagesProxy } from "../exercise-23-01";
import { User } from "../User";
import { Messages } from "../messages";
import { expect } from "chai";

describe("🌐 Day 23-01 - Proxy in messaging service", () => {
  let messages, messagesProxy, user;

  beforeEach(() => {
    messages = new Messages();
    user = new User("John");
    messagesProxy = new MessagesProxy(messages, user);
  });

  it("should add a message to history when user is logged in", () => {
    user.login();
    messagesProxy.sendMessage("Hola");
    expect(messagesProxy.getHistory().length).to.eql(1);
    expect(messagesProxy.getHistory()[0]).to.eql("Hola");
  });

  it("should throw an error when user is not logged in", () => {
    expect(() => messagesProxy.sendMessage("Hola")).to.throw();
    expect(() => messagesProxy.getHistory()).to.throw();
  });

  it("should return the message history when user is logged in", () => {
    user.login();
    messagesProxy.sendMessage("Hola");
    messagesProxy.sendMessage("Adiós");
    expect(messagesProxy.getHistory().length).to.eql(2);
    expect(messagesProxy.getHistory()[0]).to.eql("Hola");
    expect(messagesProxy.getHistory()[1]).to.eql("Adiós");
  });

  it("should throw an error when user is not logged in", () => {
    expect(() => messagesProxy.getHistory()).to.throw();
  });

  it("should set loggedIn to true when logging in", () => {
    user.login();
    expect(user.isLoggedIn()).to.eql(true);
  });

  it("should set loggedIn to false when logging out", () => {
    user.login();
    user.logout();
    expect(user.isLoggedIn()).to.eql(false);
  });
});