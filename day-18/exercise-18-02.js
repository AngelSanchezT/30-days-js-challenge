export class User {
  constructor(name, age) {
    this._name = name;
    this._age = age;
    this._friends = [];
    this._messages = [];
  }

  addFriend(friend) {
    this._friends.push(friend);
  }

  sendMessage(message, friend) {
    this._messages.push(message);
    friend?.sendMessage(message, null);
  }

  showMessages() {
    return this._messages;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    this._age = newAge;
  }
}