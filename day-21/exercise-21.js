import { User } from "./user";
export class Chat {
  constructor() {
    if (!Chat.instance) {
      this.createInstance();
      Chat.instance = this;
    }
    return Chat.instance;
  }

  createInstance() {
    this.users = [];
  }

  sendMessage(message) {
    this.users.forEach((user) => {
      user.receiveMessage(message);
    });
  }

  addUser(user) {
    if (user instanceof User) {
      this.users.push(user);
    }
  }

  removeUser(user) {
    this.users = this.users.filter((u) => u.name !== user);
  }
}
