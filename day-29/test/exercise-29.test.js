import { Queue } from "../exercise-29";
import { expect } from 'chai';
import sinon from 'sinon';

describe("Tests", () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it("should enqueue emails", () => {
    queue.enqueue(
      "user1@example.com",
      "support@example.com",
      "Body 1",
      "Subject 1"
    );
    expect(queue.size()).to.eql(1);
    expect(queue.peek().from).to.eql("user1@example.com");
    expect(queue.peek().to).to.eql("support@example.com");
    expect(queue.peek().body).to.eql("Body 1");
    expect(queue.peek().subject).to.eql("Subject 1");
  });

  it("should dequeue emails", () => {
    queue.enqueue(
      "user1@example.com",
      "support@example.com",
      "Body 1",
      "Subject 1"
    );
    queue.enqueue(
      "user2@example.com",
      "support@example.com",
      "Body 2",
      "Subject 2"
    );
    queue.enqueue(
      "user3@example.com",
      "support@example.com",
      "Body 3",
      "Subject 3"
    );

    const removedMail = queue.dequeue();
    expect(removedMail.from).to.eql("user1@example.com");
    expect(removedMail.to).to.eql("support@example.com");
    expect(removedMail.body).to.eql("Body 1");
    expect(removedMail.subject).to.eql("Subject 1");

    expect(queue.size()).to.eql(2);
    expect(queue.peek().from).to.eql("user2@example.com");
    expect(queue.peek().to).to.eql("support@example.com");
    expect(queue.peek().body).to.eql("Body 2");
    expect(queue.peek().subject).to.eql("Subject 2");
  });

  it("should throw an error when dequeue from an empty queue", () => {
    expect(() => {
      queue.dequeue();
    }).to.throw();
  });

  it("should peek the first email", () => {
    queue.enqueue(
      "user1@example.com",
      "support@example.com",
      "Body 1",
      "Subject 1"
    );
    queue.enqueue(
      "user2@example.com",
      "support@example.com",
      "Body 2",
      "Subject 2"
    );
    queue.enqueue(
      "user3@example.com",
      "support@example.com",
      "Body 3",
      "Subject 3"
    );

    const peekedMail = queue.peek();
    expect(peekedMail.from).to.eql("user1@example.com");
    expect(peekedMail.to).to.eql("support@example.com");
    expect(peekedMail.body).to.eql("Body 1");
    expect(peekedMail.subject).to.eql("Subject 1");
  });

  it("should return the size of the queue", () => {
    queue.enqueue(
      "user1@example.com",
      "support@example.com",
      "Body 1",
      "Subject 1"
    );
    queue.enqueue(
      "user2@example.com",
      "support@example.com",
      "Body 2",
      "Subject 2"
    );
    queue.enqueue(
      "user3@example.com",
      "support@example.com",
      "Body 3",
      "Subject 3"
    );

    expect(queue.size()).to.eql(3);
  });
});